import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 5 — Bana (the five arrows) · melas 25–30 · R2 G3 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
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
    characteristics: {
      mood: "A rarely heard scale whose bright upper half sinks into a soft, plaintive suddha dhaivata–nishada close.",
    },
    songs: [
      {
        title: "Manasa Sri Ramuni",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Sharavati Tata Vasini",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia:
          "Dikshitar composed under the asampurna mela name Sharavati, his school's equivalent of mela 25.",
      },
    ],
    trivia: [
      {
        text: "Called Sharavati in the Muthuswami Dikshitar school. Graha bhedam on Mararanjani's notes yields Vanaspati (mela 4).",
        source: "Wikipedia: Mararanjani",
      },
    ],
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
    characteristics: {
      rasa: ["Karuna", "Bhakti"],
      mood: "Poignant and yearning — a bright, major-like ascent that darkens with pathos above the panchamam.",
    },
    songs: [
      {
        title: "Adamodi Galade",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "The definitive concert krithi in Charukesi.",
      },
      {
        title: "Kripaya Palaya Saure",
        type: "krithi",
        composer: "Swati Tirunal",
        language: "Sanskrit",
        tala: "Misra Chapu",
      },
      {
        title: "Aahista Aahista",
        type: "film",
        composer: "A. R. Rahman",
        language: "Hindi",
        film: { name: "Swades", year: 2004 },
      },
      {
        title: "Baiyan Na Dharo",
        type: "film",
        composer: "Madan Mohan",
        language: "Hindi",
        film: { name: "Dastak", year: 1970 },
        notableRenditions: "Lata Mangeshkar's rendition is a touchstone of raga-based Hindi film song.",
      },
    ],
    trivia: [
      {
        text: "Corresponds to the Western Aeolian dominant scale (melodic minor's fifth mode); the same colour surfaces in Schubert and other Romantic-era writing.",
        source: "Wikipedia: Charukesi",
      },
      {
        text: "Graha bhedam on Charukesi yields three other melakartas: Vachaspati, Natakapriya and Gourimanohari. In the Dikshitar school the mela is called Tarangini.",
        source: "Wikipedia: Charukesi",
      },
    ],
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
    characteristics: {
      mood: "Lush and bittersweet — a major scale shadowed by its lowered dhaivatam (the Western harmonic major).",
    },
    songs: [
      {
        title: "Menu Joochi",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Sowrasenesham Vallisham",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Dikshitar composed under the asampurna mela name Sowrasena, his school's equivalent of mela 27.",
      },
      {
        title: "Tamizha Tamizha",
        type: "film",
        composer: "A. R. Rahman",
        language: "Tamil",
        film: { name: "Roja", year: 1992 },
      },
      {
        title: "Kannaana Kanney",
        type: "film",
        composer: "D. Imman",
        language: "Tamil",
        film: { name: "Viswasam", year: 2019 },
        notableRenditions: "Sung by Sid Sriram; a major popular hit built on the Sarasangi scale.",
      },
    ],
    trivia: [
      {
        text: "Equivalent to the Western harmonic major scale. Graha bhedam on Sarasangi yields Dharmavati and Chakravakam.",
        source: "Wikipedia: Sarasangi",
      },
    ],
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
    characteristics: {
      mood: "Mellow, warm and pastoral — the sweet-toned Mixolydian colour behind hundreds of film melodies.",
    },
    songs: [
      {
        title: "Rama Nannu Brovara",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        notableRenditions:
          "A staple of the concert repertoire; memorably featured (sung by M. Balamuralikrishna) in the Tamil film Sindhu Bhairavi.",
      },
      {
        title: "Dinamani Vamsa",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Enduku Nirdaya",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "One of the great pillar melas: its janyas include Kambhoji, Mohanam, Kedaragaula, Natakurinji, Sahana and Yadukula Kambhoji — much of the rakti-raga repertoire lives under this roof.",
        source: "Wikipedia: Harikambhoji",
      },
      {
        text: "Equivalent to the Hindustani Khamaj thaat and the Western Mixolydian mode; Tamil music history traces it to the ancient Sempaalai pann.",
        source: "Wikipedia: Harikambhoji",
      },
    ],
  },
  {
    melaNumber: 29,
    name: "Dheerasankarabharanam",
    popularName: "Sankarabharanam",
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
    characteristics: {
      rasa: ["Shanta", "Veera"],
      mood: "Majestic, complete and serene — the Carnatic voice of the Western major scale, equally at home in grandeur and repose.",
    },
    songs: [
      {
        title: "Swara Raga Sudha Rasa",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "One of Tyagaraja's great statements on the divinity of music itself.",
      },
      {
        title: "Enduku Peddala",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Akshaya Linga Vibho",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Misra Chapu",
      },
      {
        title: "Sarojadala Netri",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Adi",
        trivia: "All three of the Trinity composed masterpieces in this mela.",
      },
      {
        title: "Omkara Nadanu",
        type: "film",
        composer: "K. V. Mahadevan",
        language: "Telugu",
        film: { name: "Sankarabharanam", year: 1980 },
        notableRenditions: "S. P. Balasubrahmanyam and S. Janaki; the film swept the National Awards.",
        trivia: "The film named for this raga revived popular interest in classical music across South India.",
      },
    ],
    trivia: [
      {
        text: "Identical in scale to the Western major (Ionian) scale and the Hindustani Bilaval thaat. Graha bhedam from its degrees yields the other 'modal' melas — Kharaharapriya, Todi (Hanumatodi), Kalyani, Harikambhoji and Natabhairavi.",
      },
      {
        text: "Universally known simply as Sankarabharanam — 'the ornament of Shiva'. It is a sarva-swara-gamaka rakti raga: every note takes gamaka, and full-length ragam-tanam-pallavis in it can anchor an entire concert.",
      },
    ],
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
    characteristics: {
      mood: "A Sankarabharanam-like brightness given an unsettled edge by the vivadi shatsruti dhaivatam.",
    },
    songs: [
      {
        title: "Satta Leni Dinamulu",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "Tyagaraja laments the lawless days of Kali yuga in this rare vivadi-mela krithi.",
      },
      {
        title: "Nagabharanam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Nagabharanam, the Dikshitar school's equivalent of mela 30.",
      },
      {
        title: "Naa Yen Unnai",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's cycle of Tamil krithis on Muruga covering all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "Differs from Sankarabharanam only in the dhaivatam (D3 in place of D2). Graha bhedam on Naganandini yields Bhavapriya and Vagadheeswari.",
        source: "Wikipedia: Naganandini",
      },
    ],
  },
] satisfies MelaContent[];
