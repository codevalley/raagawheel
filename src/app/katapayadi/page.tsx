import type { Metadata } from "next";
import { KATAPAYADI_CHART } from "@/lib/carnatic/katapayadi";
import { melakartas } from "@/data";
import { KatapayadiDecoder } from "@/components/katapayadi/KatapayadiDecoder";

export const metadata: Metadata = {
  title: "The Katapayadi Sutra",
  description:
    "How every melakarta raga's name secretly encodes its own number — the consonant tables, the reversal rule, and a live decoder for all 72 names.",
};

export default function KatapayadiPage() {
  const entries = melakartas.map((m) => ({
    melaNumber: m.melaNumber,
    name: m.name,
    slug: m.slug,
    katapayadi: m.katapayadi,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="max-w-2xl">
        <p className="eyebrow">The name is the number</p>
        <h1 className="display mt-2 text-3xl sm:text-4xl">Katapayadi sankhya</h1>
        <p className="mt-4 text-ivory-mut">
          Long before checksums, Sanskrit scholars used consonants as digits. In the katapayadi
          scheme each consonant carries a value, and the melakarta names were chosen — sometimes
          padded — so that the <em className="text-ivory">first two syllables spell the raga&rsquo;s own
          number in reverse</em>. Kha (2) and ra (2) make Kharaharapriya mela 22. That is why
          Sankarabharanam formally wears a <em className="text-ivory">Dheera-</em> (dha = 9, ra = 2 → 29),
          why Kalyani goes by <em className="text-ivory">Mecha-</em>kalyani (ma = 5, ca = 6 → 65), and why
          Todi answers to <em className="text-ivory">Hanuma-</em>todi (ha = 8, na = 0 → 8).
        </p>
      </header>

      <div className="kolam my-10" aria-hidden>
        <span /><span /><span /><span /><span /><span /><span />
      </div>

      <KatapayadiDecoder entries={entries} />

      <h2 className="display mb-4 mt-12 text-2xl">The consonant tables</h2>
      <p className="mb-6 max-w-2xl text-sm text-ivory-mut">
        Two traps for the romanized reader: English &ldquo;ch&rdquo; is usually the unaspirated ca
        (= 6), and the dental ta-varga runs 6–9 then 0 — it does not repeat the retroflex 1–5. In
        conjunct clusters the last consonant usually carries the value, though a few traditional
        readings differ (each such case is noted on its raga&rsquo;s page).
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {KATAPAYADI_CHART.map((group) => (
          <div key={group.group} className="rounded-brand border border-hairline bg-rosewood p-4">
            <p className="eyebrow mb-3">{group.group}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
              {group.rows.map((row) => (
                <li key={row.canonical} className="flex items-baseline gap-1.5">
                  <span className="text-ivory">{row.display}</span>
                  <span className="display text-zari-hi">{row.digit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl border-l-2 border-zari pl-5 text-ivory-mut">
        <p className="m-0">
          The scheme is far older than the melakarta system — it dates astronomical and
          mathematical texts across a millennium of Indian scholarship. Govindacharya&rsquo;s
          18th-century sampurna-mela names simply put an ancient indexing trick to musical work.
        </p>
      </div>
    </div>
  );
}
