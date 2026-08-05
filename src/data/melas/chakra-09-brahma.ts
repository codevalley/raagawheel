import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 9 — Brahma (the nine Brahmas) · melas 49–54 · R1 G3 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
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
    characteristics: {
      mood: "A stark, austere vivadi scale — its clashing shuddha dhaivata–nishada pair gives it an unsettled, otherworldly colour.",
    },
    songs: [
      {
        title: "Shringaradi Navarasangi",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Khanda Eka",
        trivia:
          "Composed in Dhavalangam, the asampurna-mela equivalent of mela 49 in the Dikshitar school.",
      },
    ],
    trivia: [
      {
        text: "Dhavalambari is a vivadi mela — D1 and N1 sit on adjacent semitones — and is rarely heard outside the mela-raga demonstration repertoire. Muthuswami Dikshitar and Koteeswara Iyer are among the very few composers to have set songs in it.",
        source: "Wikipedia: Dhavalambari; medieval.org Dikshitar raga index",
      },
    ],
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
    characteristics: {
      mood: "A rarely sung scale whose R1–G3–M2 opening recalls the Poorvi colour, turning darker at the shuddha dhaivata.",
    },
    songs: [
      {
        title: "Narmada Kaveri Tiranilaye",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Misra Chapu",
        trivia:
          "Composed in Namadesi, the Dikshitar-school asampurna name for mela 50; the text invokes the sacred rivers Narmada and Kaveri.",
      },
      {
        title: "Een Maname",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's cycle of Tamil krithis on Muruga covering all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "Koteeswara Iyer, writing under the mudra 'Kavi Kunjara Dasan', was the first to compose Tamil songs in all 72 melakartas — his Namanarayani krithi is one of the few compositions keeping this mela in circulation.",
        source: "Wikipedia: Koteeswara Iyer",
      },
    ],
  },
  {
    melaNumber: 51,
    name: "Kamavardhani",
    alternateNames: ["Panthuvarali", "Pantuvarali", "Kasiramakriya"],
    slug: "kamavardhani",
    katapayadi: {
      syllables: [
        { syllable: "Ka", consonant: "ka", digit: 1 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R1 G3 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G3 R1 S",
    characteristics: {
      rasa: ["Bhakti", "Karuna"],
      mood: "Intensely devotional and poignant — the raised madhyama pulling against the flat rishabha and dhaivata gives it a pleading, prayerful ache.",
    },
    songs: [
      {
        title: "Siva Siva Siva Enarada",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Appa Rama Bhakti",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Rupaka",
      },
      {
        title: "Ramanatham Bhajeham",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Tisra Eka",
        trivia:
          "Composed in Kasiramakriya, the Dikshitar-school asampurna name for mela 51; on Ramanathaswamy of Rameswaram.",
      },
      {
        title: "Om Sivoham",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Naan Kadavul", year: 2009 },
        notableRenditions: "Vijay Prakash's rendition won wide acclaim.",
      },
      {
        title: "Ninnai Charanadainthen",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Bharathi", year: 2000 },
        trivia:
          "A Subramania Bharati poem of surrender to the divine mother, set by Ilaiyaraaja in Panthuvarali.",
      },
    ],
    trivia: [
      {
        text: "The name Pantuvarali has a tangled history: older practice applied it to the scale of today's mela 45 (Shubhapantuvarali), and the two were disambiguated only in the modern standardization — which is why mela 51 carries both names Kamavardhani and Panthuvarali.",
        source: "Wikipedia: Kamavardani",
      },
      {
        text: "Its scale corresponds to the Poorvi thaat of Hindustani music, where the same note-set is a hallowed sunset raga.",
      },
      {
        text: "Tyagaraja was especially fond of this mela, leaving a clutch of much-performed krithis in it, from the anguished 'Siva Siva Siva Enarada' to 'Appa Rama Bhakti'.",
      },
    ],
  },
  {
    melaNumber: 52,
    name: "Ramapriya",
    alternateNames: ["Ramamanohari"],
    slug: "ramapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ra", consonant: "ra", digit: 2 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R1 G3 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G3 R1 S",
    characteristics: {
      mood: "Bright and faintly wistful — a shuddha rishabha opening that blossoms into a sunny upper tetrachord of chatusruti dhaivata and kaisiki nishada.",
    },
    songs: [
      {
        title: "Sandehamunu Tirpumayya",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "Tyagaraja is credited with pioneering concert use of Ramapriya.",
      },
      {
        title: "Matangi Sri Rajarajeshwari",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupaka",
        trivia:
          "Composed in Ramamanohari, the Dikshitar-school asampurna name for mela 52.",
      },
    ],
    trivia: [
      {
        text: "Ramapriya is the prati-madhyama counterpart of mela 16 Chakravakam — identical in every swara except the raised madhyama.",
      },
    ],
  },
  {
    melaNumber: 53,
    name: "Gamanashrama",
    alternateNames: ["Gamakakriya"],
    slug: "gamanashrama",
    katapayadi: {
      syllables: [
        { syllable: "Ga", consonant: "ga", digit: 3 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R1 G3 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G3 R1 S",
    characteristics: {
      mood: "Luminous and yearning — best known through its janyas, it pairs the Poorvi-like lower half with a bright natural dhaivata.",
    },
    songs: [
      {
        title: "Meenakshi Memudam Dehi",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        notableRenditions:
          "A concert staple, memorably recorded by M. S. Subbulakshmi.",
        trivia:
          "Composed in Gamakakriya, the Dikshitar-school asampurna form of mela 53; in practice it is sung in Purvikalyani.",
      },
      {
        title: "Ekamranatham Bhajeham",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia: "Also in Gamakakriya, on Ekamranatha of Kanchipuram.",
      },
      {
        title: "Ihame Sukham Tarum",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "The Gamanashrama entry in Kanda Ganamutham, Koteeswara Iyer's 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Gamanashrama is overshadowed by its own janyas: Purvikalyani (Gamakakriya) and Hamsanandi, both of which are far more frequently performed than the parent mela.",
      },
      {
        text: "By tradition, Muthuswami Dikshitar died in 1835 as his disciples sang the line 'meena lochani pasa mochani' from his own Meenakshi Memudam Dehi.",
        source: "Standard Dikshitar biographies",
      },
    ],
  },
  {
    melaNumber: 54,
    name: "Vishwambari",
    alternateNames: ["Vamsavati"],
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
    characteristics: {
      mood: "A brilliant, edgy vivadi scale whose shatsruti dhaivata crowds the kakali nishada for a glinting, restless upper register.",
    },
    songs: [
      {
        title: "Vamshavati Shivayuvati Palaya Mam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "Composed in Vamsavati, the Dikshitar-school asampurna name for mela 54, with the raga name woven into the opening words.",
      },
      {
        title: "Bhaktavatsalam Abhishekavalliyutam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia: "Also in Vamsavati.",
      },
    ],
    trivia: [
      {
        text: "Vishwambari is a vivadi mela (D3 against N3). Dikshitar left two Vamsavati krithis in it — an unusually generous allotment for so rare a scale.",
        source: "medieval.org Dikshitar raga index",
      },
    ],
  },
] satisfies MelaContent[];
