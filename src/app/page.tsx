import Link from "next/link";
import { RaagaWheel } from "@/components/RaagaWheel";
import { getMelakartas } from "@/data/ragas";

export default function HomePage() {
  const melas = getMelakartas();

  return (
    <div className="relative">
      <section className="relative min-h-[calc(100dvh-3.5rem)] overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(28,42,58,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(28,42,58,0.35)_1px,transparent_1px)] bg-size-[48px_48px] opacity-40" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Systems chart</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              RaagaWheel
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              The 72 melakarta ragas as an explorable machine — chakras, swara variants, and
              katapayadi naming — built for curious minds who like the science of sound.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/ragas?popular=1"
                className="rounded border border-accent bg-accent/15 px-4 py-2 text-sm text-accent hover:bg-accent/25"
              >
                Browse popular ragas
              </Link>
              <Link
                href="/learn/katapayadi"
                className="rounded border border-line-strong px-4 py-2 text-sm text-muted hover:text-ink"
              >
                How names become numbers
              </Link>
            </div>
          </div>

          <RaagaWheel melas={melas} />
        </div>
      </section>
    </div>
  );
}
