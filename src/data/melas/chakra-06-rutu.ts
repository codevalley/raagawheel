import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 6 — Rutu (the six seasons) · melas 31–36 · R3 G3 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 31,
    name: "Yagapriya",
    slug: "yagapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ya", consonant: "ya", digit: 1 },
        { syllable: "ga", consonant: "ga", digit: 3 },
      ],
    },
    aroha: "S R3 G3 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 32,
    name: "Ragavardhini",
    slug: "ragavardhini",
    katapayadi: {
      syllables: [
        { syllable: "Ra", consonant: "ra", digit: 2 },
        { syllable: "ga", consonant: "ga", digit: 3 },
      ],
    },
    aroha: "S R3 G3 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 33,
    name: "Gangeyabhushani",
    slug: "gangeyabhushani",
    katapayadi: {
      syllables: [
        { syllable: "Ga", consonant: "ga", digit: 3 },
        { syllable: "nge", consonant: "ga", digit: 3 },
      ],
      note: "In the conjunct 'ṅge', the last consonant (ga) carries the value.",
    },
    aroha: "S R3 G3 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 34,
    name: "Vagadheeswari",
    slug: "vagadheeswari",
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "ga", consonant: "ga", digit: 3 },
      ],
    },
    aroha: "S R3 G3 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 35,
    name: "Shulini",
    slug: "shulini",
    katapayadi: {
      syllables: [
        { syllable: "Shu", consonant: "sha", digit: 5 },
        { syllable: "li", consonant: "la", digit: 3 },
      ],
      note: "The 'Sh' here is palatal śa = 5 (Śūlinī), not retroflex ṣa = 6.",
    },
    aroha: "S R3 G3 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G3 R3 S",
    songs: [],
  },
  {
    melaNumber: 36,
    name: "Chalanata",
    slug: "chalanata",
    katapayadi: {
      syllables: [
        { syllable: "Cha", consonant: "ca", digit: 6 },
        { syllable: "la", consonant: "la", digit: 3 },
      ],
      note: "English 'Ch' spells unaspirated ca = 6 (Calanāṭa), not cha = 7.",
    },
    aroha: "S R3 G3 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G3 R3 S",
    songs: [],
  },
] satisfies MelaContent[];
