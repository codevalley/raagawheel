"use client";

/**
 * Global search: ⌘K / ctrl-K (or the header button) opens a palette over
 * every raga — name, aliases, mela number, chakra. 122 items need no
 * search library; a two-tier prefix/substring scorer reads better than
 * fuzzy noise at this scale.
 */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { melaColorVar } from "@/lib/carnatic/color";

export interface SearchEntry {
  slug: string;
  name: string;
  aliases: string[];
  kind: "melakarta" | "janya";
  melaNumber: number; // own number for melas, parent for janyas
  chakraName?: string;
}

function score(e: SearchEntry, q: string): number {
  const hay = [e.name, ...e.aliases].map((s) => s.toLowerCase());
  if (q === String(e.melaNumber) && e.kind === "melakarta") return 100;
  if (hay.some((h) => h === q)) return 90;
  if (hay.some((h) => h.startsWith(q))) return 80;
  if (hay.some((h) => h.includes(q))) return 60;
  if (e.chakraName?.toLowerCase().startsWith(q)) return 40;
  return 0;
}

export function SearchCommand({ entries }: { entries: SearchEntry[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setQuery("");
      setHighlighted(0);
    }
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = q
    ? entries
        .map((e) => ({ e, s: score(e, q) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s || a.e.name.localeCompare(b.e.name))
        .slice(0, 12)
        .map((r) => r.e)
    : [];

  function go(e: SearchEntry) {
    setOpen(false);
    router.push(`/raga/${e.slug}`);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-brand border border-hairline px-2.5 py-1 text-xs text-ivory-mut transition-colors hover:border-hairline-strong hover:text-ivory"
        aria-label="Search ragas"
      >
        <span aria-hidden>⌕</span>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border border-hairline px-1 text-[0.65rem] sm:inline">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-night/70 p-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search ragas"
            className="w-full max-w-lg overflow-hidden rounded-brand border border-hairline-strong bg-rosewood-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setHighlighted(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setHighlighted((h) => Math.min(h + 1, results.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setHighlighted((h) => Math.max(h - 1, 0));
                } else if (e.key === "Enter" && results[highlighted]) {
                  go(results[highlighted]);
                }
              }}
              placeholder="Raga name, alias, or mela number…"
              className="w-full border-b border-hairline bg-transparent px-4 py-3 text-ivory outline-none placeholder:text-ivory-mut/60"
            />
            <ul role="listbox" aria-label="Results" className="max-h-80 overflow-y-auto py-1">
              {q && results.length === 0 && (
                <li className="px-4 py-3 text-sm text-ivory-mut">No raga matches “{query}”.</li>
              )}
              {results.map((e, i) => (
                <li key={e.slug} role="option" aria-selected={i === highlighted}>
                  <button
                    type="button"
                    onClick={() => go(e)}
                    onMouseEnter={() => setHighlighted(i)}
                    className={`flex w-full items-baseline gap-3 px-4 py-2 text-left ${
                      i === highlighted ? "bg-rosewood" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className="inline-block h-2.5 w-2.5 shrink-0 self-center rounded-[2px]"
                      style={{ background: melaColorVar(e.melaNumber) }}
                    />
                    <span className="text-ivory">{e.name}</span>
                    <span className="ml-auto text-xs text-ivory-mut">
                      {e.kind === "melakarta" ? `mela ${e.melaNumber}` : `janya of ${e.melaNumber}`}
                    </span>
                  </button>
                </li>
              ))}
              {!q && (
                <li className="px-4 py-3 text-sm text-ivory-mut">
                  Try “kalyani”, “29”, or “abheri”.
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
