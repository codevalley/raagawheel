/**
 * The audio engine facade — a lazy module singleton.
 *
 * Rules this file enforces (see the approach doc's audio section):
 *  - Tone.js is dynamically imported inside ready(); nothing audio-related
 *    exists at module scope, so server components and the static build
 *    never touch an AudioContext.
 *  - ready() must first resolve inside a user gesture (iOS autoplay policy);
 *    every public sound method awaits it.
 *  - One AudioContext for the app's lifetime. Components never dispose the
 *    engine — they stop their own playback handles.
 *  - UI callbacks are draw-queue synced (Tone lookahead fires ~100 ms early;
 *    highlighting from the raw callback would visibly lead the sound).
 */
import type * as ToneNS from "tone";
import type { Swarasthana } from "@/lib/carnatic/types";
import { DEFAULT_SHRUTI_HZ, swaraToHz, type TuningSystem } from "./tuning";
import { Tanpura } from "./tanpura";
import { createVoice, type MelodicVoice } from "./voices";
import type {
  EngineState,
  NoteSpec,
  PlaybackHandle,
  PlayScaleOptions,
  Timbre,
} from "./types";

type ToneModule = typeof ToneNS;

type Listener = () => void;

class RagaAudioEngine {
  private Tone: ToneModule | null = null;
  private readyPromise: Promise<void> | null = null;
  private master: ToneNS.Gain | null = null;
  private voice: MelodicVoice | null = null;
  private tanpura: Tanpura | null = null;
  private activeHandle: { cancel: () => void } | null = null;
  private listeners = new Set<Listener>();

  private state: EngineState = {
    isReady: false,
    shrutiHz: DEFAULT_SHRUTI_HZ,
    tuning: "ji",
    timbre: "veena",
    droneOn: false,
    bpm: 84,
    ...restoreSettings(),
  };

  // ── state pub/sub (for useSyncExternalStore) ──────────────────────────

  subscribe = (fn: Listener): (() => void) => {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  };

  getState = (): EngineState => this.state;

  private setState(patch: Partial<EngineState>): void {
    this.state = { ...this.state, ...patch };
    for (const fn of this.listeners) fn();
    persistSettings(this.state);
  }

  // ── lifecycle ─────────────────────────────────────────────────────────

  /** Idempotent. Call inside a user-gesture chain the first time. */
  ready(): Promise<void> {
    this.readyPromise ??= (async () => {
      const Tone = await import("tone");
      await Tone.start();
      this.Tone = Tone;

      const limiter = new Tone.Limiter(-1).toDestination();
      this.master = new Tone.Gain(0.5).connect(limiter);
      this.voice = createVoice(Tone, this.state.timbre, this.master);

      // iOS: resume after phone-call/Siri interruptions and tab restore.
      const resume = () => {
        const ctx = Tone.getContext();
        if (ctx.state !== "running") void ctx.resume();
      };
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) resume();
      });
      Tone.getContext().on("statechange", resume);

      this.setState({ isReady: true });
    })();
    return this.readyPromise;
  }

  // ── melodic playback ──────────────────────────────────────────────────

  async playSwara(swara: Swarasthana, octave = 0, durationSec = 0.8): Promise<void> {
    await this.ready();
    const hz = swaraToHz(swara, octave, this.state.shrutiHz, this.state.tuning);
    this.voice?.triggerAttackRelease(hz, durationSec);
  }

  /**
   * Schedule a note sequence at absolute audio times. onNote fires via the
   * draw queue at each note's audible instant. Returns a stoppable handle.
   */
  async playScale(notes: readonly NoteSpec[], opts: PlayScaleOptions): Promise<PlaybackHandle> {
    await this.ready();
    const Tone = this.Tone!;
    this.stopPlayback(); // one melodic source at a time (drone excluded)

    const beatSec = 60 / opts.bpm;
    const gap = (opts.gapBeats ?? 0.1) * beatSec;
    const start = Tone.now() + 0.08;

    let cancelled = false;
    let t = start;
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const durSec = (note.beats ?? 1) * beatSec - gap;
      const hz = swaraToHz(note.swara, note.octave ?? 0, this.state.shrutiHz, this.state.tuning);
      this.voice?.triggerAttackRelease(hz, Math.max(durSec, 0.08), t);
      const when = t;
      const index = i;
      Tone.getDraw().schedule(() => {
        if (!cancelled) opts.onNote?.(index, note);
      }, when);
      t += (note.beats ?? 1) * beatSec;
    }
    Tone.getDraw().schedule(() => {
      if (!cancelled) {
        opts.onDone?.();
        if (this.activeHandle === handleInternal) this.activeHandle = null;
      }
    }, t);

    const handleInternal = {
      cancel: () => {
        cancelled = true;
        this.voice?.releaseAll();
      },
    };
    this.activeHandle = handleInternal;

    let stopped = false;
    return {
      get state() {
        return stopped || cancelled ? ("stopped" as const) : ("playing" as const);
      },
      stop: () => {
        stopped = true;
        handleInternal.cancel();
      },
    };
  }

  private stopPlayback(): void {
    this.activeHandle?.cancel();
    this.activeHandle = null;
  }

  // ── drone ─────────────────────────────────────────────────────────────

  async toggleDrone(): Promise<void> {
    await this.ready();
    if (!this.tanpura) {
      this.tanpura = new Tanpura(this.Tone!, this.master!, this.state.shrutiHz);
    }
    if (this.tanpura.running) {
      this.tanpura.stop();
      this.setState({ droneOn: false });
    } else {
      this.tanpura.start();
      this.setState({ droneOn: true });
    }
  }

  // ── settings ──────────────────────────────────────────────────────────

  setShruti(hz: number): void {
    this.setState({ shrutiHz: hz });
    // Live drone retunes on its next pluck cycle — like a real retuning.
    this.tanpura?.setShruti(hz);
  }

  setTuningSystem(tuning: TuningSystem): void {
    this.setState({ tuning });
  }

  setBpm(bpm: number): void {
    this.setState({ bpm });
  }

  setTimbre(timbre: Timbre): void {
    if (timbre === this.state.timbre) return;
    this.setState({ timbre });
    if (this.Tone && this.master) {
      this.stopPlayback();
      this.voice?.dispose();
      this.voice = createVoice(this.Tone, timbre, this.master);
    }
  }
}

const SETTINGS_KEY = "ragawheel-audio";
type PersistedSettings = Pick<EngineState, "shrutiHz" | "tuning" | "timbre" | "bpm">;

function restoreSettings(): Partial<PersistedSettings> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<PersistedSettings>;
    const out: Partial<PersistedSettings> = {};
    if (typeof parsed.shrutiHz === "number" && parsed.shrutiHz > 60 && parsed.shrutiHz < 500)
      out.shrutiHz = parsed.shrutiHz;
    if (parsed.tuning === "ji" || parsed.tuning === "12tet") out.tuning = parsed.tuning;
    if (parsed.timbre === "veena" || parsed.timbre === "flute") out.timbre = parsed.timbre;
    if (typeof parsed.bpm === "number" && parsed.bpm >= 30 && parsed.bpm <= 240) out.bpm = parsed.bpm;
    return out;
  } catch {
    return {};
  }
}

function persistSettings(s: EngineState): void {
  if (typeof window === "undefined") return;
  try {
    const { shrutiHz, tuning, timbre, bpm } = s;
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify({ shrutiHz, tuning, timbre, bpm }));
  } catch {
    // Private-mode storage failures are non-fatal; settings just won't stick.
  }
}

let engine: RagaAudioEngine | null = null;

/** The app-wide engine. Safe to call anywhere; audio starts only on ready(). */
export function getEngine(): RagaAudioEngine {
  engine ??= new RagaAudioEngine();
  return engine;
}

export type { RagaAudioEngine };
