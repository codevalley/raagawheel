"use client";

/**
 * Persistent audio chrome: drone pedal, shruti, tempo, tuning, timbre.
 * Dormant-compact until the engine wakes; global settings persist via the
 * engine's localStorage layer. Sits fixed at the bottom of every page.
 */
import { useState } from "react";
import { SHRUTI_PRESETS } from "@/lib/audio/tuning";
import { TEMPO_PRESETS } from "@/lib/audio/types";
import { useRagaPlayer } from "@/hooks/useRagaPlayer";

export function SoundBar() {
  const player = useRagaPlayer();
  const [shrutiOpen, setShrutiOpen] = useState(false);
  const shruti = SHRUTI_PRESETS.find((p) => Math.abs(p.hz - player.shrutiHz) < 0.5);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-rosewood-2/95 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-3 px-4 text-sm sm:gap-5">
        <button
          type="button"
          onClick={player.toggleDrone}
          aria-pressed={player.droneOn}
          className={`flex items-center gap-2 rounded-brand border px-3 py-1 transition-colors ${
            player.droneOn
              ? "border-zari bg-rosewood text-zari-hi"
              : "border-hairline-strong text-ivory-mut hover:text-ivory"
          }`}
        >
          <span
            aria-hidden
            className={`h-1.5 w-1.5 rounded-full ${player.droneOn ? "animate-pulse bg-zari-hi" : "bg-ivory-mut/40"}`}
          />
          tanpura
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShrutiOpen((v) => !v)}
            aria-expanded={shrutiOpen}
            className="text-ivory-mut transition-colors hover:text-ivory"
          >
            śruti <span className="text-zari-hi">{shruti ? shruti.label : `${Math.round(player.shrutiHz)} Hz`}</span>
            {shruti && <span className="ml-1 text-xs text-ivory-mut">· {shruti.kattai} kaṭṭai</span>}
          </button>
          {shrutiOpen && (
            <ul className="absolute bottom-10 left-0 z-50 max-h-72 w-40 overflow-y-auto rounded-brand border border-hairline-strong bg-rosewood-2 py-1 shadow-xl">
              {SHRUTI_PRESETS.map((p) => (
                <li key={p.label}>
                  <button
                    type="button"
                    onClick={() => {
                      player.setShruti(p.hz);
                      setShrutiOpen(false);
                    }}
                    className={`flex w-full items-baseline justify-between px-3 py-1.5 text-left hover:bg-rosewood ${
                      p === shruti ? "text-zari-hi" : "text-ivory"
                    }`}
                  >
                    <span>{p.label}</span>
                    <span className="text-xs text-ivory-mut">{p.kattai}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden items-center gap-1 sm:flex" role="group" aria-label="Tempo">
          {TEMPO_PRESETS.map((t) => (
            <button
              key={t.key}
              type="button"
              title={`${t.label} — ${t.hint}`}
              onClick={() => player.setBpm(t.bpm)}
              className={`rounded-brand px-2 py-0.5 text-xs transition-colors ${
                player.bpm === t.bpm ? "bg-rosewood text-zari-hi" : "text-ivory-mut hover:text-ivory"
              }`}
            >
              {t.label.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            onClick={() => player.setTuningSystem(player.tuning === "ji" ? "12tet" : "ji")}
            title="Just intonation vs equal temperament"
            className="hidden text-xs text-ivory-mut transition-colors hover:text-ivory md:block"
          >
            {player.tuning === "ji" ? "just intonation" : "equal temperament"}
          </button>
          <button
            type="button"
            onClick={() => player.setTimbre(player.timbre === "veena" ? "flute" : "veena")}
            className="text-xs text-ivory-mut transition-colors hover:text-ivory"
            title="Switch instrument voice"
          >
            {player.timbre}
          </button>
        </div>
      </div>
    </div>
  );
}
