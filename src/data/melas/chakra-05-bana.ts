import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 5 — Bana (the five arrows) · melas 25–30 · R2 G3 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 25,
    name: "Mararanjani",
    slug: "mararanjani",
    katapayadi: {
      syllables: [
        { syllable: "Ma", consonant: "ma", digit: 5 },
        { syllable: "ra", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G3 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 26,
    name: "Charukesi",
    slug: "charukesi",
    katapayadi: {
      syllables: [
        { syllable: "Cha", consonant: "ca", digit: 6 },
        { syllable: "ru", consonant: "ra", digit: 2 },
      ],
      note: "English 'Ch' here is unaspirated ca = 6, not aspirated cha = 7.",
    },
    aroha: "S R2 G3 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 27,
    name: "Sarasangi",
    slug: "sarasangi",
    katapayadi: {
      syllables: [
        { syllable: "Sa", consonant: "sa", digit: 7 },
        { syllable: "ra", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G3 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 28,
    name: "Harikambhoji",
    slug: "harikambhoji",
    katapayadi: {
      syllables: [
        { syllable: "Ha", consonant: "ha", digit: 8 },
        { syllable: "ri", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G3 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 29,
    name: "Dheerasankarabharanam",
    alternateNames: ["Sankarabharanam"],
    slug: "dheerasankarabharanam",
    katapayadi: {
      syllables: [
        { syllable: "Dhee", consonant: "dha", digit: 9 },
        { syllable: "ra", consonant: "ra", digit: 2 },
      ],
      note: "The 'Dheera' prefix exists to encode the number — dental dha = 9, not retroflex ddha = 4.",
    },
    aroha: "S R2 G3 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G3 R2 S",
    songs: [],
  },
  {
    melaNumber: 30,
    name: "Naganandini",
    slug: "naganandini",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "ga", consonant: "ga", digit: 3 },
      ],
    },
    aroha: "S R2 G3 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G3 R2 S",
    songs: [],
  },
] satisfies MelaContent[];
