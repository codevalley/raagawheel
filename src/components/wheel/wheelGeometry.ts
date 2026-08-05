/** Pure SVG arc math for the melakarta wheel (viewBox 0 0 720 720). */

export const CX = 360;
export const CY = 360;
export const R = {
  wedgeInner: 150,
  wedgeOuter: 245,
  chakraInner: 100,
  chakraOuter: 142,
  labelInner: 254,
  hub: 88,
} as const;

/**
 * Round to 3 decimals (sub-pixel at viewBox scale). Math.sin/cos are not
 * required to be bit-identical across V8 builds, so unrounded coordinates
 * differ between Node (SSR) and the browser in the last decimal — enough
 * to trigger React hydration-mismatch warnings on every wedge.
 */
const round3 = (x: number): number => Math.round(x * 1000) / 1000;

/** Angle 0 = 12 o'clock, increasing clockwise (mela 1 starts at the top). */
export function polar(r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [round3(CX + r * Math.cos(a)), round3(CY + r * Math.sin(a))];
}

export function wedgePath(rIn: number, rOut: number, a0: number, a1: number): string {
  const p0 = polar(rOut, a0);
  const p1 = polar(rOut, a1);
  const p2 = polar(rIn, a1);
  const p3 = polar(rIn, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return (
    `M ${p0[0]} ${p0[1]} A ${rOut} ${rOut} 0 ${large} 1 ${p1[0]} ${p1[1]}` +
    ` L ${p2[0]} ${p2[1]} A ${rIn} ${rIn} 0 ${large} 0 ${p3[0]} ${p3[1]} Z`
  );
}

/** Arc path (no radial edges) for curved textPath labels. */
export function arcPath(r: number, a0: number, a1: number, reverse = false): string {
  const s = polar(r, reverse ? a1 : a0);
  const e = polar(r, reverse ? a0 : a1);
  return `M ${s[0]} ${s[1]} A ${r} ${r} 0 0 ${reverse ? 0 : 1} ${e[0]} ${e[1]}`;
}

export const melaMidAngle = (n: number): number => (n - 1) * 5 + 2.5;

/** Unit vector along a mela's bisector, for the pull-out transform. */
export function bisector(n: number): [number, number] {
  const a = ((melaMidAngle(n) - 90) * Math.PI) / 180;
  return [Math.cos(a), Math.sin(a)];
}
