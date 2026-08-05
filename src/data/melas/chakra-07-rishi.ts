import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 7 — Rishi (the seven sages) · melas 37–42 · R1 G1 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 37,
    name: "Salagam",
    slug: "salagam",
    katapayadi: {
      syllables: [
        { syllable: "Sa", consonant: "sa", digit: 7 },
        { syllable: "la", consonant: "la", digit: 3 },
      ],
      note: "Plain dental sa = 7 (not śa = 5 or ṣa = 6); 3·10 + 7 = 37.",
    },
    aroha: "S R1 G1 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 38,
    name: "Jalarnavam",
    slug: "jalarnavam",
    katapayadi: {
      syllables: [
        { syllable: "Ja", consonant: "ja", digit: 8 },
        { syllable: "la", consonant: "la", digit: 3 },
      ],
    },
    aroha: "S R1 G1 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 39,
    name: "Jhalavarali",
    slug: "jhalavarali",
    katapayadi: {
      syllables: [
        { syllable: "Jha", consonant: "jha", digit: 9 },
        { syllable: "la", consonant: "la", digit: 3 },
      ],
    },
    aroha: "S R1 G1 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 40,
    name: "Navaneetam",
    slug: "navaneetam",
    alternateNames: ["Navanitam"],
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "va", consonant: "va", digit: 4 },
      ],
    },
    aroha: "S R1 G1 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 41,
    name: "Pavani",
    slug: "pavani",
    katapayadi: {
      syllables: [
        { syllable: "Pa", consonant: "pa", digit: 1 },
        { syllable: "va", consonant: "va", digit: 4 },
      ],
    },
    aroha: "S R1 G1 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G1 R1 S",
    songs: [],
  },
  {
    melaNumber: 42,
    name: "Raghupriya",
    slug: "raghupriya",
    katapayadi: {
      syllables: [
        { syllable: "Ra", consonant: "ra", digit: 2 },
        { syllable: "ghu", consonant: "gha", digit: 4 },
      ],
      note: "The second syllable 'ghu' counts its consonant gha = 4; the vowel does not matter.",
    },
    aroha: "S R1 G1 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G1 R1 S",
    songs: [],
  },
] satisfies MelaContent[];
