/**
 * The quality backbone: every hand-authored fact that CAN be checked by
 * machine IS checked here. Content batches merge only when this is green.
 */
import { describe, expect, it } from "vitest";
import { decodeKatapayadi, digitForConsonant } from "@/lib/carnatic/katapayadi";
import { melaArohaString, melaAvarohaString, swarasForMela } from "@/lib/carnatic/mela";
import { distinctSwaras, isVakra, parsePhrase } from "@/lib/carnatic/swara";
import { allRagas, janyaContents, melaByNumber, melaContents } from "@/data";

/** Songs/characteristics are enforced once the content wave lands. */
const CONTENT_COMPLETE = process.env.CONTENT_COMPLETE === "1";

describe("melakarta completeness", () => {
  it("has exactly melas 1..72, no duplicates", () => {
    expect(melaContents).toHaveLength(72);
    const numbers = melaContents.map((m) => m.melaNumber).sort((a, b) => a - b);
    expect(numbers).toEqual(Array.from({ length: 72 }, (_, i) => i + 1));
  });
});

describe.each(melaContents.map((m) => [m.melaNumber, m.name, m] as const))(
  "mela %i %s",
  (n, _name, m) => {
    it("authored scale equals the mathematical derivation", () => {
      expect(parsePhrase(m.aroha)).toEqual(parsePhrase(melaArohaString(n)));
      expect(parsePhrase(m.avaroha)).toEqual(parsePhrase(melaAvarohaString(n)));
    });
    it("katapayadi decodes to its own number, digits match the table", () => {
      expect(decodeKatapayadi(m.katapayadi)).toBe(n);
      for (const s of m.katapayadi.syllables) {
        expect(
          digitForConsonant(s.consonant),
          `consonant "${s.consonant}" of "${s.syllable}"`,
        ).toBe(s.digit);
      }
    });
    it("aroha strictly ascends, avaroha strictly descends", () => {
      expect(isVakra(parsePhrase(m.aroha), "up")).toBe(false);
      expect(isVakra(parsePhrase(m.avaroha), "down")).toBe(false);
    });
    it.runIf(CONTENT_COMPLETE)("has at least one song", () => {
      expect(m.songs.length).toBeGreaterThan(0);
    });
  },
);

describe("janya integrity", () => {
  it.runIf(janyaContents.length > 0)("every janya references an existing parent", () => {
    for (const j of janyaContents) {
      expect(j.melaNumber, j.name).toBeGreaterThanOrEqual(1);
      expect(j.melaNumber, j.name).toBeLessThanOrEqual(72);
      expect(melaByNumber.get(j.melaNumber), j.name).toBeDefined();
    }
  });
  it.runIf(janyaContents.length > 0)(
    "janya swaras ⊆ parent scale ∪ declared anya; anya ∉ parent",
    () => {
      for (const j of janyaContents) {
        const parent = new Set<string>(swarasForMela(j.melaNumber));
        const anya = new Set<string>(j.anyaSwaras ?? []);
        const used = distinctSwaras([...parsePhrase(j.aroha), ...parsePhrase(j.avaroha)]);
        for (const s of used) {
          expect(
            parent.has(s) || anya.has(s),
            `${j.name}: ${s} is neither in mela ${j.melaNumber} nor declared anya`,
          ).toBe(true);
        }
        for (const s of anya) {
          expect(parent.has(s), `${j.name}: declared anya ${s} is already in the parent`).toBe(false);
          const inScale = used.includes(s as (typeof used)[number]);
          expect(
            inScale || Boolean(j.anyaSwaraNote),
            `${j.name}: anya ${s} absent from scale and no anyaSwaraNote`,
          ).toBe(true);
        }
      }
    },
  );
  it.runIf(CONTENT_COMPLETE && janyaContents.length > 0)("every janya has at least one song", () => {
    for (const j of janyaContents) expect(j.songs.length, j.name).toBeGreaterThan(0);
  });
});

describe("cross-cutting hygiene", () => {
  it("slugs are unique and url-safe", () => {
    const slugs = allRagas.map((r) => r.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });
  it("song metadata is coherent", () => {
    for (const r of allRagas) {
      const titles = r.songs.map((s) => s.title);
      expect(new Set(titles).size, `${r.name}: duplicate song titles`).toBe(titles.length);
      for (const s of r.songs) {
        expect(s.composer, `${r.name} / ${s.title}: composer`).toBeTruthy();
        expect(s.language, `${r.name} / ${s.title}: language`).toBeTruthy();
        expect(
          s.type === "film" ? Boolean(s.film) : !s.film,
          `${r.name} / ${s.title}: film metadata iff type=film`,
        ).toBe(true);
      }
    }
  });
});
