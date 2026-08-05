import { SEMITONE, type ScaleString, type SwaraToken, type Swarasthana } from "./types";

/** Token grammar: swara + optional octave mark ('' ' , ,,). */
const TOKEN_RE = /^(S|R[123]|G[123]|M[12]|P|D[123]|N[123])(''|'|,,|,)?$/;

const OCTAVE_MARK: Record<string, number> = { "''": 2, "'": 1, ",,": -2, ",": -1 };

export function parsePhrase(scale: ScaleString): SwaraToken[] {
  return scale
    .trim()
    .split(/\s+/)
    .map((raw) => {
      const m = TOKEN_RE.exec(raw);
      if (!m) throw new Error(`Invalid swara token "${raw}" in "${scale}"`);
      return { swara: m[1] as Swarasthana, octave: m[2] ? OCTAVE_MARK[m[2]] : 0 };
    });
}

/** Absolute semitone from madhya Sa — the only thing audio needs from us. */
export const tokenSemitone = (t: SwaraToken): number => SEMITONE[t.swara] + 12 * t.octave;

/** A phrase is vakra in a direction if any step moves against it. */
export function isVakra(tokens: SwaraToken[], dir: "up" | "down"): boolean {
  for (let i = 1; i < tokens.length; i++) {
    const step = tokenSemitone(tokens[i]) - tokenSemitone(tokens[i - 1]);
    if (dir === "up" ? step < 0 : step > 0) return true;
  }
  return false;
}

/** Distinct swaras, octave-blind, sorted by pitch class. 5=audava, 6=shadava, 7=sampurna. */
export function distinctSwaras(tokens: SwaraToken[]): Swarasthana[] {
  return [...new Set(tokens.map((t) => t.swara))].sort((a, b) => SEMITONE[a] - SEMITONE[b]);
}

const COUNT_LABEL: Record<number, string> = { 5: "Audava", 6: "Shadava", 7: "Sampurna" };
export const scaleSizeLabel = (count: number): string => COUNT_LABEL[count] ?? `${count}-note`;

/** Re-serialize a token to notation, e.g. {swara:"S",octave:1} → "S'". */
export function tokenToString(t: SwaraToken): string {
  const mark = t.octave === 2 ? "''" : t.octave === 1 ? "'" : t.octave === -2 ? ",," : t.octave === -1 ? "," : "";
  return t.swara + mark;
}
