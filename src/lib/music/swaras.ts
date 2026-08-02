import type { SwaraId } from "./types";

/** Semitone offset from Sa (equal temperament approximation for hearing). */
export const SWARA_SEMITONES: Record<SwaraId, number> = {
  S: 0,
  R1: 1,
  R2: 2,
  R3: 3,
  G1: 2,
  G2: 3,
  G3: 4,
  M1: 5,
  M2: 6,
  P: 7,
  D1: 8,
  D2: 9,
  D3: 10,
  N1: 9,
  N2: 10,
  N3: 11,
};

export const SWARA_LABELS: Record<
  SwaraId,
  { short: string; full: string; family: string }
> = {
  S: { short: "S", full: "Shadjam", family: "Sa" },
  R1: { short: "R1", full: "Suddha Rishabham", family: "Ri" },
  R2: { short: "R2", full: "Chatusruti Rishabham", family: "Ri" },
  R3: { short: "R3", full: "Shatsruti Rishabham", family: "Ri" },
  G1: { short: "G1", full: "Suddha Gandharam", family: "Ga" },
  G2: { short: "G2", full: "Sadharana Gandharam", family: "Ga" },
  G3: { short: "G3", full: "Antara Gandharam", family: "Ga" },
  M1: { short: "M1", full: "Suddha Madhyamam", family: "Ma" },
  M2: { short: "M2", full: "Prati Madhyamam", family: "Ma" },
  P: { short: "P", full: "Panchamam", family: "Pa" },
  D1: { short: "D1", full: "Suddha Dhaivatam", family: "Dha" },
  D2: { short: "D2", full: "Chatusruti Dhaivatam", family: "Dha" },
  D3: { short: "D3", full: "Shatsruti Dhaivatam", family: "Dha" },
  N1: { short: "N1", full: "Suddha Nishadam", family: "Ni" },
  N2: { short: "N2", full: "Kaisiki Nishadam", family: "Ni" },
  N3: { short: "N3", full: "Kakali Nishadam", family: "Ni" },
};

/** Note: R2≡G1, R3≡G2, D2≡N1, D3≡N2 as pitch classes in 12-tone mapping. */
export const VARIANT_GROUPS = [
  { family: "Ri", ids: ["R1", "R2", "R3"] as SwaraId[] },
  { family: "Ga", ids: ["G1", "G2", "G3"] as SwaraId[] },
  { family: "Ma", ids: ["M1", "M2"] as SwaraId[] },
  { family: "Dha", ids: ["D1", "D2", "D3"] as SwaraId[] },
  { family: "Ni", ids: ["N1", "N2", "N3"] as SwaraId[] },
];

export function formatSwaras(swaras: SwaraId[]): string {
  return formatSwarasWithOctave(swaras);
}

/** Label with tara-stayi Sa shown as Ṡ (and similarly for notes above middle Sa). */
export function formatSwaraLabel(swara: SwaraId, octave: number): string {
  if (octave <= 0) return swara;
  if (octave === 1) return `${swara}̇`;
  return `${swara}(+${octave})`;
}

export function formatSwarasWithOctave(swaras: SwaraId[]): string {
  return resolveSequence(swaras)
    .map(({ swara, octave }) => formatSwaraLabel(swara, octave))
    .join(" ");
}

export function uniqueScaleSwaras(arohana: SwaraId[], avarohana: SwaraId[]): SwaraId[] {
  const order: SwaraId[] = [
    "S",
    "R1",
    "R2",
    "R3",
    "G1",
    "G2",
    "G3",
    "M1",
    "M2",
    "P",
    "D1",
    "D2",
    "D3",
    "N1",
    "N2",
    "N3",
  ];
  const set = new Set([...arohana, ...avarohana]);
  return order.filter((s) => set.has(s));
}

export type ResolvedSwara = {
  swara: SwaraId;
  /** 0 = madhya stayi, 1 = tara (upper), -1 = mandra (lower). */
  octave: number;
  /** Absolute semitones from madhya Sa. */
  semitones: number;
};

/**
 * Resolve octave for a phrase so consecutive notes take the nearest pitch,
 * preferring melodic continuity. Aarohana … N → S picks tara Sa; avarohana
 * starting S → N/D starts on tara Sa.
 */
export function resolveSequence(swaras: SwaraId[]): ResolvedSwara[] {
  if (swaras.length === 0) return [];

  const startOctave = inferStartOctave(swaras);
  const out: ResolvedSwara[] = [];
  let lastAbs = SWARA_SEMITONES[swaras[0]] + startOctave * 12;

  out.push({
    swara: swaras[0],
    octave: startOctave,
    semitones: lastAbs,
  });

  for (let i = 1; i < swaras.length; i++) {
    const swara = swaras[i];
    const pc = SWARA_SEMITONES[swara];
    const baseOct = Math.floor(lastAbs / 12);
    let best = pc + baseOct * 12;
    let bestDist = Math.abs(best - lastAbs);

    for (const o of [baseOct - 1, baseOct, baseOct + 1, baseOct + 2]) {
      const cand = pc + o * 12;
      const dist = Math.abs(cand - lastAbs);
      if (dist < bestDist) {
        best = cand;
        bestDist = dist;
      }
    }

    lastAbs = best;
    out.push({
      swara,
      octave: Math.floor(best / 12),
      semitones: best,
    });
  }

  return out;
}

function inferStartOctave(swaras: SwaraId[]): number {
  if (swaras.length < 2) return 0;
  if (swaras[0] !== "S") return 0;
  const second = SWARA_SEMITONES[swaras[1]];
  // Avarohana / descent: Sa then Ni/Dha (high pitch class) → start on tara Sa.
  if (second >= 8) return 1;
  return 0;
}

export function swaraFrequency(swara: SwaraId, saHz = 261.63, octave = 0): number {
  return saHz * Math.pow(2, (SWARA_SEMITONES[swara] + octave * 12) / 12);
}

export function semitoneFrequency(semitones: number, saHz = 261.63): number {
  return saHz * Math.pow(2, semitones / 12);
}
