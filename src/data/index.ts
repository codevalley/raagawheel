import { SEMITONE, type JanyaContent, type JanyaRaga, type MelaContent, type MelakartaRaga, type Raga, type WheelEntry } from "@/lib/carnatic/types";
import { chakraForMela, positionInChakra, swarasForMela } from "@/lib/carnatic/mela";
import { distinctSwaras, isVakra, parsePhrase, scaleSizeLabel } from "@/lib/carnatic/swara";

import { melas as c01 } from "./melas/chakra-01-indu";
import { melas as c02 } from "./melas/chakra-02-netra";
import { melas as c03 } from "./melas/chakra-03-agni";
import { melas as c04 } from "./melas/chakra-04-veda";
import { melas as c05 } from "./melas/chakra-05-bana";
import { melas as c06 } from "./melas/chakra-06-rutu";
import { melas as c07 } from "./melas/chakra-07-rishi";
import { melas as c08 } from "./melas/chakra-08-vasu";
import { melas as c09 } from "./melas/chakra-09-brahma";
import { melas as c10 } from "./melas/chakra-10-disi";
import { melas as c11 } from "./melas/chakra-11-rudra";
import { melas as c12 } from "./melas/chakra-12-aditya";

import { janyas as j1 } from "./janyas/batch-1-pentatonics";
import { janyas as j2 } from "./janyas/batch-2-kharaharapriya-family";
import { janyas as j3 } from "./janyas/batch-3-sankarabharanam-family";
import { janyas as j4 } from "./janyas/batch-4-harikambhoji-family";
import { janyas as j5 } from "./janyas/batch-5-todi-mayamalavagowla-misc";

export const melaContents: MelaContent[] = [
  ...c01, ...c02, ...c03, ...c04, ...c05, ...c06,
  ...c07, ...c08, ...c09, ...c10, ...c11, ...c12,
];

export const janyaContents: JanyaContent[] = [...j1, ...j2, ...j3, ...j4, ...j5];

function assembleMela(c: MelaContent): MelakartaRaga {
  const arohaTokens = parsePhrase(c.aroha);
  const avarohaTokens = parsePhrase(c.avaroha);
  const displayName = c.popularName ?? c.name;
  return {
    kind: "melakarta",
    slug: c.slug,
    name: c.name,
    displayName,
    alternateNames: (c.alternateNames ?? []).filter((a) => a !== displayName),
    melaNumber: c.melaNumber,
    chakra: chakraForMela(c.melaNumber),
    positionInChakra: positionInChakra(c.melaNumber),
    katapayadi: c.katapayadi,
    melaSwaras: swarasForMela(c.melaNumber),
    arohaTokens,
    avarohaTokens,
    arohaString: c.aroha,
    avarohaString: c.avaroha,
    swarasUsed: distinctSwaras([...arohaTokens, ...avarohaTokens]),
    characteristics: c.characteristics ?? {},
    songs: c.songs,
    trivia: c.trivia ?? [],
    janyaSlugs: [], // filled below once janyas are assembled
  };
}

function assembleJanya(c: JanyaContent): JanyaRaga {
  const arohaTokens = parsePhrase(c.aroha);
  const avarohaTokens = parsePhrase(c.avaroha);
  const anyaSwaras = c.anyaSwaras ?? [];
  const arohaCount = distinctSwaras(arohaTokens).length;
  const avarohaCount = distinctSwaras(avarohaTokens).length;
  const vakraUp = isVakra(arohaTokens, "up");
  const vakraDown = isVakra(avarohaTokens, "down");
  const vakraLabel =
    vakraUp && vakraDown ? " (vakra)" : vakraUp ? " (vakra aroha)" : vakraDown ? " (vakra avaroha)" : "";
  const classificationLabel =
    `${scaleSizeLabel(arohaCount)}–${scaleSizeLabel(avarohaCount)}${vakraLabel}` +
    (anyaSwaras.length > 0 ? " · Bhashanga" : "");
  return {
    kind: "janya",
    slug: c.slug,
    name: c.name,
    displayName: c.name,
    alternateNames: c.alternateNames ?? [],
    parentMelaNumber: c.melaNumber,
    anyaSwaras,
    anyaSwaraNote: c.anyaSwaraNote,
    arohaTokens,
    avarohaTokens,
    arohaString: c.aroha,
    avarohaString: c.avaroha,
    swarasUsed: distinctSwaras([...arohaTokens, ...avarohaTokens]),
    arohaCount,
    avarohaCount,
    isVakraAroha: vakraUp,
    isVakraAvaroha: vakraDown,
    isBhashanga: anyaSwaras.length > 0,
    classificationLabel,
    characteristics: c.characteristics ?? {},
    songs: c.songs,
    trivia: c.trivia ?? [],
  };
}

const assembledMelas = melaContents
  .map(assembleMela)
  .sort((a, b) => a.melaNumber - b.melaNumber);
const assembledJanyas = janyaContents
  .map(assembleJanya)
  .sort((a, b) => a.name.localeCompare(b.name));

for (const j of assembledJanyas) {
  assembledMelas.find((m) => m.melaNumber === j.parentMelaNumber)?.janyaSlugs.push(j.slug);
}

export const allRagas: readonly Raga[] = Object.freeze([...assembledMelas, ...assembledJanyas]);
export const melakartas: readonly MelakartaRaga[] = assembledMelas;
export const janyas: readonly JanyaRaga[] = assembledJanyas;

export const ragaBySlug: ReadonlyMap<string, Raga> = new Map(allRagas.map((r) => [r.slug, r]));
export const melaByNumber: ReadonlyMap<number, MelakartaRaga> = new Map(
  assembledMelas.map((m) => [m.melaNumber, m]),
);

/** Slim projection shipped to the client for the wheel. */
export const wheelData: readonly WheelEntry[] = assembledMelas.map((m) => ({
  melaNumber: m.melaNumber,
  name: m.name,
  displayName: m.displayName,
  slug: m.slug,
  chakraIndex: m.chakra.index,
  positionInChakra: m.positionInChakra,
  semitones: m.melaSwaras.map((s) => SEMITONE[s]),
}));
