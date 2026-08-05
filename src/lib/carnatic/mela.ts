import type { Chakra, Swarasthana } from "./types";

export const CHAKRAS: readonly Chakra[] = [
  { index: 1,  name: "Indu",   meaning: "the one moon",              melaRange: [1, 6] },
  { index: 2,  name: "Netra",  meaning: "two eyes",                  melaRange: [7, 12] },
  { index: 3,  name: "Agni",   meaning: "the three fires",           melaRange: [13, 18] },
  { index: 4,  name: "Veda",   meaning: "the four Vedas",            melaRange: [19, 24] },
  { index: 5,  name: "Bana",   meaning: "Manmatha's five arrows",    melaRange: [25, 30] },
  { index: 6,  name: "Rutu",   meaning: "the six seasons",           melaRange: [31, 36] },
  { index: 7,  name: "Rishi",  meaning: "the seven sages",           melaRange: [37, 42] },
  { index: 8,  name: "Vasu",   meaning: "the eight Vasus",           melaRange: [43, 48] },
  { index: 9,  name: "Brahma", meaning: "the nine Brahmas",          melaRange: [49, 54] },
  { index: 10, name: "Disi",   meaning: "the ten directions",        melaRange: [55, 60] },
  { index: 11, name: "Rudra",  meaning: "the eleven Rudras",         melaRange: [61, 66] },
  { index: 12, name: "Aditya", meaning: "the twelve Adityas",        melaRange: [67, 72] },
];

/** R/G combination by chakra position within each half (1..6). */
const RG: readonly (readonly [Swarasthana, Swarasthana])[] = [
  ["R1", "G1"], ["R1", "G2"], ["R1", "G3"], ["R2", "G2"], ["R2", "G3"], ["R3", "G3"],
];
/** D/N combination by mela position within a chakra (1..6). */
const DN: readonly (readonly [Swarasthana, Swarasthana])[] = [
  ["D1", "N1"], ["D1", "N2"], ["D1", "N3"], ["D2", "N2"], ["D2", "N3"], ["D3", "N3"],
];

function assertMela(n: number): void {
  if (!Number.isInteger(n) || n < 1 || n > 72) throw new RangeError(`Invalid mela number: ${n}`);
}

/** The seven swaras of mela n — pure derivation, the system's own arithmetic. */
export function swarasForMela(
  n: number,
): readonly [Swarasthana, Swarasthana, Swarasthana, Swarasthana, Swarasthana, Swarasthana, Swarasthana] {
  assertMela(n);
  const idx = n <= 36 ? n - 1 : n - 37;
  const [r, g] = RG[Math.floor(idx / 6)];
  const [d, ni] = DN[idx % 6];
  return ["S", r, g, n <= 36 ? "M1" : "M2", "P", d, ni];
}

export function chakraForMela(n: number): Chakra {
  assertMela(n);
  return CHAKRAS[Math.ceil(n / 6) - 1];
}

export function positionInChakra(n: number): number {
  assertMela(n);
  return ((n - 1) % 6) + 1;
}

/** Canonical mela scale strings, e.g. mela 29 → "S R2 G3 M1 P D2 N3 S'". */
export function melaArohaString(n: number): string {
  return [...swarasForMela(n), "S'"].join(" ");
}

export function melaAvarohaString(n: number): string {
  const [, r, g, m, p, d, ni] = swarasForMela(n);
  return ["S'", ni, d, p, m, g, r, "S"].join(" ");
}

/** The madhyama partner: same R/G/D/N, other M — mela n ± 36. */
export function madhyamaPartner(n: number): number {
  assertMela(n);
  return n <= 36 ? n + 36 : n - 36;
}
