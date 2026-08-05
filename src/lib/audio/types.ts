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

export interface EngineState {
  isReady: boolean;
  shrutiHz: number;
  tuning: TuningSystem;
  timbre: Timbre;
  droneOn: boolean;
}

export interface PlayScaleOptions {
  bpm: number;
  /** Fires when note i becomes AUDIBLE (draw-queue synced, not lookahead-early). */
  onNote?: (index: number, note: NoteSpec) => void;
  onDone?: () => void;
  /** Articulation gap between notes, in beats. Default 0.1. */
  gapBeats?: number;
}
