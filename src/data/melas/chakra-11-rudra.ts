import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 11 — Rudra (the eleven Rudras) · melas 61–66 · R2 G3 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 61,
    name: "Kantamani",
    slug: "kantamani",
    katapayadi: {
      syllables: [
        { syllable: "Kan", consonant: "ka", digit: 1 },
        { syllable: "ta", consonant: "ta", digit: 6 },
      ],
      note: "In the conjunct 'nta', the last consonant — dental ta = 6 — carries the value.",
    },
    aroha: "S R2 G3 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G3 R2 S",
    characteristics: {
      mood: "A bright, major-sounding lower half that clouds over into a dark, brooding upper register.",
    },
    songs: [
      {
        title: "Nada Sukham Taru",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's Tamil cycle covering all 72 melakartas, each kriti carrying the raga's name as a mudra.",
      },
      {
        title: "Sri Sugandhi Kuntalambike",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Dikshitar followed the asampurna mela scheme, where this scale is called Kuntalam rather than Kantamani.",
      },
    ],
    trivia: [
      {
        text: "In the Muthuswami Dikshitar school this mela is known as Kuntalam, its asampurna equivalent.",
        source: "Wikipedia: Kantamani",
      },
      {
        text: "Shifting Kantamani's tonic by graha bhedam yields Manavati, the 5th melakarta.",
        source: "Wikipedia: Kantamani",
      },
    ],
  },
  {
    melaNumber: 62,
    name: "Rishabhapriya",
    slug: "rishabhapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ri", consonant: "ra", digit: 2 },
        { syllable: "sha", consonant: "ssa", digit: 6 },
      ],
      note: "The 'sha' here is retroflex ṣa = 6 (ṛṣabha), not śa = 5.",
    },
    aroha: "S R2 G3 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G3 R2 S",
    characteristics: {
      mood: "An open, whole-tone-tinged scale whose flattened dhaivatam gives the descent a wistful slide.",
    },
    songs: [
      {
        title: "Ghana Naya Desika",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, the Tamil 72-melakarta cycle dedicated to Muruga.",
      },
      {
        title: "Maara Ratipriyam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Ratipriya, the Dikshitar-school equivalent of Rishabhapriya — the raga mudra sits inside the opening words.",
      },
    ],
    trivia: [
      {
        text: "Rishabhapriya and Kokilapriya, related to each other by graha bhedam from the panchamam, are the only melakartas whose scales contain a run of whole tones this long — S R2 G3 M2 and the mirrored descent.",
        source: "Wikipedia: Rishabhapriya",
      },
      {
        text: "Called Ratipriya in the Muthuswami Dikshitar school.",
        source: "Wikipedia: Rishabhapriya",
      },
    ],
  },
  {
    melaNumber: 63,
    name: "Latangi",
    alternateNames: ["Lathangi"],
    slug: "latangi",
    katapayadi: {
      syllables: [
        { syllable: "La", consonant: "la", digit: 3 },
        { syllable: "ta", consonant: "ta", digit: 6 },
      ],
    },
    aroha: "S R2 G3 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G3 R2 S",
    characteristics: {
      mood: "Majestic and devotional, with a poignant ache lent by the lone flat note — the suddha dhaivatam.",
    },
    songs: [
      {
        title: "Marivere Dikkevvaru",
        type: "krithi",
        composer: "Patnam Subramania Iyer",
        language: "Telugu",
        tala: "Khanda Chapu",
        trivia:
          "The signature Latangi kriti — for many concert-goers this piece IS the raga.",
      },
      {
        title: "Aparadhamulanniyu",
        type: "krithi",
        composer: "Patnam Subramania Iyer",
        language: "Telugu",
      },
      {
        title: "Kai Kuda Venume",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Chapu",
        trivia: "The Latangi entry in the Kanda Ganamutham 72-melakarta cycle.",
      },
      {
        title: "Enge Enathu Kavithai",
        type: "film",
        composer: "A. R. Rahman",
        language: "Tamil",
        film: { name: "Kandukondain Kandukondain", year: 2000 },
        notableRenditions: "Sung by K. S. Chithra.",
        trivia: "A rare mainstream film outing for a heavy classical prati-madhyama mela.",
      },
    ],
    trivia: [
      {
        text: "One of the three pillar melas of the Rudra chakra: alongside Vachaspati and Mechakalyani, Latangi is among the few prati-madhyama melakartas regularly chosen as the main raga of a concert.",
      },
      {
        text: "Patnam Subramania Iyer's Marivere Dikkevvaru did much to establish Latangi on the concert platform in the late nineteenth century.",
        source: "sujamusic.wordpress.com/latangi",
      },
    ],
  },
  {
    melaNumber: 64,
    name: "Vachaspati",
    slug: "vachaspati",
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "cha", consonant: "ca", digit: 6 },
      ],
      note: "English 'ch' here is ca = 6 (vācaspati), not cha = 7.",
    },
    aroha: "S R2 G3 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G3 R2 S",
    characteristics: {
      mood: "Broad, sunny and expansive — a major scale with a lifted fourth and a softened seventh.",
    },
    songs: [
      {
        title: "Pahi Jagajjanani",
        type: "krithi",
        composer: "Swati Tirunal",
        language: "Sanskrit",
        trivia: "One of the most performed Vachaspati kritis on the concert stage.",
      },
      {
        title: "Paratpara Parameshwara",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
      },
      {
        title: "Bhushavatim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Bhushavati, the Dikshitar-school equivalent of Vachaspati.",
      },
      {
        title: "Iha Para Sukha",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        trivia: "The Vachaspati entry in the Kanda Ganamutham 72-melakarta cycle.",
      },
      {
        title: "Nikkattuma Pogattuma",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Periya Veetu Pannakkaran", year: 1990 },
        notableRenditions: "Sung by Mano and K. S. Chithra.",
      },
    ],
    trivia: [
      {
        text: "Vachaspati matches the Western 'acoustic' (Lydian dominant) scale — C D E F# G A Bb — and was adopted into Hindustani music as a raga of the same name.",
        source: "Wikipedia: Vachaspati (raga)",
      },
      {
        text: "Graha bhedam on Vachaspati yields three other melakartas: Charukesi, Gourimanohari and Natakapriya.",
        source: "Wikipedia: Vachaspati (raga)",
      },
      {
        text: "Its popular janya Saraswati — home of songs like 'Anuragamule' — carries much of Vachaspati's flavour into lighter concert fare.",
      },
    ],
  },
  {
    melaNumber: 65,
    name: "Mechakalyani",
    alternateNames: ["Kalyani"],
    slug: "mechakalyani",
    katapayadi: {
      syllables: [
        { syllable: "Me", consonant: "ma", digit: 5 },
        { syllable: "cha", consonant: "ca", digit: 6 },
      ],
      note: "English 'ch' here is ca = 6 (mecakalyāṇī), not cha = 7.",
    },
    aroha: "S R2 G3 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G3 R2 S",
    characteristics: {
      jeevaSwaras: ["G3", "N3"],
      timeOfDay: "evening",
      mood: "Auspicious and regal — the quintessential raga of weddings, festivity and grand concert openings.",
    },
    songs: [
      {
        title: "Vanajakshi",
        type: "varnam",
        composer: "Pallavi Gopala Iyer",
        language: "Telugu",
        tala: "Ata",
        trivia: "The celebrated Kalyani ata tala varnam, a rite of passage for advancing students.",
      },
      {
        title: "Nidhi Chala Sukhama",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Misra Chapu",
        trivia:
          "Tyagaraja's famous refusal of royal patronage: 'Is wealth the source of happiness, or the presence of Rama?'",
      },
      {
        title: "Kamalambam Bhajare",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia: "The third avarana of Dikshitar's Kamalamba Navavarana cycle on the Sri Chakra.",
      },
      {
        title: "Himadri Sute",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Rupakam",
      },
      {
        title: "Amma Endrazhaikkatha",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Mannan", year: 1992 },
        trivia: "One of dozens of film hits built on Kalyani — few ragas are as ubiquitous in Indian cinema.",
      },
    ],
    trivia: [
      {
        text: "'Kalyani' means 'she who causes auspicious things' — the raga is considered so auspicious that it opens weddings and is among the first major ragas taught to students. The mela name Mechakalyani exists only to satisfy the katapayadi scheme; everyone calls it Kalyani.",
      },
      {
        text: "Its Hindustani counterpart is raga Yaman (Kalyan thaat), an equally towering raga in the northern system.",
      },
      {
        text: "Kalyani sits in the great graha-bhedam family: shifting its tonic yields Sankarabharanam, Kharaharapriya, Harikambhoji, Natabhairavi and Hanumatodi.",
      },
    ],
  },
  {
    melaNumber: 66,
    name: "Chitrambari",
    slug: "chitrambari",
    katapayadi: {
      syllables: [
        { syllable: "Chi", consonant: "ca", digit: 6 },
        { syllable: "tra", consonant: "ta", digit: 6 },
      ],
      note: "In the conjunct 'tra', tradition counts dental ta = 6 (citra), not ra — ra would decode to 26.",
    },
    aroha: "S R2 G3 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G3 R2 S",
    characteristics: {
      mood: "A Kalyani-like brightness pushed off balance by the vivadi shatsruti dhaivatam.",
    },
    songs: [
      {
        title: "Sama Gana Lola",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Chapu",
        trivia: "The Chitrambari entry in the Kanda Ganamutham 72-melakarta cycle.",
      },
      {
        title: "Ekamranatheshwarena",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed under the asampurna mela name Chaturangini, the Dikshitar-school equivalent of Chitrambari.",
      },
    ],
    trivia: [
      {
        text: "Chitrambari's most famous export is its janya Amritavarshini, the pentatonic 'rain raga' — far better known than its parent mela.",
        source: "Wikipedia: Chitrambari",
      },
      {
        text: "Called Chaturangini in the Muthuswami Dikshitar school.",
        source: "Wikipedia: Chitrambari",
      },
    ],
  },
] satisfies MelaContent[];
