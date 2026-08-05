"use client";

/**
 * The wheel workbench: wheel + docked panel on wide screens, with a
 * chakra-grouped list as a first-class equal surface (and the honest
 * mobile strategy — 5° wedges aren't tappable on phones, the list is).
 * Selection is deep-linkable via ?raga=<slug or number>.
 */
import { useEffect, useState } from "react";
import Link from "next/link";
import type { WheelEntry } from "@/lib/carnatic/types";
import { CHAKRAS } from "@/lib/carnatic/mela";
import { melaColorVar } from "@/lib/carnatic/color";
import { RagaWheel } from "./RagaWheel";
import { RagaPanel } from "./RagaPanel";
import type { PanelData } from "./panelData";

type View = "wheel" | "list";

function resolveInitial(entries: readonly WheelEntry[]): number {
  if (typeof window === "undefined") return 29;
  const q = new URLSearchParams(window.location.search).get("raga");
  if (!q) return 29;
  const asNumber = Number(q);
  if (Number.isInteger(asNumber) && asNumber >= 1 && asNumber <= 72) return asNumber;
  return entries.find((e) => e.slug === q)?.melaNumber ?? 29;
}

export function MelakartaWorkbench({
  entries,
  panels,
}: {
  entries: readonly WheelEntry[];
  panels: Record<number, PanelData>;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [view, setView] = useState<View>("wheel");

  // Read the deep link after mount (static export has no request-time URL).
  useEffect(() => {
    setSelected(resolveInitial(entries));
  }, [entries]);

  function select(n: number): void {
    setSelected(n);
    const slug = panels[n]?.slug;
    if (slug) window.history.replaceState(null, "", `?raga=${slug}`);
  }

  const panel = selected ? panels[selected] : undefined;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center gap-1" role="group" aria-label="View">
        {(["wheel", "list"] as const).map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={view === v}
            onClick={() => setView(v)}
            className={`rounded-brand px-3 py-1 text-sm capitalize transition-colors ${
              view === v ? "bg-rosewood-2 text-zari-hi" : "text-ivory-mut hover:text-ivory"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {view === "wheel" ? (
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
          <div className="hidden w-full max-w-2xl sm:block">
            <RagaWheel entries={entries} selected={selected} onSelect={select} />
          </div>
          {/* Small screens: wedges are ~13px — show the wheel as a map, list as controls. */}
          <div className="w-full sm:hidden">
            <RagaWheel entries={entries} selected={selected} onSelect={select} showLabels={false} />
            <p className="mt-2 text-center text-xs text-ivory-mut">
              On a small screen the list below is the easiest way in.
            </p>
          </div>
          {panel && <RagaPanel data={panel} />}
        </div>
      ) : (
        <WheelListView entries={entries} selected={selected} onSelect={select} panels={panels} />
      )}

      {view === "wheel" && (
        <div className="sm:hidden">
          <WheelListView entries={entries} selected={selected} onSelect={select} panels={panels} compact />
        </div>
      )}
    </div>
  );
}

function WheelListView({
  entries,
  selected,
  onSelect,
  panels,
  compact = false,
}: {
  entries: readonly WheelEntry[];
  selected: number | null;
  onSelect: (n: number) => void;
  panels: Record<number, PanelData>;
  compact?: boolean;
}) {
  const [openChakra, setOpenChakra] = useState<number | null>(
    selected ? Math.ceil(selected / 6) : null,
  );
  useEffect(() => {
    if (selected) setOpenChakra(Math.ceil(selected / 6));
  }, [selected]);

  return (
    <div className="mx-auto w-full max-w-2xl">
      {CHAKRAS.map((c) => {
        const open = compact ? openChakra === c.index : true;
        return (
          <section key={c.index} className="border-b border-hairline py-2">
            <button
              type="button"
              className="flex w-full items-baseline justify-between py-2 text-left"
              onClick={() => compact && setOpenChakra(open ? null : c.index)}
              aria-expanded={compact ? open : undefined}
            >
              <span className="eyebrow">
                {c.index}. {c.name}
              </span>
              <span className="text-xs text-ivory-mut">{c.meaning}</span>
            </button>
            {open && (
              <ul className="flex flex-col">
                {entries
                  .filter((e) => e.chakraIndex === c.index)
                  .map((e) => (
                    <li key={e.melaNumber}>
                      <button
                        type="button"
                        onClick={() => onSelect(e.melaNumber)}
                        className={`flex w-full items-center gap-3 rounded-brand px-2 py-1.5 text-left transition-colors hover:bg-rosewood ${
                          selected === e.melaNumber ? "bg-rosewood" : ""
                        }`}
                      >
                        <span
                          aria-hidden
                          className="inline-block h-3 w-3 shrink-0 rounded-[2px]"
                          style={{ background: melaColorVar(e.melaNumber) }}
                        />
                        <span className="display w-8 text-right text-sm text-ivory-mut">
                          {e.melaNumber}
                        </span>
                        <span className="text-ivory">{e.name}</span>
                        <Link
                          href={`/raga/${e.slug}`}
                          className="ml-auto text-xs text-zari-hi opacity-70 hover:opacity-100"
                          onClick={(ev) => ev.stopPropagation()}
                        >
                          open →
                        </Link>
                      </button>
                    </li>
                  ))}
              </ul>
            )}
            {open && compact && panels[selected ?? -1] && openChakra === c.index && selected && Math.ceil(selected / 6) === c.index && (
              <div className="py-3">
                <RagaPanel data={panels[selected]} />
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
