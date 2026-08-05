import type { JanyaContent } from "@/lib/carnatic/types";

/**
 * Janya batch 2 — the Kharaharapriya family (mela 22).
 *
 * Kharaharapriya's evenly spaced swaras (S R2 G2 M1 P D2 N2) make it the
 * most fertile of all melas: its janyas carry a huge share of the concert
 * repertoire, from ghana ragas (Sri) to rakti ragas (Reetigowla, Mukhari,
 * Huseni) to the Kanada–Darbar–Nayaki cluster of vakra siblings.
 *
 * Scales are transcribed from Wikipedia raga pages, ragasurabhi.com and
 * karnatik.com — janya scales are not derivable, so each is hand-checked.
 * Bhashanga members (Kapi, Mukhari, Huseni) declare their anya swaras;
 * contested parentage (Abheri: mela 20 vs 22) follows modern practice
 * with the controversy recorded in trivia.
 */
export const janyas: JanyaContent[] = [
  {
    name: "Abheri",
    slug: "abheri",
    melaNumber: 22,
    // Modern (D2) form; see trivia for the mela-20 controversy.
    aroha: "S G2 M1 P N2 S'",
    avaroha: "S' N2 D2 P M1 G2 R2 S",
    characteristics: {
      jeevaSwaras: ["G2", "N2"],
      mood: "Plaintive yet consoling — the audava ascent and full descent give it a soaring, devotional sweep beloved of both kutcheri and film composers.",
      rasa: ["karuna", "bhakti"],
    },
    songs: [
      {
        title: "Nagumomu Ganaleni",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "The piece by which most listeners know Abheri; modern renditions overwhelmingly use chatusruti dhaivata (D2), cementing the mela-22 identity.",
      },
      {
        title: "Bhajare Re Manasa",
        type: "krithi",
        composer: "Mysore Vasudevachar",
        language: "Sanskrit",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Older texts give Abheri suddha dhaivata (D1), making it a janya of mela 20 Natabhairavi; 20th-century practice — led by renditions of Nagumomu — shifted it to D2 under mela 22. Some theorists reserve the name Karnataka Devagandhari for the D2 form.",
        source: "Wikipedia: Abheri",
      },
      {
        text: "Abheri closely parallels the Hindustani raga Bhimpalasi.",
        source: "Wikipedia: Abheri",
      },
    ],
  },
  {
    name: "Kapi",
    alternateNames: ["Kaapi"],
    slug: "kapi",
    melaNumber: 22,
    aroha: "S R2 M1 P N3 S'",
    avaroha: "S' N2 D2 N2 P M1 G2 R2 S",
    anyaSwaras: ["N3", "G3"],
    anyaSwaraNote:
      "Kakali nishada (N3) sits in the aroha itself; antara gandhara (G3) — and occasionally suddha dhaivata — surface only in prayogas, giving Kapi its shifting, bittersweet colour.",
    characteristics: {
      prayogas: [
        {
          phrase: "N2 D2 N2 P",
          note: "The vakra nishada turn that stamps the descent.",
        },
      ],
      mood: "Tender and wistful; the play between the two nishadas makes it a favourite for padams, javalis and lullaby-like film melodies.",
      rasa: ["karuna", "sringara", "bhakti"],
    },
    songs: [
      {
        title: "Jagadoddharana",
        type: "devotional",
        composer: "Purandara Dasa",
        language: "Kannada",
        notableRenditions: "M. S. Subbulakshmi; Bombay Jayashri",
        trivia:
          "In this devarnama the anya suddha dhaivata (D1) also appears as a foreign note in some renditions.",
      },
      {
        title: "Enna Thavam Seithanai",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
        tala: "Adi",
      },
      {
        title: "Mee Valla Guna Dosha",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
      },
      {
        title: "Kanne Kalaimane",
        type: "film",
        composer: "Ilaiyaraaja",
        language: "Tamil",
        film: { name: "Moondram Pirai", year: 1982 },
        notableRenditions: "K. J. Yesudas",
        trivia:
          "Kannadasan's last recorded lyric; usually attributed to Kapi, though some analyses hear Reetigowla shades.",
        searchQueryOverride: "Kanne Kalaimane Moondram Pirai Yesudas",
      },
    ],
    trivia: [
      {
        text: "Carnatic Kapi diverged from the Hindustani Kafi that shares its name: the southern raga is a bhashanga with both nishadas and prayoga-only G3, while Kafi is a plain scale.",
        source: "Wikipedia: Kapi (raga)",
      },
    ],
  },
  {
    name: "Sri",
    alternateNames: ["Shree", "Sriragam"],
    slug: "sri",
    melaNumber: 22,
    aroha: "S R2 M1 P N2 S'",
    avaroha: "S' N2 P D2 N2 P M1 R2 G2 R2 S",
    characteristics: {
      jeevaSwaras: ["R2", "N2"],
      prayogas: [
        {
          phrase: "R2 G2 R2 S",
          note: "Gandhara appears only in this vakra closing turn of the descent.",
        },
      ],
      mood: "Majestic and auspicious — a ghana raga traditionally sung at the close of concerts to invoke prosperity.",
      rasa: ["bhakti", "veera"],
    },
    songs: [
      {
        title: "Endaro Mahanubhavulu",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "The fifth of the Pancharatna kritis, saluting all great devotees; a fixture of Thyagaraja aradhana ensembles.",
      },
      {
        title: "Sri Varalakshmi Namastubhyam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia: "Sung especially during Varalakshmi Vratam.",
      },
      {
        title: "Sami Ninne Kori",
        type: "varnam",
        composer: "Karur Devudu Iyer",
        language: "Telugu",
        tala: "Adi",
        searchQueryOverride: "Sami Ninne Kori varnam Sri ragam",
      },
    ],
    trivia: [
      {
        text: "Sri is one of the five ghana ragas (with Nata, Gaula, Arabhi and Varali) featured in the Pancharatna cycle, and is considered among the oldest ragas in Carnatic music.",
        source: "Wikipedia: Shree (Carnatic raga)",
      },
      {
        text: "Dhaivata never appears in ascent and only inside the vakra phrase P D2 N2 P in descent — treating D2 as a resting note is considered a hallmark error.",
        source: "karnatik.com: Sri",
      },
    ],
  },
  {
    name: "Sriranjani",
    alternateNames: ["Shree Ranjani"],
    slug: "sriranjani",
    melaNumber: 22,
    aroha: "S R2 G2 M1 D2 N2 S'",
    avaroha: "S' N2 D2 M1 G2 R2 S",
    characteristics: {
      mood: "Bright and brisk despite the minor-third gandhara — the absent panchama gives it an airy, forward-leaning gait suited to madhyama-kala kritis.",
      rasa: ["bhakti", "hasya"],
    },
    songs: [
      {
        title: "Sogasuga Mridanga Talamu",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Rupakam",
        trivia:
          "Thyagaraja's manifesto on what makes an ideal kriti — poetry, bhava and laya in balance.",
      },
      {
        title: "Marubalka Kunnava",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Bhuvini Dasudane",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "A varjya janya of Kharaharapriya that drops panchama entirely; Thyagaraja is virtually its patron composer, with several of his kritis defining its form.",
        source: "Wikipedia: Shree ranjani",
      },
    ],
  },
  {
    name: "Reetigowla",
    alternateNames: ["Reethigowla", "Ritigaula"],
    slug: "reetigowla",
    melaNumber: 22,
    aroha: "S G2 R2 G2 M1 N2 D2 M1 N2 N2 S'",
    avaroha: "S' N2 D2 M1 G2 M1 P M1 G2 R2 S",
    characteristics: {
      jeevaSwaras: ["G2", "N2"],
      prayogas: [
        {
          phrase: "N2 N2 S'",
          note: "The doubled nishada janta approach to tara Sa is the raga's signature.",
        },
      ],
      mood: "A rakti raga of quiet intimacy — winding, gamaka-laden phrases that evoke devotion tinged with joy.",
      rasa: ["bhakti", "karuna"],
    },
    songs: [
      {
        title: "Janani Ninnuvina",
        type: "krithi",
        composer: "Subbaraya Sastri",
        language: "Telugu",
        tala: "Misra Chapu",
        trivia: "The classic Reetigowla showpiece, addressed to the Goddess.",
      },
      {
        title: "Dvaitamu Sukhama",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Thyagaraja's philosophical question — 'is dualism happiness, or non-dualism?'",
      },
      {
        title: "Tatvamariya Tarama",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
      },
    ],
    trivia: [
      {
        text: "A heavily vakra shadava–sampurna raga: panchama is skipped in ascent and touched only inside the descent's M1 P M1 turn, so the raga lives almost entirely in its winding phrases rather than a straight scale.",
        source: "Wikipedia: Reetigowla",
      },
      {
        text: "In Dikshitar's asampurna school a variant with suddha dhaivata is treated under the older Gaula family names.",
        source: "rasikas.org discussions on Reetigowla",
      },
    ],
  },
  {
    name: "Manirangu",
    slug: "manirangu",
    melaNumber: 22,
    aroha: "S R2 M1 P N2 S'",
    avaroha: "S' N2 P M1 G2 R2 S",
    characteristics: {
      mood: "Close kin of Madhyamavati and Sri, but with gandhara in descent giving a gentler, rounded close; carries valour and compassion equally well.",
      rasa: ["veera", "karuna", "bhakti"],
    },
    songs: [
      {
        title: "Mamava Pattabhirama",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "Dikshitar's celebrated picture of Rama's coronation, the raga's best-known vehicle.",
      },
      {
        title: "Ranidhi Radu",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
      },
      {
        title: "Jaya Jaya Padmanabha",
        type: "krithi",
        composer: "Swati Tirunal",
        language: "Sanskrit",
      },
    ],
    trivia: [
      {
        text: "Manirangu shares its aroha with Sri and Madhyamavati; identification rests on the descent, where gandhara appears but dhaivata never does.",
        source: "sujamusic.wordpress.com: Manirangu",
      },
    ],
  },
  {
    name: "Mukhari",
    slug: "mukhari",
    melaNumber: 22,
    aroha: "S R2 M1 P N2 D2 S'",
    avaroha: "S' N2 D1 P M1 G2 R2 S",
    anyaSwaras: ["D1"],
    anyaSwaraNote:
      "Suddha dhaivata (D1) replaces the parent's D2 in descent, making Mukhari bhashanga; the ascent's vakra N2 D2 S' keeps the chatusruti dhaivata alive.",
    characteristics: {
      jeevaSwaras: ["R2", "D1"],
      mood: "The archetypal raga of grief and pathos in the Carnatic canon — slow, weighted phrases that composers reserve for sorrow and surrender.",
      rasa: ["karuna", "shoka"],
    },
    songs: [
      {
        title: "Ksheenamai Tiruga",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Elavatara",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
      },
      {
        title: "Pahimam Ratnachala Nayaka",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
      },
    ],
    trivia: [
      {
        text: "Some older treatises classify Mukhari under mela 20 Natabhairavi because of its suddha dhaivata; the prevailing modern view keeps it under 22 with D1 as anya swara.",
        source: "Wikipedia: Mukhari",
      },
      {
        text: "Mukhari is counted among the ancient rakti ragas and was once regarded as the very first raga in some pre-melakarta classification schemes.",
        source: "Wikipedia: Mukhari",
      },
    ],
  },
  {
    name: "Kanada",
    alternateNames: ["Karnataka Kanada"],
    slug: "kanada",
    melaNumber: 22,
    aroha: "S R2 G2 M1 D2 N2 S'",
    avaroha: "S' N2 P M1 G2 M1 R2 S",
    characteristics: {
      jeevaSwaras: ["G2"],
      prayogas: [
        {
          phrase: "M1 G2 M1 R2 S",
          note: "The sliding gandhara-madhyama curl that closes almost every Kanada phrase.",
        },
      ],
      gamakaNotes:
        "Lives on gamaka: the sadharana gandhara is delivered with a deep glide from madhyama, without which the raga's identity evaporates.",
      mood: "Melancholy elegance — a favourite for ragamalikas and pallavis, always more phrase than scale.",
      rasa: ["karuna", "sringara"],
    },
    songs: [
      {
        title: "Alai Payuthe Kanna",
        type: "krithi",
        composer: "Oothukkadu Venkata Kavi",
        language: "Tamil",
        tala: "Adi",
        trivia:
          "So beloved that it lent its name to Mani Ratnam's film Alaipayuthey (2000), where it was reworked by A. R. Rahman.",
      },
      {
        title: "Sukhi Evvaro",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Some schools sing an alternate aroha touching panchama (S R2 P G2 M1 D2 N2 S'); either way the panchama is weak in ascent and prominent only in the descent.",
        source: "sujamusic.wordpress.com: Kanada",
      },
      {
        text: "Despite the shared name, Carnatic Kanada is distinct from Hindustani Darbari Kanada; the southern parallel of the latter is treated as a separate raga.",
        source: "Wikipedia: Darbari Kanada",
      },
    ],
  },
  {
    name: "Darbar",
    slug: "darbar",
    melaNumber: 22,
    aroha: "S R2 M1 P D2 N2 S'",
    avaroha: "S' N2 D2 P M1 R2 G2 G2 R2 S",
    characteristics: {
      jeevaSwaras: ["G2", "N2"],
      prayogas: [
        {
          phrase: "G2 G2 R2 S",
          note: "The doubled, quivering dirgha gandhara in descent is Darbar's fingerprint.",
        },
      ],
      mood: "Regal and energetic, suited to medium and fast tempos — the name itself evokes the royal court.",
      rasa: ["veera", "bhakti"],
    },
    songs: [
      {
        title: "Yochana Kamala Lochana",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Mundu Venuka",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
    ],
    trivia: [
      {
        text: "Darbar and Nayaki share swara material and are a classic confusable pair; Darbar moves faster with the janta G2 G2 in descent, while Nayaki dwells on elongated gandhara and nishada.",
        source: "Wikipedia: Darbar (raga)",
      },
    ],
  },
  {
    name: "Nayaki",
    slug: "nayaki",
    melaNumber: 22,
    // Ragasurabhi's fuller vakra form; a simpler S R2 M1 P D2 P S' aroha is also taught.
    aroha: "S R2 M1 P D2 N2 D2 P S'",
    avaroha: "S' N2 S' P D2 N2 D2 P M1 R2 G2 R2 S",
    characteristics: {
      jeevaSwaras: ["G2", "N2"],
      gamakaNotes:
        "Gandhara and nishada are markedly elongated and oscillated — the slow ujjal treatment that separates Nayaki from its sibling Darbar.",
      mood: "Soft-spoken pathos; a rakti raga that unfolds best in slow, weighty kritis.",
      rasa: ["karuna", "bhakti"],
    },
    songs: [
      {
        title: "Ranganayakam Bhavaye",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        trivia:
          "On Ranganatha of Srirangam; its pallavi's long gandhara is the textbook illustration of Nayaki's gait.",
      },
      {
        title: "Nee Bhajana Gana",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Nee Bhajana Gana Rasikula Thyagaraja Nayaki",
      },
    ],
    trivia: [
      {
        text: "An upanga janya of mela 22 whose scale outlines vary by school — all agree it is heavily vakra in both directions, with panchama flanking the dhaivata-nishada turns.",
        source: "ragasurabhi.com: Nayaki",
      },
    ],
  },
  {
    name: "Huseni",
    alternateNames: ["Husseni", "Hussaini"],
    slug: "huseni",
    melaNumber: 22,
    aroha: "S R2 G2 M1 P N2 D2 N2 S'",
    avaroha: "S' N2 D1 P M1 G2 R2 S",
    anyaSwaras: ["D1"],
    anyaSwaraNote:
      "Suddha dhaivata (D1) colours descent phrases while the ascent's vakra N2 D2 N2 keeps chatusruti dhaivata — the bhashanga blend that gives Huseni its Persian-tinged pathos.",
    characteristics: {
      mood: "Sensuous melancholy — the raga of padams and javalis, equally at home in devotion and longing.",
      rasa: ["sringara", "karuna", "bhakti"],
    },
    songs: [
      {
        title: "Rama Ninne Nammi",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Rama Ninne Nammi Thyagaraja Huseni",
      },
      {
        title: "Raghuveera Ranadheera",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
      },
      {
        title: "Sri Kalahastisa",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
      },
    ],
    trivia: [
      {
        text: "The name is commonly traced to Persian/Deccani influence (Husain), a reminder of the raga's associations with the Golconda-era musical exchange.",
        source: "sujamusic.wordpress.com: Huseni",
      },
      {
        text: "Huseni is a vakra sampurna bhashanga raga of mela 22; the anya suddha dhaivata appears only in select descent phrases.",
        source: "carnaticmusicexams.in: Huseni",
      },
    ],
  },
] satisfies JanyaContent[];
