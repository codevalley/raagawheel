import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 12 — Aditya (the twelve suns) · melas 67–72 · R3 G3 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 67,
    name: "Sucharitra",
    slug: "sucharitra",
    katapayadi: {
      syllables: [
        { syllable: "Su", consonant: "sa", digit: 7 },
        { syllable: "cha", consonant: "ca", digit: 6 },
      ],
      note: "English 'ch' here is ca = 6 (as in Chakravakam), not cha = 7.",
    },
    aroha: "S R3 G3 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 68,
    name: "Jyotiswarupini",
    slug: "jyotiswarupini",
    katapayadi: {
      syllables: [
        { syllable: "Jyo", consonant: "ja", digit: 8 },
        { syllable: "ti", consonant: "ta", digit: 6 },
      ],
      note: "In the conjunct 'jyo' (j + ya), tradition counts ja = 8 — the first consonant, not the usual last-of-cluster rule.",
    },
    aroha: "S R3 G3 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 69,
    name: "Dhatuvardhani",
    slug: "dhatuvardhani",
    katapayadi: {
      syllables: [
        { syllable: "Dha", consonant: "dha", digit: 9 },
        { syllable: "tu", consonant: "ta", digit: 6 },
      ],
      note: "Dental dha = 9 and dental ta = 6, not their retroflex counterparts.",
    },
    aroha: "S R3 G3 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 70,
    name: "Nasikabushani",
    alternateNames: ["Nasikabhushani"],
    slug: "nasikabushani",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "si", consonant: "sa", digit: 7 },
      ],
    },
    aroha: "S R3 G3 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 71,
    name: "Kosalam",
    alternateNames: ["Kosala"],
    slug: "kosalam",
    katapayadi: {
      syllables: [
        { syllable: "Ko", consonant: "ka", digit: 1 },
        { syllable: "sa", consonant: "sa", digit: 7 },
      ],
    },
    aroha: "S R3 G3 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 72,
    name: "Rasikapriya",
    slug: "rasikapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ra", consonant: "ra", digit: 2 },
        { syllable: "si", consonant: "sa", digit: 7 },
      ],
    },
    aroha: "S R3 G3 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G3 R3 S",
    songs: [],
  },
] satisfies MelaContent[];
