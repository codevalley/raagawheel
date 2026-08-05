"use client";

/**
 * React face of the audio engine. The engine is a module singleton; this
 * hook subscribes to its state and manages ONE playback at a time for the
 * component using it. Cleanup stops that playback — never the engine.
 */
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { SwaraToken, Swarasthana } from "@/lib/carnatic/types";
import { getEngine } from "@/lib/audio/engine";
import type { EngineState, NoteSpec, PlaybackHandle } from "@/lib/audio/types";
import type { TuningSystem } from "@/lib/audio/tuning";
import type { Timbre } from "@/lib/audio/types";

const SERVER_STATE: EngineState = {
  isReady: false,
  shrutiHz: 207.65,
  tuning: "ji",
  timbre: "veena",
  droneOn: false,
};

export const tokensToNotes = (tokens: readonly SwaraToken[]): NoteSpec[] =>
  tokens.map((t) => ({ swara: t.swara, octave: t.octave }));

export function useRagaPlayer() {
  const engine = getEngine();
  const state = useSyncExternalStore(engine.subscribe, engine.getState, () => SERVER_STATE);
  const handleRef = useRef<PlaybackHandle | null>(null);
  /** Index of the currently sounding note within the sequence, or null. */
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  /** Which named sequence is playing (e.g. "aroha"), for multi-row pages. */
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  useEffect(
    () => () => {
      handleRef.current?.stop();
    },
    [],
  );

  async function playSequence(track: string, notes: NoteSpec[], bpm: number): Promise<void> {
    handleRef.current?.stop();
    setActiveTrack(track);
    setActiveIndex(null);
    handleRef.current = await engine.playScale(notes, {
      bpm,
      onNote: (i) => setActiveIndex(i),
      onDone: () => {
        setActiveIndex(null);
        setActiveTrack(null);
      },
    });
  }

  function stop(): void {
    handleRef.current?.stop();
    handleRef.current = null;
    setActiveIndex(null);
    setActiveTrack(null);
  }

  function tapSwara(swara: Swarasthana, octave = 0): void {
    void engine.playSwara(swara, octave);
  }

  return {
    ...state,
    activeIndex,
    activeTrack,
    playSequence,
    stop,
    tapSwara,
    toggleDrone: () => void engine.toggleDrone(),
    setShruti: (hz: number) => engine.setShruti(hz),
    setTuningSystem: (t: TuningSystem) => engine.setTuningSystem(t),
    setTimbre: (t: Timbre) => engine.setTimbre(t),
  };
}
