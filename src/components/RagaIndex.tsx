"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ragaDisplayNames } from "@/lib/music/display";
import { CHAKRA_NAMES, type Raga } from "@/lib/music/types";

type Props = {
  ragas: Raga[];
};

export function RagaIndex({ ragas }: Props) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<"all" | "melakarta" | "janya">("all");
  const [popularOnly, setPopularOnly] = useState(true);
  const [chakra, setChakra] = useState<number | "">("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ragas
      .filter((r) => {
        if (kind !== "all" && r.kind !== kind) return false;
        if (popularOnly && !r.popular) return false;
        if (chakra !== "" && !(r.chakra === chakra || (r.melaNumber != null && Math.ceil(r.melaNumber / 6) === chakra))) {
          return false;
        }
        if (!q) return true;
        const hay = [
          r.name,
          r.slug,
          ...ragaDisplayNames(r).alsoKnownAs,
          ragaDisplayNames(r).title,
          ragaDisplayNames(r).katapayadi,
          ...(r.aliases ?? []),
          String(r.melaNumber ?? ""),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => ragaDisplayNames(a).title.localeCompare(ragaDisplayNames(b).title));
  }, [ragas, query, kind, popularOnly, chakra]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
        <label className="flex min-w-[200px] flex-1 flex-col gap-1 text-xs text-faint">
          Search
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Mohanam, 29, Kalyani…"
            className="rounded border border-line-strong bg-bg-elevated px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-faint">
          Kind
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value as typeof kind)}
            className="rounded border border-line-strong bg-bg-elevated px-3 py-2 text-sm text-ink"
          >
            <option value="all">All</option>
            <option value="melakarta">Melakarta</option>
            <option value="janya">Janya</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs text-faint">
          Chakra
          <select
            value={chakra}
            onChange={(e) => setChakra(e.target.value === "" ? "" : Number(e.target.value))}
            className="rounded border border-line-strong bg-bg-elevated px-3 py-2 text-sm text-ink"
          >
            <option value="">Any</option>
            {CHAKRA_NAMES.map((name, i) => (
              <option key={name} value={i + 1}>
                {i + 1}. {name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 pb-2 text-sm text-muted">
          <input
            type="checkbox"
            checked={popularOnly}
            onChange={(e) => setPopularOnly(e.target.checked)}
            className="accent-[var(--accent)]"
          />
          Popular only
        </label>
      </div>

      <p className="text-sm text-faint">
        Showing <span className="text-ink">{filtered.length}</span> ragas
      </p>

      <ul className="divide-y divide-line border-y border-line">
        {filtered.map((r) => {
          const d = ragaDisplayNames(r);
          return (
            <li key={r.slug}>
              <Link
                href={`/ragas/${r.slug}`}
                className="flex flex-col gap-1 py-3 transition-colors hover:bg-bg-panel/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 px-1"
              >
                <div>
                  <span className="font-medium text-ink">{d.title}</span>
                  {d.katapayadi && (
                    <span className="ml-2 text-sm text-faint">{d.katapayadi}</span>
                  )}
                </div>
                <div className="swara-chip flex flex-wrap gap-2 text-xs text-muted">
                  <span className="text-faint">{r.kind}</span>
                  {r.melaNumber != null && <span>#{r.melaNumber}</span>}
                  {r.popular && <span className="text-accent">popular</span>}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
