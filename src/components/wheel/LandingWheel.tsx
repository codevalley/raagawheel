"use client";

/**
 * The landing hero: the live wheel, where selecting navigates straight to
 * the raga page (decisive), unlike /melakarta's exploratory docked panel.
 */
import { useRouter } from "next/navigation";
import type { WheelEntry } from "@/lib/carnatic/types";
import { RagaWheel } from "./RagaWheel";

export function LandingWheel({ entries }: { entries: WheelEntry[] }) {
  const router = useRouter();
  const bySlug = new Map(entries.map((e) => [e.melaNumber, e.slug]));
  return (
    <RagaWheel
      entries={entries}
      selected={null}
      onSelect={(n) => {
        const slug = bySlug.get(n);
        if (slug) router.push(`/raga/${slug}`);
      }}
    />
  );
}
