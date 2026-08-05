/**
 * Tanpura drone: four Karplus-Strong strings (Pa₋₁ · Sa · Sa+2¢ · Sa₋₁)
 * plucked in a slow cycle, through a soft waveshaper and a slow filter
 * sweep approximating the jvari bridge's blooming overtones.
 *
 * Scheduling is self-clocked against the audio context with a lookahead
 * window — deliberately independent of any transport, so scale playback
 * can start/stop without touching the drone.
 */
import type * as ToneNS from "tone";

type ToneModule = typeof ToneNS;

const CYCLE_SEC = 3.8;
const PLUCK_OFFSETS = [0.0, 0.9, 1.8, 2.7];
const LOOKAHEAD_SEC = 4.5;
const TICK_MS = 500;

export class Tanpura {
  private strings: ToneNS.PluckSynth[] = [];
  private gain: ToneNS.Gain;
  private nodes: ToneNS.ToneAudioNode[] = [];
  private timer: ReturnType<typeof setInterval> | null = null;
  private nextCycleTime = 0;
  private frequencies: number[] = [];

  constructor(
    private Tone: ToneModule,
    out: ToneNS.ToneAudioNode,
    shrutiHz: number,
  ) {
    this.gain = new this.Tone.Gain(0);
    const shaper = new this.Tone.Chebyshev({ order: 9, wet: 0.18 });
    const bloom = new this.Tone.AutoFilter({
      frequency: 0.13,
      baseFrequency: 500,
      octaves: 2.5,
      filter: { type: "lowpass", rolloff: -12, Q: 2 },
    }).start();
    const verb = new this.Tone.Reverb({ decay: 2.8, wet: 0.25 });
    const stringBus = new this.Tone.Gain(1);
    stringBus.chain(shaper, bloom, verb, this.gain, out);
    this.nodes = [stringBus, shaper, bloom, verb, this.gain];

    const levels = [0.8, 1.0, 1.0, 0.9];
    for (let i = 0; i < 4; i++) {
      const pluck = new this.Tone.PluckSynth({
        attackNoise: 0.7,
        dampening: 3800,
        resonance: 0.985,
        release: 2,
      });
      const g = new this.Tone.Gain(levels[i]);
      pluck.chain(g, stringBus);
      this.strings.push(pluck);
      this.nodes.push(g);
    }
    this.setShruti(shrutiHz);
  }

  /** Pa below, Sa, Sa a hair sharp (slow beating shimmer), Sa an octave down. */
  setShruti(shrutiHz: number): void {
    this.frequencies = [shrutiHz * 0.75, shrutiHz, shrutiHz * 1.002, shrutiHz * 0.5];
  }

  get running(): boolean {
    return this.timer !== null;
  }

  start(fadeSec = 1.8): void {
    if (this.timer) return;
    const now = this.Tone.now();
    this.gain.gain.cancelScheduledValues(now);
    this.gain.gain.setValueAtTime(this.gain.gain.value, now);
    this.gain.gain.linearRampToValueAtTime(0.5, now + fadeSec);
    this.nextCycleTime = now + 0.05;
    const tick = () => {
      // Schedule whole cycles inside the lookahead window. Robust to
      // background-tab timer throttling: one late tick schedules the backlog.
      while (this.nextCycleTime < this.Tone.now() + LOOKAHEAD_SEC) {
        const base = Math.max(this.nextCycleTime, this.Tone.now() + 0.02);
        PLUCK_OFFSETS.forEach((offset, i) => {
          this.strings[i].triggerAttack(this.frequencies[i], base + offset);
        });
        this.nextCycleTime += CYCLE_SEC;
      }
    };
    tick();
    this.timer = setInterval(tick, TICK_MS);
  }

  stop(fadeSec = 1.5): void {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
    const now = this.Tone.now();
    this.gain.gain.cancelScheduledValues(now);
    this.gain.gain.setValueAtTime(this.gain.gain.value, now);
    this.gain.gain.linearRampToValueAtTime(0.0001, now + fadeSec);
  }

  dispose(): void {
    this.stop(0.05);
    for (const s of this.strings) s.dispose();
    for (const n of this.nodes) n.dispose();
  }
}
