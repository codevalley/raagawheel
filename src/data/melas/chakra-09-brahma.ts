import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 9 — Brahma (the nine Brahmas) · melas 49–54 · R1 G3 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 49,
    name: "Dhavalambari",
    slug: "dhavalambari",
    katapayadi: {
      syllables: [
        { syllable: "Dha", consonant: "dha", digit: 9 },
        { syllable: "va", consonant: "va", digit: 4 },
      ],
      note: "Dental dha = 9 (ta-varga), not retroflex ḍha = 4.",
    },
    aroha: "S R1 G3 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 50,
    name: "Namanarayani",
    slug: "namanarayani",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R1 G3 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 51,
    name: "Kamavardhani",
    alternateNames: ["Panthuvarali"],
    slug: "kamavardhani",
    katapayadi: {
      syllables: [
        { syllable: "Ka", consonant: "ka", digit: 1 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R1 G3 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 52,
    name: "Ramapriya",
    slug: "ramapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ra", consonant: "ra", digit: 2 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R1 G3 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 53,
    name: "Gamanashrama",
    slug: "gamanashrama",
    katapayadi: {
      syllables: [
        { syllable: "Ga", consonant: "ga", digit: 3 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R1 G3 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G3 R1 S",
    songs: [],
  },
  {
    melaNumber: 54,
    name: "Vishwambari",
    slug: "vishwambari",
    katapayadi: {
      syllables: [
        { syllable: "Vi", consonant: "va", digit: 4 },
        { syllable: "shwa", consonant: "sha", digit: 5 },
      ],
      note: "In the conjunct 'shwa' (śva), tradition counts śa = 5 here — not the last consonant va — so the name decodes to 54.",
    },
    aroha: "S R1 G3 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G3 R1 S",
    songs: [],
  },
] satisfies MelaContent[];
