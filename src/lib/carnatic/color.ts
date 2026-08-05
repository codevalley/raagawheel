/**
 * The 36-color mela system (defined as CSS custom properties in globals.css).
 * Hue encodes the R/G family — chakras n and n+6 share it, so madhyama
 * partners (29/65) render identically at mirrored wheel positions.
 * Lightness encodes the D/N step within a chakra.
 */

export const FAMILY_NAMES = ["lac", "kumkum", "turmeric", "leaf", "peacock", "indigo"] as const;

/**
 * Hex anchors of the six families (≈ the s3 step of the OKLCH ramps).
 * For contexts that can't resolve CSS variables or oklch() — OG image
 * generation (Satori), meta theme-color, external embeds.
 */
export const FAMILY_HEX = ["#96434f", "#9c5028", "#8b6d1f", "#4c7345", "#2f6f75", "#575c94"] as const;

export function melaFamilyHex(n: number): string {
  return FAMILY_HEX[familyOfMela(n) - 1];
}

/** 1..6 — which R/G family a mela belongs to (same for n and n+36). */
export function familyOfMela(n: number): number {
  const idx = n <= 36 ? n - 1 : n - 37;
  return Math.floor(idx / 6) + 1;
}

/** 1..6 — the D/N lightness step within the chakra. */
export function stepOfMela(n: number): number {
  return ((n - 1) % 6) + 1;
}

/** CSS var reference for a mela's color, e.g. "var(--mela-f4-s4)". */
export function melaColorVar(n: number): string {
  return `var(--mela-f${familyOfMela(n)}-s${stepOfMela(n)})`;
}

/** Ink that stays legible on the mela color: dark only on the lightest step. */
export function melaInk(n: number): string {
  return stepOfMela(n) >= 6 ? "var(--night)" : "var(--ivory)";
}
