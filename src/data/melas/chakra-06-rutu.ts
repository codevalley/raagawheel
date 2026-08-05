import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 6 — Rutu (the six seasons) · melas 31–36 · R3 G3 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
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
    characteristics: {
      mood: "A stark vivadi scale — bright gandharam hemmed in by the raised rishabham and flattened upper notes.",
    },
    songs: [
      {
        title: "Kalavati Kamalasana Yuvati",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Kalavati, the Dikshitar school's equivalent of mela 31.",
      },
      {
        title: "Shambho Sadashiva",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's Tamil krithi cycle covering all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "One of the few melakartas whose graha bhedam yields no other melakarta raga. Called Kalavati in the Dikshitar school (unrelated to the popular Hindustani Kalavati).",
        source: "Wikipedia: Yagapriya",
      },
    ],
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
    characteristics: {
      mood: "A rare vivadi mela whose Charukesi-like upper half sits over a tense, raised rishabham.",
    },
    songs: [
      {
        title: "Shvetha Ganapathim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Ragachudamani, the Dikshitar school's equivalent of mela 32.",
      },
      {
        title: "Kalangadhe Maname",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's Tamil krithi cycle covering all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "Graha bhedam on Ragavardhini (shifting the tonic to the madhyamam) yields Varunapriya.",
        source: "Wikipedia: Ragavardhini",
      },
    ],
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
    characteristics: {
      mood: "Ornate and glinting — vivadi rishabham below, the augmented-second dhaivata–nishada leap above.",
    },
    songs: [
      {
        title: "Evvare Ramayya",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Varadaraja Avava",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Gangatarangini, the Dikshitar school's equivalent of mela 33.",
      },
    ],
    trivia: [
      {
        text: "Graha bhedam on Gangeyabhushani yields Neetimati. The Dikshitar school calls the mela Gangatarangini.",
        source: "Wikipedia: Gangeyabhushani",
      },
    ],
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
    characteristics: {
      mood: "The most approachable of the vivadi R3 melas — Harikambhoji's warm upper half over a raised rishabham.",
    },
    songs: [
      {
        title: "Paramatmudu Velige",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "A philosophical meditation on the all-pervading paramatma, and by far the best-known composition in this mela.",
      },
      {
        title: "Bhogachhaya Nataka Priye",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Bhogachhayanata, the Dikshitar school's equivalent of mela 34.",
      },
    ],
    trivia: [
      {
        text: "Graha bhedam on Vagadheeswari yields Naganandini and Bhavapriya.",
        source: "Wikipedia: Vagadheeswari",
      },
    ],
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
    characteristics: {
      mood: "A vivadi cousin of Sankarabharanam, its raised rishabham lending a stern, trident-bearing intensity.",
    },
    songs: [
      {
        title: "Prana Natha",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Paramukham Adeno",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's Tamil krithi cycle covering all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "Named for Shulini, the trident-bearing form of Durga; the Dikshitar school calls the mela Shailadesakshi. Graha bhedam on Shulini yields Shanmukhapriya, Dhenuka and Chitrambari.",
        source: "Wikipedia: Shulini",
      },
    ],
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
    characteristics: {
      mood: "Bold, bracing and ceremonial — both vivadi pairs at once, best known through its janya Nata.",
    },
    songs: [
      {
        title: "Edayya Gathi",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        trivia:
          "The best-known concert piece in Chalanata proper, from the Kanda Ganamutham cycle covering all 72 melakartas.",
      },
      {
        title: "Rajadhiraja",
        type: "varnam",
        composer: "Baluswami Dikshitar",
        language: "Sanskrit",
        trivia: "A varnam by Muthuswami Dikshitar's younger brother, credited with introducing the violin to Carnatic music.",
      },
    ],
    trivia: [
      {
        text: "Its janya Nata — the auspicious opening raga of concerts, and the raga of Tyagaraja's pancharatna 'Jagadananda Karaka' — is performed so often that it overshadows the parent mela.",
        source: "Wikipedia: Chalanata",
      },
      {
        text: "One of the few melas bearing the same name in the Muthuswami Dikshitar school. Graha bhedam on Chalanata yields Shubhapantuvarali.",
        source: "Wikipedia: Chalanata",
      },
    ],
  },
] satisfies MelaContent[];
