import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 2 — Netra (the two eyes) · melas 7–12 · R1 G2 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 *
 * Hanumatodi (Todi) dominates this chakra's repertoire; melas 7 and 12
 * are vivadi at the dhaivata–nishada end and survive mainly through the
 * 72-mela cycles of Koteeswara Iyer and Dikshitar.
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 7,
    name: "Senavati",
    slug: "senavati",
    katapayadi: {
      syllables: [
        { syllable: "Se", consonant: "sa", digit: 7 },
        { syllable: "na", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G2 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G2 R1 S",
    characteristics: {
      mood: "Todi's lower half capped by the vivadi D1–N1 pair — sombre, with an oddly flattened close to the octave.",
    },
    songs: [
      {
        title: "Vandarul Ni",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Chapu",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's Tamil cycle on Muruga covering all 72 melakartas.",
      },
    ],
    trivia: [
      {
        text: "Senavati shares its first five swaras with Hanumatodi; only the vivadi suddha nishada (N1) separates the two, which is why it is sometimes described as 'Todi with a broken crown'.",
      },
      {
        text: "Dikshitar's asampurna equivalent for mela 7 is Senagrani.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
  },
  {
    melaNumber: 8,
    name: "Hanumatodi",
    alternateNames: ["Todi", "Janatodi"],
    slug: "hanumatodi",
    katapayadi: {
      syllables: [
        { syllable: "Ha", consonant: "ha", digit: 8 },
        { syllable: "nu", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G2 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G2 R1 S",
    characteristics: {
      rasa: ["Karuna", "Bhakti"],
      mood: "Grave and deeply expressive — a heavyweight rakti raga in which nearly every note is carried on gamaka, prized for pathos and devotion.",
      gamakaNotes:
        "Sa and Pa apart, every swara takes oscillation; the gandhara and dhaivata in particular are rendered as slow kampita rather than plain notes.",
    },
    songs: [
      {
        title: "Thaye Yashoda",
        type: "krithi",
        composer: "Oothukkadu Venkata Kavi",
        language: "Tamil",
        tala: "Adi",
        notableRenditions:
          "A concert staple for generations; M.S. Subbulakshmi's rendition is among the most loved.",
        trivia:
          "The gopis' affectionate complaint to Yashoda about baby Krishna's pranks — one of the most popular Tamil kritis in any raga.",
      },
      {
        title: "Koluvamaregada",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "One of Thyagaraja's several majestic Todi kritis, often taken up for elaborate niraval and swara.",
      },
      {
        title: "Kaddanuvariki",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Ninne Nammi Naanu",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Misra Chapu",
        trivia:
          "Syama Sastri's Todi masterpiece addressed to Goddess Kamakshi.",
      },
      {
        title: "Era Napai",
        type: "varnam",
        composer: "Patnam Subramania Iyer",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "The standard Todi Adi-tala varnam with which many concerts and lessons in the raga begin.",
      },
    ],
    trivia: [
      {
        text: "Carnatic Todi corresponds to the Hindustani Bhairavi thaat — not to Hindustani raga Todi, whose Carnatic equivalent is Shubhapantuvarali (mela 45). The shared name is a famous cross-system false friend.",
      },
      {
        text: "Todi is one of the 'ghana-rakti' pillars of the concert stage; it is often said that a musician's depth is measured by their Todi, and full-length ragam-tanam-pallavi expositions in it are common.",
      },
      {
        text: "In Dikshitar's asampurna scheme the mela is called Janatodi; his kritis use that name.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
  },
  {
    melaNumber: 9,
    name: "Dhenuka",
    slug: "dhenuka",
    katapayadi: {
      syllables: [
        { syllable: "Dhe", consonant: "dha", digit: 9 },
        { syllable: "nu", consonant: "na", digit: 0 },
      ],
    },
    aroha: "S R1 G2 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G2 R1 S",
    characteristics: {
      mood: "Todi's colour below with a bright kakali nishada leading tone above — wistful, with an unexpectedly luminous approach to the upper Sa.",
    },
    songs: [
      {
        title: "Teliyaleru Rama",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        notableRenditions:
          "Frequently rendered in concerts; a favourite of M.S. Subbulakshmi and many later artists.",
        trivia:
          "Thyagaraja laments that people go through ritual routine without grasping the true path of bhakti — effectively the raga's signature piece.",
      },
      {
        title: "Karunaikkadale",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Dhenuka is one of the few lower melas with a genuinely popular concert kriti (Teliyaleru Rama), which single-handedly keeps the raga in circulation.",
        source: "thyagaraja-vaibhavam.blogspot.com",
      },
      {
        text: "Dikshitar's asampurna equivalent for mela 9 is Dhunibhinnashadja.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
  },
  {
    melaNumber: 10,
    name: "Natakapriya",
    slug: "natakapriya",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "ta", consonant: "tta", digit: 1 },
      ],
      note: "Nāṭakapriya's 'ta' is retroflex ṭa = 1 (ṭa-varga), not dental ta = 6.",
    },
    aroha: "S R1 G2 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G2 R1 S",
    characteristics: {
      mood: "A soft, non-vivadi scale — Kharaharapriya's contour with a suddha rishabha — melodious yet only occasionally explored on stage.",
    },
    songs: [
      {
        title: "Irangada Sami Natha",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Despite having no vivadi swaras, Natakapriya never built a large repertoire; it differs from Kharaharapriya (mela 22) only in its suddha rishabha.",
      },
      {
        text: "Dikshitar's asampurna equivalent for mela 10 is Natabharanam.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
  },
  {
    melaNumber: 11,
    name: "Kokilapriya",
    slug: "kokilapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ko", consonant: "ka", digit: 1 },
        { syllable: "ki", consonant: "ka", digit: 1 },
      ],
    },
    aroha: "S R1 G2 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G2 R1 S",
    characteristics: {
      mood: "The natural-minor lower half resolving through a major-scale upper half — gentle, faintly hopeful, and rarely heard at length.",
    },
    songs: [
      {
        title: "Sukha Vazhvadaindu",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupakam",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Dikshitar's asampurna equivalent for mela 11 is Kokilaravam.",
        source: "Wikipedia: Asampurna Melakarta",
      },
    ],
  },
  {
    melaNumber: 12,
    name: "Rupavati",
    slug: "rupavati",
    katapayadi: {
      syllables: [
        { syllable: "Ru", consonant: "ra", digit: 2 },
        { syllable: "pa", consonant: "pa", digit: 1 },
      ],
    },
    aroha: "S R1 G2 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G2 R1 S",
    characteristics: {
      mood: "A vivadi mela whose shatsruti dhaivata jams against kakali nishada at the top — bright, strange, and almost never elaborated.",
    },
    songs: [
      {
        title: "Nal Agude Natha",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From the Kanda Ganamutham 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "The D3–N3 pair makes Rupavati vivadi at the upper end; like the other vivadi melas it lives on mainly through the 72-melakarta compositional cycles.",
        source: "carnatica.net: The Melaraga Kritis of Koteeswara Iyer",
      },
    ],
  },
] satisfies MelaContent[];
