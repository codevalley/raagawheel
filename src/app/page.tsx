import Link from "next/link";
import { melaByNumber, wheelData } from "@/data";
import { melaColorVar } from "@/lib/carnatic/color";
import { LandingWheel } from "@/components/wheel/LandingWheel";

const STARTERS: { mela: number; line: string }[] = [
  { mela: 29, line: "The reference 'major' — where beginners' geetams and countless krithis live" },
  { mela: 65, line: "Sankarabharanam's radiant madhyama partner — one note apart, a world away" },
  { mela: 22, line: "The karuna-laden parent of Abheri, Sri, and half the songbook" },
  { mela: 8, line: "Todi — oceanic, oscillating, a lifetime's study in one scale" },
  { mela: 15, line: "Mayamalavagowla — the first scale every student sings" },
  { mela: 28, line: "Harikambhoji — sunny parent of Mohanam, Kambhoji, and Khamas" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero: the wheel, live */}
      <section className="flex flex-col items-center gap-10 py-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-md">
          <p className="eyebrow">The 72 melakarta ragas of Carnatic music</p>
          <h1 className="display mt-3 text-4xl leading-[1.08] sm:text-5xl">
            Every raga has an address.
          </h1>
          <p className="mt-5 text-ivory-mut">
            Twelve chakras, two halves, and names that secretly encode their own numbers. This is
            the melakarta chart the way the tradition arranges it — except here you can{" "}
            <em className="text-ivory">press the center and hear it hum</em>. Tap any segment to
            meet a raga.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/melakarta"
              className="rounded-brand border border-zari px-4 py-2 text-sm text-zari-hi transition-colors hover:bg-rosewood"
            >
              Explore the wheel →
            </Link>
            <Link
              href="/swaras"
              className="rounded-brand border border-hairline-strong px-4 py-2 text-sm text-ivory-mut transition-colors hover:text-ivory"
            >
              Start with the swaras
            </Link>
          </div>
        </div>
        <div className="w-full max-w-2xl flex-1">
          <LandingWheel entries={[...wheelData]} />
        </div>
      </section>

      <div className="kolam" aria-hidden>
        <span /><span /><span /><span /><span /><span /><span />
      </div>

      {/* The name is the number */}
      <section className="mx-auto max-w-2xl py-14 text-center">
        <p className="eyebrow">The name is the number</p>
        <p className="display mt-4 text-2xl sm:text-3xl">
          <span className="text-zari-hi">Kha</span>
          <span className="text-ivory-mut">·</span>
          <span className="text-zari-hi">ra</span>harapriya
          <span className="mx-3 text-ivory-mut" aria-hidden>⟶</span>
          <span className="swara text-xl text-ivory-mut">kha=2 · ra=2</span>
          <span className="mx-3 text-ivory-mut" aria-hidden>⟶</span>
          <span className="text-zari-hi">mela 22</span>
        </p>
        <p className="mt-4 text-ivory-mut">
          Every melakarta name decodes itself through the ancient katapayadi cipher — the reason
          Sankarabharanam formally answers to <em className="text-ivory">Dheera</em>sankarabharanam.
        </p>
        <Link
          href="/katapayadi"
          className="mt-4 inline-block text-sm text-zari-hi underline decoration-hairline-strong underline-offset-2 hover:text-ivory"
        >
          Learn the cipher →
        </Link>
      </section>

      <div className="kolam" aria-hidden>
        <span /><span /><span /><span /><span /><span /><span />
      </div>

      {/* Start with the ones you've heard */}
      <section className="mx-auto max-w-2xl py-14">
        <p className="eyebrow text-center">Start with the ones you&rsquo;ve heard</p>
        <ul className="mt-6">
          {STARTERS.map(({ mela, line }) => {
            const m = melaByNumber.get(mela);
            if (!m) return null;
            return (
              <li key={mela} className="border-b border-hairline">
                <Link
                  href={`/raga/${m.slug}`}
                  className="flex items-baseline gap-4 py-3 transition-colors hover:bg-rosewood"
                >
                  <span
                    aria-hidden
                    className="inline-block h-3 w-3 shrink-0 self-center rounded-[2px]"
                    style={{ background: melaColorVar(mela) }}
                  />
                  <span className="display min-w-[11rem] text-lg text-ivory">
                    {m.alternateNames[0] ?? m.name}
                  </span>
                  <span className="text-sm text-ivory-mut">{line}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
