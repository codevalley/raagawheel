import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 1 — Indu (the one moon) · melas 1–6 · R1 G1 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 1,
    name: "Kanakangi",
    slug: "kanakangi",
    katapayadi: {
      syllables: [
        { syllable: "Ka", consonant: "ka", digit: 1 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G1 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 2,
    name: "Ratnangi",
    slug: "ratnangi",
    katapayadi: {
      syllables: [
        { syllable: "Ra", consonant: "ra", digit: 2 },
        { syllable: "tna", consonant: "na", digit: 0 },
      ],
      note: "In the conjunct 'tna', the last consonant (na) carries the value.",
    },
    aroha: "S R1 G1 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 3,
    name: "Ganamurti",
    slug: "ganamurti",
    katapayadi: {
      syllables: [
        { syllable: "Ga", consonant: "ga", digit: 3 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G1 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 4,
    name: "Vanaspati",
    slug: "vanaspati",
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G1 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 5,
    name: "Manavati",
    slug: "manavati",
    katapayadi: {
      syllables: [
        { syllable: "Ma", consonant: "ma", digit: 5 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G1 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 6,
    name: "Tanarupi",
    slug: "tanarupi",
    katapayadi: {
      syllables: [
        { syllable: "Ta", consonant: "ta", digit: 6 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
      note: "Dental ta = 6 (ta-varga), not retroflex ṭa = 1.",
    },
    aroha: "S R1 G1 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G1 R1 S",
    songs: [],
  },
] satisfies MelaContent[];
