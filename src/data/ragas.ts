import { JANYA_RAGAS } from "@/data/janyas";
import { generateMelakartas } from "@/lib/music/melakarta";
import { RagaSchema, type Raga } from "@/lib/music/types";

const melakartas = generateMelakartas();
const melaSlugs = new Set(melakartas.map((r) => r.slug));

/** Content for popular melas (avoids duplicate slugs with janya list). */
const MELA_ENRICHMENT: Record<number, Partial<Raga>> = {
  8: {
    songs: [
      { title: "Eranapai (Varnam)", kind: "classical" },
      { title: "Kaddanu Variki", composer: "Tyagaraja", kind: "classical" },
    ],
    patterns: [
      {
        label: "Gamaka-heavy",
        swaras: ["S", "R1", "G2", "M1", "G2", "R1", "S"],
        note: "Todi lives in oscillations more than plain notes.",
      },
    ],
    trivia: ["Often called Todi — one of the deepest rakti ragas in the system."],
  },
  15: {
    songs: [
      {
        title: "Sarali / janta varisai (pedagogy)",
        kind: "other",
        urls: { youtube: "https://www.youtube.com/results?search_query=Mayamalavagowla+sarali+varisai" },
      },
      { title: "Tulasidala", composer: "Tyagaraja", kind: "classical" },
      { title: "Merusamana", composer: "Tyagaraja", kind: "classical" },
    ],
    patterns: [
      { label: "Student scale", swaras: ["S", "R1", "G3", "M1", "P", "D1", "N3", "S"] },
    ],
    trivia: [
      "The traditional first scale taught to beginners (sarali varisai).",
      "Symmetric R1–G3 / D1–N3 pairing is pedagogically perfect.",
    ],
  },
  16: {
    songs: [
      { title: "Etula Brothuvo", composer: "Tyagaraja", kind: "classical" },
      { title: "Sugunamule", composer: "Tyagaraja", kind: "classical" },
    ],
    patterns: [
      { label: "Ahir Bhairav cousin", swaras: ["S", "R1", "G3", "M1", "P", "D2", "N2", "S"] },
    ],
    trivia: ["Close to Hindustani Ahir Bhairav; dawn-like gravity."],
  },
  21: {
    songs: [{ title: "Kaligiyunte", composer: "Tyagaraja", kind: "classical" }],
    patterns: [
      { label: "Harmonic minor cousin", swaras: ["S", "R2", "G2", "M1", "P", "D1", "N3", "S"] },
    ],
    trivia: ["Maps closely to harmonic minor for Western ears."],
  },
  22: {
    songs: [
      {
        title: "Chakkani Raja",
        composer: "Tyagaraja",
        kind: "classical",
        urls: { youtube: "https://www.youtube.com/results?search_query=Chakkani+Raja+Kharaharapriya" },
      },
    ],
    patterns: [{ label: "Karuna rasa", swaras: ["R2", "G2", "M1", "P", "D2", "N2", "S"] }],
    trivia: ["Parent to Abheri, Madhyamavati, Kapi, and many more."],
  },
  26: {
    songs: [
      { title: "Adamodi Galade", kind: "classical" },
      {
        title: "Film songs in Charukesi",
        kind: "film",
        urls: { youtube: "https://www.youtube.com/results?search_query=Charukesi+film+song" },
      },
    ],
    patterns: [{ label: "Bittersweet", swaras: ["G3", "M1", "P", "D1", "N2", "S"] }],
    trivia: ["A favourite of film composers for yearning melodies."],
  },
  29: {
    songs: [
      {
        title: "Brochevarevarura",
        composer: "Mysore Vasudevachar",
        kind: "classical",
        urls: { youtube: "https://www.youtube.com/results?search_query=Brochevarevarura" },
      },
      { title: "Swara Raga Sudha", composer: "Tyagaraja", kind: "classical" },
    ],
    patterns: [
      {
        label: "Full scale",
        swaras: ["S", "R2", "G3", "M1", "P", "D2", "N3", "S"],
        note: "The reference ‘major’ colour of Carnatic theory.",
      },
    ],
    trivia: ["Countless janyas (Hamsadhwani, Suddha Saveri, Arabhi…) hang off this parent."],
  },
  45: {
    songs: [{ title: "Ennalli Noduve", kind: "classical" }],
    patterns: [
      { label: "Pathos", swaras: ["S", "R1", "G2", "M2", "P", "D1", "N3", "S"] },
    ],
    trivia: ["Deep sorrow colour; related to Hindustani Todi flavours."],
  },
  51: {
    songs: [
      { title: "Ninnu Nera", composer: "Tyagaraja", kind: "classical" },
      { title: "Siva Siva Siva", composer: "Tyagaraja", kind: "classical" },
    ],
    patterns: [
      { label: "Intense climb", swaras: ["S", "R1", "G3", "M2", "P", "D1", "N3", "S"] },
    ],
    trivia: ["Often called Panthuvarali in concert parlance."],
  },
  56: {
    songs: [
      {
        title: "Parvati Nayakane",
        composer: "Papanasam Sivan",
        kind: "classical",
        urls: { youtube: "https://www.youtube.com/results?search_query=Parvati+Nayakane+Shanmukhapriya" },
      },
      { title: "Marivere Dikkevarayya", composer: "Patnam Subramania Iyer", kind: "classical" },
    ],
    patterns: [{ label: "Angular colour", swaras: ["R2", "G2", "M2", "P", "D1", "N2"] }],
    trivia: ["Named for Shanmukha (Muruga); sharp M2 + soft G2 is its fingerprint."],
  },
  57: {
    songs: [
      { title: "Ninne Nammi", composer: "Tyagaraja", kind: "classical" },
      { title: "Needu Charanamule", kind: "classical" },
    ],
    patterns: [{ label: "Lion gait", swaras: ["R2", "G2", "M2", "P", "D1", "N3", "S"] }],
    trivia: ["‘Lion’s middle’ — dramatic and film-friendly."],
  },
  58: {
    songs: [
      { title: "Sri Kanthimathim", composer: "Muthuswami Dikshitar", kind: "classical" },
    ],
    patterns: [{ label: "Soft sheen", swaras: ["G2", "M2", "P", "D2", "N2", "S"] }],
    trivia: ["Dikshitar’s Sri Kanthimathim is the classic entry point."],
  },
  59: {
    songs: [{ title: "Parandhamavati", kind: "classical" }],
    patterns: [
      { label: "Contemporary favourite", swaras: ["S", "R2", "G2", "M2", "P", "D2", "N3", "S"] },
    ],
    trivia: ["Popular in modern krithis and fusion."],
  },
  64: {
    songs: [{ title: "Kanta Judumi", composer: "Tyagaraja", kind: "classical" }],
    patterns: [
      { label: "Lydian-ish glow", swaras: ["S", "R2", "G3", "M2", "P", "D2", "N2", "S"] },
    ],
    trivia: ["Prati Ma with kaisiki Ni; modern composers love it."],
  },
  65: {
    songs: [
      {
        title: "Nidhi Chala Sukhama",
        composer: "Tyagaraja",
        kind: "classical",
        urls: { youtube: "https://www.youtube.com/results?search_query=Nidhi+Chala+Sukhama" },
      },
      { title: "Himadri Suthe", composer: "Syama Sastri", kind: "classical" },
    ],
    patterns: [
      { label: "Majestic climb", swaras: ["S", "R2", "G3", "M2", "P", "D2", "N3", "S"] },
      { label: "Ma focus", swaras: ["G3", "M2", "P", "M2", "G3", "R2"] },
    ],
    trivia: ["Often just called Kalyani — prati madhyama counterpart to Sankarabharanam."],
  },
};

function enrichMelas(ragas: Raga[]): Raga[] {
  return ragas.map((r) => {
    if (!r.melaNumber) return r;
    const extra = MELA_ENRICHMENT[r.melaNumber];
    if (!extra) return r;
    return {
      ...r,
      aliases: uniqueStrings([...(r.aliases ?? []), ...(extra.aliases ?? [])]),
      songs: extra.songs ?? r.songs,
      patterns: extra.patterns ?? r.patterns,
      keyNotes: extra.keyNotes ?? r.keyNotes,
      trivia: [...(r.trivia ?? []), ...(extra.trivia ?? [])],
    };
  });
}

function uniqueStrings(values: string[]): string[] | undefined {
  const out = [...new Set(values)];
  return out.length ? out : undefined;
}

const janyas = JANYA_RAGAS.filter((j) => !melaSlugs.has(j.slug));

const allRagasUnvalidated: Raga[] = [...enrichMelas(melakartas), ...janyas];

export const ALL_RAGAS: Raga[] = allRagasUnvalidated.map((r) => RagaSchema.parse(r));

const bySlug = new Map(ALL_RAGAS.map((r) => [r.slug, r]));

export function getRaga(slug: string): Raga | undefined {
  return bySlug.get(slug);
}

export function getMelakartas(): Raga[] {
  return ALL_RAGAS.filter((r) => r.kind === "melakarta").sort(
    (a, b) => (a.melaNumber ?? 0) - (b.melaNumber ?? 0),
  );
}

export function getRagasByChakra(chakra: number): Raga[] {
  return getMelakartas().filter((r) => r.chakra === chakra);
}

export function getJanyasOf(parentSlug: string): Raga[] {
  return ALL_RAGAS.filter((r) => r.kind === "janya" && r.parentSlug === parentSlug);
}

export function getParent(raga: Raga): Raga | undefined {
  if (raga.kind === "melakarta") return raga;
  if (!raga.parentSlug) return undefined;
  return getRaga(raga.parentSlug);
}

export function searchRagas(query: string): Raga[] {
  const q = query.trim().toLowerCase();
  if (!q) return ALL_RAGAS;
  return ALL_RAGAS.filter((r) => {
    const hay = [r.name, r.slug, r.nameIAST, ...(r.aliases ?? []), String(r.melaNumber ?? "")]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function filterRagas(opts: {
  kind?: "melakarta" | "janya" | "all";
  popularOnly?: boolean;
  chakra?: number;
  query?: string;
}): Raga[] {
  let list = opts.query ? searchRagas(opts.query) : [...ALL_RAGAS];
  if (opts.kind && opts.kind !== "all") {
    list = list.filter((r) => r.kind === opts.kind);
  }
  if (opts.popularOnly) {
    list = list.filter((r) => r.popular);
  }
  if (opts.chakra) {
    list = list.filter(
      (r) =>
        r.chakra === opts.chakra ||
        (r.melaNumber != null && Math.ceil(r.melaNumber / 6) === opts.chakra),
    );
  }
  return list.sort((a, b) => a.name.localeCompare(b.name));
}
