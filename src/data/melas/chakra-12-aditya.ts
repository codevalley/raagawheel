import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 12 — Aditya (the twelve suns) · melas 67–72 · R3 G3 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 67,
    name: "Sucharitra",
    slug: "sucharitra",
    katapayadi: {
      syllables: [
        { syllable: "Su", consonant: "sa", digit: 7 },
        { syllable: "cha", consonant: "ca", digit: 6 },
      ],
      note: "English 'ch' here is ca = 6 (as in Chakravakam), not cha = 7.",
    },
    aroha: "S R3 G3 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G3 R3 S",
    characteristics: {
      mood: "Severe and angular, with vivadi clusters at both ends of the scale.",
    },
    songs: [
      {
        title: "Velu Mayilume",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        trivia: "The Sucharitra entry in the Kanda Ganamutham 72-melakarta cycle.",
      },
      {
        title: "Chintayami Santatam",
        type: "krithi",
        composer: "M. Balamuralikrishna",
        language: "Sanskrit",
        trivia:
          "Balamuralikrishna, like Koteeswara Iyer before him, composed across all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "One of the rarest melas on the concert stage — and one of the few whose notes, shifted by graha bhedam, yield no other melakarta at all.",
        source: "Wikipedia: Sucharitra",
      },
      {
        text: "Called Santana Manjari in the Muthuswami Dikshitar school, where Dikshitar left a composition in the asampurna scale.",
        source: "Wikipedia: Sucharitra",
      },
    ],
  },
  {
    melaNumber: 68,
    name: "Jyotiswarupini",
    slug: "jyotiswarupini",
    katapayadi: {
      syllables: [
        { syllable: "Jyo", consonant: "ja", digit: 8 },
        { syllable: "ti", consonant: "ta", digit: 6 },
      ],
      note: "In the conjunct 'jyo' (j + ya), tradition counts ja = 8 — the first consonant, not the usual last-of-cluster rule.",
    },
    aroha: "S R3 G3 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G3 R3 S",
    characteristics: {
      mood: "Blazing and unsettled — a scale named for the very form of light.",
    },
    songs: [
      {
        title: "Ganamrutha Panam",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Chapu",
        trivia:
          "Its opening words echo 'Ganamutham', the name of Koteeswara Iyer's 72-melakarta collection itself.",
      },
      {
        title: "Rame Bharata Palita",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Jyoti (Jyotiraga), the Dikshitar-school equivalent of Jyotiswarupini.",
      },
    ],
    trivia: [
      {
        text: "Jyotiswarupini means 'she whose form is light'. Its notes, shifted by graha bhedam, yield no other melakarta.",
        source: "Wikipedia: Jyoti swarupini",
      },
    ],
  },
  {
    melaNumber: 69,
    name: "Dhatuvardhani",
    slug: "dhatuvardhani",
    katapayadi: {
      syllables: [
        { syllable: "Dha", consonant: "dha", digit: 9 },
        { syllable: "tu", consonant: "ta", digit: 6 },
      ],
      note: "Dental dha = 9 and dental ta = 6, not their retroflex counterparts.",
    },
    aroha: "S R3 G3 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G3 R3 S",
    characteristics: {
      mood: "Dense and dramatic, with augmented leaps on either side of the panchamam.",
    },
    songs: [
      {
        title: "Sukha Kara",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "The Dhatuvardhani entry in the Kanda Ganamutham 72-melakarta cycle.",
      },
      {
        title: "Mathangi Marakathangi",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Dhautapanchamam, the Dikshitar-school equivalent of Dhatuvardhani.",
      },
    ],
    trivia: [
      {
        text: "Graha bhedam on Dhatuvardhani yields Gayakapriya, the 13th melakarta.",
        source: "Wikipedia: Dhatuvardani",
      },
    ],
  },
  {
    melaNumber: 70,
    name: "Nasikabushani",
    alternateNames: ["Nasikabhushani"],
    slug: "nasikabushani",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "si", consonant: "sa", digit: 7 },
      ],
    },
    aroha: "S R3 G3 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G3 R3 S",
    characteristics: {
      mood: "Startling yet strangely graceful — the friendliest of the vivadi ragas in this chakra.",
    },
    songs: [
      {
        title: "Maravairi Ramani",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Tyagaraja's lone Nasikabhushani kriti single-handedly keeps this vivadi mela in the active concert repertoire.",
      },
      {
        title: "Tandarul Ayya",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Chapu",
        trivia: "The Nasikabhushani entry in the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Thanks to Tyagaraja's Maravairi Ramani, Nasikabhushani is among the very few vivadi melakartas with a genuinely concert-standard kriti.",
      },
      {
        text: "Its scale corresponds to the Hungarian major scale of Western music theory. Called Nasamani in the Muthuswami Dikshitar school.",
        source: "Wikipedia: Nasikabhooshani",
      },
    ],
  },
  {
    melaNumber: 71,
    name: "Kosalam",
    alternateNames: ["Kosala"],
    slug: "kosalam",
    katapayadi: {
      syllables: [
        { syllable: "Ko", consonant: "ka", digit: 1 },
        { syllable: "sa", consonant: "sa", digit: 7 },
      ],
    },
    aroha: "S R3 G3 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G3 R3 S",
    characteristics: {
      mood: "A near-Kalyani glow with a sudden vivadi glint at the second step.",
    },
    songs: [
      {
        title: "Ka Guha Shanmukha",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        trivia: "The Kosalam entry in the Kanda Ganamutham 72-melakarta cycle.",
      },
      {
        title: "Kusumakara Shobhita",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Kusumakaram, the Dikshitar-school equivalent of Kosalam.",
      },
      {
        title: "Sundari Kannal Oru Seithi",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Thalapathi", year: 1991 },
        notableRenditions: "Sung by S. P. Balasubrahmanyam and S. Janaki.",
        trivia:
          "Famously weaves Kosalam together with Kalyani — an obscure vivadi mela smuggled into one of Tamil cinema's most loved songs.",
      },
    ],
    trivia: [
      {
        text: "Graha bhedam on Kosalam yields three well-known melakartas: Keeravani, Hemavati and Vakulabharanam.",
        source: "Wikipedia: Kosalam",
      },
    ],
  },
  {
    melaNumber: 72,
    name: "Rasikapriya",
    slug: "rasikapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ra", consonant: "ra", digit: 2 },
        { syllable: "si", consonant: "sa", digit: 7 },
      ],
    },
    aroha: "S R3 G3 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G3 R3 S",
    characteristics: {
      mood: "The most extreme scale in the system — every variable note at its sharpest, giving an intense, incandescent character.",
    },
    songs: [
      {
        title: "Arul Seyya Venum Ayya",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "The final kriti of the Kanda Ganamutham 72-melakarta cycle, and the best-known concert piece in Rasikapriya.",
      },
      {
        title: "Sringara Rasamanjarim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Rasamanjari, the Dikshitar-school equivalent of Rasikapriya — the raga mudra opens the kriti.",
      },
      {
        title: "Kannil Paarvai",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Naan Kadavul", year: 2009 },
        notableRenditions: "Sung by Shreya Ghoshal.",
        trivia:
          "Ilaiyaraaja reached for the 72nd and fiercest melakarta for this haunting song picturised on blind beggars.",
      },
    ],
    trivia: [
      {
        text: "Rasikapriya is the 72nd and last melakarta — the mirror image of Kanakangi, with every swara at its highest position.",
      },
      {
        text: "Graha bhedam on Rasikapriya yields Mayamalavagowla and Simhendramadhyamam.",
        source: "Wikipedia: Rasikapriya",
      },
    ],
  },
] satisfies MelaContent[];
