"use client";

/**
 * The melakarta wheel. 72 wedges (5° each, mela 1 at 12 o'clock, clockwise),
 * 12 chakra arcs, the M₁/M₂ split on the vertical axis, radial name labels,
 * and the tanpura living in the hub.
 *
 * Color is pedagogy: hue = R/G family (chakras n and n+6 match — madhyama
 * partners render identically at mirrored positions), lightness = D/N step.
 *
 * Keyboard: a listbox with roving focus. ←/→ ±1 · ↑/↓ ±6 · M = madhyama
 * partner (±36) · Home/End · Enter/Space selects.
 */
import { useEffect, useRef, useState } from "react";
import type { WheelEntry } from "@/lib/carnatic/types";
import { CHAKRAS } from "@/lib/carnatic/mela";
import { familyOfMela, melaColorVar, melaInk, stepOfMela } from "@/lib/carnatic/color";
import { useRagaPlayer } from "@/hooks/useRagaPlayer";
import { arcPath, bisector, CX, CY, melaMidAngle, polar, R, wedgePath } from "./wheelGeometry";

const FAMILY_LEGEND = ["R₁G₁ lac", "R₁G₂ kumkum", "R₁G₃ turmeric", "R₂G₂ leaf", "R₂G₃ peacock", "R₃G₃ indigo"];

export function RagaWheel({
  entries,
  selected,
  onSelect,
  showLabels = true,
}: {
  entries: readonly WheelEntry[];
  selected: number | null;
  onSelect: (melaNumber: number) => void;
  /** Radial name labels — hidden on small renders where they can't be legible. */
  showLabels?: boolean;
}) {
  const player = useRagaPlayer();
  const [hovered, setHovered] = useState<number | null>(null);
  const [focusIdx, setFocusIdx] = useState<number>(selected ?? 29);
  const listboxRef = useRef<SVGSVGElement>(null);
  const byNumber = new Map(entries.map((e) => [e.melaNumber, e]));

  useEffect(() => {
    if (selected) setFocusIdx(selected);
  }, [selected]);

  const active = hovered ?? selected;
  const activeEntry = active ? byNumber.get(active) : undefined;

  function onKeyDown(e: React.KeyboardEvent<SVGSVGElement>): void {
    const step = (delta: number) => {
      e.preventDefault();
      setFocusIdx((cur) => ((cur - 1 + delta + 72) % 72) + 1);
    };
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        return step(1);
      case "ArrowLeft":
      case "ArrowUp":
        return step(-1);
      case "PageDown":
        return step(6);
      case "PageUp":
        return step(-6);
      case "m":
      case "M":
        return step(36);
      case "Home":
        e.preventDefault();
        return setFocusIdx(1);
      case "End":
        e.preventDefault();
        return setFocusIdx(72);
      case "Enter":
      case " ":
        e.preventDefault();
        return onSelect(focusIdx);
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Fixed readout — no jittery tooltips at 5° targets. */}
      <p className="swara m-0 h-6 text-sm text-ivory-mut" aria-live="polite">
        {activeEntry ? (
          <>
            <span className="text-zari-hi">{activeEntry.melaNumber}</span>
            {" · "}
            <span className="text-ivory">{activeEntry.name}</span>
            {" · "}
            {CHAKRAS[activeEntry.chakraIndex - 1].name}
            {" · "}
            {activeEntry.melaNumber <= 36 ? "M₁" : "M₂"}
          </>
        ) : (
          "Hover, tap, or arrow through the wheel"
        )}
      </p>

      <svg
        ref={listboxRef}
        viewBox="0 0 720 720"
        className="w-full max-w-[min(88vw,44rem)] select-none"
        role="listbox"
        aria-label="Melakarta wheel: 72 ragas in 12 chakras. Left/right arrows step one mela, PageUp/PageDown a chakra, M jumps to the madhyama partner."
        aria-activedescendant={`mela-${focusIdx}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Madhyama axis + outer rim */}
        <line x1={CX} y1={10} x2={CX} y2={710} stroke="var(--hairline)" strokeDasharray="2 6" />
        <circle cx={CX} cy={CY} r={R.labelInner - 4} fill="none" stroke="var(--hairline)" />
        <text x={706} y={CY + 4} textAnchor="end" fill="var(--ivory-mut)" fontSize={13}>
          M₁ · 1–36
        </text>
        <text x={14} y={CY + 4} fill="var(--ivory-mut)" fontSize={13}>
          M₂ · 37–72
        </text>

        {/* 72 mela wedges */}
        {entries.map((e) => {
          const n = e.melaNumber;
          const a0 = (n - 1) * 5;
          const a1 = n * 5;
          const isSelected = selected === n;
          const isHovered = hovered === n;
          const isFocused = focusIdx === n;
          const [bx, by] = bisector(n);
          const pull = isSelected ? 8 : isHovered ? 4 : 0;
          return (
            <g
              key={n}
              id={`mela-${n}`}
              role="option"
              aria-selected={isSelected}
              aria-label={`Mela ${n}, ${e.name}. ${CHAKRAS[e.chakraIndex - 1].name} chakra, ${n <= 36 ? "suddha" : "prati"} madhyama.`}
              style={{
                transform: `translate(${bx * pull}px, ${by * pull}px)`,
                transition: "transform 150ms ease-out",
              }}
            >
              <path
                d={wedgePath(R.wedgeInner, R.wedgeOuter, a0, a1)}
                fill={melaColorVar(n)}
                stroke={isSelected || isFocused ? "var(--zari-hi)" : "var(--night)"}
                strokeWidth={isSelected ? 2.4 : isFocused ? 1.8 : 1.1}
                opacity={active && !isSelected && !isHovered ? 0.55 : 1}
                className="cursor-pointer"
                onMouseEnter={() => setHovered(n)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onSelect(n)}
              />
              {(isSelected || isHovered || isFocused) && (
                <text
                  x={polar(197, melaMidAngle(n))[0]}
                  y={polar(197, melaMidAngle(n))[1]}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={melaInk(n)}
                  fontSize={13}
                  fontFamily="var(--font-eczar), serif"
                  fontWeight={600}
                  pointerEvents="none"
                >
                  {n}
                </text>
              )}
            </g>
          );
        })}

        {/* Chakra ring with curved names */}
        {CHAKRAS.map((c, i) => {
          const b0 = i * 30;
          const b1 = b0 + 30;
          const mid = b0 + 15;
          const flip = mid > 95 && mid < 265;
          return (
            <g key={c.name}>
              <path
                d={wedgePath(R.chakraInner, R.chakraOuter, b0, b1)}
                fill={i % 2 ? "var(--rosewood-2)" : "var(--rosewood)"}
                stroke="var(--night)"
                strokeWidth={1.1}
              />
              <path id={`chakra-arc-${i}`} d={arcPath(flip ? 112 : 128, b0 + 2, b1 - 2, flip)} fill="none" />
              <text
                fill="var(--zari)"
                fontSize={13.5}
                letterSpacing="0.12em"
                fontWeight={600}
              >
                <textPath href={`#chakra-arc-${i}`} startOffset="50%" textAnchor="middle">
                  {c.name.toUpperCase()}
                </textPath>
              </text>
            </g>
          );
        })}

        {/* Radial name labels, flipped on the left half so nothing reads upside-down */}
        {showLabels &&
          entries.map((e) => {
            const n = e.melaNumber;
            const mid = melaMidAngle(n);
            const flip = mid > 180;
            const [x, y] = polar(R.labelInner + 2, mid);
            const rotate = flip ? mid + 90 : mid - 90;
            return (
              <text
                key={`label-${n}`}
                x={x}
                y={y}
                fontSize={10.5}
                fill={active === n ? "var(--ivory)" : "var(--ivory-mut)"}
                textAnchor={flip ? "end" : "start"}
                dominantBaseline="middle"
                transform={`rotate(${rotate} ${x} ${y})`}
                className="cursor-pointer"
                onClick={() => onSelect(n)}
                onMouseEnter={() => setHovered(n)}
                onMouseLeave={() => setHovered(null)}
                aria-hidden
              >
                {e.name}
              </text>
            );
          })}

        {/* Hub = the tanpura */}
        {player.droneOn && (
          <>
            <circle className="hub-pulse" cx={CX} cy={CY} r={R.hub + 4} fill="none" stroke="var(--zari)" strokeWidth={1.5} opacity={0.5} />
            <circle className="hub-pulse hub-pulse-2" cx={CX} cy={CY} r={R.hub + 4} fill="none" stroke="var(--zari)" strokeWidth={1.5} opacity={0.5} />
          </>
        )}
        <g
          role="button"
          tabIndex={0}
          aria-pressed={player.droneOn}
          aria-label="Toggle the tanpura drone"
          className="cursor-pointer focus:outline-none"
          onClick={player.toggleDrone}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              player.toggleDrone();
            }
          }}
        >
          <circle cx={CX} cy={CY} r={R.hub} fill="var(--rosewood-2)" stroke={player.droneOn ? "var(--zari-hi)" : "var(--zari)"} strokeWidth={1.5} />
          <text
            x={CX}
            y={CY - 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--ivory)"
            fontSize={46}
            fontFamily="var(--font-eczar), serif"
            fontWeight={600}
          >
            S
          </text>
          <text x={CX} y={CY + 34} textAnchor="middle" fill="var(--ivory-mut)" fontSize={10.5} letterSpacing="0.1em">
            {player.droneOn ? "SOUNDING · TAP TO STOP" : "TAP FOR TANPURA"}
          </text>
        </g>
      </svg>

      {/* Legend: the color system in one line */}
      <div className="flex max-w-[44rem] flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ivory-mut">
        {FAMILY_LEGEND.map((label, i) => (
          <span key={label} className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="inline-block h-2.5 w-2.5 rounded-[2px]"
              style={{ background: `var(--mela-f${i + 1}-s3)` }}
            />
            {label}
          </span>
        ))}
        <span className="basis-full text-center">
          hue = R·G family (shared by madhyama partners) · lightness = D·N step, dark → light
        </span>
      </div>
    </div>
  );
}

/* Focus/step helper for tests or future use. */
export function familyStepOf(n: number): { family: number; step: number } {
  return { family: familyOfMela(n), step: stepOfMela(n) };
}
