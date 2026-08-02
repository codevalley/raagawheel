"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { KATAPAYADI_CHART, nameToMelaNumber } from "@/lib/music/katapayadi";
import { MELAKARTA_NAMES } from "@/lib/music/melakarta";

const EXAMPLES = [
  "Dheerasankarabharanam",
  "Mechakalyani",
  "Hanumatodi",
  "Mayamalavagowla",
  "Keeravani",
];

export default function KatapayadiClient() {
  const [name, setName] = useState("Dheerasankarabharanam");
  const result = useMemo(() => nameToMelaNumber(name), [name]);
  const officialIndex = MELAKARTA_NAMES.findIndex(
    (n) => n.toLowerCase() === name.trim().toLowerCase(),
  );
  const officialNumber = officialIndex >= 0 ? officialIndex + 1 : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Naming system</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Katapayadi sankhya</h1>
      <p className="mt-3 text-muted leading-relaxed">
        Melakarta names encode their serial number. Map the first two significant consonants to
        digits, then <em className="text-ink not-italic">reverse</em> those digits. Engineering
        elegance from a Sanskrit mnemonic tradition.
      </p>

      <section className="mt-10 border border-line bg-bg-panel/40 p-5">
        <h2 className="text-sm uppercase tracking-[0.16em] text-faint">Try a name</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3 w-full rounded border border-line-strong bg-bg-elevated px-3 py-2 text-ink outline-none focus:border-accent"
          placeholder="Melakarta name…"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setName(ex)}
              className="rounded border border-line px-2 py-1 text-xs text-muted hover:border-accent hover:text-ink"
            >
              {ex}
            </button>
          ))}
        </div>

        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-muted">
          {result.explanation.map((line) => (
            <li key={line} className="leading-relaxed">
              {line}
            </li>
          ))}
        </ol>

        {result.melaNumber != null && (
          <p className="mt-4 text-sm">
            Decoded number:{" "}
            <span className="swara-chip text-lg text-accent">{result.melaNumber}</span>
            {officialNumber != null && (
              <span className="ml-3 text-muted">
                Official index: <span className="text-ink">{officialNumber}</span>
                {officialNumber === result.melaNumber ? (
                  <span className="ml-2 text-accent">match</span>
                ) : (
                  <span className="ml-2 text-warm">romanization may differ — see chart below</span>
                )}
              </span>
            )}
          </p>
        )}

        {officialNumber != null && (
          <Link
            href={`/ragas/${MELAKARTA_NAMES[officialNumber - 1]
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            Open {MELAKARTA_NAMES[officialNumber - 1]} →
          </Link>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-sm uppercase tracking-[0.16em] text-faint">Digit chart</h2>
        <p className="mt-2 text-sm text-muted">
          Vowels are ignored. The classic groups: ka, ṭa, pa, ya… give the system its name
          (ka-ṭa-pa-yādi).
        </p>
        <div className="mt-6 space-y-6">
          {KATAPAYADI_CHART.map((group) => (
            <div key={group.group}>
              <p className="text-xs text-accent">{group.group}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {group.rows.map((row) => (
                  <div
                    key={row.syllable}
                    className="flex items-center justify-between rounded border border-line bg-bg-elevated/50 px-3 py-2 text-sm"
                  >
                    <span className="text-muted">{row.syllable}</span>
                    <span className="swara-chip text-ink">{row.digit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-8 text-sm text-muted">
        <p>
          Tip: names were chosen (or adjusted historically) so the formula yields 1–72. Explore the{" "}
          <Link href="/" className="text-accent hover:underline">
            RaagaWheel
          </Link>{" "}
          and toggle katapayadi decode on any mela.
        </p>
      </section>
    </div>
  );
}
