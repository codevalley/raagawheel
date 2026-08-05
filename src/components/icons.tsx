/**
 * Small inline glyphs. All use currentColor and em-sizing so they inherit
 * the surrounding text's color and scale (hover states come for free).
 */

function base(props?: { className?: string }) {
  return {
    width: "1.05em",
    height: "1.05em",
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: `inline-block align-[-0.18em] ${props?.className ?? ""}`,
  };
}

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg {...base({ className })} fill="currentColor">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.2 26.2 0 0 0 2 12c0 1.62.13 3.23.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.27-1.57.4-3.18.4-4.8s-.13-3.23-.4-4.8ZM10 15.2V8.8l5.5 3.2Z" />
    </svg>
  );
}

export function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg {...base({ className })} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.44 14.5a.62.62 0 0 1-.86.21c-2.36-1.44-5.33-1.77-8.83-.97a.63.63 0 0 1-.28-1.22c3.83-.88 7.12-.5 9.76 1.12.3.18.39.57.21.86Zm1.23-2.75a.78.78 0 0 1-1.07.26c-2.7-1.66-6.82-2.14-10.02-1.17a.78.78 0 1 1-.45-1.5c3.65-1.1 8.2-.56 11.28 1.34.37.22.48.7.26 1.07Zm.11-2.86C14.53 9 9.22 8.82 6.13 9.76a.94.94 0 1 1-.54-1.79c3.55-1.08 9.44-.87 13.17 1.34a.94.94 0 0 1-.98 1.58Z" />
    </svg>
  );
}

export function SunIcon({ className }: { className?: string }) {
  return (
    <svg {...base({ className })} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7" />
    </svg>
  );
}

export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg {...base({ className })} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

/** The brand mark: a tiny 12-segment wheel in the six family colors. */
export function WheelMark({ size = 22, className = "" }: { size?: number; className?: string }) {
  const segments = Array.from({ length: 12 }, (_, i) => {
    const a0 = (i * 30 - 90) * (Math.PI / 180);
    const a1 = ((i + 1) * 30 - 90) * (Math.PI / 180);
    const r0 = 5.2;
    const r1 = 11;
    const p = (r: number, a: number) =>
      `${Math.round((12 + r * Math.cos(a)) * 100) / 100} ${Math.round((12 + r * Math.sin(a)) * 100) / 100}`;
    return {
      d: `M ${p(r1, a0)} A ${r1} ${r1} 0 0 1 ${p(r1, a1)} L ${p(r0, a1)} A ${r0} ${r0} 0 0 0 ${p(r0, a0)} Z`,
      fill: `var(--mela-f${(i % 6) + 1}-s3)`,
    };
  });
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className={className}>
      {segments.map((s, i) => (
        <path key={i} d={s.d} fill={s.fill} stroke="var(--night)" strokeWidth={0.7} />
      ))}
      <circle cx={12} cy={12} r={2.6} fill="none" stroke="var(--zari)" strokeWidth={1} />
    </svg>
  );
}
