# RaagaWheel

Visual Carnatic raga explorer — Melakartha wheel, swara variants, patterns, popular janyas, and katapayadi naming. Built for curious / engineering-minded learners. Sound is secondary (Tone.js programmatic tones).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Static Zod-validated raga data (`src/data`, `src/lib/music`)
- Tone.js for optional scale / swara playback

## Routes

| Path | Purpose |
|------|---------|
| `/` | Interactive 72-mela RaagaWheel |
| `/ragas` | Search / filter catalog |
| `/ragas/[slug]` | Raga detail |
| `/chakras/[n]` | Six melas in a chakra |
| `/learn/katapayadi` | Katapayadi explainer |

## Data

- All 72 melakartas generated from standard Ri/Ga × Da/Ni × Ma rules
- Curated popular janyas in `src/data/janyas.ts`
