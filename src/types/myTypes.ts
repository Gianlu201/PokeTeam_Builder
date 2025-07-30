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

// type 1 => domanda su chi è il Pokémon di cui si mostra lo sprite
// type 2 => domanda sul tipo principale del Pokémon mostrato
// type 3 => domanda sulla statistica più alta del Pokémon mostrato
// type 4 => domanda sulla pre-evoluzione del Pokémon mostrato
// type 5 => domanda sull'evoluzione del Pokémon mostrato
export interface Question {
  type: number;
  question: string;
  questionImg: string;
  rightAnswer: string;
  answer2: string;
  answer3: string;
  answer4: string;
}
