"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CHAKRA_NAMES, type Raga } from "@/lib/music/types";
import { formatSwaras } from "@/lib/music/swaras";
import { nameToMelaNumber } from "@/lib/music/katapayadi";
import { ragaDisplayNames } from "@/lib/music/display";

type Props = {
  melas: Raga[];
};

const SIZE = 640;
const CX = SIZE / 2;
const CY = SIZE / 2;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function wedgePath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  a0: number,
  a1: number,
) {
  const p0 = polar(cx, cy, rOuter, a0);
  const p1 = polar(cx, cy, rOuter, a1);
  const p2 = polar(cx, cy, rInner, a1);
  const p3 = polar(cx, cy, rInner, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return [
    `M ${p0.x} ${p0.y}`,
    `A ${rOuter} ${rOuter} 0 ${large} 1 ${p1.x} ${p1.y}`,
    `L ${p2.x} ${p2.y}`,
    `A ${rInner} ${rInner} 0 ${large} 0 ${p3.x} ${p3.y}`,
    "Z",
  ].join(" ");
}

export function RaagaWheel({ melas }: Props) {
  const [selected, setSelected] = useState<number | null>(29);
  const [hovered, setHovered] = useState<number | null>(null);
  const [showKata, setShowKata] = useState(false);

  const byNumber = useMemo(() => {
    const m = new Map<number, Raga>();
    for (const r of melas) {
      if (r.melaNumber) m.set(r.melaNumber, r);
    }
    return m;
  }, [melas]);

  const activeNum = hovered ?? selected;
  const active = activeNum ? byNumber.get(activeNum) : undefined;
  const display = active ? ragaDisplayNames(active) : null;
  const kata = active ? nameToMelaNumber(active.name) : null;

  const rOuter = 300;
  const rInner = 118;
  const rMid = (rOuter + rInner) / 2;
  const slice = 360 / 72;

  return (
    <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[min(100%,640px)]">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="h-full w-full drop-shadow-[0_0_40px_rgba(61,184,168,0.12)]"
          role="img"
          aria-label="Melakarta raga wheel with 72 melas in 12 chakras"
        >
          <circle
            cx={CX}
            cy={CY}
            r={rOuter + 8}
            fill="none"
            stroke="var(--line)"
            strokeWidth={1}
            className="wheel-ring-glow"
          />
          <circle cx={CX} cy={CY} r={rInner - 12} fill="var(--bg-elevated)" stroke="var(--line-strong)" />

          {Array.from({ length: 72 }, (_, i) => {
            const n = i + 1;
            const a0 = i * slice;
            const a1 = (i + 1) * slice;
            const isM2 = n > 36;
            const isActive = activeNum === n;
            const isSel = selected === n;
            const fill = isActive
              ? isM2
                ? "rgba(226,168,106,0.45)"
                : "rgba(61,184,168,0.45)"
              : isM2
                ? "rgba(226,168,106,0.12)"
                : "rgba(61,184,168,0.12)";
            const stroke = isSel ? (isM2 ? "var(--warm)" : "var(--accent)") : "var(--line)";
            const labelPos = polar(CX, CY, rMid, a0 + slice / 2);

            return (
              <g key={n}>
                <path
                  d={wedgePath(CX, CY, rInner, rOuter, a0, a1)}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isSel ? 1.6 : 0.6}
                  className="cursor-pointer transition-[fill] duration-200"
                  aria-label={`Mela ${n} ${(() => {
                    const r = byNumber.get(n);
                    if (!r) return "";
                    const d = ragaDisplayNames(r);
                    return d.title;
                  })()}`}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(n)}
                />
                {n % 6 === 1 && (
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="var(--faint)"
                    fontSize={9}
                    fontFamily="var(--font-ibm-plex-mono)"
                    pointerEvents="none"
                  >
                    {Math.ceil(n / 6)}
                  </text>
                )}
                {(isActive || isSel) && (
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="var(--ink)"
                    fontSize={10}
                    fontFamily="var(--font-ibm-plex-mono)"
                    fontWeight={600}
                    pointerEvents="none"
                  >
                    {n}
                  </text>
                )}
              </g>
            );
          })}

          {/* Chakra tick labels around outer rim */}
          {CHAKRA_NAMES.map((name, idx) => {
            const midAngle = idx * 30 + 15;
            const p = polar(CX, CY, rOuter + 22, midAngle);
            return (
              <text
                key={name}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--muted)"
                fontSize={8}
                letterSpacing="0.08em"
                className="uppercase"
              >
                {name}
              </text>
            );
          })}

          <text
            x={CX}
            y={CY - 8}
            textAnchor="middle"
            fill="var(--ink)"
            fontSize={18}
            fontWeight={600}
          >
            RaagaWheel
          </text>
          <text
            x={CX}
            y={CY + 14}
            textAnchor="middle"
            fill="var(--faint)"
            fontSize={10}
            letterSpacing="0.16em"
          >
            72 MELAS · 12 CHAKRAS
          </text>
        </svg>
      </div>

      <aside className="animate-fade-up rounded-lg border border-line bg-bg-panel/80 p-5 backdrop-blur">
        {active ? (
          <>
            <p className="swara-chip text-xs text-faint">
              MELA {String(active.melaNumber).padStart(2, "0")} · CHAKRA {active.chakra}{" "}
              {active.chakra ? CHAKRA_NAMES[active.chakra - 1] : ""}
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              {display?.title}
            </h2>
            {display?.katapayadi && (
              <p className="mt-1 text-sm text-muted">
                Katapayadi: <span className="text-ink">{display.katapayadi}</span>
              </p>
            )}
            <p className="mt-3 swara-chip text-sm text-accent">{formatSwaras(active.arohana)}</p>
            <p className="mt-1 swara-chip text-sm text-muted">{formatSwaras(active.avarohana)}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span
                className={`rounded border px-2 py-0.5 text-xs ${
                  (active.melaNumber ?? 0) > 36
                    ? "border-warm/40 text-warm"
                    : "border-accent/40 text-accent"
                }`}
              >
                {(active.melaNumber ?? 0) > 36 ? "Prati Ma (M2)" : "Suddha Ma (M1)"}
              </span>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Link
                href={`/ragas/${active.slug}`}
                className="inline-flex items-center justify-center rounded border border-accent bg-accent/15 px-3 py-2 text-sm text-accent transition-colors hover:bg-accent/25"
              >
                Open raga page
              </Link>
              <button
                type="button"
                onClick={() => setShowKata((v) => !v)}
                className="rounded border border-line-strong px-3 py-2 text-sm text-muted hover:text-ink"
              >
                {showKata ? "Hide" : "Show"} katapayadi decode
              </button>
            </div>
            {showKata && kata && (
              <div className="mt-4 space-y-1 border-t border-line pt-4 text-sm text-muted">
                {kata.explanation.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <Link href="/learn/katapayadi" className="mt-2 inline-block text-accent hover:underline">
                  Learn the full system →
                </Link>
              </div>
            )}
          </>
        ) : (
          <p className="text-muted">Hover or tap a wedge to inspect a melakarta.</p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-2 border-t border-line pt-4 text-xs text-faint">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-accent/60" /> Suddha Ma · 1–36
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-warm/60" /> Prati Ma · 37–72
          </div>
        </div>
      </aside>
    </div>
  );
}
