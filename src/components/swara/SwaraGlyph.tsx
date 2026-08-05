import type { SwaraToken } from "@/lib/carnatic/types";

/**
 * One notation glyph: letter + subscript variant numeral + octave dot
 * (above for tara, below for mandra). Server-safe, purely presentational.
 */
export function SwaraGlyph({ token, className = "" }: { token: SwaraToken; className?: string }) {
  const letter = token.swara[0];
  const variant = token.swara.length > 1 ? token.swara[1] : null;
  return (
    <span className={`swara relative inline-flex items-baseline ${className}`}>
      {token.octave > 0 && (
        <span aria-hidden className="absolute -top-[0.55em] left-[0.22em] text-[0.55em] leading-none">
          •
        </span>
      )}
      {token.octave < 0 && (
        <span aria-hidden className="absolute -bottom-[0.35em] left-[0.22em] text-[0.55em] leading-none">
          •
        </span>
      )}
      {letter}
      {variant && <sub className="text-[0.62em] leading-none">{variant}</sub>}
      <span className="sr-only">
        {token.swara}
        {token.octave === 1 ? " (upper octave)" : token.octave === -1 ? " (lower octave)" : ""}
      </span>
    </span>
  );
}
