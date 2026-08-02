"use client";

import { useCallback, useRef, useState } from "react";
import type { SwaraId } from "@/lib/music/types";
import { resolveSequence, semitoneFrequency, swaraFrequency } from "@/lib/music/swaras";

type ToneModule = typeof import("tone");

async function getTone(): Promise<ToneModule> {
  return import("tone");
}

type Voice = {
  synth: InstanceType<ToneModule["DuoSynth"]>;
  reverb: InstanceType<ToneModule["Reverb"]>;
};

export function useSwaraPlayer() {
  const toneRef = useRef<ToneModule | null>(null);
  const voiceRef = useRef<Voice | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  const ensure = useCallback(async () => {
    const Tone = toneRef.current ?? (await getTone());
    toneRef.current = Tone;
    await Tone.start();

    if (!voiceRef.current) {
      const reverb = new Tone.Reverb({ decay: 2.2, wet: 0.28 });
      await reverb.generate();
      reverb.toDestination();

      const synth = new Tone.DuoSynth({
        vibratoAmount: 0.1,
        vibratoRate: 4.8,
        harmonicity: 1.5,
        voice0: {
          oscillator: { type: "sine" },
          envelope: { attack: 0.07, decay: 0.2, sustain: 0.5, release: 0.9 },
        },
        voice1: {
          oscillator: { type: "triangle" },
          envelope: { attack: 0.09, decay: 0.25, sustain: 0.35, release: 1.05 },
        },
      });
      synth.connect(reverb);
      synth.volume.value = -12;
      voiceRef.current = { synth, reverb };
    }

    setReady(true);
    return Tone;
  }, []);

  const playHz = useCallback(
    async (hz: number, duration = 0.4) => {
      const Tone = await ensure();
      const voice = voiceRef.current;
      if (!voice) return;
      setPlaying(true);
      voice.synth.triggerAttackRelease(hz, duration, Tone.now());
      window.setTimeout(() => setPlaying(false), duration * 1000 + 80);
    },
    [ensure],
  );

  const playSwara = useCallback(
    async (swara: SwaraId, duration = 0.4, octave = 0) => {
      await playHz(swaraFrequency(swara, 261.63, octave), duration);
    },
    [playHz],
  );

  const playAtSemitones = useCallback(
    async (semitones: number, duration = 0.4) => {
      await playHz(semitoneFrequency(semitones), duration);
    },
    [playHz],
  );

  const playSequence = useCallback(
    async (swaras: SwaraId[], noteDuration = 0.32, gap = 0.06) => {
      const Tone = await ensure();
      const voice = voiceRef.current;
      if (!voice) return;

      const resolved = resolveSequence(swaras);
      setPlaying(true);
      const now = Tone.now();
      resolved.forEach((note, i) => {
        const t = now + i * (noteDuration + gap);
        voice.synth.triggerAttackRelease(
          semitoneFrequency(note.semitones),
          noteDuration,
          t,
        );
      });
      const total = resolved.length * (noteDuration + gap) * 1000 + 120;
      window.setTimeout(() => setPlaying(false), total);
    },
    [ensure],
  );

  return { ready, playing, playSwara, playAtSemitones, playSequence, ensure };
}

type PlayButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
};

export function PlayButton({ label, onClick, disabled, active }: PlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded border px-3 py-1.5 text-sm transition-colors ${
        active
          ? "border-accent bg-accent/15 text-accent"
          : "border-line-strong bg-bg-panel text-muted hover:border-accent hover:text-ink"
      } disabled:opacity-50`}
    >
      <span aria-hidden className="swara-chip text-xs">
        ▶
      </span>
      {label}
    </button>
  );
}
