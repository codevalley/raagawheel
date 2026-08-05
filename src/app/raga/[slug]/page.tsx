import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allRagas, janyas, melaByNumber, ragaBySlug } from "@/data";
import type {
  JanyaRaga,
  MelakartaRaga,
  Raga,
  Song,
  Swarasthana,
} from "@/lib/carnatic/types";
import { melaColorVar, melaInk } from "@/lib/carnatic/color";
import { madhyamaPartner } from "@/lib/carnatic/mela";
import { decodeKatapayadi } from "@/lib/carnatic/katapayadi";
import {
  songSearchQuery,
  spotifySearchUrl,
  youtubeSearchUrl,
} from "@/lib/carnatic/links";
import { SwaraGlyph } from "@/components/swara/SwaraGlyph";
import { RagaSoundSection } from "@/components/raga/RagaSoundSection";
import { RagaSeal } from "@/components/raga/RagaSeal";
import { MoonIcon, SpotifyIcon, SunIcon, YouTubeIcon } from "@/components/icons";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allRagas.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const raga = ragaBySlug.get(slug);
  if (!raga) return {};
  const description =
    raga.kind === "melakarta"
      ? `Melakarta ${raga.melaNumber} (${raga.chakra.name} chakra) — arohana ${raga.arohaString}, avarohana ${raga.avarohaString}.`
      : `Janya of mela ${raga.parentMelaNumber} — arohana ${raga.arohaString}, avarohana ${raga.avarohaString}.`;
  return { title: raga.displayName, description };
}

// ── Small presentational helpers (server-safe) ──────────────────────────

/** A swara name with its numeral as a real subscript, e.g. R₂. */
function SwaraName({ swara }: { swara: Swarasthana }) {
  return <SwaraGlyph token={{ swara, octave: 0 }} />;
}

function Kolam() {
  return (
    <div className="kolam" aria-hidden>
      {Array.from({ length: 7 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="eyebrow mb-4">{children}</h2>;
}

// ── Eyebrow line ────────────────────────────────────────────────────────

function MelaEyebrow({ raga }: { raga: MelakartaRaga }) {
  return (
    <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
      <span>Mela {raga.melaNumber}</span>
      <span aria-hidden className="text-hairline-strong">
        ·
      </span>
      <span
        className="rounded-brand px-2 py-0.5"
        style={{ background: melaColorVar(raga.melaNumber), color: melaInk(raga.melaNumber) }}
      >
        {raga.chakra.name} chakra
      </span>
      <span aria-hidden className="text-hairline-strong">
        ·
      </span>
      <span className="swara">
        M<sub>{raga.melaNumber <= 36 ? 1 : 2}</sub>
      </span>
    </p>
  );
}

function JanyaEyebrow({ raga }: { raga: JanyaRaga }) {
  const parent = melaByNumber.get(raga.parentMelaNumber);
  return (
    <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
      <span>Janya of mela {raga.parentMelaNumber}</span>
      {parent && (
        <>
          <span aria-hidden className="text-hairline-strong">
            ·
          </span>
          <Link
            href={`/raga/${parent.slug}`}
            className="rounded-brand px-2 py-0.5 transition-opacity hover:opacity-85"
            style={{
              background: melaColorVar(raga.parentMelaNumber),
              color: melaInk(raga.parentMelaNumber),
            }}
          >
            {parent.displayName}
          </Link>
        </>
      )}
    </p>
  );
}

// ── Katapayadi decode (melakarta only) ──────────────────────────────────

function KatapayadiDecode({ raga }: { raga: MelakartaRaga }) {
  const [first, second] = raga.katapayadi.syllables;
  const prefix = first.syllable + second.syllable;
  const remainder = raga.name.toLowerCase().startsWith(prefix.toLowerCase())
    ? raga.name.slice(prefix.length)
    : null;
  const decoded = decodeKatapayadi(raga.katapayadi);
  const accent = melaColorVar(raga.melaNumber);

  return (
    <section aria-label="Katapayadi decode" className="rounded-brand border border-hairline bg-rosewood p-5">
      <p className="eyebrow mb-3">The name is the number</p>
      <p className="display text-2xl">
        <strong style={{ color: accent }}>
          {first.syllable}
          <span aria-hidden className="mx-0.5 text-hairline-strong">
            ·
          </span>
          {second.syllable}
        </strong>
        {remainder !== null && (
          <>
            <span aria-hidden className="mx-0.5 text-hairline-strong">
              ·
            </span>
            <span className="text-ivory-mut">{remainder}</span>
          </>
        )}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
        {raga.katapayadi.syllables.map((s, i) => (
          <span
            key={i}
            className="flex items-center gap-2 rounded-brand border border-hairline-strong px-2.5 py-1"
          >
            <span className="display">{s.syllable}</span>
            <span aria-hidden className="text-ivory-mut">
              →
            </span>
            <span className="text-ivory-mut">{s.consonant}</span>
            <span aria-hidden className="text-ivory-mut">
              →
            </span>
            <span className="swara font-semibold" style={{ color: accent }}>
              {s.digit}
            </span>
          </span>
        ))}
        <span className="text-ivory-mut">
          {first.digit}
          {second.digit} reversed
        </span>
        <span aria-hidden className="text-ivory-mut">
          →
        </span>
        <span className="display text-lg" style={{ color: accent }}>
          {decoded}
        </span>
      </div>
      {raga.katapayadi.note && (
        <p className="mt-3 text-sm text-ivory-mut">{raga.katapayadi.note}</p>
      )}
      <p className="mt-3 text-sm text-ivory-mut">
        Every mela name encodes its own number —{" "}
        <Link href="/katapayadi" className="text-zari transition-colors hover:text-zari-hi">
          how the katapayadi sutra works
        </Link>
        .
      </p>
    </section>
  );
}

// ── Characteristics ─────────────────────────────────────────────────────

const TIME_PHRASE: Record<string, string> = {
  morning: "traditionally sung in the morning",
  midday: "traditionally sung at midday",
  evening: "traditionally sung in the evening",
  night: "traditionally sung at night",
  anytime: "sung at any hour",
};

function Characteristics({ raga, accent }: { raga: Raga; accent: string }) {
  const c = raga.characteristics;
  const jeeva = c.jeevaSwaras ?? [];
  const proseParts: string[] = [];
  if (c.mood) proseParts.push(c.mood.replace(/\.$/, ""));
  if (c.rasa && c.rasa.length > 0) proseParts.push(`its rasa is ${c.rasa.join(", ")}`);
  if (c.timeOfDay) proseParts.push(TIME_PHRASE[c.timeOfDay] ?? c.timeOfDay);
  const prose =
    proseParts.length > 0
      ? proseParts.join("; ").replace(/^./, (ch) => ch.toUpperCase()) + "."
      : null;

  const isJanya = raga.kind === "janya";
  const hasAnything =
    jeeva.length > 0 || prose !== null || c.gamakaNotes || isJanya;
  if (!hasAnything) return null;

  return (
    <section aria-label="Characteristics">
      <SectionTitle>How to know it</SectionTitle>
      <div className="flex flex-col gap-4">
        {isJanya && (
          <p className="text-sm text-ivory-mut">
            <span className="text-ivory">{raga.classificationLabel}</span>
          </p>
        )}
        {jeeva.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-ivory-mut">Jeeva swaras — the life notes:</span>
            {jeeva.map((s) => (
              <span
                key={s}
                className="swara rounded-brand border bg-rosewood px-2.5 py-1 text-[0.95rem]"
                style={{ borderColor: accent }}
              >
                <SwaraName swara={s} />
              </span>
            ))}
          </div>
        )}
        {prose && (
          <p className="max-w-prose">
            {c.timeOfDay && c.timeOfDay !== "anytime" && (
              <span className="mr-2 inline-flex text-zari" aria-hidden>
                {c.timeOfDay === "evening" || c.timeOfDay === "night" ? <MoonIcon /> : <SunIcon />}
              </span>
            )}
            {prose}
          </p>
        )}
        {c.gamakaNotes && <p className="max-w-prose text-sm text-ivory-mut">{c.gamakaNotes}</p>}
        {isJanya && raga.anyaSwaras.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-ivory-mut">Anya (foreign) swaras:</span>
            {raga.anyaSwaras.map((s) => (
              <span
                key={s}
                className="swara rounded-brand border border-hairline-strong bg-rosewood px-2.5 py-1 text-[0.95rem]"
              >
                <SwaraName swara={s} />
              </span>
            ))}
            {raga.anyaSwaraNote && (
              <span className="text-sm text-ivory-mut">{raga.anyaSwaraNote}</span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// ── Songs ledger ────────────────────────────────────────────────────────

function SongRow({ song, ragaName }: { song: Song; ragaName: string }) {
  // The colloquial name searches far better ("Sankarabharanam", not "Dheera…").
  const query = songSearchQuery(song, ragaName);
  const detail =
    song.type === "film" && song.film
      ? [song.film.name, song.film.year].filter(Boolean).join(" · ")
      : [song.composer, song.tala].filter(Boolean).join(" · ");
  return (
    <li className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-hairline py-3 last:border-b-0">
      <div className="min-w-0 flex-1">
        <p className="display text-lg leading-snug">{song.title}</p>
        <p className="text-sm text-ivory-mut">{detail}</p>
        {song.trivia && <p className="mt-1 max-w-prose text-sm text-ivory-mut">{song.trivia}</p>}
      </div>
      <p className="flex shrink-0 items-center gap-4 text-sm">
        <a
          href={youtubeSearchUrl(query)}
          target="_blank"
          rel="noopener"
          aria-label={`Search YouTube for ${song.title}`}
          className="flex items-center gap-1.5 text-ivory-mut transition-colors hover:text-[#FF0033]"
        >
          <YouTubeIcon /> YouTube
        </a>
        <a
          href={spotifySearchUrl(query)}
          target="_blank"
          rel="noopener"
          aria-label={`Search Spotify for ${song.title}`}
          className="flex items-center gap-1.5 text-ivory-mut transition-colors hover:text-[#1ED760]"
        >
          <SpotifyIcon /> Spotify
        </a>
      </p>
    </li>
  );
}

function Songs({ raga }: { raga: Raga }) {
  if (raga.songs.length === 0) return null;
  const classical = raga.songs.filter((s) => s.type !== "film");
  const film = raga.songs.filter((s) => s.type === "film");
  return (
    <section aria-label="Songs">
      <SectionTitle>Hear it in songs</SectionTitle>
      {classical.length > 0 && (
        <ul className="m-0 list-none p-0">
          {classical.map((s, i) => (
            <SongRow key={`${s.title}-${i}`} song={s} ragaName={raga.displayName} />
          ))}
        </ul>
      )}
      {film.length > 0 && (
        <div className={classical.length > 0 ? "mt-8" : ""}>
          <p className="eyebrow mb-2 text-ivory-mut">In film music</p>
          <ul className="m-0 list-none p-0">
            {film.map((s, i) => (
              <SongRow key={`${s.title}-${i}`} song={s} ragaName={raga.displayName} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

// ── Family ──────────────────────────────────────────────────────────────

function RagaLinkRow({ slug }: { slug: string }) {
  const r = ragaBySlug.get(slug);
  if (!r) return null;
  const familyMela = r.kind === "melakarta" ? r.melaNumber : r.parentMelaNumber;
  return (
    <li>
      <Link
        href={`/raga/${r.slug}`}
        className="flex items-center gap-3 rounded-brand border border-hairline bg-rosewood px-3 py-2 transition-colors hover:border-hairline-strong"
      >
        <RagaSeal
          swaras={r.swarasUsed}
          anyaSwaras={r.kind === "janya" ? r.anyaSwaras : []}
          color={melaColorVar(familyMela)}
          size={30}
          className="shrink-0"
        />
        <span className="display">{r.displayName}</span>
        {r.kind === "janya" && (
          <span className="text-xs text-ivory-mut">{r.classificationLabel}</span>
        )}
      </Link>
    </li>
  );
}

function Family({ raga }: { raga: Raga }) {
  if (raga.kind === "melakarta") {
    if (raga.janyaSlugs.length === 0) return null;
    return (
      <section aria-label="Janya ragas">
        <SectionTitle>Janyas of {raga.displayName}</SectionTitle>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {raga.janyaSlugs.map((slug) => (
            <RagaLinkRow key={slug} slug={slug} />
          ))}
        </ul>
      </section>
    );
  }

  const parent = melaByNumber.get(raga.parentMelaNumber);
  if (!parent) return null;
  const siblings = parent.janyaSlugs.filter((s) => s !== raga.slug);
  return (
    <section aria-label="Family">
      <SectionTitle>Family</SectionTitle>
      <Link
        href={`/raga/${parent.slug}`}
        className="flex items-baseline gap-3 rounded-brand border border-hairline bg-rosewood px-4 py-3 transition-colors hover:border-hairline-strong"
      >
        <span
          aria-hidden
          className="inline-block h-2.5 w-2.5 shrink-0 self-center rounded-full"
          style={{ background: melaColorVar(parent.melaNumber) }}
        />
        <span className="eyebrow">Parent · Mela {parent.melaNumber}</span>
        <span className="display text-lg">{parent.displayName}</span>
      </Link>
      {siblings.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-ivory-mut">Sibling janyas of {parent.displayName}</p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {siblings.map((slug) => (
              <RagaLinkRow key={slug} slug={slug} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

// ── Footer navigation ───────────────────────────────────────────────────

function FooterNav({ raga }: { raga: Raga }) {
  if (raga.kind === "melakarta") {
    const n = raga.melaNumber;
    const prev = melaByNumber.get(n === 1 ? 72 : n - 1);
    const next = melaByNumber.get(n === 72 ? 1 : n + 1);
    const partner = melaByNumber.get(madhyamaPartner(n));
    return (
      <nav aria-label="Raga navigation" className="border-t border-hairline pt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 text-sm">
          {prev && (
            <Link
              href={`/raga/${prev.slug}`}
              className="text-ivory-mut transition-colors hover:text-ivory"
            >
              ← {prev.melaNumber} · {prev.displayName}
            </Link>
          )}
          {next && (
            <Link
              href={`/raga/${next.slug}`}
              className="order-last text-ivory-mut transition-colors hover:text-ivory sm:order-none"
            >
              {next.melaNumber} · {next.displayName} →
            </Link>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
          {partner && (
            <Link
              href={`/raga/${partner.slug}`}
              className="text-zari transition-colors hover:text-zari-hi"
            >
              Madhyama partner: {partner.melaNumber} · {partner.displayName}
            </Link>
          )}
          <Link
            href={`/melakarta?raga=${raga.slug}`}
            className="text-zari transition-colors hover:text-zari-hi"
          >
            View on wheel
          </Link>
        </div>
      </nav>
    );
  }

  const parent = melaByNumber.get(raga.parentMelaNumber);
  const siblings = parent?.janyaSlugs ?? [];
  const idx = siblings.indexOf(raga.slug);
  const prevSlug = idx > 0 ? siblings[idx - 1] : null;
  const nextSlug = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;
  const prev = prevSlug ? ragaBySlug.get(prevSlug) : undefined;
  const next = nextSlug ? ragaBySlug.get(nextSlug) : undefined;
  return (
    <nav aria-label="Raga navigation" className="border-t border-hairline pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 text-sm">
        {prev && (
          <Link href={`/raga/${prev.slug}`} className="text-ivory-mut transition-colors hover:text-ivory">
            ← {prev.name}
          </Link>
        )}
        {next && (
          <Link
            href={`/raga/${next.slug}`}
            className="order-last text-ivory-mut transition-colors hover:text-ivory sm:order-none"
          >
            {next.name} →
          </Link>
        )}
      </div>
      {parent && (
        <div className="mt-4 text-sm">
          <Link href={`/raga/${parent.slug}`} className="text-zari transition-colors hover:text-zari-hi">
            Parent mela: {parent.melaNumber} · {parent.displayName}
          </Link>
        </div>
      )}
    </nav>
  );
}

// ── Page ────────────────────────────────────────────────────────────────

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raga = ragaBySlug.get(slug);
  if (!raga) notFound();

  const familyMela = raga.kind === "melakarta" ? raga.melaNumber : raga.parentMelaNumber;
  const accent = melaColorVar(familyMela);

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-12">
      <header className="relative">
        {/* A quiet wash of the raga's own family color behind the title. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-8 -top-10 h-56"
          style={{
            background: `radial-gradient(ellipse 70% 100% at 30% 0%, color-mix(in oklab, ${accent} 16%, transparent), transparent 70%)`,
          }}
        />
        <div className="relative flex items-start justify-between gap-6">
          <div>
            {raga.kind === "melakarta" ? (
              <MelaEyebrow raga={raga} />
            ) : (
              <JanyaEyebrow raga={raga} />
            )}
            <h1 className="display mt-3 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              {raga.displayName}
            </h1>
            {raga.displayName !== raga.name && (
              <p className="mt-1.5 text-[0.95rem] text-ivory-mut">
                formally <span className="display text-ivory">{raga.name}</span> — the name that
                encodes {raga.kind === "melakarta" ? raga.melaNumber : ""}
              </p>
            )}
            {raga.alternateNames.length > 0 && (
              <p className="mt-1 text-sm text-ivory-mut">
                also known as {raga.alternateNames.join(", ")}
              </p>
            )}
          </div>
          <RagaSeal
            swaras={raga.swarasUsed}
            anyaSwaras={raga.kind === "janya" ? raga.anyaSwaras : []}
            color={accent}
            size={104}
            className="mt-2 hidden shrink-0 sm:block"
            title={`${raga.displayName}: ${raga.swarasUsed.length} swaras on the twelve-key ring`}
          />
        </div>
      </header>

      {raga.kind === "melakarta" && <KatapayadiDecode raga={raga} />}

      <section aria-label="The sound">
        <RagaSoundSection raga={raga} accentVar={accent} />
      </section>

      <Characteristics raga={raga} accent={accent} />

      {raga.trivia.length > 0 && (
        <>
          <Kolam />
          <section aria-label="Trivia" className="flex flex-col gap-5">
            {raga.trivia.map((t, i) => (
              <aside key={i} className="border-l-2 border-zari pl-4">
                <p className="max-w-prose text-[0.95rem] text-ivory">{t.text}</p>
                {t.source && <p className="mt-1 text-xs text-ivory-mut">{t.source}</p>}
              </aside>
            ))}
          </section>
        </>
      )}

      <Family raga={raga} />

      <Songs raga={raga} />

      <FooterNav raga={raga} />
    </article>
  );
}
