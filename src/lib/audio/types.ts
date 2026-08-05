import type { Swarasthana } from "@/lib/carnatic/types";
import type { TuningSystem } from "./tuning";

/** One note for the scheduler. */
export interface NoteSpec {
  swara: Swarasthana;
  /** -1 mandra, 0 madhya, +1 tara. Default 0. */
  octave?: number;
  /** Duration in beats. Default 1. */
  beats?: number;
}

/**
 * Pitch envelope for future gamaka support: points over the note's
 * normalized duration, in cents relative to the base pitch. Ships now so
 * kampita/jaru presets can be added without an engine API change.
 */
export type PitchEnvelope = ReadonlyArray<{ at: number; cents: number }>;

export interface PlaybackHandle {
  /** Click-free stop: releases voices, cancels pending UI callbacks. */
  stop(): void;
  readonly state: "playing" | "stopped";
}

export type Timbre = "veena" | "flute";

/** Tempo presets in Carnatic terms. */
export const TEMPO_PRESETS = [
  { key: "chauka", label: "Chauka", hint: "slow", bpm: 52 },
  { key: "madhyama", label: "Madhyama", hint: "medium", bpm: 84 },
  { key: "durita", label: "Durita", hint: "brisk", bpm: 126 },
] as const;
export type TempoKey = (typeof TEMPO_PRESETS)[number]["key"];

export interface EngineState {
  isReady: boolean;
  shrutiHz: number;
  tuning: TuningSystem;
  timbre: Timbre;
  droneOn: boolean;
  bpm: number;
}

export interface PlayScaleOptions {
  bpm: number;
  /** Fires when note i becomes AUDIBLE (draw-queue synced, not lookahead-early). */
  onNote?: (index: number, note: NoteSpec) => void;
  onDone?: () => void;
  /** Articulation gap between notes, in beats. Default 0.1. */
  gapBeats?: number;
}
