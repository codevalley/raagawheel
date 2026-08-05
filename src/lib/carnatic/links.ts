import type { Song } from "./types";

export const youtubeSearchUrl = (q: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const spotifySearchUrl = (q: string): string =>
  `https://open.spotify.com/search/${encodeURIComponent(q)}`;

/** Film songs search best by film; classical by composer + raga. */
export function songSearchQuery(song: Song, ragaName: string): string {
  if (song.searchQueryOverride) return song.searchQueryOverride;
  if (song.type === "film" && song.film) return `${song.title} ${song.film.name}`;
  return `${song.title} ${song.composer} ${ragaName}`;
}
