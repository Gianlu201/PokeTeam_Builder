import type { Pokemon } from './APITypes';

export type PokeTeam = [
  Pokemon | null,
  Pokemon | null,
  Pokemon | null,
  Pokemon | null,
  Pokemon | null,
  Pokemon | null
];

export interface SavedTeam {
  team: PokeTeam;
  savedDate: string;
  teamName: string;
}
