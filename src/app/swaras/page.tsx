import type { Metadata } from "next";
import { SwaraExplorer } from "@/components/swara/SwaraExplorer";

export const metadata: Metadata = {
  title: "The 16 Swarasthanas",
  description:
    "Sixteen names on twelve keys: why R2 and G1 share a pitch, and how every Carnatic raga chooses its seven from these positions.",
};

export default function SwarasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="max-w-2xl">
        <p className="eyebrow">Sixteen names, twelve keys</p>
        <h1 className="display mt-2 text-3xl sm:text-4xl">The swarasthanas</h1>
        <p className="mt-4 text-ivory-mut">
          Carnatic theory names sixteen swara positions, but the octave only has twelve places to
          put them. Four pairs — R₂/G₁, R₃/G₂, D₂/N₁, D₃/N₂ — are the <em className="text-ivory">same
          pitch wearing two names</em>. Which name applies depends on the raga: if a raga takes the
          pitch at position 2 as its Ri, that pitch is R₂; if another raga needs it as a Ga (because
          its Ri sits lower), the very same key becomes G₁.
        </p>
        <p className="mt-3 text-ivory-mut">
          This is the trick that makes 72 melakartas possible — and the wheel&rsquo;s six color
          families are nothing but the six legal ways of pairing Ri and Ga.
        </p>
      </header>
      <div className="kolam my-10" aria-hidden>
        <span /><span /><span /><span /><span /><span /><span />
      </div>
      <SwaraExplorer />
    </div>
  );
}
