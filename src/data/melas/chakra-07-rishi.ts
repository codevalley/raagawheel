import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 7 — Rishi (the seven sages) · melas 37–42 · R1 G1 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 *
 * This chakra is all-vivadi (R1+G1 makes the chromatic S–r–g cluster),
 * so most of these melas live almost entirely in the Koteeswara Iyer /
 * Dikshitar-school repertoire. Jhalavarali is the exception: its vakra
 * janya Varali is a ghana raga of the first rank.
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
    characteristics: {
      mood: "A stark, austere vivadi scale — chromatic at the bottom, bare at the top — heard almost only in scholarly full-melakarta repertoire.",
    },
    songs: [
      {
        title: "Ganamudham",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's cycle of Tamil krithis on Muruga covering all 72 melakartas — for many vivadi melas like Salagam it is virtually the only concert piece.",
      },
    ],
    trivia: [
      {
        text: "In the Dikshitar (asampurna) tradition this mela slot is called Sauviram; Muthuswami Dikshitar composed under those older mela names rather than the modern sampurna ones.",
      },
      {
        text: "Like every mela of the Rishi chakra, Salagam yields no other melakarta under graha bhedam — the chromatic R1–G1 cluster with prati madhyama has no rotational twin.",
        source: "Wikipedia: Salagam",
      },
    ],
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
    characteristics: {
      mood: "A deep, murky vivadi scale whose name — 'ocean of water' — suits its dark lower-register colour.",
    },
    songs: [
      {
        title: "Kanaka Mayura",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, the 72-mela Tamil krithi cycle on Muruga; 'kanaka mayura' invokes Muruga's golden peacock.",
      },
    ],
    trivia: [
      {
        text: "The name means 'ocean of water' (jala + arnava). A rare vivadi mela, kept alive chiefly by the 72-melakarta cycles of Koteeswara Iyer, and of Balamuralikrishna after him.",
      },
    ],
  },
  {
    melaNumber: 39,
    name: "Jhalavarali",
    slug: "jhalavarali",
    alternateNames: ["Dhalivarali", "Varali (janya form)"],
    katapayadi: {
      syllables: [
        { syllable: "Jha", consonant: "jha", digit: 9 },
        { syllable: "la", consonant: "la", digit: 3 },
      ],
    },
    aroha: "S R1 G1 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G1 R1 S",
    characteristics: {
      mood: "Grave and intense; through its janya Varali this scale carries some of the weightiest, most gamaka-laden music in the tradition.",
      rasa: ["karuna", "bhakti"],
      prayogas: [
        {
          phrase: "S G1 R1 G1 M2 P",
          note: "The vakra opening of janya Varali — the form in which this scale is almost always actually sung.",
        },
      ],
    },
    songs: [
      {
        title: "Kana Kana Ruchira",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "The fourth of Tyagaraja's Ghana Raga Pancharatnas, in Varali — the vakra janya through which mela 39 is really known.",
      },
      {
        title: "Mamava Meenakshi",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Misra Chapu",
        trivia:
          "In Varali; a Madurai Meenakshi krithi. Dikshitar's school files this scale under the asampurna name Dhalivarali.",
      },
      {
        title: "Seshachala Nayakam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupaka",
        trivia: "In Varali, on Venkateswara of Tirupati.",
      },
    ],
    trivia: [
      {
        text: "Varali is one of the five ghana ragas (Nata, Gaula, Arabhi, Varali, Sri) honoured in Tyagaraja's Pancharatna krithis — remarkable prestige for a scale from the all-vivadi Rishi chakra.",
      },
      {
        text: "A famous superstition holds that a guru who teaches Varali directly to a disciple will fall out with them — students are traditionally expected to pick it up by listening.",
      },
      {
        text: "Jhalavarali yields no other melakarta under graha bhedam, a property it shares with the whole Rishi chakra.",
        source: "Wikipedia: Jhalavarali",
      },
    ],
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
    characteristics: {
      mood: "A soft-edged member of the vivadi chakra — the chatusruti dhaivata and kaisiki nishada smooth the upper half against the chromatic bottom.",
    },
    songs: [
      {
        title: "Sami Ide Nalla Samayam",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        trivia: "From Kanda Ganamutham, the 72-mela cycle on Muruga.",
      },
    ],
    trivia: [
      {
        text: "The name means 'fresh butter'. In the Dikshitar (asampurna) scheme the 40th mela is called Nabhomani, 'jewel of the sky'.",
      },
    ],
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
    characteristics: {
      mood: "A bright-topped vivadi scale — kakali nishada leans hungrily into the tara shadja over the dark chromatic base.",
    },
    songs: [
      {
        title: "Anjaade",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Misra Chapu",
        trivia:
          "From Kanda Ganamutham; 'fear not' — a reassurance addressed to the composer's own heart, apt for so forbidding a scale.",
      },
    ],
    trivia: [
      {
        text: "The name means 'the purifying one' (from pavana). Essentially a scholar's mela, sung when a full 72-melakarta cycle demands it.",
      },
    ],
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
    characteristics: {
      mood: "One of the most extreme scales in the system — chromatic clusters at both ends give it a strange, glittering severity.",
    },
    songs: [
      {
        title: "Sadananda",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        trivia: "From Kanda Ganamutham, the 72-mela cycle on Muruga.",
      },
    ],
    trivia: [
      {
        text: "Raghupriya ('beloved of Raghu', i.e. Rama) is doubly vivadi: R1–G1 at the bottom AND D3–N3 at the top, so both tetrachords carry a chromatic three-semitone cluster.",
      },
      {
        text: "The Dikshitar-school asampurna counterpart of mela 42 is named Ravikriya.",
      },
    ],
  },
] satisfies MelaContent[];
