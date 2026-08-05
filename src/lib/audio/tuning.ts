/**
 * Pitch math for Carnatic playback. Pure TypeScript — no Tone.js imports.
 * The audio engine only ever receives hertz from here.
 *
 * Just-intonation defaults use 5-limit ratios common in Carnatic theory
 * treatments; 12-TET is available as a comparison toggle. Enharmonic pairs
 * (R2/G1, R3/G2, D2/N1, D3/N2) share a ratio by construction.
 */
import { SEMITONE, type Swarasthana } from "@/lib/carnatic/types";

export type TuningSystem = "ji" | "12tet";

/** [numerator, denominator] per swarasthana. */
export const JI_RATIOS: Record<Swarasthana, readonly [number, number]> = {
  S: [1, 1],
  R1: [16, 15],
  R2: [9, 8],
  G1: [9, 8],
  R3: [6, 5],
  G2: [6, 5],
  G3: [5, 4],
  M1: [4, 3],
  M2: [45, 32],
  P: [3, 2],
  D1: [8, 5],
  D2: [5, 3],
  N1: [5, 3],
  D3: [9, 5],
  N2: [9, 5],
  N3: [15, 8],
};

/** Common alternate for kaisiki Ni — kept for future settings UI. */
export const N2_RATIO_ALT: readonly [number, number] = [16, 9];

/**
 * Shruti presets. Kattai numbers follow harmonium convention (C=1 … B=7).
 * Frequencies are for the madhya-sthayi Sa an octave below middle-A region,
 * where a drone sits comfortably.
 */
export const SHRUTI_PRESETS: readonly { label: string; kattai: string; hz: number }[] = [
  { label: "C", kattai: "1", hz: 130.81 },
  { label: "C♯", kattai: "1½", hz: 138.59 },
  { label: "D", kattai: "2", hz: 146.83 },
  { label: "D♯", kattai: "2½", hz: 155.56 },
  { label: "E", kattai: "3", hz: 164.81 },
  { label: "F", kattai: "4", hz: 174.61 },
  { label: "F♯", kattai: "4½", hz: 185.0 },
  { label: "G", kattai: "5", hz: 196.0 },
  { label: "G♯", kattai: "5½", hz: 207.65 },
  { label: "A", kattai: "6", hz: 220.0 },
];

/** Default shruti: G♯ (5½ kattai) — a common vocal/teaching reference. */
export const DEFAULT_SHRUTI_HZ = 207.65;

export function swaraToHz(
  swara: Swarasthana,
  octave: number,
  shrutiHz: number,
  system: TuningSystem = "ji",
): number {
  const base =
    system === "ji"
      ? shrutiHz * (JI_RATIOS[swara][0] / JI_RATIOS[swara][1])
      : shrutiHz * Math.pow(2, SEMITONE[swara] / 12);
  return base * Math.pow(2, octave);
}

/** Cents deviation of the JI ratio from 12-TET for a swara (for the UI nerds). */
export function jiCentsOffset(swara: Swarasthana): number {
  const [num, den] = JI_RATIOS[swara];
  return 1200 * Math.log2(num / den) - 100 * SEMITONE[swara];
}
