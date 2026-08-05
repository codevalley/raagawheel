import type { JanyaContent } from "@/lib/carnatic/types";

/**
 * Janya batch 3 — the Sankarabharanam family (mela 29), plus two cousins:
 * Mohanakalyani (65 Mechakalyani) and Hamsanadam (60 Neetimati).
 *
 * Janya scales are not derivable from the parent — every aroha/avaroha
 * here is transcribed from references (Wikipedia, karnatik.com,
 * ragasurabhi.com, guruguha.org) rather than computed. Range-restricted
 * ragas (Kurinji, Navroj) use mandra marks (,) exactly as the sources
 * describe their compass.
 *
 * Mela 29 is the major scale, and its janyas carry a huge share of the
 * concert and film repertoire: Bilahari and Arabhi from the Tyagaraja
 * mainstream, Kedaram from Dikshitar's Chidambaram kriti, and the
 * Hindustani imports Behag and Mand that live in the tukkada slot.
 */
export const janyas: JanyaContent[] = [
  {
    name: "Bilahari",
    slug: "bilahari",
    melaNumber: 29,
    // Audava aroha, sampurna avaroha — Wikipedia: Bilahari; karnatik.com.
    aroha: "S R2 G3 P D2 S'",
    avaroha: "S' N3 D2 P M1 G3 R2 S",
    anyaSwaras: ["N2"],
    anyaSwaraNote:
      "Kaisiki nishadam (N2) appears only in occasional descent prayogas such as P D2 N2 D2 P, making Bilahari lightly bhashanga; the scale itself stays within mela 29.",
    characteristics: {
      timeOfDay: "morning",
      mood: "A bright, majestic morning raga — the Mohanam-like ascent opening into the full major-scale descent gives it an unmistakable sparkle.",
    },
    songs: [
      {
        title: "Intakannananda",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Rupakam",
        trivia:
          "Tyagaraja declares there is no greater bliss than singing the Lord's praise — a sentiment the raga's buoyancy carries perfectly.",
      },
      {
        title: "Na Jeevadhara",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Paridanamichite",
        type: "krithi",
        composer: "Patnam Subramania Iyer",
        language: "Telugu",
        tala: "Khanda Chapu",
      },
      {
        title: "Intachalamu",
        type: "varnam",
        composer: "Veena Kuppayyar",
        language: "Telugu",
        tala: "Adi",
        trivia: "A staple beginner's varnam in the Bilahari repertoire.",
        searchQueryOverride: "Intachalamu Bilahari varnam",
      },
    ],
    trivia: [
      {
        text: "Bilahari pairs an audava (five-note) Mohanam-like ascent with the full sampurna major-scale descent — the asymmetry is the raga's signature.",
        source: "Wikipedia: Bilahari",
      },
      {
        text: "Though classed under mela 29, most treatises call it bhashanga for the kaisiki nishadam that flickers through certain descending phrases.",
        source: "Wikipedia: Bilahari",
      },
    ],
  },
  {
    name: "Behag",
    alternateNames: ["Bihag"],
    slug: "behag",
    melaNumber: 29,
    // Vakra scale with anya M2 in the descent — sujamusic.wordpress.com/behag,
    // ragasurabhi.com.
    aroha: "S G3 M1 P N3 D2 N3 S'",
    avaroha: "S' N3 D2 P M2 G3 M1 G3 R2 S",
    anyaSwaras: ["M2", "N2"],
    anyaSwaraNote:
      "Prati madhyamam (M2) sits in the avaroha itself (P M2 G3); kaisiki nishadam (N2) is only a rare prayoga shade borrowed from the Hindustani Bihag.",
    characteristics: {
      mood: "A sweet, romantic Hindustani import — all glides and pauses, made for the light pieces at the end of a concert.",
    },
    songs: [
      {
        title: "Aadum Chidambaramo",
        type: "krithi",
        composer: "Gopalakrishna Bharathi",
        language: "Tamil",
        trivia:
          "From the Nandanar Charitram tradition — one of the best-loved Tamil pieces in Behag.",
      },
      {
        title: "Saramaina Matalanta",
        type: "javali",
        composer: "Swati Tirunal",
        language: "Telugu",
        searchQueryOverride: "Saramaina matalanta Behag Swati Tirunal",
      },
      {
        title: "Behag Thillana",
        type: "thillana",
        composer: "Lalgudi Jayaraman",
        language: "Telugu",
        tala: "Adi",
        searchQueryOverride: "Lalgudi Jayaraman Behag thillana",
        trivia: "A favourite closing piece on the Bharatanatyam stage.",
      },
    ],
    trivia: [
      {
        text: "Behag came into Carnatic music from the Hindustani raga Bihag and is used predominantly for tukkadas, javalis and light songs at the tail end of concerts.",
        source: "sujamusic.wordpress.com/behag",
      },
      {
        text: "Its identity lives in phrase, not scale: the same notes rendered without Behag's characteristic glides simply sound like Sankarabharanam fragments.",
      },
    ],
  },
  {
    name: "Kurinji",
    alternateNames: ["Kuranji"],
    slug: "kurinji",
    melaNumber: 29,
    // Range-restricted: mandra N3 to madhya D2 — a dhaivatantya raga.
    // Sources: raagamruta.in (Kuranji Raga Lakshanam), guruguha.org.
    aroha: "S N3, S R2 G3 M1 P D2",
    avaroha: "D2 P M1 G3 R2 S N3, S",
    characteristics: {
      mood: "A gentle, cradling raga whose compass never rises past dhaivatam — the sound of lullabies and temple oduvars.",
    },
    songs: [
      {
        title: "Muddugare Yashoda",
        type: "krithi",
        composer: "Annamacharya",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Annamayya strings the navaratna gems through Krishna's childhood exploits; among the most-sung Annamacharya pieces today.",
      },
      {
        title: "Omanathinkal Kidavo",
        type: "devotional",
        composer: "Irayimman Thampi",
        language: "Malayalam",
        trivia:
          "The lullaby Irayimman Thampi composed in 1813 for the infant Swati Tirunal; traditionally set in Kurinji, though it is also rendered in Navroj and Nilambari.",
      },
      {
        title: "Bruhi Mukundeti",
        type: "krithi",
        composer: "Sadasiva Brahmendra",
        language: "Sanskrit",
        notableRenditions: "M. S. Subbulakshmi's rendition made it a household piece.",
        searchQueryOverride: "Bruhi Mukundeti Kurinji",
      },
    ],
    trivia: [
      {
        text: "Kurinji is a dhaivatantya raga — sancharas end at dhaivatam and never touch the upper nishadam or tara shadjam, dipping instead to the mandra nishadam below Sa.",
        source: "raagamruta.in: Kuranji Ragam (Raga Lakshanam)",
      },
      {
        text: "Kurinji and Sankarabharanam share the same swarasthanas; the janya is defined purely by its restricted compass and phraseology.",
        source: "guruguha.org: The Kurinji of the Sangita Sampradaya Pradarshini",
      },
    ],
  },
  {
    name: "Kedaram",
    alternateNames: ["Kedara"],
    slug: "kedaram",
    melaNumber: 29,
    // Vakra aroha (S M1 G3 M1 P), shadava avaroha skipping D —
    // Wikipedia: Kedaram; shivkumar.org kriti notes.
    aroha: "S M1 G3 M1 P N3 S'",
    avaroha: "S' N3 P M1 G3 R2 S",
    characteristics: {
      mood: "Crisp and devotional; the vakra leap S M1 G3 M1 P announces the raga in a single phrase.",
    },
    songs: [
      {
        title: "Ananda Natana Prakasham",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Misra Chapu",
        trivia:
          "The akasha (space) kriti of Dikshitar's Pancha Bhuta Linga set, on Nataraja of Chidambaram — the piece by which most rasikas know Kedaram.",
      },
      {
        title: "Rama Nipai",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Rama nipai Kedaram Thyagaraja",
      },
    ],
    trivia: [
      {
        text: "Kedaram omits dhaivatam entirely and takes madhyamam twice in the ascent (S M1 G3 M1 P) — a vakra signature that keeps it unmistakable despite using only mela-29 notes.",
        source: "Wikipedia: Kedaram",
      },
      {
        text: "The Carnatic Kedaram is distinct from the Hindustani raga Kedar, which is a Kalyan-thaat raga with tivra madhyama.",
      },
    ],
  },
  {
    name: "Arabhi",
    slug: "arabhi",
    melaNumber: 29,
    // Audava–sampurna — Wikipedia: Arabhi; karnatik.com.
    aroha: "S R2 M1 P D2 S'",
    avaroha: "S' N3 D2 P M1 G3 R2 S",
    characteristics: {
      mood: "An open-throated, auspicious raga of the ghana class — broad strokes, minimal gamaka on R and D, built for grandeur.",
    },
    songs: [
      {
        title: "Sadhinchene",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "The third of Tyagaraja's Pancharatna kritis, sung in unison at every Tiruvaiyaru aradhana.",
      },
      {
        title: "Sri Saraswati Namostute",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Rupakam",
        trivia: "A Navaratri-season staple invoking Saraswati.",
      },
      {
        title: "Nada Sudha Rasambilanu",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Nada sudha rasambilanu Arabhi Thyagaraja",
      },
    ],
    trivia: [
      {
        text: "Arabhi is counted among the five ghana ragas of the Tyagaraja Pancharatna set (Nata, Gowla, Arabhi, Varali, Sri).",
      },
      {
        text: "Arabhi and Devagandhari share the identical scale under mela 29; they diverge in tempo and gamaka — Arabhi brisk and plain-noted, Devagandhari slow and heavily oscillated.",
        source: "Wikipedia: Devagandhari",
      },
    ],
  },
  {
    name: "Devagandhari",
    slug: "devagandhari",
    melaNumber: 29,
    // Arabhi's skeleton plus a vakra kaisiki-nishadam turn in the descent —
    // Wikipedia: Devagandhari (avarohanam S' N3 D2 N2 D2 P M1 G3 R2 S).
    aroha: "S R2 M1 P D2 S'",
    avaroha: "S' N3 D2 N2 D2 P M1 G3 R2 S",
    anyaSwaras: ["N2"],
    anyaSwaraNote:
      "Kaisiki nishadam (N2) enters through the vakra descent phrase N3 D2 N2 D2 P, making Devagandhari a bhashanga raga; some sources list the plainer avaroha S' N3 D2 P M1 G3 R2 S and treat N2 as prayoga-only.",
    characteristics: {
      mood: "Slow, dignified and drenched in gamaka — where Arabhi strides, Devagandhari lingers and pleads.",
    },
    songs: [
      {
        title: "Ksheera Sagara Sayana",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Tyagaraja lists the devotees the Lord rushed to rescue and asks why his own plea goes unheard — the raga's plaintive weight does half the work.",
      },
      {
        title: "Seetavara Sangeeta Gnanamu",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
      },
      {
        title: "Koluvaiyunnade",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        searchQueryOverride: "Koluvaiyunnade Devagandhari Thyagaraja",
      },
    ],
    trivia: [
      {
        text: "Devagandhari shares Arabhi's skeleton and the two are the textbook example of ragas separated by chalana — gait, tempo and gamaka — though Devagandhari additionally admits a kaisiki nishadam in descent that Arabhi never takes.",
        source: "Wikipedia: Devagandhari",
      },
      {
        text: "The Carnatic Devagandhari is unrelated to the Hindustani Devgandhar; the shared name is a historical coincidence.",
      },
    ],
  },
  {
    name: "Navroj",
    alternateNames: ["Navaroj", "Navaroz"],
    slug: "navroj",
    melaNumber: 29,
    // Panchamantya, range mandra Pa to madhya Pa; sancharas beyond madhya
    // panchamam are traditionally forbidden — guruguha.org (Hastivadanaya
    // essay), karnatik.com.
    aroha: "P, D2, N3, S R2 G3 M1 P",
    avaroha: "P M1 G3 R2 S N3, D2, P,",
    characteristics: {
      mood: "A soft, low-lying raga confined to the octave between the two panchamams — intimate, lullaby-like, never soaring.",
    },
    songs: [
      {
        title: "Hastivadanaya Namastubhyam",
        type: "krithi",
        composer: "Muthuswami Dikshitar",
        language: "Sanskrit",
        tala: "Misra Eka",
        trivia:
          "From Dikshitar's Shodasha Ganapati set; notated in misra eka but usually rendered in misra chapu, and long treasured as a Veena Dhanammal-family heirloom.",
      },
    ],
    trivia: [
      {
        text: "Navroj is a panchamantya raga: it runs from mandra panchamam up to madhya panchamam and stops — traversal above the madhya Pa is considered outside the raga's lakshana.",
        source: "guruguha.org: Hastivadanaya Namastubhyam — an aigrette in Navaroj",
      },
      {
        text: "The name is usually traced to the Persian 'Nauroz' (new day / new year), one of several Persianate names that entered the raga lexicon.",
      },
    ],
  },
  {
    name: "Mand",
    alternateNames: ["Maand"],
    slug: "mand",
    melaNumber: 29,
    // karnatik.com raga list (mAnD): S G3 M1 P D2 S / S N3 D2 P M1 G3 R2 S.
    aroha: "S G3 M1 P D2 S'",
    avaroha: "S' N3 D2 P M1 G3 R2 S",
    characteristics: {
      mood: "A lilting Rajasthani folk import — sunny and swaying, the sound of the concert's happy last stretch.",
    },
    songs: [
      {
        title: "Muralidhara Gopala",
        type: "krithi",
        composer: "Periasamy Thooran",
        language: "Tamil",
        notableRenditions: "Popularised by G. N. Balasubramaniam.",
      },
      {
        title: "Ramanai Bhajithal",
        type: "krithi",
        composer: "Papanasam Sivan",
        language: "Tamil",
      },
      {
        title: "Janaki Manoharam",
        type: "krithi",
        composer: "Mysore Vasudevachar",
        language: "Sanskrit",
        searchQueryOverride: "Janaki Manoharam Mand Mysore Vasudevachar",
      },
      {
        title: "Mand Thillana",
        type: "thillana",
        composer: "Lalgudi Jayaraman",
        language: "Telugu",
        searchQueryOverride: "Lalgudi Jayaraman Mand thillana",
      },
    ],
    trivia: [
      {
        text: "Mand travelled from Rajasthani folk song into Hindustani music and thence to the Carnatic stage, where it lives in bhajans and tukkadas at the end of concerts.",
        source: "sujamusic.wordpress.com/mand",
      },
      {
        text: "Bilahari and Mand are a classic same-notes-different-raga pair: identical swarasthanas under mela 29, entirely different gait and phrasing.",
        source: "P. Sriram, A Karnatic Music Primer",
      },
    ],
  },
  {
    name: "Mohanakalyani",
    alternateNames: ["Mohana Kalyani"],
    slug: "mohanakalyani",
    melaNumber: 65,
    // Mohanam's ascent grafted onto Kalyani's descent — karnatik.com,
    // Wikipedia: Mohanakalyani.
    aroha: "S R2 G3 P D2 S'",
    avaroha: "S' N3 D2 P M2 G3 R2 S",
    characteristics: {
      mood: "Mohanam's open pentatonic climb resolving through Kalyani's luminous prati-madhyama descent — festive and regal at once.",
    },
    songs: [
      {
        title: "Bhuvaneshwariya Nene Manave",
        type: "krithi",
        composer: "Harikesanallur Muthiah Bhagavatar",
        language: "Kannada",
        tala: "Adi",
        trivia:
          "The composition that anchored Mohanakalyani in the concert repertoire; Muthiah Bhagavatar was the raga's great champion.",
      },
      {
        title: "Mohanakalyani Thillana",
        type: "thillana",
        composer: "Lalgudi Jayaraman",
        language: "Telugu",
        searchQueryOverride: "Lalgudi Jayaraman Mohanakalyani thillana",
        trivia:
          "Featured on Lalgudi's 'Dance of Sound' album and did as much as any kriti to popularise the raga.",
      },
    ],
    trivia: [
      {
        text: "The name says the recipe: aroha of Mohanam, avaroha of (Mecha)Kalyani — which places it under mela 65 despite the Mohanam-identical ascent.",
        source: "karnatik.com",
      },
      {
        text: "Though sometimes described as a 20th-century revival popularised by Muthiah Bhagavatar, the raga also appears in older Kerala tradition, including compositions attributed to Swati Tirunal's circle.",
        source: "drmradhakrishnan.com: Rare Raga Series — Mohana Kalyani",
      },
    ],
  },
  {
    name: "Hamsanadam",
    alternateNames: ["Hamsanaadam", "Hamsanada"],
    slug: "hamsanadam",
    melaNumber: 60,
    // Symmetric audava scale under 60 Neetimati — Wikipedia: Hamsanadam.
    // Older texts give a shadava form with a vakra D3; current practice
    // drops the dhaivatam entirely.
    aroha: "S R2 M2 P N3 S'",
    avaroha: "S' N3 P M2 R2 S",
    characteristics: {
      mood: "Bright and gliding — the prati madhyamam against kakali nishadam gives it the soaring quality its name ('call of the swan') promises.",
    },
    songs: [
      {
        title: "Bantureeti Kolu",
        type: "krithi",
        composer: "Thyagaraja",
        language: "Telugu",
        tala: "Adi",
        trivia:
          "Tyagaraja asks Rama for the post of a guard at his court; virtually the sole reason Hamsanadam became a mainstream concert raga.",
      },
      {
        title: "Kalyana Rama",
        type: "krithi",
        composer: "Oothukkadu Venkata Kavi",
        language: "Sanskrit",
        searchQueryOverride: "Kalyana Rama Hamsanadam Oothukkadu",
      },
    ],
    trivia: [
      {
        text: "Hamsanadam is a janya of mela 60 Neetimati; older treatises describe a shadava form with shatsruti dhaivatam in vakra descent, but modern practice sings the clean five-note scale without dhaivatam.",
        source: "Wikipedia: Hamsanadam",
      },
      {
        text: "The name means 'call of the swan' — hamsa (swan) + nadam (sound).",
        source: "Wikipedia: Hamsanadam",
      },
    ],
  },
] satisfies JanyaContent[];
