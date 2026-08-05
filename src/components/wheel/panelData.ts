import type { KatapayadiBreakdown, MelakartaRaga, Swarasthana } from "@/lib/carnatic/types";

/**
 * What the docked RagaPanel needs per mela — a middle-weight projection
 * between the slim WheelEntry and the full raga (songs stay server-side).
 */
export interface PanelData {
  melaNumber: number;
  name: string;
  slug: string;
  chakraName: string;
  katapayadi: KatapayadiBreakdown;
  arohaString: string;
  avarohaString: string;
  swarasUsed: Swarasthana[];
}

export function toPanelData(m: MelakartaRaga): PanelData {
  return {
    melaNumber: m.melaNumber,
    name: m.name,
    slug: m.slug,
    chakraName: m.chakra.name,
    katapayadi: m.katapayadi,
    arohaString: m.arohaString,
    avarohaString: m.avarohaString,
    swarasUsed: [...m.swarasUsed],
  };
}
