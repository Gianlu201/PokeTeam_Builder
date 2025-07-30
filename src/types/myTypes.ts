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

export interface TypeEffectiveness {
  type: string;
  strong: string[];
  weak: string[];
  immune: string[];
}
