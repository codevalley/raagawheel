import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 3 — Agni (the three fires) · melas 13–18 · R1 G3 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 13,
    name: "Gayakapriya",
    slug: "gayakapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ga", consonant: "ga", digit: 3 },
        { syllable: "ya", consonant: "ya", digit: 1 },
      ],
    },
    aroha: "S R1 G3 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 14,
    name: "Vakulabharanam",
    slug: "vakulabharanam",
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "ku", consonant: "ka", digit: 1 },
      ],
    },
    aroha: "S R1 G3 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 15,
    name: "Mayamalavagowla",
    alternateNames: ["Mayamalavagaula"],
    slug: "mayamalavagowla",
    katapayadi: {
      syllables: [
        { syllable: "Ma", consonant: "ma", digit: 5 },
        { syllable: "ya", consonant: "ya", digit: 1 },
      ],
    },
    aroha: "S R1 G3 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 16,
    name: "Chakravakam",
    slug: "chakravakam",
    katapayadi: {
      syllables: [
        { syllable: "Cha", consonant: "ca", digit: 6 },
        { syllable: "kra", consonant: "ka", digit: 1 },
      ],
      note: "English 'Ch' here is ca = 6. In the conjunct 'kra', tradition counts ka = 1 (not the cluster-final ra), giving 16.",
    },
    aroha: "S R1 G3 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 17,
    name: "Suryakantam",
    slug: "suryakantam",
    katapayadi: {
      syllables: [
        { syllable: "Su", consonant: "sa", digit: 7 },
        { syllable: "rya", consonant: "ya", digit: 1 },
      ],
      note: "In the conjunct 'rya', the last consonant (ya) carries the value.",
    },
    aroha: "S R1 G3 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 18,
    name: "Hatakambari",
    slug: "hatakambari",
    katapayadi: {
      syllables: [
        { syllable: "Ha", consonant: "ha", digit: 8 },
        { syllable: "ta", consonant: "tta", digit: 1 },
      ],
      note: "Haṭakāmbari: retroflex ṭa = 1 (ṭa-varga), not dental ta = 6.",
    },
    aroha: "S R1 G3 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G3 R1 S",
    songs: [],
  },
] satisfies MelaContent[];
