import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 8 — Vasu (the eight Vasus) · melas 43–48 · R1 G2 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 *
 * Shubhapantuvarali (45) is the one major concert raga here — the
 * Carnatic face of the Hindustani Todi scale. The rest are rarities
 * carried mainly by Koteeswara Iyer's 72-mela Kanda Ganamutham cycle.
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
    characteristics: {
      mood: "A sombre, rarely heard scale — suddha dhaivata and suddha nishada flatten the upper half into a dark plateau.",
    },
    songs: [
      {
        title: "Viraivagave Vinai Tira",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's Tamil krithi cycle on Muruga covering all 72 melakartas — the mainstay repertoire for rare melas like this one.",
      },
    ],
    trivia: [
      {
        text: "In the Dikshitar (asampurna) scheme the 43rd mela is called Girvani. Muthuswami Dikshitar composed under those older mela names.",
      },
    ],
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
    characteristics: {
      mood: "Shadowed and plaintive — one small step (N2 for N3) away from Shubhapantuvarali's famous pathos.",
    },
    songs: [
      {
        title: "Shen Tiru Velan Padam",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From Kanda Ganamutham, the 72-mela cycle on Muruga.",
      },
    ],
    trivia: [
      {
        text: "The name means 'beloved of emotion' (bhava + priya). Its Dikshitar-school asampurna counterpart is named Bhavani.",
      },
    ],
  },
  {
    melaNumber: 45,
    name: "Shubhapantuvarali",
    alternateNames: ["Subhapantuvarali", "Sivapantuvarali", "Pantuvarali"],
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
    characteristics: {
      rasa: ["karuna", "shoka", "bhakti"],
      mood: "The tradition's great voice of grief and longing — slow, weeping phrases that composers reach for at moments of deepest pathos.",
    },
    songs: [
      {
        title: "Ennalu Urake",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        trivia:
          "'How long must I stay idle?' — Tyagaraja pleading with Rama, a signature of the raga's anguished bhakti.",
      },
      {
        title: "Sri Satyanarayanam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupaka",
        trivia:
          "Dikshitar's raganga krithi for this mela under its asampurna name, Sivapantuvarali.",
      },
      {
        title: "Velanai Vere Gathi",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Misra Chapu",
        trivia: "From Kanda Ganamutham, the 72-mela cycle on Muruga.",
      },
      {
        title: "Vaigaraiyil Vaigai Karaiyil",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Payanangal Mudivathillai", year: 1982 },
        notableRenditions: "Sung by S. P. Balasubrahmanyam",
        trivia:
          "Cited by Charulatha Mani as textbook Shubhapantuvarali — the melody opens strikingly on the dhaivata before settling into the shadja.",
      },
    ],
    trivia: [
      {
        text: "Its scale is the Hindustani Todi thaat — the notes of Miyan ki Todi — though the Hindustani raga is a late-morning melody while the Carnatic mela carries no time restriction.",
        source: "Wikipedia: Shubhapantuvarali",
      },
      {
        text: "Shifting the tonic (graha bhedam) turns Shubhapantuvarali's notes into Chalanata, mela 36.",
        source: "Wikipedia: Shubhapantuvarali",
      },
      {
        text: "Film composers use it almost reflexively for scenes of mourning and separation; Ilaiyaraaja and M. S. Viswanathan both returned to it repeatedly.",
      },
    ],
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
    characteristics: {
      mood: "An uncommon scale with a searching quality — the prati madhyama pulls upward while suddha rishabha keeps tugging the line back down.",
    },
    songs: [
      {
        title: "Antaranga Bhakti",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham; 'inward devotion' — one of the better-known krithis from the cycle's rare-mela stretch.",
      },
    ],
    trivia: [
      {
        text: "The name is usually read as 'guide of the six paths' (shad-vidha-margini). Its Dikshitar-school asampurna counterpart is named Stavarajam.",
      },
    ],
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
    characteristics: {
      mood: "'The golden-limbed one' — a rare scale whose bright D2–N3 upper half glints against a grave lower tetrachord.",
    },
    songs: [
      {
        title: "Iha Para Sukha",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        trivia:
          "From Kanda Ganamutham; prays to Muruga for happiness 'in this world and the next'.",
      },
    ],
    trivia: [
      {
        text: "The name means 'one with golden limbs'. Like most of the Vasu chakra it survives mainly through the 72-mela krithi cycles of Koteeswara Iyer and Balamuralikrishna.",
      },
    ],
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
    characteristics: {
      mood: "'The divine gem' — a vivadi scale whose D3–N3 cluster presses hard against the tara shadja, giving cadences a strange brilliance.",
    },
    songs: [
      {
        title: "Appa Muruga",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From Kanda Ganamutham, the 72-mela cycle on Muruga.",
      },
    ],
    trivia: [
      {
        text: "Divyamani carries the vivadi D3–N3 pair at the top of an otherwise mela-45-like frame. In the Dikshitar (asampurna) scheme the 48th mela is named Jivantika.",
      },
    ],
  },
] satisfies MelaContent[];
