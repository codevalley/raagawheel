import { readFile } from "node:fs/promises";
import path from "node:path";
import { FAMILY_HEX } from "@/lib/carnatic/color";

/** Shared bits for build-time OG image generation (Satori can't use CSS vars/oklch). */

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_COLORS = {
  night: "#140e10",
  rosewood: "#221619",
  zari: "#c9a227",
  zariHi: "#e8c55c",
  ivory: "#f4ead8",
  ivoryMut: "#b5a38f",
};

export async function eczarFont() {
  const data = await readFile(
    path.join(process.cwd(), "src/assets/fonts/Eczar-SemiBold.ttf"),
  );
  return { name: "Eczar", data, weight: 600 as const, style: "normal" as const };
}

/** The twelve-segment wheel mark as plain SVG (hex colors only). */
export function OgWheelMark({ size }: { size: number }) {
  const C = size / 2;
  const rOut = size * 0.46;
  const rIn = size * 0.22;
  const p = (r: number, a: number) =>
    `${(C + r * Math.cos(a)).toFixed(2)} ${(C + r * Math.sin(a)).toFixed(2)}`;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      {Array.from({ length: 12 }, (_, i) => {
        const a0 = (i * 30 - 90) * (Math.PI / 180);
        const a1 = ((i + 1) * 30 - 90) * (Math.PI / 180);
        return (
          <path
            key={i}
            d={`M ${p(rOut, a0)} A ${rOut} ${rOut} 0 0 1 ${p(rOut, a1)} L ${p(rIn, a1)} A ${rIn} ${rIn} 0 0 0 ${p(rIn, a0)} Z`}
            fill={FAMILY_HEX[i % 6]}
            stroke={OG_COLORS.night}
            strokeWidth={size * 0.02}
          />
        );
      })}
      <circle cx={C} cy={C} r={size * 0.1} fill="none" stroke={OG_COLORS.zari} strokeWidth={size * 0.028} />
    </svg>
  );
}

/** The raga seal in plain SVG: dots for swaras on a twelve-position ring. */
export function OgSeal({
  semitones,
  anyaSemitones = [],
  color,
  size,
}: {
  semitones: number[];
  anyaSemitones?: number[];
  color: string;
  size: number;
}) {
  const C = size / 2;
  const rRing = size * 0.4;
  const own = new Set(semitones.map((s) => ((s % 12) + 12) % 12));
  const anya = new Set(anyaSemitones.map((s) => ((s % 12) + 12) % 12));
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <circle cx={C} cy={C} r={rRing} fill="none" stroke="#5a4a3a" strokeWidth={size * 0.008} />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
        const x = C + rRing * Math.cos(a);
        const y = C + rRing * Math.sin(a);
        if (own.has(i)) {
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={size * (i === 0 ? 0.075 : 0.06)}
              fill={color}
              stroke={i === 0 ? OG_COLORS.zariHi : "none"}
              strokeWidth={size * 0.012}
            />
          );
        }
        if (anya.has(i)) {
          return (
            <circle key={i} cx={x} cy={y} r={size * 0.05} fill="none" stroke={color} strokeWidth={size * 0.015} strokeDasharray="4 3" />
          );
        }
        return <circle key={i} cx={x} cy={y} r={size * 0.015} fill="#5a4a3a" />;
      })}
    </svg>
  );
}
