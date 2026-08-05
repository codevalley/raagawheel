/**
 * Melodic voice patches. Constructed lazily by the engine after Tone loads —
 * this module never imports Tone statically (SSR safety).
 */
import type * as ToneNS from "tone";
import type { Timbre } from "./types";

type ToneModule = typeof ToneNS;

export interface MelodicVoice {
  triggerAttackRelease(hz: number, durationSec: number, time?: number): void;
  releaseAll(time?: number): void;
  dispose(): void;
}

/**
 * 'veena': Karplus-Strong pluck (string transient + sheen) layered with an
 * FM patch whose modulation index collapses quickly (body warmth). The FM
 * layer is the one that could bend for gamaka later — KS delay lines can't.
 */
function createVeena(Tone: ToneModule, out: ToneNS.ToneAudioNode): MelodicVoice {
  const bus = new Tone.Gain(1);
  const color = new Tone.Filter({ type: "lowpass", frequency: 5000, rolloff: -12 });
  const body = new Tone.Filter({ type: "peaking", frequency: 450, Q: 1.2, gain: 3 });
  const verb = new Tone.Reverb({ decay: 1.6, wet: 0.12 });
  bus.chain(color, body, verb, out);

  const string = new Tone.PluckSynth({
    attackNoise: 0.5,
    dampening: 3200,
    resonance: 0.965,
    release: 1.4,
  });
  const stringGain = new Tone.Gain(0.5);
  string.chain(stringGain, bus);

  const fm = new Tone.FMSynth({
    harmonicity: 2.0,
    modulationIndex: 9,
    modulation: { type: "sine" },
    modulationEnvelope: { attack: 0.001, decay: 0.35, sustain: 0.05, release: 0.4 },
    envelope: { attack: 0.004, decay: 1.1, sustain: 0.0, release: 0.8 },
  });
  const fmGain = new Tone.Gain(0.7);
  fm.chain(fmGain, bus);

  return {
    triggerAttackRelease(hz, durationSec, time) {
      string.triggerAttackRelease(hz, durationSec, time);
      fm.triggerAttackRelease(hz, durationSec, time);
    },
    releaseAll(time) {
      fm.triggerRelease(time);
    },
    dispose() {
      for (const n of [string, stringGain, fm, fmGain, bus, color, body, verb]) n.dispose();
    },
  };
}

/** 'flute': triangle MonoSynth with filter envelope, delayed vibrato, breath. */
function createFlute(Tone: ToneModule, out: ToneNS.ToneAudioNode): MelodicVoice {
  const vibrato = new Tone.Vibrato({ frequency: 5.2, depth: 0.08 });
  const verb = new Tone.Reverb({ decay: 1.9, wet: 0.18 });

  const synth = new Tone.MonoSynth({
    oscillator: { type: "triangle" },
    filter: { type: "lowpass", Q: 1 },
    envelope: { attack: 0.06, decay: 0.1, sustain: 0.85, release: 0.25 },
    filterEnvelope: { attack: 0.08, baseFrequency: 900, octaves: 1.5 },
    portamento: 0.04,
  });
  const gain = new Tone.Gain(0.55);
  synth.chain(vibrato, gain, verb, out);

  return {
    triggerAttackRelease(hz, durationSec, time) {
      synth.triggerAttackRelease(hz, durationSec, time);
    },
    releaseAll(time) {
      synth.triggerRelease(time);
    },
    dispose() {
      for (const n of [synth, vibrato, gain, verb]) n.dispose();
    },
  };
}

export function createVoice(
  Tone: ToneModule,
  timbre: Timbre,
  out: ToneNS.ToneAudioNode,
): MelodicVoice {
  return timbre === "veena" ? createVeena(Tone, out) : createFlute(Tone, out);
}
