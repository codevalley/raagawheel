"use client";

/**
 * The 12-position / 16-name strip — the app's central teaching visual.
 * Each key is one semitone; enharmonic twins stack on shared keys with the
 * raga's active name bold and the unused twin ghosted. Absent keys stay
 * tappable (hearing what a raga omits teaches too).
 */
import type { Swarasthana } from "@/lib/carnatic/types";

const KEYS: { semitone: number; names: Swarasthana[]; octave: number }[] = [
  { semitone: 0, names: ["S"], octave: 0 },
  { semitone: 1, names: ["R1"], octave: 0 },
  { semitone: 2, names: ["R2", "G1"], octave: 0 },
  { semitone: 3, names: ["R3", "G2"], octave: 0 },
  { semitone: 4, names: ["G3"], octave: 0 },
  { semitone: 5, names: ["M1"], octave: 0 },
  { semitone: 6, names: ["M2"], octave: 0 },
  { semitone: 7, names: ["P"], octave: 0 },
  { semitone: 8, names: ["D1"], octave: 0 },
  { semitone: 9, names: ["D2", "N1"], octave: 0 },
  { semitone: 10, names: ["D3", "N2"], octave: 0 },
  { semitone: 11, names: ["N3"], octave: 0 },
  { semitone: 12, names: ["S"], octave: 1 },
];

function NameLabel({ name, on, accent }: { name: Swarasthana; on: boolean; accent: string }) {
  const letter = name[0];
  const variant = name.length > 1 ? name[1] : null;
  return (
    <span
      className={`swara block leading-tight ${on ? "font-semibold" : "text-ivory-mut/40"}`}
      style={on ? { color: accent } : undefined}
    >
      {letter}
      {variant && <sub className="text-[0.62em]">{variant}</sub>}
    </span>
  );
}

export function SwaraStrip({
  swarasUsed,
  anyaSwaras = [],
  accentVar,
  activeSemitone = null,
  onTap,
}: {
  swarasUsed: readonly Swarasthana[];
  anyaSwaras?: readonly Swarasthana[];
  /** CSS color for the raga's family accent, e.g. melaColorVar(22). */
  accentVar: string;
  /** Semitone (0–12) of the currently sounding note, for playback highlight. */
  activeSemitone?: number | null;
  onTap?: (swara: Swarasthana, octave: number) => void;
}) {
  const used = new Set(swarasUsed);
  const anya = new Set(anyaSwaras);
  return (
    <div className="overflow-x-auto pb-2" role="group" aria-label="Swara strip — tap a key to hear it">
      <div className="grid min-w-[46rem] grid-cols-13 gap-1">
        {KEYS.map((key) => {
          const activeName = key.names.find((n) => used.has(n));
          const lit = Boolean(activeName);
          const isAnya = key.names.some((n) => anya.has(n));
          const sounding = activeSemitone === key.semitone;
          const tapTarget = activeName ?? key.names[0];
          return (
            <button
              key={`${key.semitone}-${key.octave}`}
              type="button"
              onClick={() => onTap?.(tapTarget, key.octave)}
              aria-label={`Play ${key.names.join(" or ")}${lit ? "" : " (not in this raga)"}`}
              className={`relative rounded-brand border px-1 pb-2 pt-2.5 text-center text-[0.85rem] transition-transform duration-100 ${
                lit
                  ? "border-hairline-strong bg-rosewood-2"
                  : "border-hairline bg-rosewood text-ivory-mut"
              } ${sounding ? "scale-[1.06]" : ""}`}
              style={sounding ? { boxShadow: `inset 0 0 0 1.5px var(--zari-hi)` } : undefined}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] rounded-t-brand"
                style={{
                  background: lit ? accentVar : "transparent",
                  opacity: isAnya ? 0.55 : 1,
                }}
              />
              {key.names.map((n) => (
                <NameLabel key={n} name={n} on={used.has(n) || (anya.has(n) && lit)} accent={accentVar} />
              ))}
              {key.names.length === 1 && <span aria-hidden className="block leading-tight">&nbsp;</span>}
              {isAnya && (
                <span className="mt-0.5 block text-[0.55rem] uppercase tracking-wider text-ivory-mut">
                  anya
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
