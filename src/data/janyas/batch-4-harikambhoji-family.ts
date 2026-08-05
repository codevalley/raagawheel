import type { JanyaContent } from "@/lib/carnatic/types";

/**
 * Janya batch 4 — the Harikambhoji (28) family, plus two neighbours that
 * belong with this repertoire circle: Sindhu Bhairavi (a bhashanga
 * conventionally assigned to mela 10 Natakapriya) and Nalinakanti
 * (mela 27 Sarasangi).
 *
 * Janya scales are NOT derivable from the parent mela; every aroha/avaroha
 * here is transcribed from references (Wikipedia raga pages, karnatik.com,
 * ragasurabhi.com, guruguha.org) — vakra sancharas are written token by
 * token as the sources give them. Bhashanga ragas declare their anya
 * swaras; the validator checks every scale token against the parent
 * mela's swaras plus the declared anya swaras.
 *
 * Mela 28 Harikambhoji (S R2 G3 M1 P D2 N2) is the great "janya factory"
 * of Carnatic music — Kambhoji, Khamas, Surutti, Kedaragowla, Natakurinji,
 * Yadukula Kambhoji, Sahana and the imported Tilang all live here, and
 * between them they carry a large share of the mainstream concert and
 * dance repertoire.
 */
export const janyas: JanyaContent[] = [
  {
    // Scale: Wikipedia "Kambhoji"; kakali nishada prayoga: guruguha.org,
    // "The Mystery about Kambhoji".
    name: "Kambhoji",
    alternateNames: ["Kambodhi", "Kamboji"],
    slug: "kambhoji",
    melaNumber: 28,
    aroha: "S R2 G3 M1 P D2 S'",
    avaroha: "S' N2 D2 P M1 G3 R2 S",
    anyaSwaras: ["N3"],
    anyaSwaraNote:
      "Kakali nishadam appears only in special prayogas such as S' N3 P D2 S' — the raga's signature bhashanga touch; the scalar nishada is N2.",
    characteristics: {
      prayogas: [
        {
          phrase: "S' N3 P D2 S'",
          note: "The celebrated kakali-nishada sanchara that stamps a phrase as Kambhoji.",
        },
      ],
      mood: "Majestic and expansive — a grand, unhurried raga that anchors main-piece slots in concerts and mangalams alike.",
      timeOfDay: "evening",
    },
    songs: [
      {
        title: "O Rangasayee",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Composed on Ranganatha of Srirangam; a towering vilamba-kala kriti and a favourite of Madurai Mani Iyer and Semmangudi.",
      },
      {
        title: "Sri Subrahmanyaya Namaste",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Dikshitar's grand Kambhoji canvas on Subrahmanya; its descending phrases show the kakali nishada usage his school favoured.",
      },
      {
        title: "Evari Mata",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        searchQueryOverride: "Evari Mata Kambhoji Thyagaraja",
      },
    ],
    trivia: [
      {
        text: "Kambhoji predates the melakarta scheme — older treatises treat it as a raganga (parent) in its own right, and the mela was named Harikambhoji after it.",
        source: "guruguha.org: The Mystery about Kambhoji",
      },
      {
        text: "Shadava–sampurna: nishada is skipped on the way up and both nishadas are heard — kaisiki in the scale, kakali in special prayogas — making it a bhashanga raga.",
        source: "Wikipedia: Kambhoji",
      },
    ],
  },
  {
    // Scale: Wikipedia "Khamas (raga)": vakra-shadava aroha, sampurna avaroha;
    // N3 as occasional anya swara in later/javali usage.
    name: "Khamas",
    alternateNames: ["Kamas", "Kamaas"],
    slug: "khamas",
    melaNumber: 28,
    aroha: "S M1 G3 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G3 R2 S",
    anyaSwaras: ["N3"],
    anyaSwaraNote:
      "Kakali nishadam entered through javali and light-classical usage, in touches around tara shadja (N3 S'); the scale itself carries only N2.",
    characteristics: {
      mood: "Sweet, flirtatious and light on its feet — the natural home of javalis and sringara pieces, yet weighty enough for major kritis.",
    },
    songs: [
      {
        title: "Brochevarevarura",
        type: "krithi",
        composer: "Mysore Vasudevachar",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Perhaps the most performed Khamas kriti; carried into film memory by its use in 'Sankarabharanam' (1980).",
      },
      {
        title: "Sujana Jeevana",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Rupakam",
      },
      {
        title: "Santana Gopalakrishnam Upasmahe",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        searchQueryOverride: "Santana Gopalakrishnam Khamas Dikshitar",
      },
    ],
    trivia: [
      {
        text: "Rishabha is skipped going up and gandhara is reached vakra (S M1 G3 M1) — that curling opening is the raga's fingerprint.",
        source: "Wikipedia: Khamas (raga)",
      },
      {
        text: "Cousin to Hindustani Khamaj: same parent scale colour, but the Carnatic raga has its own vakra grammar and prayogas.",
      },
    ],
  },
  {
    // Scale: Wikipedia "Surutti" — 7-note vakra aroha, 9-note vakra avaroha.
    name: "Surutti",
    alternateNames: ["Suruti", "Surati"],
    slug: "surutti",
    melaNumber: 28,
    aroha: "S R2 M1 P N2 D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G3 P M1 R2 S",
    characteristics: {
      mood: "A gentle, rounded evening raga of quiet auspiciousness — gandhara is only brushed in descent, and the nishada-dhaivata curl gives it its glow.",
      timeOfDay: "evening",
    },
    songs: [
      {
        title: "Angarakam Ashrayamyaham",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "The Navagraha kriti for Mars (Angaraka) — one of Dikshitar's nine planetary masterpieces.",
      },
      {
        title: "Geetarthamu",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Geetarthamu Surutti Thyagaraja",
      },
    ],
    trivia: [
      {
        text: "Subbarama Dikshitar classed Surutti as bhashanga; modern practice treats it as an upanga raga of 28 whose character lives entirely in its vakra sancharas.",
        source: "Wikipedia: Surutti",
      },
      {
        text: "Its pitch set matches the Western Mixolydian mode, but the zig-zag note order keeps it unmistakably Carnatic.",
        source: "Wikipedia: Surutti",
      },
    ],
  },
  {
    // Scale: Wikipedia "Kedaragaula" — audava aroha, sampurna avaroha.
    name: "Kedaragowla",
    alternateNames: ["Kedaragaula"],
    slug: "kedaragowla",
    melaNumber: 28,
    aroha: "S R2 M1 P N2 S'",
    avaroha: "S' N2 D2 P M1 G3 R2 S",
    characteristics: {
      mood: "Serene and devotional; the plain audava ascent opens into a full, tender descent — a morning raga beloved of padam and kriti composers alike.",
      timeOfDay: "morning",
    },
    songs: [
      {
        title: "Tulasi Bilva",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Tulasi Bilva Kedaragowla Thyagaraja",
      },
      {
        title: "Venugana Loluni",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Venugana Loluni Kedaragowla",
      },
      {
        title: "Saraguna Palimpa",
        type: "krithi",
        composer: "Poochi (Ramnad) Srinivasa Iyengar",
        language: "Telugu",
        trivia:
          "The composer's best-known kriti and the standard concert vehicle for Kedaragowla.",
      },
    ],
    trivia: [
      {
        text: "Shares its audava ascent (S R2 M1 P N2 S') with Surutti and Madhyamavati-family ragas; identity comes from the sampurna descent touching G3.",
        source: "Wikipedia: Kedaragaula",
      },
      {
        text: "In older raga classifications Kedaragaula itself named the mela that later became Harikambhoji.",
      },
    ],
  },
  {
    // Scale: Wikipedia "Nattakurinji" — one of several traditional variants;
    // both arcs are vakra and dhaivata-nishada interplay defines the raga.
    name: "Natakurinji",
    alternateNames: ["Nattakurinji", "Natakuranji"],
    slug: "natakurinji",
    melaNumber: 28,
    aroha: "S R2 G3 M1 N2 D2 N2 P D2 N2 S'",
    avaroha: "S' N2 D2 M1 G3 M1 P G3 R2 S",
    characteristics: {
      mood: "Warm, swaying and slightly wistful; the dhaivata–nishada oscillation and panchama-shy phrases give it a rocking, raga-of-the-dusk feel.",
      timeOfDay: "evening",
    },
    songs: [
      {
        title: "Manasu Vishaya",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Manasu Vishaya Natakurinji Thyagaraja",
      },
      {
        title: "Budham Ashrayami",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia: "The Navagraha kriti for Mercury (Budha).",
      },
    ],
    trivia: [
      {
        text: "Tradition records more than one accepted aroha/avaroha for Natakurinji — lakshana texts list up to three variants; the raga is learnt from phrases, not the scale.",
        source: "Wikipedia: Nattakurinji",
      },
      {
        text: "Considered auspicious for evening singing; a fixture of Tamil wedding-concert repertoire.",
        source: "Wikipedia: Nattakurinji",
      },
    ],
  },
  {
    // Scale: Wikipedia "Yadukulakamboji" — audava aroha, sampurna avaroha.
    name: "Yadukula Kambhoji",
    alternateNames: ["Yadukulakamboji", "Erukalakambhoji"],
    slug: "yadukula-kambhoji",
    melaNumber: 28,
    aroha: "S R2 M1 P D2 S'",
    avaroha: "S' N2 D2 P M1 G3 R2 S",
    characteristics: {
      mood: "Deeply lyrical and folk-tinged — slow glides between the notes matter more than the notes; a raga of pathos and intimacy.",
    },
    songs: [
      {
        title: "Hecharikaga Rara",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Hecharikaga Rara Yadukula Kambhoji",
      },
      {
        title: "Divakara Tanujam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia: "The Navagraha kriti for Saturn (Shani), son of the Sun god.",
      },
    ],
    trivia: [
      {
        text: "Audava–sampurna sibling of Kambhoji: the same descent, but an ascent that skips gandhara and nishada entirely.",
        source: "Wikipedia: Yadukulakamboji",
      },
      {
        text: "Strongly associated with folk and lullaby idioms; many Divyanama and utsava sampradaya pieces sit in this raga.",
      },
    ],
  },
  {
    // Scale: Wikipedia "Sahana (raga)" — ubhaya-vakra sampurna.
    name: "Sahana",
    alternateNames: ["Shahana"],
    slug: "sahana",
    melaNumber: 28,
    aroha: "S R2 G3 M1 P M1 D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G3 M1 R2 G3 R2 S",
    characteristics: {
      prayogas: [
        {
          phrase: "M1 G3 M1 R2 G3 R2 S",
          note: "The sliding vakra descent to shadja — Sahana's most recognisable turn.",
        },
      ],
      mood: "Tender and pleading, with a built-in catch in the voice; the curling R2-G3 descent phrases carry an ache no straight scale could.",
      rasa: ["karuna", "sringara"],
    },
    songs: [
      {
        title: "Giripai Nelakonna",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Vandanamu Raghunandana",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "A gentle salutation kriti whose opening phrase is many students' first taste of Sahana.",
      },
      {
        title: "Karunimpa Idi Manchi Samayamu",
        type: "varnam",
        composer: "Tiruvottiyur Tyagayya",
        language: "Telugu",
        tala: "Adi",
        trivia: "The standard Sahana varnam taught across schools.",
      },
    ],
    trivia: [
      {
        text: "Ubhaya-vakra sampurna: both ascent and descent zig-zag, so Sahana is defined almost wholly by prayoga rather than scale.",
        source: "Wikipedia: Sahana (raga)",
      },
      {
        text: "Traditionally held to evoke karuna rasa; a favourite for viruttams and padams of longing.",
      },
    ],
  },
  {
    // Scale: karnatik.com / poornimanayar.co.uk — Carnatic adoption of the
    // Hindustani Khamaj-thaat raga; N3 in ascent, N2 in descent.
    name: "Tilang",
    alternateNames: ["Thilang", "Tilanga"],
    slug: "tilang",
    melaNumber: 28,
    aroha: "S G3 M1 P N3 S'",
    avaroha: "S' N2 P M1 G3 S",
    anyaSwaras: ["N3"],
    anyaSwaraNote:
      "Kakali nishadam (N3) is integral to the ascent — the raga uses both nishadas, N3 going up and the mela's own N2 coming down.",
    characteristics: {
      mood: "Bright, devotional lightness — a borrowed Hindustani colour that Carnatic musicians reserve for thillanas, bhajans and concert-enders.",
    },
    songs: [
      {
        title: "Thillana (Tilang)",
        type: "thillana",
        composer: "Lalgudi Jayaraman",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "One of Lalgudi's most loved thillanas, its sahitya addressed to Muruga; a staple of Bharatanatyam recitals.",
        searchQueryOverride: "Lalgudi Jayaraman Tilang thillana",
      },
      {
        title: "Prabho Ganapathe",
        type: "bhajan",
        composer: "Traditional",
        language: "Sanskrit",
        searchQueryOverride: "Prabho Ganapathe Tilang bhajan",
      },
    ],
    trivia: [
      {
        text: "A desiya (imported) raga from the Hindustani Khamaj thaat, adopted into Carnatic practice as a bhashanga janya of Harikambhoji.",
        source: "poornimanayar.co.uk: Raga Tilang",
      },
      {
        text: "Audava both ways with no rishabha or dhaivata; the two nishadas passing each other in opposite directions are the raga's whole story.",
      },
    ],
  },
  {
    // Scale: Wikipedia "Sindhu Bhairavi (raga)". Conventionally assigned to
    // mela 10 Natakapriya (S R1 G2 M1 P D2 N2); the scale's R2 and D1 are
    // anya to that mela, and practice ranges over all twelve swaras.
    name: "Sindhu Bhairavi",
    alternateNames: ["Sindhubhairavi"],
    slug: "sindhu-bhairavi",
    melaNumber: 10,
    aroha: "S R2 G2 M1 G2 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G2 R1 S",
    anyaSwaras: ["R2", "D1"],
    anyaSwaraNote:
      "Relative to Natakapriya, R2 (ascent) and D1 are anya; in practice this famously permissive bhashanga raga admits all twelve swaras as ornamental touches.",
    characteristics: {
      mood: "Soulful and unbuttoned — the raga of abhangs, bhajans and concert finales, where pathos and sweetness mix freely outside strict mela discipline.",
    },
    songs: [
      {
        title: "Venkatachala Nilayam",
        type: "devotional",
        composer: "Purandara Dasa",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "The Dasa sahitya piece most identified with Sindhu Bhairavi in the modern concert tukkada slot.",
      },
      {
        title: "Manadhirkugandhadhu",
        type: "krithi",
        composer: "Tanjavur Sankara Iyer",
        language: "Tamil",
        searchQueryOverride: "Manadhirkugandhadhu Sindhu Bhairavi",
      },
      {
        title: "Thanni Thotti Thedi Vandha",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Sindhu Bhairavi", year: 1985 },
        notableRenditions: "K. J. Yesudas",
        trivia:
          "From the film named after the raga itself; Ilaiyaraaja's score for it won the National Award.",
      },
    ],
    trivia: [
      {
        text: "The mela assignment is a convention, not a derivation: sources place it under 10 (Natakapriya), while others argue for 8 (Hanumatodi) or 20 (Natabhairavi) since both rishabhas are used.",
        source: "Wikipedia: Sindhu Bhairavi (raga)",
      },
      {
        text: "Counterpart of the Hindustani Bhairavi — 'the queen of the morning' there, but sung at any hour and almost always last in a Carnatic concert.",
      },
    ],
  },
  {
    // Scale: ragasurabhi.com / atyutka.com — janya of 27 Sarasangi
    // (S R2 G3 M1 P D1 N3); vakra audava aroha, audava avaroha, no dhaivata.
    name: "Nalinakanti",
    alternateNames: ["Nalinakanthi"],
    slug: "nalinakanti",
    melaNumber: 27,
    aroha: "S G3 R2 M1 P N3 S'",
    avaroha: "S' N3 P M1 G3 R2 S",
    characteristics: {
      prayogas: [
        {
          phrase: "S G3 R2 M1 P N3 S'",
          note: "The vakra opening S G3 R2 announces the raga in a single sweep.",
        },
      ],
      mood: "Fresh, sparkling and compact — a 20th-century concert favourite for brisk early-slot kritis.",
    },
    songs: [
      {
        title: "Manavyalakincharadate",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Desadi",
        trivia:
          "Effectively the raga's foundation document — nearly every Nalinakanti performance orbits this one Thyagaraja kriti.",
      },
      {
        title: "Thillana (Nalinakanti)",
        type: "thillana",
        composer: "Mysore T. Chowdiah",
        language: "Telugu",
        tala: "Adi",
        searchQueryOverride: "Chowdiah Nalinakanti thillana",
      },
    ],
    trivia: [
      {
        text: "Janya of mela 27 Sarasangi; dhaivata is dropped entirely and the ascent takes the vakra turn S G3 R2 M1.",
        source: "ragasurabhi.com: Raga Nalinakanthi",
      },
      {
        text: "With kakali nishada (N3) and no dhaivata, its glitter sits close to Kedaram and Hamsadhwani territory, yet the G3-R2 twist keeps it distinct.",
      },
    ],
  },
] satisfies JanyaContent[];
