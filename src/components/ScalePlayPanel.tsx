"use client";

import { PlayButton, useSwaraPlayer } from "@/components/audio/SwaraPlayer";
import {
  SWARA_LABELS,
  formatSwaraLabel,
  formatSwarasWithOctave,
  resolveSequence,
} from "@/lib/music/swaras";
import type { SwaraId } from "@/lib/music/types";

type Props = {
  arohana: SwaraId[];
  avarohana: SwaraId[];
};

export function ScalePlayPanel({ arohana, avarohana }: Props) {
  const { playing, playSequence, playAtSemitones } = useSwaraPlayer();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <PlayButton
          label="Play aaroh"
          active={playing}
          onClick={() => playSequence(arohana)}
        />
        <PlayButton label="Play avaroh" onClick={() => playSequence(avarohana)} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-faint">Aarohana</p>
        <p className="mt-1 swara-chip text-lg text-accent">{formatSwarasWithOctave(arohana)}</p>
        <SwaraTapRow swaras={arohana} onTap={playAtSemitones} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-faint">Avarohana</p>
        <p className="mt-1 swara-chip text-lg text-warm">{formatSwarasWithOctave(avarohana)}</p>
        <SwaraTapRow swaras={avarohana} onTap={playAtSemitones} />
      </div>
      <p className="text-xs text-faint">
        Soft dual-sine tones (equal temperament). Dot on Ṡ marks tara-stayi (upper) Sa.
      </p>
    </div>
  );
}

function SwaraTapRow({
  swaras,
  onTap,
}: {
  swaras: SwaraId[];
  onTap: (semitones: number) => void;
}) {
  const resolved = resolveSequence(swaras);
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {resolved.map((note, i) => (
        <button
          key={`${note.swara}-${note.octave}-${i}`}
          type="button"
          title={`${SWARA_LABELS[note.swara].full}${note.octave > 0 ? " (upper octave)" : ""}`}
          onClick={() => onTap(note.semitones)}
          className="swara-chip rounded border border-line bg-bg-elevated px-2 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-ink"
        >
          {formatSwaraLabel(note.swara, note.octave)}
        </button>
      ))}
    </div>
  );
}
