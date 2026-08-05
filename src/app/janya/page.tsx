import type { Metadata } from "next";
import Link from "next/link";
import { janyas, melaByNumber } from "@/data";
import { melaColorVar } from "@/lib/carnatic/color";
import { SwaraGlyph } from "@/components/swara/SwaraGlyph";

export const metadata: Metadata = {
  title: "Janya Ragas — the family tree",
  description:
    "The derived ragas grouped under their parent melakartas: pentatonic audavas, zigzag vakra scales, and bhashangas that borrow foreign notes.",
};

export default function JanyaPage() {
  const parents = [...new Set(janyas.map((j) => j.parentMelaNumber))].sort((a, b) => a - b);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="max-w-2xl">
        <p className="eyebrow">The family tree</p>
        <h1 className="display mt-2 text-3xl sm:text-4xl">Janya ragas</h1>
        <p className="mt-4 text-ivory-mut">
          The 72 melakartas are parents; most beloved ragas are their children. A janya may drop
          swaras (audava = five, shadava = six), zigzag through them (vakra), or borrow a note its
          parent doesn&rsquo;t own (bhashanga). The scale alone never captures a janya&rsquo;s
          personality — but it is where the personality lives.
        </p>
      </header>

      <div className="kolam my-10" aria-hidden>
        <span /><span /><span /><span /><span /><span /><span />
      </div>

      {parents.length === 0 ? (
        <p className="text-ivory-mut">The janya catalog is being curated — check back shortly.</p>
      ) : (
        parents.map((n) => {
          const parent = melaByNumber.get(n);
          if (!parent) return null;
          const children = janyas.filter((j) => j.parentMelaNumber === n);
          return (
            <section key={n} className="mb-10">
              <h2 className="display flex items-center gap-3 border-b border-hairline-strong pb-2 text-xl">
                <span
                  aria-hidden
                  className="inline-block h-3 w-3 rounded-[2px]"
                  style={{ background: melaColorVar(n) }}
                />
                <Link href={`/raga/${parent.slug}`} className="hover:text-zari-hi">
                  {n} · {parent.name}
                </Link>
                <span className="text-sm font-normal text-ivory-mut">
                  {children.length} janya{children.length > 1 ? "s" : ""}
                </span>
              </h2>
              <ul className="mt-1">
                {children.map((j) => (
                  <li key={j.slug} className="border-b border-hairline">
                    <Link
                      href={`/raga/${j.slug}`}
                      className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-2.5 transition-colors hover:bg-rosewood"
                    >
                      <span className="display min-w-[10rem] text-ivory">{j.name}</span>
                      <span className="swara flex flex-wrap gap-x-2 text-sm text-ivory-mut">
                        {j.arohaTokens.map((t, i) => (
                          <SwaraGlyph key={i} token={t} />
                        ))}
                      </span>
                      <span className="ml-auto text-xs text-ivory-mut">{j.classificationLabel}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })
      )}
    </div>
  );
}
