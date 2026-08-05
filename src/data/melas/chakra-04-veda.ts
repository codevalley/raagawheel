import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 4 — Veda (the four Vedas) · melas 19–24 · R2 G2 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 * Songs arrive in the content wave (Phase 6).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 19,
    name: "Jhankaradhwani",
    slug: "jhankaradhwani",
    katapayadi: {
      syllables: [
        { syllable: "Jha", consonant: "jha", digit: 9 },
        { syllable: "nka", consonant: "ka", digit: 1 },
      ],
      note: "In the conjunct 'ṅka', the last consonant (ka) carries the value.",
    },
    aroha: "S R2 G2 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 20,
    name: "Natabhairavi",
    slug: "natabhairavi",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "ta", consonant: "ttha", digit: 2 },
      ],
      note: "The second syllable is traditionally read as retroflex ṭha = 2 (not ṭa = 1), which yields 20.",
    },
    aroha: "S R2 G2 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 21,
    name: "Keeravani",
    slug: "keeravani",
    alternateNames: ["Kiravani", "Kirvani"],
    katapayadi: {
      syllables: [
        { syllable: "Kee", consonant: "ka", digit: 1 },
        { syllable: "ra", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 22,
    name: "Kharaharapriya",
    slug: "kharaharapriya",
    katapayadi: {
      syllables: [
        { syllable: "Kha", consonant: "kha", digit: 2 },
        { syllable: "ra", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 23,
    name: "Gourimanohari",
    slug: "gourimanohari",
    alternateNames: ["Gaurimanohari", "Gowrimanohari"],
    katapayadi: {
      syllables: [
        { syllable: "Gou", consonant: "ga", digit: 3 },
        { syllable: "ri", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G2 R2 S",
    songs: [],
  },
  {
    melaNumber: 24,
    name: "Varunapriya",
    slug: "varunapriya",
    alternateNames: ["Viravasantham"],
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "ru", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G2 R2 S",
    songs: [],
  },
] satisfies MelaContent[];
