import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 10 — Disi (the ten directions) · melas 55–60 · R2 G2 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 55,
    name: "Shamalangi",
    alternateNames: ["Syamalangi", "Shyamalam"],
    slug: "shamalangi",
    katapayadi: {
      syllables: [
        { syllable: "Sha", consonant: "sha", digit: 5 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
      note: "Śyāmalāṅgī: the sibilant is śa = 5 (not ṣa = 6).",
    },
    aroha: "S R2 G2 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 56,
    name: "Shanmukhapriya",
    alternateNames: ["Chamaram"],
    slug: "shanmukhapriya",
    katapayadi: {
      syllables: [
        { syllable: "Sha", consonant: "ssa", digit: 6 },
        { syllable: "nmu", consonant: "ma", digit: 5 },
      ],
      note: "Ṣaṇmukhapriyā: ṣa = 6; in the conjunct 'nmu' the last consonant (ma) counts.",
    },
    aroha: "S R2 G2 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 57,
    name: "Simhendramadhyamam",
    alternateNames: ["Sumadyuti"],
    slug: "simhendramadhyamam",
    katapayadi: {
      syllables: [
        { syllable: "Si", consonant: "sa", digit: 7 },
        { syllable: "mhe", consonant: "ma", digit: 5 },
      ],
      note: "Traditionally analyzed si = sa = 7, and 'mhe' read as ma = 5 (the ha of the cluster is discounted).",
    },
    aroha: "S R2 G2 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 58,
    name: "Hemavati",
    alternateNames: ["Desisimharavam"],
    slug: "hemavati",
    katapayadi: {
      syllables: [
        { syllable: "He", consonant: "ha", digit: 8 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R2 G2 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 59,
    name: "Dharmavati",
    alternateNames: ["Dhamavati"],
    slug: "dharmavati",
    katapayadi: {
      syllables: [
        { syllable: "Dha", consonant: "dha", digit: 9 },
        { syllable: "rma", consonant: "ma", digit: 5 },
      ],
      note: "Dental dha = 9; in the conjunct 'rma' the last consonant (ma) counts.",
    },
    aroha: "S R2 G2 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 60,
    name: "Neetimati",
    alternateNames: ["Nitimati"],
    slug: "neetimati",
    katapayadi: {
      syllables: [
        { syllable: "Nee", consonant: "na", digit: 0 },
        { syllable: "ti", consonant: "ta", digit: 6 },
      ],
      note: "Dental ta = 6 (ta-varga), not retroflex ṭa = 1.",
    },
    aroha: "S R2 G2 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G2 R2 S",
    songs: [],
  },
] satisfies MelaContent[];
