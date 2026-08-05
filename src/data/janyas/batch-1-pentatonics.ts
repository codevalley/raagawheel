import type { JanyaContent } from "@/lib/carnatic/types";

/**
 * Janya batch 1 — the famous pentatonics (audava–audava janyas).
 *
 * Janya scales are NOT derivable from the parent mela; every aroha/avaroha
 * here is transcribed from references (Wikipedia raga pages, karnatik.com,
 * ragasurabhi.com) rather than computed. The validator only asserts that
 * every scale token lies within the parent mela's swaras ∪ anyaSwaras.
 *
 * Parent-mela attributions follow modern concert convention. Several of
 * these scales fit more than one mela (a pentatonic omitting Ma fits both
 * suddha- and prati-madhyama parents); contested attributions are noted
 * in trivia rather than silently resolved.
 *
 * None of the ragas in this batch is bhashanga — no anyaSwaras anywhere.
 */
export const janyas: JanyaContent[] = [
  {
    name: "Mohanam",
    alternateNames: ["Mohana"],
    slug: "mohanam",
    melaNumber: 28, // Harikambhoji — conventional; see trivia on the 28/65 question
    aroha: "S R2 G3 P D2 S'",
    avaroha: "S' D2 P G3 R2 S",
    characteristics: {
      jeevaSwaras: ["G3", "D2"],
      mood: "Bright, majestic and instantly singable — the major pentatonic of Carnatic music, equally at home in a weighty alapana and a film melody.",
      rasa: ["shringara", "bhakti"],
    },
    songs: [
      {
        title: "Ninnukori",
        type: "varnam",
        composer: "Ramnad (Poochi) Srinivasa Iyengar",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "The standard Adi tala varnam in Mohanam, a near-universal early lesson and concert opener.",
        searchQueryOverride: "Ninnukori varnam Mohanam Adi tala",
      },
      {
        title: "Nannu Palimpa",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Said to have been sung as Thyagaraja beheld a procession of Rama's idol; a stately, unhurried Mohanam.",
      },
      {
        title: "Mohana Rama",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "Carries the raga's name punningly into the deity's: the 'enchanting' Rama.",
      },
      {
        title: "Kapali",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
        tala: "Adi",
        trivia: "Papanasam Sivan's celebrated Tamil kriti on Shiva of Mylapore.",
      },
      {
        title: "Ninnukori Varnam",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Agni Natchathiram", year: 1988 },
        trivia:
          "Ilaiyaraaja's dance number built on Mohanam, its title a wink at the classical varnam of the same opening.",
        searchQueryOverride: "Ninnukori Varnam Agni Natchathiram song",
      },
    ],
    trivia: [
      {
        text: "Mohanam's scale — the anhemitonic major pentatonic — appears worldwide: Bhoopali/Bhup in Hindustani music, and cognate scales in Chinese and Japanese traditions.",
        source: "Wikipedia: Mohanam",
      },
      {
        text: "With no madhyama in the scale, Mohanam fits melas 28 (Harikambhoji) and 65 (Mechakalyani) equally; convention assigns it to 28.",
        source: "Wikipedia: Mohanam",
      },
    ],
  },
  {
    name: "Hamsadhwani",
    alternateNames: ["Hamsadhvani", "Hansadhwani"],
    slug: "hamsadhwani",
    melaNumber: 29, // Dheerasankarabharanam
    aroha: "S R2 G3 P N3 S'",
    avaroha: "S' N3 P G3 R2 S",
    characteristics: {
      jeevaSwaras: ["G3", "N3"],
      mood: "Auspicious and energetic — the archetypal concert-opening raga, its kakali nishada giving the scale a bright upward pull.",
      rasa: ["veera", "bhakti"],
    },
    songs: [
      {
        title: "Vatapi Ganapatim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "On Ganesha of Vatapi; arguably the most frequently performed kriti in all of Carnatic music.",
      },
      {
        title: "Jalajakshi",
        type: "varnam",
        composer: "Manambuchavadi Venkatasubbaiyer",
        language: "Telugu",
        tala: "Adi",
        trivia: "The standard Hamsadhwani Adi tala varnam.",
        searchQueryOverride: "Jalajakshi varnam Hamsadhwani",
      },
      {
        title: "Raghunayaka",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Hamsadhwani was created by Ramaswami Dikshitar (father of Muthuswami Dikshitar) in the late 18th century — a rare raga with a known inventor.",
        source: "Wikipedia: Hamsadhwani",
      },
      {
        text: "It crossed into Hindustani music in the 20th century, notably through Ustad Amir Khan's khayal renditions.",
        source: "Wikipedia: Hamsadhwani",
      },
    ],
  },
  {
    name: "Suddha Saveri",
    alternateNames: ["Shuddha Saveri"],
    slug: "suddha-saveri",
    melaNumber: 29, // Dheerasankarabharanam — conventional; fits 28 too (no Ga, no Ni)
    aroha: "S R2 M1 P D2 S'",
    avaroha: "S' D2 P M1 R2 S",
    characteristics: {
      mood: "Serene and open — a symmetric pentatonic with neither gandhara nor nishada, often sung in the morning.",
      timeOfDay: "morning",
    },
    songs: [
      {
        title: "Darini Telusukonti",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "Thyagaraja's best-known Suddha Saveri kriti — 'I have found the path'.",
      },
      {
        title: "Sri Venkatagirisham Alokaye",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "On Venkateswara of Tirupati; the Dikshitar school names this scale Devakriya rather than Suddha Saveri.",
      },
    ],
    trivia: [
      {
        text: "Omitting both Ga and Ni, the scale fits melas 28 and 29 alike; modern practice assigns it to 29 (Sankarabharanam).",
        source: "Wikipedia: Shuddha Saveri",
      },
      {
        text: "In the Muthuswami Dikshitar tradition this raga is called Devakriya, while 'Suddha Saveri' there denotes a different scale — a classic naming tangle between the schools.",
        source: "Wikipedia: Shuddha Saveri",
      },
      {
        text: "Its Hindustani equivalent is Durga, one of the most popular pentatonic raags of the north.",
        source: "Wikipedia: Shuddha Saveri",
      },
    ],
  },
  {
    name: "Hindolam",
    alternateNames: ["Hindola"],
    slug: "hindolam",
    melaNumber: 20, // Natabhairavi
    aroha: "S G2 M1 D1 N2 S'",
    avaroha: "S' N2 D1 M1 G2 S",
    characteristics: {
      jeevaSwaras: ["G2", "D1"],
      mood: "Deep, meditative and immediately recognizable — a sa-less-feeling swing between gandhara and dhaivata with no Ri or Pa at all.",
      rasa: ["bhakti", "karuna"],
    },
    songs: [
      {
        title: "Samajavaragamana",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "One of the ghana-popular Thyagaraja kritis on Rama, and the default introduction to Hindolam.",
      },
      {
        title: "Neerajakshi Kamakshi",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia: "Dikshitar's kriti on Kamakshi of Kanchipuram.",
      },
      {
        title: "Maamavatu Sri Saraswati",
        type: "krithi",
        composer: "Mysore Vasudevachar",
        language: "Sanskrit",
        tala: "Adi",
        trivia: "A prayer to Saraswati that has become a staple teaching piece in Hindolam.",
      },
      {
        title: "Man Tarpat Hari Darshan Ko Aaj",
        type: "film",
        composer: "Naushad",
        language: "Hindi",
        film: { name: "Baiju Bawra", year: 1952 },
        trivia:
          "Mohammed Rafi's classic is set in Malkauns, the Hindustani twin of Hindolam.",
        searchQueryOverride: "Man Tarpat Hari Darshan Baiju Bawra",
      },
    ],
    trivia: [
      {
        text: "Hindolam omits both rishabha and panchama; its Hindustani equivalent is the venerable midnight raag Malkauns.",
        source: "Wikipedia: Hindolam",
      },
      {
        text: "Despite the shared name, Carnatic Hindolam is unrelated to the Hindustani raag Hindol, which is a different scale altogether.",
        source: "Wikipedia: Hindolam",
      },
      {
        text: "With no Ri and no Pa, the scale also fits mela 8 (Hanumatodi), and some texts list Hindolam there; the conventional modern attribution is mela 20 (Natabhairavi).",
        source: "Wikipedia: Natabhairavi",
      },
    ],
  },
  {
    name: "Madhyamavati",
    slug: "madhyamavati",
    melaNumber: 22, // Kharaharapriya
    aroha: "S R2 M1 P N2 S'",
    avaroha: "S' N2 P M1 R2 S",
    characteristics: {
      jeevaSwaras: ["R2", "P"],
      mood: "Cool, auspicious and settling — the raga of benedictions, traditionally sung at the close of a concert.",
      rasa: ["shanta", "bhakti"],
    },
    songs: [
      {
        title: "Palinchu Kamakshi",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Adi",
        trivia: "Syama Sastri's plea to Kamakshi, among the raga's weightiest kritis.",
      },
      {
        title: "Vinayakuni Valenu Brovave",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Dharmasamvardhani",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia: "On the goddess of Tiruvaiyaru, Thyagaraja's own town.",
      },
      {
        title: "Adivo Alladivo",
        type: "devotional",
        composer: "Annamacharya",
        language: "Telugu",
        trivia:
          "A 15th-century Annamacharya sankirtana on Tirumala, popularized in the 20th century in a Madhyamavati setting.",
        searchQueryOverride: "Adivo Alladivo Annamacharya Madhyamavati",
      },
    ],
    trivia: [
      {
        text: "Madhyamavati is considered so auspicious that concerts conventionally end with it (or at least a snippet of it) as a mangalam, believed to absolve errors in what was sung before.",
        source: "Wikipedia: Madhyamavati",
      },
      {
        text: "Its Hindustani counterpart is Madhmad Sarang; the same pentatonic frame also underlies Megh.",
        source: "Wikipedia: Madhyamavati",
      },
    ],
  },
  {
    name: "Suddha Dhanyasi",
    alternateNames: ["Shuddha Dhanyasi", "Udayaravichandrika"],
    slug: "suddha-dhanyasi",
    melaNumber: 22, // Kharaharapriya — upanga janya per modern convention
    aroha: "S G2 M1 P N2 S'",
    avaroha: "S' N2 P M1 G2 S",
    characteristics: {
      jeevaSwaras: ["G2", "N2"],
      mood: "Poised between pathos and brightness — a minor-pentatonic glow that works in all three octaves.",
      rasa: ["karuna", "bhakti"],
    },
    songs: [
      {
        title: "Entha Nerchina",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "'However much one learns...' — Thyagaraja on the limits of mere erudition.",
      },
      {
        title: "Subrahmanyena Rakshitoham",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Sung under the Dikshitar-school name Udayaravichandrika, which shares this raga's notes.",
      },
      {
        title: "Himagiri Thanaye",
        type: "krithi",
        composer: "Harikesanallur Muthiah Bhagavathar",
        language: "Sanskrit",
        tala: "Adi",
        trivia: "A hugely popular composition on Devi, often one of a student's first kritis in this raga.",
      },
    ],
    trivia: [
      {
        text: "Suddha Dhanyasi is the Carnatic form of the world's most widespread minor pentatonic; Dhani is its Hindustani cousin.",
        source: "Wikipedia: Udayaravichandrika",
      },
      {
        text: "Udayaravichandrika of the Dikshitar tradition uses the same notes; the two names are treated as near-synonyms today, though older texts distinguish their handling.",
        source: "Wikipedia: Udayaravichandrika",
      },
    ],
  },
  {
    name: "Abhogi",
    slug: "abhogi",
    melaNumber: 22, // Kharaharapriya
    aroha: "S R2 G2 M1 D2 S'",
    avaroha: "S' D2 M1 G2 R2 S",
    characteristics: {
      jeevaSwaras: ["G2", "D2"],
      mood: "Gentle and lyrical — a panchama-less pentatonic whose sweetness made it a favorite for varnams and pallavis.",
      rasa: ["karuna", "shringara"],
    },
    songs: [
      {
        title: "Evvari Bodhana",
        type: "varnam",
        composer: "Patnam Subramania Iyer",
        language: "Telugu",
        tala: "Adi",
        trivia: "The classic Abhogi tana varnam, an early staple for every student.",
        searchQueryOverride: "Evvari bodhana varnam Abhogi",
      },
      {
        title: "Manasu Nilpa",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia: "'Without the strength to still the mind...' — Thyagaraja in confessional mode.",
      },
    ],
    trivia: [
      {
        text: "Abhogi omits panchama and nishada; the identical scale was borrowed into Hindustani music as Abhogi Kanada.",
        source: "Wikipedia: Abhogi",
      },
    ],
  },
  {
    name: "Sivaranjani",
    alternateNames: ["Shivaranjani", "Shivranjani"],
    slug: "sivaranjani",
    melaNumber: 22, // Kharaharapriya
    aroha: "S R2 G2 P D2 S'",
    avaroha: "S' D2 P G2 R2 S",
    characteristics: {
      jeevaSwaras: ["G2"],
      mood: "Mohanam with a shadow — swapping in the sadharana gandhara turns the bright major pentatonic into an emblem of longing and pathos.",
      rasa: ["karuna"],
    },
    songs: [
      {
        title: "Jane Kahan Gaye Woh Din",
        type: "film",
        composer: "Shankar–Jaikishan",
        language: "Hindi",
        film: { name: "Mera Naam Joker", year: 1970 },
        trivia:
          "Mukesh's lament for Raj Kapoor's clown, often cited as the definitive Shivranjani film song.",
      },
      {
        title: "Mere Naina Sawan Bhadon",
        type: "film",
        composer: "R. D. Burman",
        language: "Hindi",
        film: { name: "Mehbooba", year: 1976 },
        trivia:
          "Recorded by both Kishore Kumar and Lata Mangeshkar; R. D. Burman's haunting reincarnation theme in Shivranjani.",
      },
    ],
    trivia: [
      {
        text: "Sivaranjani is structurally Mohanam with G2 in place of G3 — a single semitone that flips the raga's entire emotional register.",
        source: "Wikipedia: Shivaranjani",
      },
      {
        text: "The raga thrives mostly in Hindustani and film music; its Carnatic concert presence is comparatively recent and light-classical in flavor.",
        source: "Wikipedia: Shivaranjani",
      },
    ],
  },
  {
    name: "Revati",
    alternateNames: ["Revathi"],
    slug: "revati",
    melaNumber: 2, // Ratnangi
    aroha: "S R1 M1 P N2 S'",
    avaroha: "S' N2 P M1 R1 S",
    characteristics: {
      jeevaSwaras: ["R1", "N2"],
      mood: "Chant-like and austere — the suddha rishabha against kaisiki nishada evokes Vedic recitation and a spacious, devotional calm.",
      rasa: ["bhakti", "shanta"],
    },
    songs: [
      {
        title: "Nanati Baduku",
        type: "devotional",
        composer: "Annamacharya",
        language: "Telugu",
        trivia:
          "Annamacharya's meditation on life's transience, set in Revati in the 20th century and now inseparable from the raga.",
        searchQueryOverride: "Nanati Baduku Annamacharya Revati",
      },
      {
        title: "Bho Shambho",
        type: "devotional",
        composer: "Swami Dayananda Saraswati",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "A modern composition on Shiva that became a concert and dance favorite, popularized by Maharajapuram Santhanam.",
      },
      {
        title: "Mahadeva Siva Shambho",
        type: "krithi",
        composer: "Tanjavur Sankara Iyer",
        language: "Sanskrit",
        trivia: "One of the best-known 20th-century kritis composed directly in Revati.",
      },
      {
        title: "Thillana in Revati",
        type: "thillana",
        composer: "Lalgudi Jayaraman",
        language: "Telugu",
        trivia: "A signature Lalgudi thillana, ubiquitous on the Bharatanatyam stage.",
        searchQueryOverride: "Lalgudi Jayaraman Revati thillana",
      },
    ],
    trivia: [
      {
        text: "Revati's repertoire is almost entirely 20th-century — the raga entered the concert mainstream through modern compositions and tunings rather than the trinity's kritis.",
        source: "sujamusic.wordpress.com: Revati",
      },
      {
        text: "Its Hindustani equivalent is raag Bairagi (Bairagi Bhairav), popularized by Pandit Ravi Shankar.",
        source: "Wikipedia: Revati (raga)",
      },
    ],
  },
  {
    name: "Amritavarshini",
    alternateNames: ["Amrutavarshini"],
    slug: "amritavarshini",
    melaNumber: 66, // Chitrambari
    aroha: "S G3 M2 P N3 S'",
    avaroha: "S' N3 P M2 G3 S",
    characteristics: {
      jeevaSwaras: ["M2", "N3"],
      mood: "Shimmering and rain-laden — the prati madhyama and kakali nishada give this pentatonic an electric, monsoon-sky brilliance.",
      rasa: ["adbhuta", "bhakti"],
    },
    songs: [
      {
        title: "Anandamritakarshini",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "The raga's defining kriti; legend holds that when Dikshitar sang the phrase 'varshaya varshaya' at drought-struck Ettayapuram, rain fell.",
      },
      {
        title: "Sudhamayee Sudhanidhe",
        type: "krithi",
        composer: "Harikesanallur Muthiah Bhagavathar",
        language: "Sanskrit",
        trivia: "A sparkling 20th-century kriti that has become the raga's other concert staple.",
      },
      {
        title: "Azhagana Ratchashiye",
        type: "film",
        composer: "A. R. Rahman",
        language: "Tamil",
        film: { name: "Mudhalvan", year: 1999 },
        trivia: "A. R. Rahman's melody built on Amritavarshini's rain-bright scale.",
        searchQueryOverride: "Azhagana Ratchashiye Mudhalvan song",
      },
    ],
    trivia: [
      {
        text: "The name means 'she who showers nectar'; the raga is popularly credited with the power to bring rain, an association cemented by the Dikshitar–Ettayapuram legend.",
        source: "Wikipedia: Amritavarshini",
      },
      {
        text: "With no Ri and no Dha, the scale fits both melas 66 (Chitrambari) and 65 (Mechakalyani); it is conventionally listed under 66.",
        source: "Wikipedia: Amritavarshini",
      },
    ],
  },
  {
    name: "Valaji",
    alternateNames: ["Valachi", "Valaci"],
    slug: "valaji",
    melaNumber: 16, // Chakravakam — some texts list 28 instead; see trivia
    aroha: "S G3 P D2 N2 S'",
    avaroha: "S' N2 D2 P G3 S",
    characteristics: {
      mood: "Sleek and songful — leaping straight from Sa to the antara gandhara, then gliding through Dha and the kaisiki nishada; a modern concert favorite for brisk, sweet pieces.",
    },
    songs: [
      {
        title: "Chalamu Seyanela",
        type: "varnam",
        composer: "Lalgudi Jayaraman",
        language: "Telugu",
        tala: "Adi",
        trivia: "Lalgudi's varnam in praise of Muruga, the piece by which most students meet Valaji.",
        searchQueryOverride: "Chalamu Seyanela Valaji varnam Lalgudi",
      },
      {
        title: "Jalandhara Supitasthe",
        type: "krithi",
        composer: "Harikesanallur Muthiah Bhagavathar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia: "One of the few classical kritis composed directly in this sparsely-populated raga.",
      },
    ],
    trivia: [
      {
        text: "Valaji contains no Ri and no Ma; because its five notes also sit inside Harikambhoji, sources split between mela 16 (Chakravakam) and mela 28 as its parent — 16 is the more common modern listing.",
        source: "Wikipedia: Valaji",
      },
      {
        text: "The scale matches the Hindustani (originally Carnatic-borrowed) raag Kalavati.",
        source: "Wikipedia: Valaji",
      },
    ],
  },
] satisfies JanyaContent[];
