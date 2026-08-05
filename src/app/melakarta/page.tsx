import type { Metadata } from "next";
import { melakartas, wheelData } from "@/data";
import { toPanelData, type PanelData } from "@/components/wheel/panelData";
import { MelakartaWorkbench } from "@/components/wheel/MelakartaWorkbench";

export const metadata: Metadata = {
  title: "The Melakarta Wheel",
  description:
    "All 72 melakarta ragas in twelve chakras — hue for the R/G family, lightness for the D/N step, the madhyama split down the middle, and the tanpura at the hub.",
};

export default function MelakartaPage() {
  const panels: Record<number, PanelData> = {};
  for (const m of melakartas) panels[m.melaNumber] = toPanelData(m);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mx-auto mb-8 max-w-2xl text-center">
        <p className="eyebrow">The chart, alive</p>
        <h1 className="display mt-2 text-3xl sm:text-4xl">The Melakarta Wheel</h1>
        <p className="mt-3 text-ivory-mut">
          Seventy-two parent scales in twelve chakras. Same color at mirrored positions means the
          same raga with one note swapped — press <span className="text-zari-hi">M</span> while
          exploring to leap between madhyama partners.
        </p>
      </header>
      <MelakartaWorkbench entries={[...wheelData]} panels={panels} />
    </div>
  );
}
