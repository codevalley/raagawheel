"use client";

/**
 * Client island for /swaras: the full 16-name strip with every key lit,
 * plus a tap-to-hear table of the swarasthanas with their JI ratios.
 */
import { SWARASTHANAS, SWARA_NAMES, SEMITONE } from "@/lib/carnatic/types";
import { JI_RATIOS, jiCentsOffset } from "@/lib/audio/tuning";
import { SwaraStrip } from "./SwaraStrip";
import { useRagaPlayer } from "@/hooks/useRagaPlayer";

export function SwaraExplorer() {
  const player = useRagaPlayer();
  return (
    <div className="flex flex-col gap-10">
      <SwaraStrip
        swarasUsed={SWARASTHANAS}
        accentVar="var(--zari-hi)"
        onTap={(s, o) => player.tapSwara(s, o)}
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[38rem] border-collapse text-sm">
          <thead>
            <tr className="text-left">
              <th className="eyebrow border-b border-hairline-strong pb-2 pr-3 font-semibold">Swara</th>
              <th className="eyebrow border-b border-hairline-strong pb-2 pr-3 font-semibold">Name</th>
              <th className="eyebrow border-b border-hairline-strong pb-2 pr-3 font-semibold">Position</th>
              <th className="eyebrow border-b border-hairline-strong pb-2 pr-3 font-semibold">JI ratio</th>
              <th className="eyebrow border-b border-hairline-strong pb-2 font-semibold">vs 12-TET</th>
            </tr>
          </thead>
          <tbody>
            {SWARASTHANAS.map((s) => {
              const cents = jiCentsOffset(s);
              return (
                <tr
                  key={s}
                  className="cursor-pointer border-b border-hairline transition-colors hover:bg-rosewood"
                  onClick={() => player.tapSwara(s)}
                >
                  <td className="swara py-2 pr-3 text-zari-hi">
                    {s[0]}
                    {s.length > 1 && <sub className="text-[0.62em]">{s[1]}</sub>}
                  </td>
                  <td className="py-2 pr-3">{SWARA_NAMES[s]}</td>
                  <td className="swara py-2 pr-3 text-ivory-mut">{SEMITONE[s]}</td>
                  <td className="swara py-2 pr-3">
                    {JI_RATIOS[s][0]}/{JI_RATIOS[s][1]}
                  </td>
                  <td className="swara py-2 text-ivory-mut">
                    {cents === 0 ? "—" : `${cents > 0 ? "+" : ""}${cents.toFixed(1)}¢`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-ivory-mut">
        Tap any key or row to hear the pitch at your current śruti. Rows sharing a position number
        are the same key with two names — which name applies depends on the raga you are in.
      </p>
    </div>
  );
}
