/**
 * Katapayadi sankhya — consonants map to digits; reverse first two
 * significant consonants of a melakarta name to get its mela number.
 */

const CONSONANT_VALUE: Record<string, number> = {
  // ka varga
  k: 1,
  kh: 2,
  g: 3,
  gh: 4,
  ng: 5,
  // ca varga
  c: 6,
  ch: 7,
  j: 8,
  jh: 9,
  ny: 0,
  // ṭa varga (romanized as T/D/N often)
  T: 1,
  Th: 2,
  D: 3,
  Dh: 4,
  N: 5,
  // ta varga
  t: 1,
  th: 2,
  d: 3,
  dh: 4,
  n: 5,
  // pa varga
  p: 1,
  ph: 2,
  b: 3,
  bh: 4,
  m: 5,
  // ya ra la va
  y: 1,
  r: 2,
  l: 3,
  v: 4,
  w: 4,
  // sibilants + ha
  S: 5, // śa
  sh: 5,
  Sh: 6, // ṣa
  s: 7,
  h: 8,
};

const DIGRAPH_KEYS = ["ny", "ng", "kh", "gh", "ch", "jh", "th", "dh", "ph", "bh", "sh", "Sh", "Th", "Dh"];

export type KatapayadiStep = {
  consonant: string;
  digit: number;
  index: number;
};

export type KatapayadiResult = {
  name: string;
  steps: KatapayadiStep[];
  /** Digits in name order (first two consonants). */
  digitsForward: [number, number] | null;
  /** Reversed two-digit number (katapayadi). */
  melaNumber: number | null;
  explanation: string[];
};

function normalizeName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();
}

/** Extract consonant tokens from a romanized name (simplified). */
export function extractConsonants(name: string): string[] {
  const s = normalizeName(name);
  const out: string[] = [];
  let i = 0;
  while (i < s.length) {
    let matched = false;
    for (const dig of DIGRAPH_KEYS) {
      const d = dig.toLowerCase();
      if (s.slice(i, i + d.length) === d) {
        out.push(d === "sh" ? "sh" : d);
        i += d.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    const ch = s[i];
    if ("bcdfghjklmnpqrstvwxyz".includes(ch)) {
      out.push(ch);
    }
    i += 1;
  }
  return out;
}

function digitFor(consonant: string): number | null {
  const key = consonant.toLowerCase();
  if (key in CONSONANT_VALUE) return CONSONANT_VALUE[key];
  if (consonant in CONSONANT_VALUE) return CONSONANT_VALUE[consonant];
  return null;
}

/**
 * Compute mela number from a romanized melakarta name via katapayadi.
 * Uses the first two valued consonants, reversed.
 */
export function nameToMelaNumber(name: string): KatapayadiResult {
  const consonants = extractConsonants(name);
  const steps: KatapayadiStep[] = [];
  const valued: { consonant: string; digit: number }[] = [];

  consonants.forEach((c, index) => {
    const digit = digitFor(c);
    if (digit === null) return;
    steps.push({ consonant: c, digit, index });
    valued.push({ consonant: c, digit });
  });

  const explanation: string[] = [
    `Name: “${name}”`,
    `Consonants (simplified romanization): ${consonants.join(" · ") || "(none)"}`,
  ];

  if (valued.length < 2) {
    return {
      name,
      steps,
      digitsForward: null,
      melaNumber: null,
      explanation: [
        ...explanation,
        "Need at least two consonants with katapayadi values to form a number.",
      ],
    };
  }

  const d0 = valued[0].digit;
  const d1 = valued[1].digit;
  const melaNumber = d1 * 10 + d0; // reverse: units from first, tens from second

  explanation.push(
    `First two valued consonants: ${valued[0].consonant}=${d0}, ${valued[1].consonant}=${d1}`,
    `Reverse the digits → ${d1}${d0} → mela #${melaNumber}`,
    "Rule of thumb: read the two digits backwards (katapayadi sankhya).",
  );

  return {
    name,
    steps,
    digitsForward: [d0, d1],
    melaNumber: melaNumber === 0 ? 100 : melaNumber, // classical quirk; rare
    explanation,
  };
}

/** Katapayadi digit chart for the learn page. */
export const KATAPAYADI_CHART: { group: string; rows: { syllable: string; digit: number }[] }[] = [
  {
    group: "Ka",
    rows: [
      { syllable: "ka", digit: 1 },
      { syllable: "kha", digit: 2 },
      { syllable: "ga", digit: 3 },
      { syllable: "gha", digit: 4 },
      { syllable: "nga", digit: 5 },
    ],
  },
  {
    group: "Ca",
    rows: [
      { syllable: "ca", digit: 6 },
      { syllable: "cha", digit: 7 },
      { syllable: "ja", digit: 8 },
      { syllable: "jha", digit: 9 },
      { syllable: "nya", digit: 0 },
    ],
  },
  {
    group: "Ṭa / Ta",
    rows: [
      { syllable: "ṭa / ta", digit: 1 },
      { syllable: "ṭha / tha", digit: 2 },
      { syllable: "ḍa / da", digit: 3 },
      { syllable: "ḍha / dha", digit: 4 },
      { syllable: "ṇa / na", digit: 5 },
    ],
  },
  {
    group: "Pa",
    rows: [
      { syllable: "pa", digit: 1 },
      { syllable: "pha", digit: 2 },
      { syllable: "ba", digit: 3 },
      { syllable: "bha", digit: 4 },
      { syllable: "ma", digit: 5 },
    ],
  },
  {
    group: "Ya · Ra · La · Va · Śa · Ṣa · Sa · Ha",
    rows: [
      { syllable: "ya", digit: 1 },
      { syllable: "ra", digit: 2 },
      { syllable: "la", digit: 3 },
      { syllable: "va", digit: 4 },
      { syllable: "śa", digit: 5 },
      { syllable: "ṣa", digit: 6 },
      { syllable: "sa", digit: 7 },
      { syllable: "ha", digit: 8 },
    ],
  },
];
