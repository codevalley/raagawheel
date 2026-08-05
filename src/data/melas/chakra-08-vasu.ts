import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 8 — Vasu (the eight Vasus) · melas 43–48 · R1 G2 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 43,
    name: "Gavambodhi",
    slug: "gavambodhi",
    katapayadi: {
      syllables: [
        { syllable: "Ga", consonant: "ga", digit: 3 },
        { syllable: "vam", consonant: "va", digit: 4 },
      ],
    },
    aroha: "S R1 G2 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 44,
    name: "Bhavapriya",
    slug: "bhavapriya",
    katapayadi: {
      syllables: [
        { syllable: "Bha", consonant: "bha", digit: 4 },
        { syllable: "va", consonant: "va", digit: 4 },
      ],
    },
    aroha: "S R1 G2 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 45,
    name: "Shubhapantuvarali",
    alternateNames: ["Subhapantuvarali", "Pantuvarali"],
    slug: "shubhapantuvarali",
    katapayadi: {
      syllables: [
        { syllable: "Shu", consonant: "sha", digit: 5 },
        { syllable: "bha", consonant: "bha", digit: 4 },
      ],
      note: "The 'Sh' here is palatal śa = 5, not retroflex ṣa = 6. The name Pantuvarali is also applied to mela 51 (Kamavardhini) in some traditions.",
    },
    aroha: "S R1 G2 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 46,
    name: "Shadvidamargini",
    alternateNames: ["Shadvidhamargini"],
    slug: "shadvidamargini",
    katapayadi: {
      syllables: [
        { syllable: "Shad", consonant: "ssa", digit: 6 },
        { syllable: "vi", consonant: "va", digit: 4 },
      ],
      note: "The 'Sh' here is retroflex ṣa = 6 (as in shad-, 'six'). 'Shad-vi' — the d closes the first syllable, so the second syllable counts va = 4.",
    },
    aroha: "S R1 G2 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 47,
    name: "Suvarnangi",
    slug: "suvarnangi",
    katapayadi: {
      syllables: [
        { syllable: "Su", consonant: "sa", digit: 7 },
        { syllable: "var", consonant: "va", digit: 4 },
      ],
    },
    aroha: "S R1 G2 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G2 R1 S",
    songs: [],
  },
  {
    melaNumber: 48,
    name: "Divyamani",
    slug: "divyamani",
    katapayadi: {
      syllables: [
        { syllable: "Di", consonant: "da", digit: 8 },
        { syllable: "vya", consonant: "va", digit: 4 },
      ],
      note: "In the conjunct 'vya', tradition counts va = 4 (not the last consonant ya) — the mela number 48 confirms this reading.",
    },
    aroha: "S R1 G2 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G2 R1 S",
    songs: [],
  },
] satisfies MelaContent[];
