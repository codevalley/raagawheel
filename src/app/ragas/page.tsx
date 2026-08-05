import type { Metadata } from "next";
import Link from "next/link";
import { janyas, melakartas } from "@/data";
import { CHAKRAS } from "@/lib/carnatic/mela";
import { melaColorVar } from "@/lib/carnatic/color";
import type { JanyaRaga, MelakartaRaga } from "@/lib/carnatic/types";
import { SwaraGlyph } from "@/components/swara/SwaraGlyph";
import { RagaSeal } from "@/components/raga/RagaSeal";

export const metadata: Metadata = {
  title: "All ragas",
  description:
    "The 72 melakarta ragas grouped by chakra, and their janya ragas grouped by parent — every raga has an address.",
};

function ScaleTokens({ raga }: { raga: MelakartaRaga | JanyaRaga }) {
  return (
    <span className="swara flex flex-wrap gap-x-2 text-xs text-ivory-mut">
      {raga.arohaTokens.map((t, i) => (
        <SwaraGlyph key={i} token={t} />
      ))}
    </span>
  );
}

function MelaRow({ mela }: { mela: MelakartaRaga }) {
  return (
    <li>
      <Link
        href={`/raga/${mela.slug}`}
        className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-hairline py-2.5 transition-colors hover:bg-rosewood"
      >
        <span className="display w-8 text-right text-lg text-ivory-mut">{mela.melaNumber}</span>
        <RagaSeal
          swaras={mela.swarasUsed}
          color={melaColorVar(mela.melaNumber)}
          size={26}
          className="shrink-0 self-center"
        />
        <span className="display text-lg transition-colors group-hover:text-zari-hi">
          {mela.displayName}
        </span>
        <span className="ml-auto">
          <ScaleTokens raga={mela} />
        </span>
      </Link>
    </li>
  );
}

function JanyaRow({ janya }: { janya: JanyaRaga }) {
  return (
    <li>
      <Link
        href={`/raga/${janya.slug}`}
        className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-hairline py-2.5 transition-colors hover:bg-rosewood"
      >
        <RagaSeal
          swaras={janya.swarasUsed}
          anyaSwaras={janya.anyaSwaras}
          color={melaColorVar(janya.parentMelaNumber)}
          size={26}
          className="shrink-0 self-center"
        />
        <span className="display text-lg transition-colors group-hover:text-zari-hi">
          {janya.displayName}
        </span>
        <span className="text-xs text-ivory-mut">{janya.classificationLabel}</span>
        <span className="ml-auto">
          <ScaleTokens raga={janya} />
        </span>
      </Link>
    </li>
  );
}

export default function Page() {
  const byChakra = CHAKRAS.map((chakra) => ({
    chakra,
    melas: melakartas.filter((m) => m.chakra.index === chakra.index),
  }));

  const janyasByParent = melakartas
    .map((parent) => ({
      parent,
      children: janyas.filter((j) => j.parentMelaNumber === parent.melaNumber),
    }))
    .filter((g) => g.children.length > 0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header>
        <p className="eyebrow">The full ledger</p>
        <h1 className="display mt-2 text-4xl">All ragas</h1>
        <p className="mt-3 max-w-prose text-ivory-mut">
          The 72 melakarta ragas in their 12 chakras — six melas each, named by count — followed
          by the janya ragas that descend from them.
        </p>
      </header>

      <section aria-label="Melakarta ragas" className="mt-10 flex flex-col gap-10">
        {byChakra.map(({ chakra, melas }) => (
          <div key={chakra.index}>
            <h2 className="eyebrow flex items-baseline gap-3 border-b border-hairline-strong pb-2">
              <span>
                {chakra.index} · {chakra.name}
              </span>
              <span className="font-normal normal-case tracking-normal text-ivory-mut">
                {chakra.meaning}
              </span>
            </h2>
            <ul className="m-0 list-none p-0">
              {melas.map((m) => (
                <MelaRow key={m.melaNumber} mela={m} />
              ))}
            </ul>
          </div>
        ))}
      </section>

      {janyasByParent.length > 0 && (
        <>
          <div className="kolam my-12" aria-hidden>
            {Array.from({ length: 7 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
          <section aria-label="Janya ragas">
            <h2 className="display text-2xl">Janya ragas</h2>
            <p className="mt-2 max-w-prose text-sm text-ivory-mut">
              Derived ragas, grouped under the mela they descend from.
            </p>
            <div className="mt-6 flex flex-col gap-10">
              {janyasByParent.map(({ parent, children }) => (
                <div key={parent.melaNumber}>
                  <h3 className="eyebrow flex items-baseline gap-3 border-b border-hairline-strong pb-2">
                    <span
                      aria-hidden
                      className="inline-block h-2.5 w-2.5 shrink-0 self-center rounded-full"
                      style={{ background: melaColorVar(parent.melaNumber) }}
                    />
                    <Link
                      href={`/raga/${parent.slug}`}
                      className="transition-colors hover:text-zari-hi"
                    >
                      Mela {parent.melaNumber} · {parent.displayName}
                    </Link>
                  </h3>
                  <ul className="m-0 list-none p-0">
                    {children.map((j) => (
                      <JanyaRow key={j.slug} janya={j} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
