# Contributing to raagawheel

Thank you! Two kinds of contributions are especially welcome, and the first one
needs no coding at all.

## 1. Raga data corrections (the most valuable kind)

All raga content lives in plain TypeScript files:

- `src/data/melas/chakra-*.ts` — the 72 melakartas (one file per chakra)
- `src/data/janyas/batch-*.ts` — the janya ragas (grouped by parent family)

If you spot a wrong scale, a mis-attributed song, a questionable katapayadi
reading, or a characteristic that isn't traditionally documented:

1. Edit the entry directly (the field names are self-explanatory; scales use a
   mini-notation where `'` marks the upper octave and `,` the lower:
   `"S' N2 P D2 N2 P M1 R2 G2 R2 S"`).
2. **Cite a source** in the accompanying `source:` field or a code comment —
   karnatik.com, rasikas.org, Wikipedia, or (best of all) a print reference.
   Claims without sources are the reason errors exist; we don't add more.
3. Run `npm run validate`. The suite machine-checks scales against the
   mathematical derivation, katapayadi digits against the consonant table,
   janya swaras against their parent mela, and general data hygiene —
   311 tests must stay green.
4. Open a pull request describing what was wrong and how you verified the fix.

Uncertain attributions are handled by *removal*, not guesswork — a shorter,
correct song list beats a longer, doubtful one.

## 2. Code contributions

```bash
npm install
npm run dev        # develop against http://localhost:3000
npm run validate   # data + derivation tests (must pass)
npx tsc --noEmit   # typecheck (must pass)
npm run build      # static export (must pass)
```

Ground rules:

- **The domain core is sacred.** `src/lib/carnatic/` holds the derivation math
  and katapayadi tables; changes there need a known-answer test in `tests/`.
- **No hand-rolled memoization.** The React Compiler is enabled — write plain
  components. Exceptions only where identity is load-bearing (the Web Audio
  graph lives behind `src/lib/audio/engine.ts` for exactly this reason).
- **Design tokens only.** All colors come from `src/app/globals.css`
  (the Tanjore Nocturne palette and the 36 mela colors). No new hex values in
  components; gold is a hairline, never a fill; one border radius.
- **Accessibility is a feature.** The wheel is a keyboard listbox, the list
  view is a first-class surface, and `prefers-reduced-motion` is honored.
  Keep it that way.

## Ideas that would make good PRs

- A compare-two-ragas view (`/compare?a=…&b=…`)
- The phase-2 tanpura: an AudioWorklet with true jvari bridge nonlinearity,
  and gamaka (pitch-bend) support on the melodic voices
- A light theme ("Kanjivaram Daylight") on the existing token system
- More janyas — with sources, and passing `npm run validate`
- Translations of swara/raga names into Tamil, Telugu, Kannada, Malayalam,
  or Devanagari scripts (the Anek/Eczar type system was chosen for this)
