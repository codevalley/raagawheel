import { z } from "zod";

export const SWARA_IDS = [
  "S",
  "R1",
  "R2",
  "R3",
  "G1",
  "G2",
  "G3",
  "M1",
  "M2",
  "P",
  "D1",
  "D2",
  "D3",
  "N1",
  "N2",
  "N3",
] as const;

export const SwaraIdSchema = z.enum(SWARA_IDS);
export type SwaraId = z.infer<typeof SwaraIdSchema>;

export const SongSchema = z.object({
  title: z.string(),
  composer: z.string().optional(),
  kind: z.enum(["classical", "film", "other"]),
  urls: z
    .object({
      youtube: z.string().optional(),
      spotify: z.string().optional(),
    })
    .optional(),
});
export type Song = z.infer<typeof SongSchema>;

export const PatternSchema = z.object({
  label: z.string(),
  swaras: z.array(SwaraIdSchema).min(1),
  note: z.string().optional(),
});
export type Pattern = z.infer<typeof PatternSchema>;

export const RagaSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  nameIAST: z.string().optional(),
  kind: z.enum(["melakarta", "janya"]),
  melaNumber: z.number().int().min(1).max(72).optional(),
  parentSlug: z.string().optional(),
  arohana: z.array(SwaraIdSchema).min(1),
  avarohana: z.array(SwaraIdSchema).min(1),
  chakra: z.number().int().min(1).max(12).optional(),
  popular: z.boolean(),
  keyNotes: z.array(SwaraIdSchema).optional(),
  patterns: z.array(PatternSchema).optional(),
  songs: z.array(SongSchema).optional(),
  trivia: z.array(z.string()).optional(),
  aliases: z.array(z.string()).optional(),
});
export type Raga = z.infer<typeof RagaSchema>;

export const CHAKRA_NAMES = [
  "Indu",
  "Netra",
  "Agni",
  "Veda",
  "Bana",
  "Rutu",
  "Rishi",
  "Vasu",
  "Brahma",
  "Disi",
  "Rudra",
  "Aditya",
] as const;

export type ChakraName = (typeof CHAKRA_NAMES)[number];
