import type { MelaContent } from "@/lib/carnatic/types";

/**
 * Chakra 4 — Veda (the four Vedas) · melas 19–24 · R2 G2 · M1
 *
 * Aroha/avaroha are transcribed from the standard melakarta chart; the
 * validation suite asserts they equal swarasForMela(n) — a deliberate
 * double-entry check. Katapayadi syllables are hand-authored; the
 * validator re-derives each digit and the decoded mela number.
 */
export const melas: MelaContent[] = [
  {
    melaNumber: 19,
    name: "Jhankaradhwani",
    slug: "jhankaradhwani",
    katapayadi: {
      syllables: [
        { syllable: "Jha", consonant: "jha", digit: 9 },
        { syllable: "nka", consonant: "ka", digit: 1 },
      ],
      note: "In the conjunct 'ṅka', the last consonant (ka) carries the value.",
    },
    aroha: "S R2 G2 M1 P D1 N1 S'",
    avaroha: "S' N1 D1 P M1 G2 R2 S",
    characteristics: {
      mood: "A shadowed vivadi scale: a minor lower half sinking into the close-set suddha dhaivata–nishada pair above.",
    },
    songs: [
      {
        title: "Himachala Kumarim Bhaje",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Jhankarabhramari, the Dikshitar school's asampurna name for the 19th mela.",
      },
    ],
    trivia: [
      {
        text: "Jhankaradhwani is a vivadi mela — suddha dhaivata (D1) and suddha nishada (N1) form the clashing pair — and it is heard almost only in complete-melakarta projects such as Koteeswara Iyer's Kanda Ganamutham.",
      },
    ],
  },
  {
    melaNumber: 20,
    name: "Natabhairavi",
    slug: "natabhairavi",
    katapayadi: {
      syllables: [
        { syllable: "Na", consonant: "na", digit: 0 },
        { syllable: "ta", consonant: "ttha", digit: 2 },
      ],
      note: "The second syllable is traditionally read as retroflex ṭha = 2 (not ṭa = 1), which yields 20.",
    },
    aroha: "S R2 G2 M1 P D1 N2 S'",
    avaroha: "S' N2 D1 P M1 G2 R2 S",
    characteristics: {
      rasa: ["Karuna"],
      mood: "The natural-minor sound: brooding and tender, instantly familiar from countless film melodies.",
    },
    songs: [
      {
        title: "Sri Valli Devasenapate",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
        tala: "Adi",
        notableRenditions: "A concert staple, memorably sung by M.S. Subbulakshmi.",
      },
      {
        title: "Sri Nilotpala Nayike",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Nariritigaula, the Dikshitar school's asampurna name for the 20th mela.",
      },
      {
        title: "Ilaya Nila Pozhigirathu",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Payanangal Mudivathillai", year: 1982 },
        trivia:
          "A guitar-led showcase of the natural minor scale that raga-song lists routinely cite under Natabhairavi.",
      },
    ],
    trivia: [
      {
        text: "Natabhairavi's swaras are the Western natural minor (Aeolian) scale, corresponding to the Hindustani Asavari family — which is why so much minor-key film music maps onto it.",
      },
      {
        text: "Its most celebrated offspring is the janya Bhairavi, one of the grandest ragas of the concert stage, which adds chatusruti dhaivata in ascent as an anya swara.",
      },
    ],
  },
  {
    melaNumber: 21,
    name: "Keeravani",
    slug: "keeravani",
    alternateNames: ["Kiravani", "Kirvani"],
    katapayadi: {
      syllables: [
        { syllable: "Kee", consonant: "ka", digit: 1 },
        { syllable: "ra", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D1 N3 S'",
    avaroha: "S' N3 D1 P M1 G2 R2 S",
    characteristics: {
      rasa: ["Karuna", "Bhakti"],
      mood: "Lush and intensely emotive — the harmonic minor scale, equally at home in a kutcheri and a film score.",
    },
    songs: [
      {
        title: "Kaligiyunte Gada",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
      },
      {
        title: "Panchabhuta Kiranavalim Chandra Maulim",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Kiranavali, the Dikshitar school's asampurna name for the 21st mela, woven into the lyric itself.",
      },
      {
        title: "Meri Bheegi Bheegi Si",
        type: "film",
        composer: "R.D. Burman",
        language: "Hindi",
        film: { name: "Anamika", year: 1973 },
        notableRenditions: "Sung by Kishore Kumar.",
        trivia: "A classic example of Hindustani Kirwani in Hindi film music.",
      },
      {
        title: "Thendral Vandhu Ennai Thodum",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Avatharam", year: 1995 },
      },
    ],
    trivia: [
      {
        text: "Keeravani's swaras are exactly the Western harmonic minor scale; Hindustani music borrowed it from the Carnatic system as raga Kirwani, now a favourite of sitar and sarod players.",
      },
      {
        text: "Film composer M.M. Keeravani — of Baahubali and RRR fame, whose 'Naatu Naatu' won the Academy Award for Best Original Song — is named after this raga.",
      },
    ],
  },
  {
    melaNumber: 22,
    name: "Kharaharapriya",
    slug: "kharaharapriya",
    katapayadi: {
      syllables: [
        { syllable: "Kha", consonant: "kha", digit: 2 },
        { syllable: "ra", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 G2 R2 S",
    characteristics: {
      jeevaSwaras: ["G2", "N2"],
      rasa: ["Karuna"],
      mood: "Majestic yet aching — a raga of vast, unhurried expanses that rewards long alapana.",
    },
    songs: [
      {
        title: "Chakkani Raja Margamu",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "'Why take alleys when a royal road exists?' — one of Tyagaraja's most quoted metaphors.",
      },
      {
        title: "Pakkala Nilabadi",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Misra Chapu",
      },
      {
        title: "Rama Nee Samanamevaru",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        tala: "Rupakam",
        notableRenditions:
          "Widely known through renditions by M.S. Subbulakshmi and Maharajapuram Santhanam.",
      },
      {
        title: "Poo Malarnthida",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Tik Tik Tik", year: 1981 },
      },
    ],
    trivia: [
      {
        text: "Kharaharapriya owes its concert stature almost entirely to Tyagaraja, who revealed its depth in a stream of masterpieces; the Dikshitar school instead treats Sri raga as the head of this mela.",
      },
      {
        text: "Its swaras form the Dorian mode — Hindustani Kafi — and it is the hub of the diatonic graha-bhedam family: shifting the tonic yields Sankarabharanam, Kalyani, Harikambhoji, Natabhairavi, Todi and more.",
      },
    ],
  },
  {
    melaNumber: 23,
    name: "Gourimanohari",
    slug: "gourimanohari",
    alternateNames: ["Gaurimanohari", "Gowrimanohari"],
    katapayadi: {
      syllables: [
        { syllable: "Gou", consonant: "ga", digit: 3 },
        { syllable: "ri", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D2 N3 S'",
    avaroha: "S' N3 D2 P M1 G2 R2 S",
    characteristics: {
      mood: "Graceful and quietly bright — a minor scale that keeps lifting toward the kakali nishada.",
    },
    songs: [
      {
        title: "Guruleka Etuvanti",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        trivia:
          "Tyagaraja's meditation on the indispensability of a guru — the piece that anchors this raga in the concert repertoire.",
      },
      {
        title: "Kaumari Gaurivelavali",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Gaurivelavali, the Dikshitar school's asampurna name for the 23rd mela.",
      },
    ],
    trivia: [
      {
        text: "Gourimanohari's swaras match the Western ascending melodic minor scale, giving it a soft minor colour that resolves upward.",
      },
    ],
  },
  {
    melaNumber: 24,
    name: "Varunapriya",
    slug: "varunapriya",
    alternateNames: ["Viravasantham"],
    katapayadi: {
      syllables: [
        { syllable: "Va", consonant: "va", digit: 4 },
        { syllable: "ru", consonant: "ra", digit: 2 },
      ],
    },
    aroha: "S R2 G2 M1 P D3 N3 S'",
    avaroha: "S' N3 D3 P M1 G2 R2 S",
    characteristics: {
      mood: "A rare vivadi scale whose raised shatsruti dhaivata gives its minor frame an unexpected upward wrench.",
    },
    songs: [
      {
        title: "Emani Pogadudura",
        type: "krithi",
        composer: "Tyagaraja",
        language: "Telugu",
        trivia:
          "Usually announced under the older name Viravasantam rather than Varunapriya.",
      },
      {
        title: "Ekamranathaya Namaste",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Composed in Viravasantam, the Dikshitar school's asampurna name for the 24th mela.",
      },
    ],
    trivia: [
      {
        text: "Varunapriya is a vivadi mela — shatsruti dhaivata (D3) sits a semitone below kakali nishada (N3) — and is better known in older tradition by the name Viravasantham.",
        source: "Wikipedia: Varunapriya",
      },
    ],
  },
] satisfies MelaContent[];
