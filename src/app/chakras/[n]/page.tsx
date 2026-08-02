import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRagasByChakra } from "@/data/ragas";
import { ragaDisplayNames } from "@/lib/music/display";
import { CHAKRA_NAMES } from "@/lib/music/types";
import { formatSwaras } from "@/lib/music/swaras";

type Props = { params: Promise<{ n: string }> };

export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({ n: String(i + 1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { n } = await params;
  const num = Number(n);
  const name = CHAKRA_NAMES[num - 1];
  return { title: name ? `${name} chakra` : "Chakra" };
}

export default async function ChakraPage({ params }: Props) {
  const { n } = await params;
  const num = Number(n);
  if (!Number.isInteger(num) || num < 1 || num > 12) notFound();

  const name = CHAKRA_NAMES[num - 1];
  const melas = getRagasByChakra(num);
  const half = num <= 6 ? "Suddha madhyama (M1)" : "Prati madhyama (M2)";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-faint">
        <Link href="/" className="hover:text-accent">
          Wheel
        </Link>
        <span className="mx-2">/</span>
        <span className="text-muted">
          Chakra {num}
        </span>
      </nav>
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Chakra {num} / 12</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{name}</h1>
      <p className="mt-2 text-muted">
        Six consecutive melakartas sharing the same Ri–Ga family pairing. This half of the chart
        uses {half}.
      </p>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {melas.map((m) => {
          const d = ragaDisplayNames(m);
          return (
            <li key={m.slug}>
              <Link
                href={`/ragas/${m.slug}`}
                className="block py-4 transition-colors hover:bg-bg-panel/40 px-1"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-medium">
                    <span className="swara-chip mr-2 text-faint">#{m.melaNumber}</span>
                    {d.title}
                  </span>
                  {d.katapayadi && (
                    <span className="text-xs text-faint">{d.katapayadi}</span>
                  )}
                </div>
                <p className="mt-1 swara-chip text-sm text-accent">{formatSwaras(m.arohana)}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex gap-4 text-sm">
        {num > 1 && (
          <Link href={`/chakras/${num - 1}`} className="text-accent hover:underline">
            ← {CHAKRA_NAMES[num - 2]}
          </Link>
        )}
        {num < 12 && (
          <Link href={`/chakras/${num + 1}`} className="text-accent hover:underline">
            {CHAKRA_NAMES[num]} →
          </Link>
        )}
      </div>
    </div>
  );
}
