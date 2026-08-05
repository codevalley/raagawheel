"use client";

/**
 * The playable heart of a raga page: SwaraStrip + aroha/avaroha rows +
 * characteristic-phrase chips, sharing ONE player so only one sequence
 * sounds at a time and the strip lights whatever is playing.
 */
import type { Raga } from "@/lib/carnatic/types";
import { parsePhrase, tokenSemitone } from "@/lib/carnatic/swara";
import { SwaraGlyph } from "@/components/swara/SwaraGlyph";
import { SwaraStrip } from "@/components/swara/SwaraStrip";
import { tokensToNotes, useRagaPlayer } from "@/hooks/useRagaPlayer";
import type { SwaraToken } from "@/lib/carnatic/types";

function PlayIcon({ playing }: { playing: boolean }) {
  return (
    <span aria-hidden className="inline-block w-3 text-center text-[0.7rem]">
      {playing ? "■" : "▶"}
    </span>
  );
}

function TokenRow({
  label,
  track,
  tokens,
  accentVar,
  player,
}: {
  label: string;
  track: string;
  tokens: SwaraToken[];
  accentVar: string;
  player: ReturnType<typeof useRagaPlayer>;
}) {
  const isActive = player.activeTrack === track;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <button
        type="button"
        onClick={() =>
          isActive ? player.stop() : void player.playSequence(track, tokensToNotes(tokens))
        }
        className="eyebrow flex min-w-[7.5rem] items-center gap-2 rounded-brand border border-hairline-strong bg-rosewood px-3 py-1.5 transition-colors hover:border-zari"
        aria-label={`${isActive ? "Stop" : "Play"} ${label}`}
      >
        <PlayIcon playing={isActive} />
        {label}
      </button>
      <p className="swara m-0 flex flex-wrap gap-x-3 gap-y-1 text-[1.05rem]">
        {tokens.map((t, i) => (
          <span
            key={i}
            className={`rounded px-0.5 transition-colors duration-100 ${
              isActive && player.activeIndex === i ? "text-night" : ""
            }`}
            style={isActive && player.activeIndex === i ? { background: accentVar } : undefined}
          >
            <SwaraGlyph token={t} />
          </span>
        ))}
      </p>
    </div>
  );
}

export function RagaSoundSection({ raga, accentVar }: { raga: Raga; accentVar: string }) {
  const player = useRagaPlayer();

  const tracks: Record<string, SwaraToken[]> = {
    aroha: raga.arohaTokens,
    avaroha: raga.avarohaTokens,
  };
  const prayogas = raga.characteristics.prayogas ?? [];
  prayogas.forEach((p, i) => {
    tracks[`prayoga-${i}`] = parsePhrase(p.phrase);
  });

  const activeTokens = player.activeTrack ? tracks[player.activeTrack] : null;
  const activeSemitone =
    activeTokens && player.activeIndex !== null && activeTokens[player.activeIndex]
      ? tokenSemitone(activeTokens[player.activeIndex])
      : null;

  return (
    <div className="flex flex-col gap-6">
      <SwaraStrip
        swarasUsed={raga.swarasUsed}
        anyaSwaras={raga.kind === "janya" ? raga.anyaSwaras : []}
        accentVar={accentVar}
        activeSemitone={activeSemitone}
        onTap={(s, o) => player.tapSwara(s, o)}
      />
      <div className="flex flex-col gap-3">
        <TokenRow label="Arohana" track="aroha" tokens={raga.arohaTokens} accentVar={accentVar} player={player} />
        <TokenRow label="Avarohana" track="avaroha" tokens={raga.avarohaTokens} accentVar={accentVar} player={player} />
      </div>
      {prayogas.length > 0 && (
        <div>
          <p className="eyebrow mb-2">Characteristic phrases</p>
          <div className="flex flex-col gap-2">
            {prayogas.map((p, i) => (
              <div key={i} className="flex flex-wrap items-baseline gap-x-3">
                <TokenRow
                  label={`Phrase ${i + 1}`}
                  track={`prayoga-${i}`}
                  tokens={tracks[`prayoga-${i}`]}
                  accentVar={accentVar}
                  player={player}
                />
                {p.note && <span className="text-sm text-ivory-mut">{p.note}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
