import type { Metadata } from "next";
import { RagaIndex } from "@/components/RagaIndex";
import { ALL_RAGAS } from "@/data/ragas";

export const metadata: Metadata = {
  title: "Raga index",
  description: "Search and filter Carnatic melakarta and janya ragas.",
};

export default function RagasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Catalog</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Ragas</h1>
        <p className="mt-2 max-w-2xl text-muted">
          All 72 melakartas plus a curated set of popular janyas. Filter to popular for the
          densest teaching pages.
        </p>
      </header>
      <RagaIndex ragas={ALL_RAGAS} />
    </div>
  );
}
