"use client";

/**
 * The docked capsule beside the wheel: identity, the katapayadi decode,
 * a playable scale, and the door to the full raga page.
 */
import Link from "next/link";
import { decodeKatapayadi } from "@/lib/carnatic/katapayadi";
import { melaColorVar } from "@/lib/carnatic/color";
import { parsePhrase } from "@/lib/carnatic/swara";
import { SwaraGlyph } from "@/components/swara/SwaraGlyph";
import { tokensToNotes, useRagaPlayer } from "@/hooks/useRagaPlayer";
import type { PanelData } from "./panelData";

function ScaleLine({
  label,
  scale,
  track,
  accent,
  player,
}: {
  label: string;
  scale: string;
  track: string;
  accent: string;
  player: ReturnType<typeof useRagaPlayer>;
}) {
  const tokens = parsePhrase(scale);
  const isActive = player.activeTrack === track;
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={`${isActive ? "Stop" : "Play"} ${label}`}
        onClick={() =>
          isActive ? player.stop() : void player.playSequence(track, tokensToNotes(tokens))
        }
        className="w-6 shrink-0 text-left text-xs text-zari-hi"
      >
        {isActive ? "■" : "▶"}
      </button>
      <p className="swara m-0 flex flex-wrap gap-x-2 text-[0.95rem]">
        {tokens.map((t, i) => (
          <span
            key={i}
            className={isActive && player.activeIndex === i ? "rounded px-0.5 text-night" : ""}
            style={isActive && player.activeIndex === i ? { background: accent } : undefined}
          >
            <SwaraGlyph token={t} />
          </span>
        ))}
      </p>
    </div>
  );
}

export function RagaPanel({ data }: { data: PanelData }) {
  const player = useRagaPlayer();
  const accent = melaColorVar(data.melaNumber);
  const [first, second] = data.katapayadi.syllables;
  const rest = data.name.toLowerCase().startsWith((first.syllable + second.syllable).toLowerCase())
    ? data.name.slice(first.syllable.length + second.syllable.length)
    : null;

  return (
    <aside
      key={data.melaNumber}
      className="w-full max-w-sm rounded-brand border border-hairline-strong bg-rosewood p-5"
      aria-label={`Selected raga: ${data.name}`}
    >
      <p className="eyebrow m-0 flex items-center gap-2">
        <span
          aria-hidden
          className="inline-block h-2.5 w-2.5 rounded-[2px]"
          style={{ background: accent }}
        />
        Mela {data.melaNumber} · {data.chakraName} · {data.melaNumber <= 36 ? "M₁" : "M₂"}
      </p>

      <h2 className="display mt-2 text-[1.6rem] leading-tight text-ivory">
        {rest !== null ? (
          <>
            <span className="text-zari-hi">{first.syllable}</span>
            <span aria-hidden className="text-ivory-mut">·</span>
            <span className="text-zari-hi">{second.syllable}</span>
            {rest}
          </>
        ) : (
          data.name
        )}
      </h2>

      {/* The name decodes itself */}
      <p className="swara mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ivory-mut">
        <span>{first.consonant} = {first.digit}</span>
        <span>·</span>
        <span>{second.consonant} = {second.digit}</span>
        <span aria-hidden>⟶ reversed ⟶</span>
        <span className="display text-base text-zari-hi">{decodeKatapayadi(data.katapayadi)}</span>
        <Link href="/katapayadi" className="text-xs underline decoration-hairline-strong underline-offset-2 hover:text-ivory">
          why?
        </Link>
      </p>

      <div className="mt-4 flex flex-col gap-2 border-t border-hairline pt-4">
        <ScaleLine label="arohana" scale={data.arohaString} track={`panel-aroha-${data.melaNumber}`} accent={accent} player={player} />
        <ScaleLine label="avarohana" scale={data.avarohaString} track={`panel-avaroha-${data.melaNumber}`} accent={accent} player={player} />
      </div>

      <Link
        href={`/raga/${data.slug}`}
        className="mt-5 block rounded-brand border border-zari px-4 py-2 text-center text-sm text-zari-hi transition-colors hover:bg-rosewood-2"
      >
        Open {data.name} →
      </Link>
    </aside>
  );
}
