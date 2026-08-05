import { SEMITONE, type Swarasthana } from "@/lib/carnatic/types";

/**
 * A raga's visual fingerprint: 12 tick positions on a ring (Sa at 12
 * o'clock), filled dots where the raga has swaras, hollow rings for anya
 * (borrowed) swaras. Derived from the same data as playback, so it can
 * never drift from the true scale.
 */
export function RagaSeal({
  swaras,
  anyaSwaras = [],
  color,
  size = 64,
  className = "",
  title,
}: {
  swaras: readonly Swarasthana[];
  anyaSwaras?: readonly Swarasthana[];
  /** CSS color for the dots — the raga's family color. */
  color: string;
  size?: number;
  className?: string;
  title?: string;
}) {
  const anya = new Set(anyaSwaras);
  const own = new Set<number>();
  const borrowed = new Set<number>();
  for (const s of swaras) (anya.has(s) ? borrowed : own).add(SEMITONE[s]);
  for (const s of anyaSwaras) if (!own.has(SEMITONE[s])) borrowed.add(SEMITONE[s]);

  const C = 50;
  const rRing = 40;
  const rDot = 6.5;
  const pos = (i: number): [number, number] => {
    const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
    return [
      Math.round((C + rRing * Math.cos(a)) * 100) / 100,
      Math.round((C + rRing * Math.sin(a)) * 100) / 100,
    ];
  };

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title ?? "Raga seal: swara positions on the twelve-key ring"}
    >
      {title && <title>{title}</title>}
      <circle cx={C} cy={C} r={rRing} fill="none" stroke="var(--hairline-strong)" strokeWidth={1} />
      {Array.from({ length: 12 }, (_, i) => {
        const [x, y] = pos(i);
        if (own.has(i)) {
          return <circle key={i} cx={x} cy={y} r={i === 0 ? rDot + 1.5 : rDot} fill={color} stroke={i === 0 ? "var(--zari-hi)" : "none"} strokeWidth={1.5} />;
        }
        if (borrowed.has(i)) {
          return <circle key={i} cx={x} cy={y} r={rDot - 1} fill="none" stroke={color} strokeWidth={1.8} strokeDasharray="2.5 2" />;
        }
        return <circle key={i} cx={x} cy={y} r={1.6} fill="var(--hairline-strong)" />;
      })}
    </svg>
  );
}
