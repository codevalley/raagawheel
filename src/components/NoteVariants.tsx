import { SWARA_LABELS, uniqueScaleSwaras, VARIANT_GROUPS } from "@/lib/music/swaras";
import type { SwaraId } from "@/lib/music/types";

type Props = {
  arohana: SwaraId[];
  avarohana: SwaraId[];
};

export function NoteVariants({ arohana, avarohana }: Props) {
  const used = new Set(uniqueScaleSwaras(arohana, avarohana));

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">
        Carnatic theory distinguishes variants of Ri, Ga, Ma, Dha, and Ni. Highlighted chips
        appear in this raga&apos;s scale.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {VARIANT_GROUPS.map((group) => (
          <div key={group.family} className="rounded border border-line bg-bg-elevated/60 p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-faint">{group.family}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.ids.map((id) => {
                const on = used.has(id);
                return (
                  <span
                    key={id}
                    title={SWARA_LABELS[id].full}
                    className={`swara-chip rounded px-2 py-1 text-xs border ${
                      on
                        ? "border-accent/50 bg-accent/10 text-accent"
                        : "border-line text-faint"
                    }`}
                  >
                    {id}
                  </span>
                );
              })}
            </div>
            <ul className="mt-2 space-y-0.5 text-xs text-muted">
              {group.ids
                .filter((id) => used.has(id))
                .map((id) => (
                  <li key={id}>
                    <span className="swara-chip text-ink">{id}</span> — {SWARA_LABELS[id].full}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-faint">
        Pitch note: in 12-tone mapping R2≡G1, R3≡G2, D2≡N1, D3≡N2 — melakarta rules never use both
        of a conflicting pair.
      </p>
    </div>
  );
}
