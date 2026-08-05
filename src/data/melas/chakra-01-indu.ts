import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 1 — Indu (the one moon) · melas 1–6 · R1 G1 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 *
 * All six Indu-chakra melas carry the vivadi pair R1–G1, so concert
 * repertoire is thin. Coverage comes from the two 72-mela cycles:
 * Koteeswara Iyer's Tamil "Kanda Ganamutham" and Muthuswami Dikshitar's
 * asampurna-mela kritis (which use the older mela names).
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 1,
    name: "Kanakangi",
    alternateNames: ["Kanakambari"],
    slug: "kanakangi",
    katapayadi: {
      syllables: [
        { syllable: "Ka", consonant: "ka", digit: 1 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G1 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G1 R1 S",
    characteristics: {
      mood: "A stark, austere scale built entirely of the lowest variety of every swara — heard more in lecture-demonstrations and mela cycles than in mainstream concerts.",
    },
    songs: [
      {
        title: "Kanakangaka Sukha Guha",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's Tamil cycle on Muruga covering all 72 melakartas; the raga mudra 'Kanakangi' is woven into the opening words.",
      },
      {
        title: "Kanakambari Karunyamrita Lahari",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia:
          "Dikshitar followed the asampurna mela scheme, so this kriti names the mela 'Kanakambari' rather than Kanakangi.",
      },
    ],
    trivia: [
      {
        text: "Kanakangi opens the melakarta cycle: every swara is in its suddha (lowest) position, making it the reference scale from which the other 71 melas are counted.",
      },
      {
        text: "The R1–G1 pair makes it a vivadi mela; performers treat the gandhara with special oscillation to soften the dissonance.",
      },
    ],
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
    characteristics: {
      mood: "A rare vivadi scale; the kaisiki nishada gives it a slightly warmer descent than Kanakangi.",
    },
    songs: [
      {
        title: "Tarunam Ide Dayanidhe",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From the Kanda Ganamutham cycle covering all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "In Dikshitar's asampurna scheme mela 2 is called Phenadyuti; the sampurna name Ratnangi comes from the later Kanakangi–Ratnangi nomenclature.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
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
    characteristics: {
      mood: "The kakali nishada against suddha dhaivata lends this vivadi mela a plaintive, keening edge.",
    },
    songs: [
      {
        title: "Ganamurte Sri Krishna",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "One of Thyagaraja's rare Sanskrit kritis, carrying the raga mudra 'Ganamurte' in its opening; it is virtually the only piece by which most listeners know this mela.",
      },
      {
        title: "Ma Madhura Sarasa",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "The name means 'the embodiment of music'; Thyagaraja's kriti Ganamurte is the raga's near-sole concert presence.",
        source: "thyagaraja-vaibhavam.blogspot.com",
      },
      {
        text: "Dikshitar's asampurna equivalent for mela 3 is Ganasamavarali.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
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
    characteristics: {
      mood: "With chatusruti dhaivata and kaisiki nishada, its upper half sounds almost Kharaharapriya-like, sitting atop a vivadi lower half.",
    },
    songs: [
      {
        title: "Pariyachakama",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Rupakam",
        trivia:
          "Thyagaraja's lone kriti in Vanaspati, and the standard concert example of the mela.",
      },
      {
        title: "Dasa Nesha Guheshane",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "In the Dikshitar school this mela is called Bhanumati; his kriti tradition uses that asampurna name.",
        source: "Wikipedia: Vanaspati (raga)",
      },
    ],
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
    characteristics: {
      mood: "A quiet, rarely heard vivadi mela whose upper tetrachord (D2 N3) matches the major scale's.",
    },
    songs: [
      {
        title: "Nija Bhakti Ni",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupakam",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Dikshitar's asampurna equivalent for mela 5 is Manoranjani.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
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
    characteristics: {
      mood: "Doubly vivadi — R1 against G1 below and D3 against N3 above — giving it one of the most angular sounds of all 72 melas.",
    },
    songs: [
      {
        title: "Va Velava Va Mavalava",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Khanda Chapu",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Tanarupi is one of the handful of melas with vivadi pairs at both ends of the scale (R1–G1 and D3–N3), which keeps it almost entirely out of the concert mainstream.",
      },
      {
        text: "Dikshitar's asampurna equivalent for mela 6 is Tanukirti.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
  },
] satisfies MelaContent[];
