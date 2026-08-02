import type { Raga } from "./types";

/**
 * Popular concert name as title; katapayadi / official melakarta name as subtitle
 * when they differ (e.g. Sankarabharanam / Dheerasankarabharanam).
 */
export function ragaDisplayNames(raga: Raga): {
  title: string;
  katapayadi?: string;
  alsoKnownAs: string[];
} {
  if (raga.kind === "melakarta") {
    const popular = raga.aliases?.[0];
    if (popular && popular !== raga.name) {
      return {
        title: popular,
        katapayadi: raga.name,
        alsoKnownAs: (raga.aliases ?? []).slice(1),
      };
    }
    return { title: raga.name, alsoKnownAs: raga.aliases ?? [] };
  }

  // Janyas: `name` is already the popular form. Treat a longer official/mela
  // alias as katapayadi subtitle (Todi → Hanumatodi).
  const kataAlias = (raga.aliases ?? []).find(
    (a) => a !== raga.name && (a.length > raga.name.length || looksLikeMelaName(a)),
  );
  const alsoKnownAs = (raga.aliases ?? []).filter((a) => a !== kataAlias);

  return {
    title: raga.name,
    katapayadi: kataAlias,
    alsoKnownAs,
  };
}

function looksLikeMelaName(alias: string): boolean {
  const melaHints = [
    "hanumatodi",
    "dheerasankarabharanam",
    "mechakalyani",
    "kamavardhani",
    "jhalavarali",
    "natabhairavi",
    "chalanata",
  ];
  return melaHints.includes(alias.toLowerCase());
}
