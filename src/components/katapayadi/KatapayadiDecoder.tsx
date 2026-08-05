"use client";

/**
 * The live decoder: pick any of the 72 names and watch it decode.
 * Runs entirely from hand-authored syllable data — never string-parsing.
 */
import { useState } from "react";
import Link from "next/link";
import { decodeKatapayadi } from "@/lib/carnatic/katapayadi";
import { melaColorVar } from "@/lib/carnatic/color";
import type { KatapayadiBreakdown } from "@/lib/carnatic/types";

export interface DecoderEntry {
  melaNumber: number;
  name: string;
  slug: string;
  katapayadi: KatapayadiBreakdown;
}

export function KatapayadiDecoder({ entries }: { entries: DecoderEntry[] }) {
  const [selected, setSelected] = useState(22);
  const entry = entries.find((e) => e.melaNumber === selected)!;
  const [first, second] = entry.katapayadi.syllables;

  return (
    <div className="rounded-brand border border-hairline-strong bg-rosewood p-6">
      <label className="eyebrow block" htmlFor="decoder-select">
        Pick a mela name
      </label>
      <select
        id="decoder-select"
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
        className="mt-2 w-full max-w-sm rounded-brand border border-hairline-strong bg-rosewood-2 px-3 py-2 text-ivory"
      >
        {entries.map((e) => (
          <option key={e.melaNumber} value={e.melaNumber}>
            {e.melaNumber} — {e.name}
          </option>
        ))}
      </select>

      <div key={entry.melaNumber} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
        <p className="display m-0 text-2xl sm:text-3xl">
          <span className="text-zari-hi">{first.syllable}</span>
          <span aria-hidden className="text-ivory-mut">·</span>
          <span className="text-zari-hi">{second.syllable}</span>
          <span className="text-ivory-mut">…</span>
        </p>
        <div className="flex items-center gap-3">
          {[first, second].map((s, i) => (
            <span
              key={i}
              className="display grid h-12 w-12 place-items-center rounded-brand border text-xl"
              style={{ borderColor: melaColorVar(entry.melaNumber) }}
            >
              {s.digit}
              <span className="sr-only">from consonant {s.consonant}</span>
            </span>
          ))}
          <span aria-hidden className="text-ivory-mut">⟶ reversed ⟶</span>
          <span className="display text-3xl text-zari-hi">{decodeKatapayadi(entry.katapayadi)}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-ivory-mut">
        {first.syllable} carries <span className="swara text-ivory">{first.consonant}</span> ={" "}
        {first.digit}, {second.syllable} carries{" "}
        <span className="swara text-ivory">{second.consonant}</span> = {second.digit}; read the two
        digits backwards to get the mela number.
        {entry.katapayadi.note && <> {entry.katapayadi.note}</>}
      </p>
      <Link
        href={`/raga/${entry.slug}`}
        className="mt-4 inline-block text-sm text-zari-hi underline decoration-hairline-strong underline-offset-2 hover:text-ivory"
      >
        Open {entry.name} →
      </Link>
    </div>
  );
}
