import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NoteVariants } from "@/components/NoteVariants";
import { ScalePlayPanel } from "@/components/ScalePlayPanel";
import { PatternPlay } from "@/components/PatternPlay";
import { getJanyasOf, getMelakartas, getParent, getRaga } from "@/data/ragas";
import { ragaDisplayNames } from "@/lib/music/display";
import { CHAKRA_NAMES } from "@/lib/music/types";
import { formatSwaras } from "@/lib/music/swaras";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { ALL_RAGAS } = await import("@/data/ragas");
  return ALL_RAGAS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const raga = getRaga(slug);
  if (!raga) return { title: "Raga" };
  const { title } = ragaDisplayNames(raga);
  return {
    title,
    description: `${title} — aaroh/avaroh, note variants, patterns, and repertoire.`,
  };
}

export default async function RagaDetailPage({ params }: Props) {
  const { slug } = await params;
  const raga = getRaga(slug);
  if (!raga) notFound();

  const { title, katapayadi, alsoKnownAs } = ragaDisplayNames(raga);
  const parent = getParent(raga);
  const parentDisplay = parent ? ragaDisplayNames(parent) : null;
  const siblings =
    raga.kind === "janya" && raga.parentSlug
      ? getJanyasOf(raga.parentSlug).filter((j) => j.slug !== raga.slug)
      : getJanyasOf(raga.slug);
  const chakraName = raga.chakra ? CHAKRA_NAMES[raga.chakra - 1] : undefined;
  const wheelNeighbor =
    raga.melaNumber != null
      ? getMelakartas().find((m) => m.melaNumber === raga.melaNumber)
      : parent;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-faint">
        <Link href="/ragas" className="hover:text-accent">
          Ragas
        </Link>
        <span className="mx-2">/</span>
        <span className="text-muted">{title}</span>
      </nav>

      <header className="border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-faint">
          <span>{raga.kind}</span>
          {raga.melaNumber != null && <span>· Mela #{raga.melaNumber}</span>}
          {chakraName && (
            <Link href={`/chakras/${raga.chakra}`} className="hover:text-accent">
              · {chakraName} chakra
            </Link>
          )}
          {raga.popular && <span className="text-accent">· Popular</span>}
        </div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{title}</h1>
        {katapayadi && (
          <p className="mt-1 text-muted">
            Katapayadi name: <span className="text-ink">{katapayadi}</span>
          </p>
        )}
        {alsoKnownAs.length > 0 && (
          <p className="mt-1 text-sm text-faint">Also known as {alsoKnownAs.join(", ")}</p>
        )}
        {raga.kind === "janya" && parent && parentDisplay && (
          <p className="mt-3 text-sm text-muted">
            Janya of{" "}
            <Link href={`/ragas/${parent.slug}`} className="text-accent hover:underline">
              {parentDisplay.title}
            </Link>
            {parent.melaNumber != null && ` (#${parent.melaNumber})`}
          </p>
        )}
      </header>

      <section className="border-b border-line py-8">
        <h2 className="text-sm uppercase tracking-[0.18em] text-faint">Aaroh / Avaroh</h2>
        <div className="mt-4">
          <ScalePlayPanel arohana={raga.arohana} avarohana={raga.avarohana} />
        </div>
      </section>

      <section className="border-b border-line py-8">
        <h2 className="text-sm uppercase tracking-[0.18em] text-faint">Notes &amp; variants</h2>
        <div className="mt-4">
          <NoteVariants arohana={raga.arohana} avarohana={raga.avarohana} />
        </div>
      </section>

      {raga.patterns && raga.patterns.length > 0 && (
        <section className="border-b border-line py-8">
          <h2 className="text-sm uppercase tracking-[0.18em] text-faint">Key notes &amp; patterns</h2>
          {raga.keyNotes && (
            <p className="mt-3 swara-chip text-accent">{formatSwaras(raga.keyNotes)}</p>
          )}
          <ul className="mt-4 space-y-4">
            {raga.patterns.map((p) => (
              <li key={p.label} className="rounded border border-line bg-bg-panel/50 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-ink">{p.label}</p>
                    <p className="mt-1 swara-chip text-sm text-muted">{formatSwaras(p.swaras)}</p>
                    {p.note && <p className="mt-2 text-sm text-faint">{p.note}</p>}
                  </div>
                  <PatternPlay swaras={p.swaras} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {((raga.songs && raga.songs.length > 0) || (raga.trivia && raga.trivia.length > 0)) && (
        <section className="border-b border-line py-8">
          <h2 className="text-sm uppercase tracking-[0.18em] text-faint">Songs &amp; trivia</h2>
          {raga.songs && raga.songs.length > 0 && (
            <ul className="mt-4 space-y-3">
              {raga.songs.map((s) => (
                <li key={s.title} className="text-sm">
                  <span className="font-medium text-ink">{s.title}</span>
                  {s.composer && <span className="text-muted"> — {s.composer}</span>}
                  <span className="ml-2 text-xs uppercase tracking-wider text-faint">{s.kind}</span>
                  <span className="mt-1 flex flex-wrap gap-3">
                    {s.urls?.youtube && (
                      <a
                        href={s.urls.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        YouTube
                      </a>
                    )}
                    {s.urls?.spotify && (
                      <a
                        href={s.urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Spotify
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {raga.trivia && raga.trivia.length > 0 && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {raga.trivia.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="py-8">
        <h2 className="text-sm uppercase tracking-[0.18em] text-faint">Explore</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {wheelNeighbor && raga.kind === "melakarta" && (
            <Link href="/" className="text-accent hover:underline">
              Find on RaagaWheel
            </Link>
          )}
          {parent && raga.kind === "janya" && parentDisplay && (
            <Link href={`/ragas/${parent.slug}`} className="text-accent hover:underline">
              Parent: {parentDisplay.title}
            </Link>
          )}
          {raga.chakra && (
            <Link href={`/chakras/${raga.chakra}`} className="text-accent hover:underline">
              Chakra {raga.chakra}
            </Link>
          )}
        </div>
        {siblings.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-faint">
              {raga.kind === "melakarta" ? "Janyas of this mela" : "Sibling janyas"}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {siblings.slice(0, 12).map((j) => {
                const d = ragaDisplayNames(j);
                return (
                  <li key={j.slug}>
                    <Link
                      href={`/ragas/${j.slug}`}
                      className="rounded border border-line px-2 py-1 text-sm text-muted hover:border-accent hover:text-ink"
                    >
                      {d.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
