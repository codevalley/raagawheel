import { describe, expect, it } from "vitest";
import { decodeKatapayadi, digitForConsonant } from "@/lib/carnatic/katapayadi";
import {
  chakraForMela,
  madhyamaPartner,
  melaArohaString,
  melaAvarohaString,
  positionInChakra,
  swarasForMela,
} from "@/lib/carnatic/mela";
import { distinctSwaras, isVakra, parsePhrase, tokenSemitone } from "@/lib/carnatic/swara";

describe("mela derivation — known answers", () => {
  it("29 Dheerasankarabharanam is the major scale", () => {
    expect(swarasForMela(29)).toEqual(["S", "R2", "G3", "M1", "P", "D2", "N3"]);
  });
  it("65 Mechakalyani is Lydian (major with M2)", () => {
    expect(swarasForMela(65)).toEqual(["S", "R2", "G3", "M2", "P", "D2", "N3"]);
  });
  it("8 Hanumatodi", () => {
    expect(swarasForMela(8)).toEqual(["S", "R1", "G2", "M1", "P", "D1", "N2"]);
  });
  it("15 Mayamalavagowla", () => {
    expect(swarasForMela(15)).toEqual(["S", "R1", "G3", "M1", "P", "D1", "N3"]);
  });
  it("22 Kharaharapriya", () => {
    expect(swarasForMela(22)).toEqual(["S", "R2", "G2", "M1", "P", "D2", "N2"]);
  });
  it("1 Kanakangi and 72 Rasikapriya are the extremes", () => {
    expect(swarasForMela(1)).toEqual(["S", "R1", "G1", "M1", "P", "D1", "N1"]);
    expect(swarasForMela(72)).toEqual(["S", "R3", "G3", "M2", "P", "D3", "N3"]);
  });
  it("37 Salagam flips only the madhyama vs mela 1", () => {
    expect(swarasForMela(37)).toEqual(["S", "R1", "G1", "M2", "P", "D1", "N1"]);
  });
  it("madhyama partners", () => {
    expect(madhyamaPartner(29)).toBe(65);
    expect(madhyamaPartner(65)).toBe(29);
    expect(swarasForMela(29).filter((s) => s !== "M1")).toEqual(
      swarasForMela(65).filter((s) => s !== "M2"),
    );
  });
  it("chakra assignment", () => {
    expect(chakraForMela(22).name).toBe("Veda");
    expect(chakraForMela(29).name).toBe("Bana");
    expect(chakraForMela(65).name).toBe("Rudra");
    expect(positionInChakra(29)).toBe(5);
    expect(positionInChakra(65)).toBe(5);
  });
  it("rejects out-of-range mela numbers", () => {
    expect(() => swarasForMela(0)).toThrow(RangeError);
    expect(() => swarasForMela(73)).toThrow(RangeError);
    expect(() => swarasForMela(2.5)).toThrow(RangeError);
  });
  it("canonical scale strings", () => {
    expect(melaArohaString(29)).toBe("S R2 G3 M1 P D2 N3 S'");
    expect(melaAvarohaString(29)).toBe("S' N3 D2 P M1 G3 R2 S");
  });
});

describe("scale parser", () => {
  it("parses octave marks", () => {
    const tokens = parsePhrase("N3, S R2 S'");
    expect(tokens).toEqual([
      { swara: "N3", octave: -1 },
      { swara: "S", octave: 0 },
      { swara: "R2", octave: 0 },
      { swara: "S", octave: 1 },
    ]);
    expect(tokenSemitone(tokens[0])).toBe(-1);
    expect(tokenSemitone(tokens[3])).toBe(12);
  });
  it("rejects malformed tokens", () => {
    expect(() => parsePhrase("S R4 G3")).toThrow(/Invalid swara token/);
    expect(() => parsePhrase("S r2")).toThrow(/Invalid swara token/);
  });
  it("classifies Sri raga avaroha as vakra sampurna", () => {
    // Sri raga (janya of 22): vakra avaroha with a zigzag through D2/N2
    const avaroha = parsePhrase("S' N2 P D2 N2 P M1 R2 G2 R2 S");
    expect(isVakra(avaroha, "down")).toBe(true);
    expect(distinctSwaras(avaroha)).toEqual(["S", "R2", "G2", "M1", "P", "D2", "N2"]);
  });
  it("classifies Mohanam as non-vakra audava", () => {
    const aroha = parsePhrase("S R2 G3 P D2 S'");
    expect(isVakra(aroha, "up")).toBe(false);
    expect(distinctSwaras(aroha)).toHaveLength(5);
  });
});

describe("katapayadi — known answers", () => {
  const b = (
    s1: string, c1: string, d1: number,
    s2: string, c2: string, d2: number,
  ) => ({ syllables: [
    { syllable: s1, consonant: c1, digit: d1 },
    { syllable: s2, consonant: c2, digit: d2 },
  ] as const });

  it("decodes the famous names", () => {
    expect(decodeKatapayadi(b("Kha", "kha", 2, "ra", "ra", 2))).toBe(22); // Kharaharapriya
    expect(decodeKatapayadi(b("Dhee", "dha", 9, "ra", "ra", 2))).toBe(29); // Dheerasankarabharanam
    expect(decodeKatapayadi(b("Me", "ma", 5, "cha", "ca", 6))).toBe(65); // Mechakalyani
    expect(decodeKatapayadi(b("Ma", "ma", 5, "ya", "ya", 1))).toBe(15); // Mayamalavagowla
    expect(decodeKatapayadi(b("Ka", "ka", 1, "na", "na", 0))).toBe(1); // Kanakangi — the bug case
    expect(decodeKatapayadi(b("Ha", "ha", 8, "nu", "na", 0))).toBe(8); // Hanumatodi
  });
  it("the digit table distinguishes dental from retroflex", () => {
    expect(digitForConsonant("ta")).toBe(6);
    expect(digitForConsonant("tta")).toBe(1);
    expect(digitForConsonant("dha")).toBe(9);
    expect(digitForConsonant("ddha")).toBe(4);
    expect(digitForConsonant("na")).toBe(0);
    expect(digitForConsonant("nna")).toBe(5);
    expect(digitForConsonant("q")).toBeNull();
  });
});
