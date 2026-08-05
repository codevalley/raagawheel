/**
 * Core domain types for Carnatic raga data.
 *
 * Two layers:
 *  - `*Content` types: what curators hand-author in src/data (string scales,
 *    minimal structure, source comments allowed).
 *  - Assembled `Raga` types: what the app consumes — parsed, derived, frozen.
 *    Assembly happens once at module load in src/data/index.ts.
 */

// ── Swaras ──────────────────────────────────────────────────────────────

export const SWARASTHANAS = [
  "S", "R1", "R2", "R3", "G1", "G2", "G3", "M1", "M2",
  "P", "D1", "D2", "D3", "N1", "N2", "N3",
] as const;
export type Swarasthana = (typeof SWARASTHANAS)[number];

/**
 * Semitone offset from Sa. Enharmonic pairs share a position:
 * R2/G1=2, R3/G2=3, D2/N1=9, D3/N2=10 — sixteen names on twelve keys.
 */
export const SEMITONE: Record<Swarasthana, number> = {
  S: 0, R1: 1, R2: 2, R3: 3, G1: 2, G2: 3, G3: 4,
  M1: 5, M2: 6, P: 7, D1: 8, D2: 9, D3: 10, N1: 9, N2: 10, N3: 11,
};

export const SWARA_NAMES: Record<Swarasthana, string> = {
  S: "Shadjam",
  R1: "Suddha Rishabham",
  R2: "Chatusruti Rishabham",
  R3: "Shatsruti Rishabham",
  G1: "Suddha Gandharam",
  G2: "Sadharana Gandharam",
  G3: "Antara Gandharam",
  M1: "Suddha Madhyamam",
  M2: "Prati Madhyamam",
  P: "Panchamam",
  D1: "Suddha Dhaivatam",
  D2: "Chatusruti Dhaivatam",
  D3: "Shatsruti Dhaivatam",
  N1: "Suddha Nishadam",
  N2: "Kaisiki Nishadam",
  N3: "Kakali Nishadam",
};

/** One note in a phrase. octave: -1 mandra, 0 madhya, +1 tara. */
export interface SwaraToken {
  swara: Swarasthana;
  octave: number;
}

/**
 * Scale mini-notation, space-separated tokens:
 *   "S R2 G3 P D2 S'"                    — Mohanam aroha (' = tara sthayi)
 *   "S' N2 P D2 N2 P M1 R2 G2 R2 S"      — Sri raga avaroha (vakra)
 *   "N3, S R2 ..."                       — , = mandra sthayi
 */
export type ScaleString = string;

// ── Chakras & Katapayadi ────────────────────────────────────────────────

export interface Chakra {
  index: number; // 1..12
  name: string;
  /** The counting mnemonic: Indu = the one moon, Netra = two eyes, ... */
  meaning: string;
  melaRange: readonly [number, number];
}

export interface KatapayadiSyllable {
  /** As written in the name, e.g. "Dhee" of Dheerasankarabharanam. */
  syllable: string;
  /** The counting consonant in canonical romanization, e.g. "dha". */
  consonant: string;
  /** 0..9 per the ka-ta-pa-ya table. Validator re-derives from `consonant`. */
  digit: number;
}

export interface KatapayadiBreakdown {
  /** Exactly the first two syllables. Hand-authored — Sanskrit syllabification is not safely automatable. */
  syllables: readonly [KatapayadiSyllable, KatapayadiSyllable];
  /** e.g. "conjunct 'ksha' — the last consonant of the cluster counts" */
  note?: string;
}

// ── Songs & trivia ──────────────────────────────────────────────────────

export type SongType =
  | "krithi" | "varnam" | "film" | "bhajan" | "thillana"
  | "javali" | "padam" | "devotional" | "folk";

export interface Song {
  title: string;
  type: SongType;
  /** Music director for film songs. */
  composer: string;
  language: string;
  tala?: string;
  film?: { name: string; year?: number };
  notableRenditions?: string;
  trivia?: string;
  /** Override for the search-link query when title alone is ambiguous. */
  searchQueryOverride?: string;
}

export interface TriviaEntry {
  text: string;
  /** Curator citation; kept for verification, may be shown in UI. */
  source?: string;
}

// ── Characteristics (only where traditionally documented) ───────────────

export interface RagaCharacteristics {
  jeevaSwaras?: Swarasthana[];
  nyasaSwaras?: Swarasthana[];
  grahaSwaras?: Swarasthana[];
  /** Characteristic phrases (prayogas) in scale mini-notation. */
  prayogas?: { phrase: ScaleString; note?: string }[];
  gamakaNotes?: string;
  timeOfDay?: "morning" | "midday" | "evening" | "night" | "anytime";
  rasa?: string[];
  /** One-line lay description of the raga's mood. */
  mood?: string;
}

// ── Content types (hand-authored in src/data) ───────────────────────────

export interface MelaContent {
  melaNumber: number; // 1..72 — the primary key
  /** The formal (katapayadi-bearing) sampurna-mela name. */
  name: string;
  /** The colloquial concert name, when it differs (Sankarabharanam, Kalyani, Todi…). */
  popularName?: string;
  alternateNames?: string[];
  slug: string;
  katapayadi: KatapayadiBreakdown;
  /** Transcribed from sources; validator asserts it EQUALS the derivation. */
  aroha: ScaleString;
  avaroha: ScaleString;
  characteristics?: RagaCharacteristics;
  songs: Song[];
  trivia?: TriviaEntry[];
}

export interface JanyaContent {
  name: string;
  alternateNames?: string[];
  slug: string;
  /** Parent mela — linkage is by number, the domain's own immutable key. */
  melaNumber: number;
  aroha: ScaleString; // not derivable — hand-authored
  avaroha: ScaleString;
  /** Bhashanga: swaras outside the parent scale; must not appear in parent. */
  anyaSwaras?: Swarasthana[];
  /** For anya swaras used only in prayogas (e.g. Kapi's occasional G3). */
  anyaSwaraNote?: string;
  characteristics?: RagaCharacteristics;
  songs: Song[];
  trivia?: TriviaEntry[];
}

// ── Assembled types (what the app consumes) ─────────────────────────────

interface RagaBase {
  slug: string;
  /** Formal name (for melakartas, the katapayadi-bearing one). */
  name: string;
  /** What people actually call it — the default everywhere in the UI. */
  displayName: string;
  alternateNames: string[];
  arohaTokens: SwaraToken[];
  avarohaTokens: SwaraToken[];
  arohaString: ScaleString;
  avarohaString: ScaleString;
  /** Distinct swaras incl. anya, sorted by semitone. */
  swarasUsed: Swarasthana[];
  characteristics: RagaCharacteristics;
  songs: Song[];
  trivia: TriviaEntry[];
}

export interface MelakartaRaga extends RagaBase {
  kind: "melakarta";
  melaNumber: number;
  chakra: Chakra;
  positionInChakra: number; // 1..6
  katapayadi: KatapayadiBreakdown;
  /** [S, R, G, M, P, D, N] — derived from melaNumber, never authored. */
  melaSwaras: readonly [
    Swarasthana, Swarasthana, Swarasthana, Swarasthana,
    Swarasthana, Swarasthana, Swarasthana,
  ];
  /** Reverse index, computed at assembly. */
  janyaSlugs: string[];
}

export interface JanyaRaga extends RagaBase {
  kind: "janya";
  parentMelaNumber: number;
  anyaSwaras: Swarasthana[];
  anyaSwaraNote?: string;
  /** Distinct swara counts: 5 = audava, 6 = shadava, 7 = sampurna. */
  arohaCount: number;
  avarohaCount: number;
  isVakraAroha: boolean;
  isVakraAvaroha: boolean;
  isBhashanga: boolean;
  /** e.g. "Audava–Sampurna (vakra avaroha) · Bhashanga" */
  classificationLabel: string;
}

export type Raga = MelakartaRaga | JanyaRaga;

// ── Slim client projection for the wheel ────────────────────────────────

export interface WheelEntry {
  melaNumber: number;
  name: string;
  displayName: string;
  slug: string;
  chakraIndex: number;
  positionInChakra: number;
  /** 7 pitch classes for hover preview / mini strip. */
  semitones: number[];
}
