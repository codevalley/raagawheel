import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 2 — Netra (the two eyes) · melas 7–12 · R1 G2 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 7,
    name: "Senavati",
    slug: "senavati",
    katapayadi: {
      syllables: [
        { syllable: "Se", consonant: "sa", digit: 7 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G2 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 8,
    name: "Hanumatodi",
    alternateNames: ["Todi"],
    slug: "hanumatodi",
    katapayadi: {
      syllables: [
        { syllable: "Ha", consonant: "ha", digit: 8 },
        { syllable: "nu", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G2 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 9,
    name: "Dhenuka",
    slug: "dhenuka",
    katapayadi: {
      syllables: [
        { syllable: "Dhe", consonant: "dha", digit: 9 },
        { syllable: "nu", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G2 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 10,
    name: "Natakapriya",
    slug: "natakapriya",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "ta", consonant: "tta", digit: 1 },
      ],
      note: "Nāṭakapriya's 'ta' is retroflex ṭa = 1 (ṭa-varga), not dental ta = 6.",
    },
    aroha: "S R1 G2 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 11,
    name: "Kokilapriya",
    slug: "kokilapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ko", consonant: "ka", digit: 1 },
        { syllable: "ki", consonant: "ka", digit: 1 },
      ],
    },
    aroha: "S R1 G2 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 12,
    name: "Rupavati",
    slug: "rupavati",
    katapayadi: {
      syllables: [
        { syllable: "Ru", consonant: "ra", digit: 2 },
        { syllable: "pa", consonant: "pa", digit: 1 },
      ],
    },
    aroha: "S R1 G2 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G2 R1 S",
    songs: [],
  },
] satisfies MelaContent[];
