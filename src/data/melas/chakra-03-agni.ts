import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 3 — Agni (the three fires) · melas 13–18 · R1 G3 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 13,
    name: "Gayakapriya",
    slug: "gayakapriya",
    katapayadi: {
      syllables: [
        { syllable: "Ga", consonant: "ga", digit: 3 },
        { syllable: "ya", consonant: "ya", digit: 1 },
      ],
    },
    aroha: "S R1 G3 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G3 R1 S",
    characteristics: {
      mood: "A stark, rarely heard scale whose bright antara gandhara sits over a darkened upper half.",
    },
    songs: [
      {
        title: "Nada Nilai",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        trivia:
          "From Kanda Ganamutham, Koteeswara Iyer's cycle of Tamil krithis on Muruga covering all 72 melakartas.",
      },
      {
        title: "Ramachandra Bhaktam Bhaja Manasa",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Dikshitar composed in the asampurna equivalent of this mela, which his school calls Geyahejjajji.",
      },
    ],
    trivia: [
      {
        text: "In the Muthuswami Dikshitar school this mela position is known as Geyahejjajji, an asampurna (non-linear) scale rather than the straight sampurna Gayakapriya.",
        source: "Sangeetha Sampradaya Pradarshini tradition; medieval.org Dikshitar catalogue",
      },
      {
        text: "Gayakapriya has almost no concert presence; it survives mainly through the complete-melakarta projects of Koteeswara Iyer and the Dikshitar school.",
      },
    ],
  },
  {
    melaNumber: 14,
    name: "Vakulabharanam",
    slug: "vakulabharanam",
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "ku", consonant: "ka", digit: 1 },
      ],
    },
    aroha: "S R1 G3 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G3 R1 S",
    characteristics: {
      mood: "An exotic, plaintive colour familiar to Western ears as the Phrygian dominant sound of flamenco and Middle Eastern music.",
    },
    songs: [
      {
        title: "E Ramuni Nammitino",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Nambinen Aiyya",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From Kanda Ganamutham, his 72-melakarta cycle on Muruga.",
      },
      {
        title: "Prasanna Venkateswaram Bhajare",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Dikshitar's school calls this mela position Vativasantabhairavi, its asampurna form.",
      },
    ],
    trivia: [
      {
        text: "Its swara set matches the Phrygian dominant scale — the sound of the Arabic Hijaz maqam and flamenco — and it is close to the Hindustani raga Basant Mukhari.",
      },
      {
        text: "In the Dikshitar school the 14th mela is the asampurna Vativasantabhairavi.",
        source: "medieval.org Dikshitar catalogue",
      },
    ],
  },
  {
    melaNumber: 15,
    name: "Mayamalavagowla",
    alternateNames: ["Mayamalavagaula", "Mayamalavagowlai"],
    slug: "mayamalavagowla",
    katapayadi: {
      syllables: [
        { syllable: "Ma", consonant: "ma", digit: 5 },
        { syllable: "ya", consonant: "ya", digit: 1 },
      ],
    },
    aroha: "S R1 G3 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G3 R1 S",
    characteristics: {
      timeOfDay: "morning",
      rasa: ["Bhakti", "Karuna", "Shanta"],
      mood: "Serene and devotional — the sound of dawn practice sessions in every Carnatic household.",
    },
    songs: [
      {
        title: "Sri Nathadi Guruguho Jayati Jayati",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "Traditionally held to be Dikshitar's very first composition, created at Tiruttani after his spiritual initiation.",
      },
      {
        title: "Tulasi Dalamulache",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Vidulaku Mrokkeda",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        trivia: "A salutation to musicians and the masters of nada.",
      },
      {
        title: "Deva Deva Kalayamite",
        type: "krithi",
        composer: "Swati Tirunal",
        language: "Sanskrit",
        notableRenditions: "A staple of M.S. Subbulakshmi's concerts.",
      },
      {
        title: "Poongathave Thaazh Thiravai",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Nizhalgal", year: 1980 },
      },
    ],
    trivia: [
      {
        text: "This is the first raga every Carnatic student learns: Purandara Dasa set the beginner exercises (sarali and janta varisai, alankaras) and the first geethams in it, a pedagogy still followed five centuries later.",
      },
      {
        text: "The scale is symmetric — two identical tetrachords (S R1 G3 M1 and P D1 N3 S') — which is exactly why it suits beginners: the hand and voice repeat the same pattern in both halves.",
      },
      {
        text: "Its Hindustani counterpart is raga Bhairav, and in Western terms it is the double harmonic major scale.",
      },
    ],
  },
  {
    melaNumber: 16,
    name: "Chakravakam",
    slug: "chakravakam",
    katapayadi: {
      syllables: [
        { syllable: "Cha", consonant: "ca", digit: 6 },
        { syllable: "kra", consonant: "ka", digit: 1 },
      ],
      note: "English 'Ch' here is ca = 6. In the conjunct 'kra', tradition counts ka = 1 (not the cluster-final ra), giving 16.",
    },
    aroha: "S R1 G3 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G3 R1 S",
    characteristics: {
      rasa: ["Karuna", "Bhakti"],
      mood: "Warm and gently melancholic — a pleading, early-morning tenderness beloved of film composers.",
    },
    songs: [
      {
        title: "Etula Brotuvo",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Sugunamule",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Gajananayutam Ganesvaram",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Vegavahini, the Dikshitar school's asampurna name for this mela.",
      },
      {
        title: "Albela Sajan Aayo Ri",
        type: "film",
        composer: "Ismail Darbar",
        language: "Hindi",
        film: { name: "Hum Dil De Chuke Sanam", year: 1999 },
        trivia:
          "Strictly in Ahir Bhairav — the Hindustani twin of Chakravakam — and based on a traditional bandish.",
      },
    ],
    trivia: [
      {
        text: "Chakravakam's Hindustani equivalent is the popular morning raga Ahir Bhairav, which has carried this scale into countless Hindi film songs.",
      },
      {
        text: "The Dikshitar school knows the 16th mela as Toyavegavahini (Vegavahini), an asampurna scale.",
        source: "medieval.org Dikshitar catalogue",
      },
      {
        text: "The raga is named for the chakravaka bird of Sanskrit poetry, whose pairs are said to be separated at nightfall and call to each other until dawn — a fitting image for its yearning character.",
      },
    ],
  },
  {
    melaNumber: 17,
    name: "Suryakantam",
    slug: "suryakantam",
    katapayadi: {
      syllables: [
        { syllable: "Su", consonant: "sa", digit: 7 },
        { syllable: "rya", consonant: "ya", digit: 1 },
      ],
      note: "In the conjunct 'rya', the last consonant (ya) carries the value.",
    },
    aroha: "S R1 G3 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G3 R1 S",
    characteristics: {
      mood: "Bright and affectionate — Mayamalavagowla's sunnier sibling, with the chatusruti dhaivata lifting the upper half.",
    },
    songs: [
      {
        title: "Muddu Momu Elagu",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        notableRenditions:
          "A concert favourite; memorable recordings by M.S. Subbulakshmi and Madurai Mani Iyer.",
      },
      {
        title: "Chayavatim Anandavallim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Chayavati, the Dikshitar school's asampurna name for the 17th mela, with the raga name woven into the lyric.",
      },
    ],
    trivia: [
      {
        text: "Suryakantam differs from Mayamalavagowla by a single swara — chatusruti dhaivata (D2) in place of suddha dhaivata — which is enough to trade its dawn solemnity for brightness.",
      },
      {
        text: "Tyagaraja's Muddu Momu Elagu carries almost the entire concert presence of this mela on its own.",
      },
    ],
  },
  {
    melaNumber: 18,
    name: "Hatakambari",
    slug: "hatakambari",
    katapayadi: {
      syllables: [
        { syllable: "Ha", consonant: "ha", digit: 8 },
        { syllable: "ta", consonant: "tta", digit: 1 },
      ],
      note: "Haṭakāmbari: retroflex ṭa = 1 (ṭa-varga), not dental ta = 6.",
    },
    aroha: "S R1 G3 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G3 R1 S",
    characteristics: {
      mood: "An austere vivadi scale — the shatsruti dhaivata crowding kakali nishada gives its upper reaches a strange, glinting edge.",
    },
    songs: [
      {
        title: "Alagade",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "From Kanda Ganamutham, his cycle of Tamil krithis covering all 72 melakartas.",
      },
      {
        title: "Naraharim Ashrayami Satatam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Jayasuddhamalavi, the Dikshitar school's asampurna name for the 18th mela.",
      },
    ],
    trivia: [
      {
        text: "Hatakambari is a vivadi mela: shatsruti dhaivata (D3) and kakali nishada (N3) sit a semitone apart, a 'dissonant' pairing that keeps the raga on the rarefied edge of the repertoire.",
      },
    ],
  },
] satisfies MelaContent[];
