"use client";

import { PlayButton, useSwaraPlayer } from "@/components/audio/SwaraPlayer";
import type { SwaraId } from "@/lib/music/types";

export function PatternPlay({ swaras }: { swaras: SwaraId[] }) {
  const { playSequence } = useSwaraPlayer();
  return <PlayButton label="Play" onClick={() => playSequence(swaras, 0.22, 0.04)} />;
}
