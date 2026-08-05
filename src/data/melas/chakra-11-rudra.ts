import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 11 — Rudra (the eleven Rudras) · melas 61–66 · R2 G3 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 61,
    name: "Kantamani",
    slug: "kantamani",
    katapayadi: {
      syllables: [
        { syllable: "Kan", consonant: "ka", digit: 1 },
        { syllable: "ta", consonant: "ta", digit: 6 },
      ],
      note: "In the conjunct 'nta', the last consonant — dental ta = 6 — carries the value.",
    },
    aroha: "S R2 G3 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 62,
    name: "Rishabhapriya",
    slug: "rishabhapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ri", consonant: "ra", digit: 2 },
        { syllable: "sha", consonant: "ssa", digit: 6 },
      ],
      note: "The 'sha' here is retroflex ṣa = 6 (ṛṣabha), not śa = 5.",
    },
    aroha: "S R2 G3 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 63,
    name: "Latangi",
    slug: "latangi",
    katapayadi: {
      syllables: [
        { syllable: "La", consonant: "la", digit: 3 },
        { syllable: "ta", consonant: "ta", digit: 6 },
      ],
    },
    aroha: "S R2 G3 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 64,
    name: "Vachaspati",
    slug: "vachaspati",
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "cha", consonant: "ca", digit: 6 },
      ],
      note: "English 'ch' here is ca = 6 (vācaspati), not cha = 7.",
    },
    aroha: "S R2 G3 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 65,
    name: "Mechakalyani",
    alternateNames: ["Kalyani"],
    slug: "mechakalyani",
    katapayadi: {
      syllables: [
        { syllable: "Me", consonant: "ma", digit: 5 },
        { syllable: "cha", consonant: "ca", digit: 6 },
      ],
      note: "English 'ch' here is ca = 6 (mecakalyāṇī), not cha = 7.",
    },
    aroha: "S R2 G3 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 66,
    name: "Chitrambari",
    slug: "chitrambari",
    katapayadi: {
      syllables: [
        { syllable: "Chi", consonant: "ca", digit: 6 },
        { syllable: "tra", consonant: "ta", digit: 6 },
      ],
      note: "In the conjunct 'tra', tradition counts dental ta = 6 (citra), not ra — ra would decode to 26.",
    },
    aroha: "S R2 G3 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G3 R2 S",
    songs: [],
  },
] satisfies MelaContent[];
