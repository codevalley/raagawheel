import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 10 — Disi (the ten directions) · melas 55–60 · R2 G2 · M2
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 55,
    name: "Shamalangi",
    alternateNames: ["Syamalangi", "Shyamalam", "Shyamala"],
    slug: "shamalangi",
    katapayadi: {
      syllables: [
        { syllable: "Sha", consonant: "sha", digit: 5 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
      note: "Śyāmalāṅgī: the sibilant is śa = 5 (not ṣa = 6).",
    },
    aroha: "S R2 G2 M2 P D1 N1 S'",
    avaroha: "S' N1 D1 P M2 G2 R2 S",
    characteristics: {
      mood: "A shadowy, rarely heard vivadi scale — a minor-tinged lower half that closes on the clashing shuddha dhaivata–nishada pair.",
    },
    songs: [
      {
        title: "Shyamalangi Matangi Namaste",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "Composed in Shyamala, the Dikshitar-school asampurna name for mela 55; a hymn to the goddess Matangi with the raga name in the opening words.",
      },
    ],
    trivia: [
      {
        text: "Shamalangi is a vivadi mela (D1 against N1) and survives in performance almost entirely through the 72-mela cycles of Dikshitar (as Shyamala) and Koteeswara Iyer.",
        source: "medieval.org Dikshitar raga index; Wikipedia: Koteeswara Iyer",
      },
    ],
  },
  {
    melaNumber: 56,
    name: "Shanmukhapriya",
    alternateNames: ["Chamaram"],
    slug: "shanmukhapriya",
    katapayadi: {
      syllables: [
        { syllable: "Sha", consonant: "ssa", digit: 6 },
        { syllable: "nmu", consonant: "ma", digit: 5 },
      ],
      note: "Ṣaṇmukhapriyā: ṣa = 6; in the conjunct 'nmu' the last consonant (ma) counts.",
    },
    aroha: "S R2 G2 M2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M2 G2 R2 S",
    characteristics: {
      rasa: ["Veera", "Bhakti"],
      mood: "Majestic and devotional with a martial edge — the raga of Muruga, equally at home in thunderous krithis and brooding film scores.",
    },
    songs: [
      {
        title: "Siddhi Vinayakam Anisham",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Chamaram, the Dikshitar-school asampurna name for mela 56; one of Dikshitar's best-known Ganesha krithis.",
      },
      {
        title: "Saravanabhava Ennum Thirumandiram",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
        trivia: "On Muruga — 'Shanmukha' (six-faced) is Muruga himself, making the mela's name doubly apt.",
      },
      {
        title: "Sugame Sugam",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "The Shanmukhapriya entry in Kanda Ganamutham, his 72-melakarta cycle on Muruga.",
      },
      {
        title: "Marainthirundhu Paarkum Marmam Enna",
        type: "film",
        composer: "K. V. Mahadevan",
        language: "Tamil",
        film: { name: "Thillana Mohanambal", year: 1968 },
      },
      {
        title: "Thakita Thadhimi",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Telugu",
        film: { name: "Sagara Sangamam", year: 1983 },
        notableRenditions: "Sung by S. P. Balasubrahmanyam; the Tamil version appeared as Salangai Oli.",
      },
    ],
    trivia: [
      {
        text: "Shanmukhapriya means 'beloved of the six-faced one' (Muruga), and the raga is a fixture of Muruga and Devi repertoire — as well as of nagaswaram playing, where its weighty gamakas shine.",
      },
      {
        text: "It is among the most film-used prati-madhyama melas: from 'Marainthirundhu Paarkum' (Thillana Mohanambal) to Ilaiyaraaja's dance showpiece 'Thakita Thadhimi' (Sagara Sangamam).",
        source: "ragawisesongs.blogspot.com: Shanmukhapriya",
      },
    ],
  },
  {
    melaNumber: 57,
    name: "Simhendramadhyamam",
    alternateNames: ["Sumadyuti"],
    slug: "simhendramadhyamam",
    katapayadi: {
      syllables: [
        { syllable: "Si", consonant: "sa", digit: 7 },
        { syllable: "mhe", consonant: "ma", digit: 5 },
      ],
      note: "Traditionally analyzed si = sa = 7, and 'mhe' read as ma = 5 (the ha of the cluster is discounted).",
    },
    aroha: "S R2 G2 M2 P D1 N3 S'",
    avaroha: "S' N3 D1 P M2 G2 R2 S",
    characteristics: {
      rasa: ["Karuna", "Bhakti"],
      mood: "Grand and plaintive at once — a harmonic-minor darkness lifted by the prati madhyama, suited to slow, weighty elaboration.",
    },
    songs: [
      {
        title: "Needu Charanamule",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Misra Chapu",
      },
      {
        title: "Ninne Nammitinayya",
        type: "krithi",
        composer: "Mysore Vasudevachar",
        language: "Telugu",
        tala: "Misra Chapu",
        trivia: "Perhaps the most performed Simhendramadhyamam krithi on today's concert stage.",
      },
      {
        title: "Kamakshi Kamakoti Peethavasini",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupaka",
        trivia:
          "Composed in Sumadyuti, the Dikshitar-school asampurna name for mela 57.",
      },
      {
        title: "Rama Rama Guna Seema",
        type: "krithi",
        composer: "Swati Tirunal",
        language: "Sanskrit",
      },
      {
        title: "Unnaiyallal",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Adi",
        trivia: "From Kanda Ganamutham, his 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "In Western terms the scale is the 'Hungarian minor' (double harmonic minor) — a harmonic minor with a raised fourth — which is why Simhendramadhyamam passages can sound strikingly familiar to Western ears.",
      },
    ],
  },
  {
    melaNumber: 58,
    name: "Hemavati",
    alternateNames: ["Desisimharavam", "Simharavam"],
    slug: "hemavati",
    katapayadi: {
      syllables: [
        { syllable: "He", consonant: "ha", digit: 8 },
        { syllable: "ma", consonant: "ma", digit: 5 },
      ],
    },
    aroha: "S R2 G2 M2 P D2 N2 S'",
    avaroha: "S' N2 D2 P M2 G2 R2 S",
    characteristics: {
      mood: "Mellow and contemplative — a soft minor colour brightened by chatusruti dhaivata, unfolding best in unhurried alapana.",
    },
    songs: [
      {
        title: "Sri Kanthimatim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "On goddess Kanthimati of Tirunelveli, with the raga mudra 'Hemavati' woven into the lyric; the Dikshitar school knows the mela as Simharavam/Desisimharavam.",
      },
      {
        title: "Manathe",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        trivia: "The Hemavati entry in Kanda Ganamutham, his 72-melakarta cycle.",
      },
    ],
    trivia: [
      {
        text: "Graha bhedam (tonic shift) on Hemavati's notes yields four other melakartas — Charukesi, Gourimanohari, Vachaspati and Natakapriya — one of the classic shift-families of the mela scheme.",
        source: "Wikipedia: Hemavati (raga)",
      },
      {
        text: "Dikshitar's 'Sri Kanthimatim' is virtually synonymous with the raga in concerts, its stately Adi (2-kalai) gait defining Hemavati's image.",
      },
    ],
  },
  {
    melaNumber: 59,
    name: "Dharmavati",
    alternateNames: ["Dhamavati"],
    slug: "dharmavati",
    katapayadi: {
      syllables: [
        { syllable: "Dha", consonant: "dha", digit: 9 },
        { syllable: "rma", consonant: "ma", digit: 5 },
      ],
      note: "Dental dha = 9; in the conjunct 'rma' the last consonant (ma) counts.",
    },
    aroha: "S R2 G2 M2 P D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G2 R2 S",
    characteristics: {
      mood: "Sweetly melancholic and romantic — a minor third against a raised fourth and bright leading tone, the colour Hindustani listeners know as Madhuvanti.",
    },
    songs: [
      {
        title: "Parandhamavati Jayati",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupaka",
        trivia:
          "Composed in Dhamavati, the Dikshitar-school asampurna name for mela 59.",
      },
      {
        title: "Meghame Meghame",
        type: "film",
        composer: "Shankar–Ganesh",
        language: "Tamil",
        film: { name: "Palaivana Solai", year: 1981 },
        notableRenditions: "S. Janaki's rendition is regarded as one of her finest film recordings.",
      },
    ],
    trivia: [
      {
        text: "Dharmavati's note-set corresponds to the Hindustani raga Madhuvanti (which omits rishabha and dhaivata in ascent) — a favourite crossover colour for film composers.",
        source: "Wikipedia: Dharmavati",
      },
    ],
  },
  {
    melaNumber: 60,
    name: "Neetimati",
    alternateNames: ["Nitimati", "Nishada"],
    slug: "neetimati",
    katapayadi: {
      syllables: [
        { syllable: "Nee", consonant: "na", digit: 0 },
        { syllable: "ti", consonant: "ta", digit: 6 },
      ],
      note: "Dental ta = 6 (ta-varga), not retroflex ṭa = 1.",
    },
    aroha: "S R2 G2 M2 P D3 N3 S'",
    avaroha: "S' N3 D3 P M2 G2 R2 S",
    characteristics: {
      mood: "A vivadi scale with an unexpectedly genial face — its shatsruti dhaivata glide gives the few songs in it a springy charm.",
    },
    songs: [
      {
        title: "Nishadhadi Deshadhipatinuta",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Misra Chapu",
        trivia:
          "Composed in Nishada, the Dikshitar-school asampurna name for mela 60.",
      },
      {
        title: "Mohanakara Muthukumara",
        type: "krithi",
        composer: "Koteeswara Iyer",
        language: "Tamil",
        tala: "Rupaka",
        notableRenditions:
          "Madurai Mani Iyer made this Kanda Ganamutham krithi a concert favourite.",
      },
    ],
    trivia: [
      {
        text: "Despite being a vivadi mela (D3 against N3), Neetimati has a genuine concert presence thanks to Koteeswara Iyer's 'Mohanakara Muthukumara', popularized by Madurai Mani Iyer.",
        source: "carnatica.net: The Melaraga Kritis of Koteeswara Iyer",
      },
    ],
  },
] satisfies MelaContent[];
