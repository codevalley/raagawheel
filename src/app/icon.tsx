import { ImageResponse } from "next/og";

export const dynamic = "force-static";
import { FAMILY_HEX } from "@/lib/carnatic/color";

/** Favicon: the twelve-segment wheel mark, generated at build time. */
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const C = 32;
  const p = (r: number, a: number) =>
    `${(C + r * Math.cos(a)).toFixed(2)} ${(C + r * Math.sin(a)).toFixed(2)}`;
  const segments = Array.from({ length: 12 }, (_, i) => {
    const a0 = (i * 30 - 90) * (Math.PI / 180);
    const a1 = ((i + 1) * 30 - 90) * (Math.PI / 180);
    return {
      d: `M ${p(28, a0)} A 28 28 0 0 1 ${p(28, a1)} L ${p(13, a1)} A 13 13 0 0 0 ${p(13, a0)} Z`,
      fill: FAMILY_HEX[i % 6],
    };
  });
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#140e10",
          borderRadius: 12,
        }}
      >
        <svg viewBox="0 0 64 64" width="60" height="60">
          {segments.map((s, i) => (
            <path key={i} d={s.d} fill={s.fill} stroke="#140e10" strokeWidth={1.6} />
          ))}
          <circle cx={32} cy={32} r={6.5} fill="none" stroke="#c9a227" strokeWidth={2} />
        </svg>
      </div>
    ),
    size,
  );
}
