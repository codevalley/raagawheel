import type { JanyaContent } from "@/lib/carnatic/types";

/**
 * Janya batch 5 — Todi/Natabhairavi-group bhashangas, the Mayamalavagowla
 * family, and miscellaneous janyas (melas 8, 15, 16, 17, 20, 36, 53, 59).
 *
 * Janya scales are NOT derivable from the parent mela — every aroha/avaroha
 * here is transcribed from references (Wikipedia raga pages, karnatik.com,
 * Raga Surabhi, sujamusic.wordpress.com). Bhashanga ragas declare their
 * anya swaras; the validator asserts every scale token lies in the parent
 * mela's swaras ∪ anyaSwaras.
 *
 * Nishadantya ragas (Punnagavarali, Nadanamakriya) never touch tara Sa —
 * their range runs mandra nishada to madhya nishada, hence the mandra
 * marks (,) at the phrase edges.
 */
export const janyas: JanyaContent[] = [
  {
    name: "Bhairavi",
    slug: "bhairavi",
    melaNumber: 20,
    // Wikipedia "Bhairavi (Carnatic)": aroha S R2 G2 M1 P D2 N2 S',
    // avaroha S' N2 D1 P M1 G2 R2 S — D2 ascending, D1 descending.
    aroha: "S R2 G2 M1 P D2 N2 S'",
    avaroha: "S' N2 D1 P M1 G2 R2 S",
    anyaSwaras: ["D2"],
    anyaSwaraNote:
      "Parent mela 20 carries suddha dhaivatam (D1); Bhairavi takes chatusruti dhaivatam (D2) in the ascent and reverts to D1 in the descent — the two dhaivatams are what make it bhashanga.",
    characteristics: {
      jeevaSwaras: ["G2", "N2"],
      prayogas: [
        {
          phrase: "S G2 R2 G2 M1 P D2 N2 S'",
          note: "Many schools sing a vakra ascent touching Ga before Ri.",
        },
      ],
      gamakaNotes:
        "The sadharana gandharam and kaisiki nishadam are heavily oscillated; the raga lives in its gamakas far more than in its bare scale.",
      rasa: ["karuna", "bhakti"],
      mood: "A grand, ancient rakti raga of deep pathos and majesty — a mainstay for the central heavyweight piece of a concert.",
    },
    songs: [
      {
        title: "Viriboni",
        type: "varnam",
        composer: "Pacchimiriyam Adiyappayya",
        language: "Telugu",
        tala: "Ata",
        trivia:
          "THE Bhairavi ata tala varnam — for generations the standard concert opener and a rite of passage for students.",
      },
      {
        title: "Kamakshi Amba",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Misra Chapu",
        trivia:
          "Strictly a swarajati, not a kriti — one of Syama Sastri's celebrated three, and the most monumental composition in Bhairavi.",
        searchQueryOverride: "Kamakshi Amba swarajati Bhairavi Syama Sastri",
      },
      {
        title: "Upacharamu Jesevaru",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Balagopala",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Bhairavi is counted among the oldest ragas in continuous use — references go back well over a millennium — and it is entirely unrelated to the Hindustani raga of the same name.",
        source: "Wikipedia: Bhairavi (Carnatic)",
      },
      {
        text: "Its two dhaivatams (D2 up, D1 down) made it the textbook example of a bhashanga raga; older theorists even treated Bhairavi itself as a mela before the 72-mela scheme settled matters.",
        source: "Wikipedia: Bhairavi (Carnatic)",
      },
    ],
  },
  {
    name: "Anandabhairavi",
    alternateNames: ["Ananda Bhairavi"],
    slug: "anandabhairavi",
    melaNumber: 20,
    // Wikipedia "Anandabhairavi": aroha S G2 R2 G2 M1 P D2 P S' (vakra),
    // avaroha S' N2 D2 P M1 G2 R2 S.
    aroha: "S G2 R2 G2 M1 P D2 P S'",
    avaroha: "S' N2 D2 P M1 G2 R2 S",
    anyaSwaras: ["D2", "G3"],
    anyaSwaraNote:
      "Chatusruti dhaivatam (D2) is scalar despite the parent's D1; antara gandharam (G3) appears only in occasional prayogas, never in the scale.",
    characteristics: {
      jeevaSwaras: ["G2", "D2"],
      gamakaNotes:
        "The gandharam takes a gentle, wide oscillation; the raga is sung at an unhurried, rocking gait suited to its lullaby-like character.",
      rasa: ["karuna", "shanta"],
      mood: "Warm, folk-tinged and consoling — a favourite for lullabies, marriage songs and Syama Sastri's most tender kritis.",
    },
    songs: [
      {
        title: "O Jagadamba",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Marivere Gati",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Misra Chapu",
      },
      {
        title: "Tyagaraja Yoga Vaibhavam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia:
          "On Siva as Tyagaraja of Tiruvarur; famed for its gopuccha/srotovaha yati sahitya that grows and shrinks syllable by syllable.",
      },
      {
        title: "Kannalane",
        type: "film",
        composer: "A. R. Rahman",
        language: "Tamil",
        film: { name: "Bombay", year: 1995 },
        trivia:
          "Rahman's melody (Kehna Hi Kya in Hindi) is widely cited as built on Anandabhairavi.",
        searchQueryOverride: "Kannalane Bombay Anandabhairavi",
      },
    ],
    trivia: [
      {
        text: "A bhashanga raga assigned to mela 20 though its scalar dhaivatam is D2 — some theorists have argued for mela 22 on exactly those grounds.",
        source: "Wikipedia: Anandabhairavi",
      },
      {
        text: "Syama Sastri is said to have had a special affinity for Anandabhairavi; tradition holds a dancer's family gifted him exclusive rights to their Anandabhairavi repertoire.",
        source: "sujamusic.wordpress.com: Ananda Bhairavi",
      },
    ],
  },
  {
    name: "Punnagavarali",
    alternateNames: ["Punnaga Varali"],
    slug: "punnagavarali",
    melaNumber: 8,
    // Wikipedia "Punnagavarali": nishadantya — N2, S R1 G2 M1 P D1 N2 /
    // N2 D1 P M1 G2 R1 S N2, — the raga never touches tara Sa.
    aroha: "N2, S R1 G2 M1 P D1 N2",
    avaroha: "N2 D1 P M1 G2 R1 S N2,",
    characteristics: {
      gamakaNotes:
        "Sung in madhyama sruti; phrases coil around the nishadam at both ends of the compass instead of resolving on tara Sa.",
      rasa: ["karuna"],
      mood: "Plaintive and swaying — the snake-charmer's magudi scale, and the sound of the wedding-morning odam.",
    },
    songs: [
      {
        title: "Gandhamu Puyyaruga",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "From the dance-drama Nauka Charitram, where the gopis anoint Krishna with sandal paste.",
      },
      {
        title: "Kanakasaila Viharini",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Sanskrit",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "A nishadantya janya of Hanumatodi: both aroha and avaroha begin and end on nishadam, so the raga's whole range sits between mandra Ni and madhya Ni.",
        source: "Wikipedia: Punnagavarali",
      },
      {
        text: "'Naga' (snake) hides in the name — snake charmers' pungi tunes follow this scale, and the odam sung at South Indian wedding muhurtams is traditionally in Punnagavarali.",
        source: "Wikipedia: Punnagavarali",
      },
    ],
  },
  {
    name: "Nadanamakriya",
    alternateNames: ["Nadanamakriya"],
    slug: "nadanamakriya",
    melaNumber: 15,
    // carnaticmusicexams.in / sujamusic: nishadantya janya of 15 —
    // N3, S R1 G3 M1 P D1 N3 / N3 D1 P M1 G3 R1 S N3,
    aroha: "N3, S R1 G3 M1 P D1 N3",
    avaroha: "N3 D1 P M1 G3 R1 S N3,",
    characteristics: {
      gamakaNotes:
        "Effectively Mayamalavagowla capped below tara Sa and sung in madhyama sruti; the kakali nishadam is the constant point of rest.",
      rasa: ["karuna", "bhakti"],
      mood: "Grave and inward — a raga of lament and quiet devotion, common in padams and temple singing.",
    },
    songs: [
      {
        title: "Deva Deva Kalayami Te",
        type: "krithi",
        composer: "Swati Tirunal",
        language: "Sanskrit",
        tala: "Rupakam",
      },
      {
        title: "Bhajasva Sri Tripurasundari",
        type: "krithi",
        composer: "Oothukkadu Venkata Kavi",
        language: "Sanskrit",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Like Punnagavarali, a nishadantya raga: its compass runs mandra nishada to madhya nishada, and performers take madhyama sruti so the capped range still sounds complete.",
        source: "carnaticmusicexams.in: Nadanamakriya",
      },
    ],
  },
  {
    name: "Bowli",
    alternateNames: ["Bauli"],
    slug: "bowli",
    melaNumber: 15,
    // Wikipedia "Bowli": S R1 G3 P D1 S' / S' N3 D1 P G3 R1 S —
    // Ni omitted ascending, appearing only as a brief N3 in descent.
    aroha: "S R1 G3 P D1 S'",
    avaroha: "S' N3 D1 P G3 R1 S",
    characteristics: {
      timeOfDay: "morning",
      rasa: ["bhakti", "shanta"],
      mood: "A luminous early-morning raga — austere pentatonic ascent, with the fleeting kakali nishadam in descent adding a devotional glow.",
    },
    songs: [
      {
        title: "Sriman Narayana",
        type: "devotional",
        composer: "Annamacharya",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "The best-loved Bowli piece — an Annamacharya sankeertana on Lord Venkateswara, popularised in modern concert versions.",
      },
      {
        title: "Melukovayya",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Jhampa",
        trivia:
          "A suprabhatam-style waking song from Thyagaraja's utsava sampradaya kritis.",
        searchQueryOverride: "Melukovayya Thyagaraja Bowli",
      },
    ],
    trivia: [
      {
        text: "Audava–shadava janya of Mayamalavagowla: nishadam is skipped going up and appears only as a passing N3 coming down.",
        source: "Wikipedia: Bowli",
      },
    ],
  },
  {
    name: "Malahari",
    slug: "malahari",
    melaNumber: 15,
    // Wikipedia "Malahari": S R1 M1 P D1 S' / S' D1 P M1 G3 R1 S —
    // Ga and Ni dropped ascending, Ni dropped descending.
    aroha: "S R1 M1 P D1 S'",
    avaroha: "S' D1 P M1 G3 R1 S",
    characteristics: {
      timeOfDay: "morning",
      rasa: ["shanta"],
      mood: "Simple, stately and auspicious — the raga in which virtually every Carnatic student sings their first geethams.",
    },
    songs: [
      {
        title: "Sri Gananatha",
        type: "devotional",
        composer: "Purandara Dasa",
        language: "Kannada",
        tala: "Rupakam",
        trivia:
          "The first of the pillari geethams ('Lambodara Lakumikara') with which formal Carnatic training traditionally begins.",
        searchQueryOverride: "Sri Gananatha pillari geetham Malahari",
      },
      {
        title: "Kunda Gaura",
        type: "devotional",
        composer: "Purandara Dasa",
        language: "Kannada",
        tala: "Triputa",
        trivia: "Another of the Malahari pillari geethams on Siva.",
        searchQueryOverride: "Kunda Gaura geetham Malahari",
      },
      {
        title: "Panchamatanga Mukha Ganapatina",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
      },
    ],
    trivia: [
      {
        text: "Purandara Dasa chose Malahari for the pillari geethams that begin every student's training, making this modest audava–shadava janya of mela 15 perhaps the most-sung raga among beginners.",
        source: "Wikipedia: Malahari",
      },
    ],
  },
  {
    name: "Saveri",
    slug: "saveri",
    melaNumber: 15,
    // Wikipedia "Saveri": S R1 M1 P D1 S' / S' N3 D1 P M1 G3 R1 S.
    aroha: "S R1 M1 P D1 S'",
    avaroha: "S' N3 D1 P M1 G3 R1 S",
    characteristics: {
      jeevaSwaras: ["R1", "D1"],
      gamakaNotes:
        "Ri and Dha are sung with slow, deep oscillations; the audava ascent against the full descent gives Saveri its trademark ache.",
      rasa: ["karuna", "bhakti"],
      mood: "Poignant and pleading — a major rakti raga whose plaintive Ri instantly signals supplication.",
    },
    songs: [
      {
        title: "Rama Bana",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Durusuga Krpajuchi",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Sankari Sankuru Chandramukhi",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Sanskrit",
        tala: "Adi",
        searchQueryOverride: "Sankari Sankuru Saveri Syama Sastri",
      },
      {
        title: "Muruga Muruga",
        type: "devotional",
        composer: "Periyasaamy Thooran",
        language: "Tamil",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Audava–sampurna janya of Mayamalavagowla: the ascent skips Ga and Ni, and the raga's identity rests on the heavily-shaken suddha rishabham and dhaivatam rather than on scale shape.",
        source: "Wikipedia: Saveri",
      },
    ],
  },
  {
    name: "Vasanta",
    alternateNames: ["Vasantha"],
    slug: "vasanta",
    melaNumber: 17,
    // Wikipedia "Vasantha (raga)": janya of 17 Suryakantam —
    // S G3 M1 D2 N3 S' / S' N3 D2 M1 G3 R1 S. Pa is omitted throughout;
    // R1 appears only in descent.
    aroha: "S G3 M1 D2 N3 S'",
    avaroha: "S' N3 D2 M1 G3 R1 S",
    characteristics: {
      rasa: ["sringara", "bhakti"],
      mood: "Bright and festive with an undertow of longing — an ancient panchama-varja raga associated with spring.",
    },
    songs: [
      {
        title: "Seetamma Mayamma",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Rupakam",
      },
      {
        title: "Ramachandram Bhavayami",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
      },
      {
        title: "Natanam Adinar",
        type: "krithi",
        composer: "Gopalakrishna Bharathi",
        language: "Tamil",
        tala: "Adi",
        trivia: "On Nataraja's cosmic dance, from the Nandanar Charitram tradition.",
      },
    ],
    trivia: [
      {
        text: "Vasanta's mela attribution is contested: with D2 it sits under 17 Suryakantam (the modern assignment), but older texts give a D1 version under mela 15 — the dhaivatam is the whole dispute.",
        source: "Wikipedia: Vasantha (raga)",
      },
      {
        text: "The name means 'spring'; the raga is counted among the oldest in the tradition and shares little beyond the name with Hindustani Basant.",
        source: "sujamusic.wordpress.com: Vasanta",
      },
    ],
  },
  {
    name: "Lalita",
    alternateNames: ["Lalitha"],
    slug: "lalita",
    melaNumber: 15,
    // Wikipedia "Lalita (raga)": janya of 15 — S R1 G3 M1 D1 N3 S' /
    // S' N3 D1 M1 G3 R1 S. Panchamam omitted throughout.
    aroha: "S R1 G3 M1 D1 N3 S'",
    avaroha: "S' N3 D1 M1 G3 R1 S",
    characteristics: {
      jeevaSwaras: ["M1", "D1"],
      rasa: ["bhakti", "karuna"],
      mood: "Serene and devotional — the missing panchamam leaves a spacious, floating quality prized in slow, contemplative kritis.",
    },
    songs: [
      {
        title: "Hiranmayeem Lakshmim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia:
          "On Goddess Lakshmi — among the most performed of all Dikshitar kritis.",
      },
      {
        title: "Nannu Brovu Lalita",
        type: "krithi",
        composer: "Syama Sastri",
        language: "Telugu",
        tala: "Misra Chapu",
        trivia:
          "Syama Sastri works the raga mudra 'Lalita' into the opening address to the Goddess.",
      },
    ],
    trivia: [
      {
        text: "Lalita and Vasanta are close cousins separated chiefly by the dhaivatam (Lalita's D1 vs modern Vasanta's D2) and Lalita's retention of R1 in the ascent.",
        source: "Wikipedia: Lalita (raga)",
      },
    ],
  },
  {
    name: "Malayamarutam",
    alternateNames: ["Malayamarutham"],
    slug: "malayamarutam",
    melaNumber: 16,
    // Wikipedia "Malayamarutam": janya of 16 Chakravakam —
    // S R1 G3 P D2 N2 S' / S' N2 D2 P G3 R1 S. Madhyamam omitted.
    aroha: "S R1 G3 P D2 N2 S'",
    avaroha: "S' N2 D2 P G3 R1 S",
    characteristics: {
      rasa: ["bhakti"],
      mood: "Fresh and breezy — the name means 'mountain wind', and the Ma-less symmetric scale moves with an airy lift.",
    },
    songs: [
      {
        title: "Manasa Etulortune",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Rupakam",
        trivia: "The raga's defining kriti, in which Thyagaraja chides his own mind.",
      },
      {
        title: "Karpaga Manohara",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
        tala: "Khanda Chapu",
        trivia: "On Kapaleeswarar of Mylapore.",
      },
    ],
    trivia: [
      {
        text: "A symmetric shadava–shadava janya of Chakravakam omitting madhyamam entirely; its name evokes the breeze from the Malaya mountains.",
        source: "Wikipedia: Malayamarutam",
      },
    ],
  },
  {
    name: "Hamsanandi",
    slug: "hamsanandi",
    melaNumber: 53,
    // karnatik.com / saadhakam: janya of 53 Gamanashrama —
    // S R1 G3 M2 D2 N3 S' / S' N3 D2 M2 G3 R1 S. Panchamam omitted.
    aroha: "S R1 G3 M2 D2 N3 S'",
    avaroha: "S' N3 D2 M2 G3 R1 S",
    characteristics: {
      timeOfDay: "night",
      rasa: ["sringara", "bhakti"],
      mood: "Luminous and yearning — a Pa-less scale whose prati madhyamam gives it an ethereal, upward-straining character.",
    },
    songs: [
      {
        title: "Pavana Guru",
        type: "krithi",
        composer: "Lalitha Dasar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia: "The signature Hamsanandi piece, a staple concert tukkada.",
        searchQueryOverride: "Pavana Guru Hamsanandi",
      },
      {
        title: "Needu Mahima",
        type: "krithi",
        composer: "Harikesanallur Muthiah Bhagavathar",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Srinivasa Thiruvengadamudaiyan",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Shadava–shadava janya of Gamanashrama omitting panchamam; its Hindustani counterpart is raga Sohini, sung in the same late-night register.",
        source: "saadhakam.blogspot.com: Hamsanandi",
      },
    ],
  },
  {
    name: "Ranjani",
    slug: "ranjani",
    melaNumber: 59,
    // Wikipedia "Ranjani": janya of 59 Dharmavati —
    // S R2 G2 M2 D2 S' / S' N3 D2 M2 G2 S. Pa omitted; N3 in descent only.
    aroha: "S R2 G2 M2 D2 S'",
    avaroha: "S' N3 D2 M2 G2 S",
    characteristics: {
      prayogas: [
        {
          phrase: "D2 M2 G2 S R2 S",
          note: "The characteristic vakra turn skirting Ri on the way down.",
        },
      ],
      mood: "Delicate and haunting — the Ga-to-Ma2 leap over the missing Pa gives Ranjani a strange, glinting beauty.",
    },
    songs: [
      {
        title: "Durmargachara",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Rupakam",
        trivia:
          "Thyagaraja refuses to praise venal men — the kriti that effectively defines Ranjani in concert.",
      },
      {
        title: "Ranjani Niranjani",
        type: "krithi",
        composer: "Tanjore Sankara Iyer",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "A ragamalika threading Ranjani, Sriranjani, Megharanjani and Janaranjani; it opens in Ranjani.",
        searchQueryOverride: "Ranjani Niranjani ragamalika Tanjore Sankara Iyer",
      },
    ],
    trivia: [
      {
        text: "A panchama-varja janya of Dharmavati: audava ascending, vakra shadava descending, with kakali nishadam only in the descent — the awkward G2–M2 leap keeps it a connoisseur's raga.",
        source: "Wikipedia: Ranjani",
      },
    ],
  },
  {
    name: "Nata",
    alternateNames: ["Nattai", "Naata"],
    slug: "nata",
    melaNumber: 36,
    // Wikipedia "Nata (raga)": janya of 36 Chalanata —
    // S R3 G3 M1 P D3 N3 S' / S' N3 P M1 R3 S. Ga and Dha drop out of
    // the descent (some schools sing further vakra turns like G3 M1 R3 S).
    aroha: "S R3 G3 M1 P D3 N3 S'",
    avaroha: "S' N3 P M1 R3 S",
    characteristics: {
      jeevaSwaras: ["R3", "N3"],
      gamakaNotes:
        "The vivadi shatsruti rishabham is delivered with force rather than disguise — Nata's martial brilliance depends on it.",
      rasa: ["veera"],
      mood: "Bold, bright and auspicious — the traditional curtain-raiser, sounded at the start of concerts and temple rituals alike.",
    },
    songs: [
      {
        title: "Jagadananda Karaka",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Sanskrit",
        tala: "Adi",
        trivia:
          "The first of the five Pancharatna kritis, stringing 108 names of Rama through Nata.",
      },
      {
        title: "Mahaganapathim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
        trivia: "On Ganesha — among the most frequently sung invocations in all of Carnatic music.",
      },
      {
        title: "Swaminatha Paripalaya",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Nata so dominates its parent that concerts almost never feature Chalanata itself; by convention Nata opens auspicious occasions, and the Thyagaraja Pancharatnas begin with it.",
        source: "Wikipedia: Nata (raga)",
      },
      {
        text: "One of the ghana panchaka — the five 'weighty' ragas (with Gowla, Arabhi, Varali, Sri) featured in tanam playing and the Pancharatna set.",
        source: "Wikipedia: Nata (raga)",
      },
    ],
  },
] satisfies JanyaContent[];
