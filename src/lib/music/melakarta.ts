import { CHAKRA_NAMES, type Raga, type SwaraId } from "./types";

/** Canonical 72 melakarta names (Asampurna / Govindacharya naming). */
export const MELAKARTA_NAMES: readonly string[] = [
  "Kanakangi",
  "Ratnangi",
  "Ganamurti",
  "Vanaspati",
  "Manavati",
  "Tanarupi",
  "Senavati",
  "Hanumatodi",
  "Dhenuka",
  "Natakapriya",
  "Kokilapriya",
  "Rupavati",
  "Gayakapriya",
  "Vakulabharanam",
  "Mayamalavagowla",
  "Chakravakam",
  "Suryakantam",
  "Hatakambari",
  "Jhankaradhwani",
  "Natabhairavi",
  "Keeravani",
  "Kharaharapriya",
  "Gourimanohari",
  "Varunapriya",
  "Mararanjani",
  "Charukesi",
  "Sarasangi",
  "Harikambhoji",
  "Dheerasankarabharanam",
  "Naganandini",
  "Yagapriya",
  "Ragavardhini",
  "Gangeyabhushani",
  "Vagadheeswari",
  "Shulini",
  "Chalanata",
  "Salagam",
  "Jalarnavam",
  "Jhalavarali",
  "Navaneetam",
  "Pavani",
  "Raghupriya",
  "Gavambodhi",
  "Bhavapriya",
  "Shubhapantuvarali",
  "Shadvidamargini",
  "Suvarnangi",
  "Divyamani",
  "Dhavalambari",
  "Namanarayani",
  "Kamavardhani",
  "Ramapriya",
  "Gamanashrama",
  "Vishwambari",
  "Shamalangi",
  "Shanmukhapriya",
  "Simhendramadhyamam",
  "Hemavati",
  "Dharmavati",
  "Neetimati",
  "Kantamani",
  "Rishabhapriya",
  "Latangi",
  "Vachaspati",
  "Mechakalyani",
  "Chitrambari",
  "Sucharitra",
  "Jyotiswarupini",
  "Dhatuvardhani",
  "Nasikabushani",
  "Kosalam",
  "Rasikapriya",
];

const RIGA: [SwaraId, SwaraId][] = [
  ["R1", "G1"],
  ["R1", "G2"],
  ["R1", "G3"],
  ["R2", "G2"],
  ["R2", "G3"],
  ["R3", "G3"],
];

const DANI: [SwaraId, SwaraId][] = [
  ["D1", "N1"],
  ["D1", "N2"],
  ["D1", "N3"],
  ["D2", "N2"],
  ["D2", "N3"],
  ["D3", "N3"],
];

const POPULAR_MELAS = new Set([8, 15, 16, 19, 20, 21, 22, 28, 29, 36, 45, 51, 53, 56, 57, 58, 59, 64, 65]);

/** Concert / popular name when it differs from the katapayadi melakarta name. */
export const MELAKARTA_COMMON_NAMES: Partial<Record<number, string>> = {
  8: "Todi",
  29: "Sankarabharanam",
  39: "Varali",
  51: "Panthuvarali",
  65: "Kalyani",
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function melaNumberToSwaras(n: number): {
  r: SwaraId;
  g: SwaraId;
  m: SwaraId;
  d: SwaraId;
  ni: SwaraId;
  chakra: number;
} {
  if (n < 1 || n > 72) throw new Error(`Invalid mela number: ${n}`);
  const half = n <= 36 ? 0 : 1;
  const index = half === 0 ? n - 1 : n - 37;
  const rigaIndex = Math.floor(index / 6);
  const daniIndex = index % 6;
  const [r, g] = RIGA[rigaIndex];
  const [d, ni] = DANI[daniIndex];
  const m: SwaraId = half === 0 ? "M1" : "M2";
  const chakra = Math.ceil(n / 6);
  return { r, g, m, d, ni, chakra };
}

export function scaleFromMela(n: number): { arohana: SwaraId[]; avarohana: SwaraId[] } {
  const { r, g, m, d, ni } = melaNumberToSwaras(n);
  const arohana: SwaraId[] = ["S", r, g, m, "P", d, ni, "S"];
  const avarohana: SwaraId[] = ["S", ni, d, "P", m, g, r, "S"];
  return { arohana, avarohana };
}

export function generateMelakartas(): Raga[] {
  return MELAKARTA_NAMES.map((katapayadiName, i) => {
    const melaNumber = i + 1;
    const { chakra, r, g, m, d, ni } = melaNumberToSwaras(melaNumber);
    const { arohana, avarohana } = scaleFromMela(melaNumber);
    const popular = POPULAR_MELAS.has(melaNumber);
    const common = MELAKARTA_COMMON_NAMES[melaNumber];

    const raga: Raga = {
      slug: slugify(katapayadiName),
      name: katapayadiName,
      kind: "melakarta",
      melaNumber,
      chakra,
      arohana,
      avarohana,
      popular,
      keyNotes: [r, g, m, d, ni],
      trivia: [
        `Melakarta #${melaNumber} in ${CHAKRA_NAMES[chakra - 1]} chakra (${chakra}/12).`,
        `Madhyamam: ${m === "M1" ? "Suddha (M1)" : "Prati (M2)"} — ${melaNumber <= 36 ? "first" : "second"} half of the chart.`,
        `Swara set: ${r} ${g} ${m} P ${d} ${ni}`,
      ],
    };

    if (common && common !== katapayadiName) {
      raga.aliases = [common];
    }

    if (popular) {
      raga.patterns = [
        {
          label: "Plain ascent",
          swaras: arohana.slice(0, -1),
          note: "Straight melakarta arohana without gamaka.",
        },
      ];
    }

    return raga;
  });
}

export function chakraForMela(n: number): { number: number; name: string; melas: number[] } {
  const number = Math.ceil(n / 6);
  const start = (number - 1) * 6 + 1;
  return {
    number,
    name: CHAKRA_NAMES[number - 1],
    melas: [start, start + 1, start + 2, start + 3, start + 4, start + 5],
  };
}
