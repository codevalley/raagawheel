import type { KatapayadiBreakdown } from "./types";

/**
 * The katapayadi sankhya consonant table.
 *
 * Keys are canonical romanizations used by hand-authored breakdowns in
 * src/data — NOT parsed from English spellings, which are ambiguous
 * ("ch" in Charukesi is ca=6, not cha=7; "dha" in Dheera- is dental dha=9,
 * not retroflex ddha=4). Curators choose the canonical consonant; the
 * validator re-derives the digit from this table and cross-checks.
 *
 *   ka kha ga gha nga   → 1 2 3 4 5
 *   ca cha ja jha nya   → 6 7 8 9 0
 *   tta ttha dda ddha nna → 1 2 3 4 5   (retroflex ṭa-varga)
 *   ta tha da dha na    → 6 7 8 9 0    (dental ta-varga)
 *   pa pha ba bha ma    → 1 2 3 4 5
 *   ya ra la va sha ssa sa ha → 1 2 3 4 5 6 7 8   (sha=śa, ssa=ṣa)
 */
export const KATAPAYADI_DIGITS: Record<string, number> = {
  ka: 1, kha: 2, ga: 3, gha: 4, nga: 5,
  ca: 6, cha: 7, ja: 8, jha: 9, nya: 0,
  tta: 1, ttha: 2, dda: 3, ddha: 4, nna: 5,
  ta: 6, tha: 7, da: 8, dha: 9, na: 0,
  pa: 1, pha: 2, ba: 3, bha: 4, ma: 5,
  ya: 1, ra: 2, la: 3, va: 4, sha: 5, ssa: 6, sa: 7, ha: 8,
};

/**
 * Decode a hand-authored breakdown: two digits, REVERSED, give the mela
 * number (kha=2, ra=2 → "22" → 22; ma=5, ca=6 → "56" reversed → 65).
 */
export function decodeKatapayadi(b: KatapayadiBreakdown): number {
  const [first, second] = b.syllables;
  return second.digit * 10 + first.digit;
}

/** Digit for a canonical consonant, or null if unknown (validator use). */
export function digitForConsonant(consonant: string): number | null {
  return consonant in KATAPAYADI_DIGITS ? KATAPAYADI_DIGITS[consonant] : null;
}

/** Display table for the /katapayadi teaching page. */
export const KATAPAYADI_CHART: {
  group: string;
  rows: { display: string; canonical: string; digit: number }[];
}[] = [
  {
    group: "ka-varga",
    rows: [
      { display: "ka", canonical: "ka", digit: 1 },
      { display: "kha", canonical: "kha", digit: 2 },
      { display: "ga", canonical: "ga", digit: 3 },
      { display: "gha", canonical: "gha", digit: 4 },
      { display: "ṅa", canonical: "nga", digit: 5 },
    ],
  },
  {
    group: "ca-varga",
    rows: [
      { display: "ca", canonical: "ca", digit: 6 },
      { display: "cha", canonical: "cha", digit: 7 },
      { display: "ja", canonical: "ja", digit: 8 },
      { display: "jha", canonical: "jha", digit: 9 },
      { display: "ña", canonical: "nya", digit: 0 },
    ],
  },
  {
    group: "ṭa-varga (retroflex)",
    rows: [
      { display: "ṭa", canonical: "tta", digit: 1 },
      { display: "ṭha", canonical: "ttha", digit: 2 },
      { display: "ḍa", canonical: "dda", digit: 3 },
      { display: "ḍha", canonical: "ddha", digit: 4 },
      { display: "ṇa", canonical: "nna", digit: 5 },
    ],
  },
  {
    group: "ta-varga (dental)",
    rows: [
      { display: "ta", canonical: "ta", digit: 6 },
      { display: "tha", canonical: "tha", digit: 7 },
      { display: "da", canonical: "da", digit: 8 },
      { display: "dha", canonical: "dha", digit: 9 },
      { display: "na", canonical: "na", digit: 0 },
    ],
  },
  {
    group: "pa-varga",
    rows: [
      { display: "pa", canonical: "pa", digit: 1 },
      { display: "pha", canonical: "pha", digit: 2 },
      { display: "ba", canonical: "ba", digit: 3 },
      { display: "bha", canonical: "bha", digit: 4 },
      { display: "ma", canonical: "ma", digit: 5 },
    ],
  },
  {
    group: "ya · ra · la · va · śa · ṣa · sa · ha",
    rows: [
      { display: "ya", canonical: "ya", digit: 1 },
      { display: "ra", canonical: "ra", digit: 2 },
      { display: "la", canonical: "la", digit: 3 },
      { display: "va", canonical: "va", digit: 4 },
      { display: "śa", canonical: "sha", digit: 5 },
      { display: "ṣa", canonical: "ssa", digit: 6 },
      { display: "sa", canonical: "sa", digit: 7 },
      { display: "ha", canonical: "ha", digit: 8 },
    ],
  },
];
