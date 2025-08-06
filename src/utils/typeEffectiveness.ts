import type { TypeEffectiveness } from '../types/myTypes';

// Tabella di efficacia dei tipi Pokémon
export const typeChart: TypeEffectiveness[] = [
  {
    type: 'normal',
    strong: [],
    weak: ['rock', 'steel'],
    immune: ['ghost'],
  },
  {
    type: 'fire',
    strong: ['grass', 'ice', 'bug', 'steel'],
    weak: ['fire', 'water', 'rock', 'dragon'],
    immune: [],
  },
  {
    type: 'water',
    strong: ['fire', 'ground', 'rock'],
    weak: ['water', 'grass', 'dragon'],
    immune: [],
  },
  {
    type: 'electric',
    strong: ['water', 'flying'],
    weak: ['electric', 'grass', 'dragon'],
    immune: ['ground'],
  },
  {
    type: 'grass',
    strong: ['water', 'ground', 'rock'],
    weak: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
    immune: [],
  },
  {
    type: 'ice',
    strong: ['grass', 'ground', 'flying', 'dragon'],
    weak: ['fire', 'water', 'ice', 'steel'],
    immune: [],
  },
  {
    type: 'fighting',
    strong: ['normal', 'ice', 'rock', 'dark', 'steel'],
    weak: ['flying', 'psychic', 'fairy'],
    immune: ['ghost'],
  },
  {
    type: 'poison',
    strong: ['grass', 'fairy'],
    weak: ['poison', 'ground', 'rock', 'ghost'],
    immune: ['steel'],
  },
  {
    type: 'ground',
    strong: ['fire', 'electric', 'poison', 'rock', 'steel'],
    weak: ['grass', 'bug'],
    immune: ['flying'],
  },
  {
    type: 'flying',
    strong: ['grass', 'fighting', 'bug'],
    weak: ['electric', 'rock', 'steel'],
    immune: [],
  },
  {
    type: 'psychic',
    strong: ['fighting', 'poison'],
    weak: ['psychic', 'steel'],
    immune: ['dark'],
  },
  {
    type: 'bug',
    strong: ['grass', 'psychic', 'dark'],
    weak: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
    immune: [],
  },
  {
    type: 'rock',
    strong: ['fire', 'ice', 'flying', 'bug'],
    weak: ['fighting', 'ground', 'steel'],
    immune: [],
  },
  {
    type: 'ghost',
    strong: ['psychic', 'ghost'],
    weak: ['dark'],
    immune: ['normal'],
  },
  {
    type: 'dragon',
    strong: ['dragon'],
    weak: ['steel'],
    immune: ['fairy'],
  },
  {
    type: 'dark',
    strong: ['psychic', 'ghost'],
    weak: ['fighting', 'dark', 'fairy'],
    immune: [],
  },
  {
    type: 'steel',
    strong: ['ice', 'rock', 'fairy'],
    weak: ['fire', 'water', 'electric', 'steel'],
    immune: [],
  },
  {
    type: 'fairy',
    strong: ['fighting', 'dragon', 'dark'],
    weak: ['fire', 'poison', 'steel'],
    immune: [],
  },
];

export const getTypeEffectiveness = (
  attackingType: string,
  defendingTypes: string[]
) => {
  let effectiveness = 1;

  defendingTypes.forEach((defType) => {
    if (
      typeChart
        .find((type) => type.type === attackingType)
        ?.strong.includes(defType)
    ) {
      effectiveness = 2;
    } else if (
      typeChart
        .find((type) => type.type === attackingType)
        ?.weak.includes(defType)
    ) {
      effectiveness = 0.5;
    } else if (
      typeChart
        .find((type) => type.type === attackingType)
        ?.immune.includes(defType)
    ) {
      effectiveness = 0;
    }
  });

  return effectiveness;
};

export const analyzeTeam = (team: string[][]) => {
  const weaknesses: Record<string, number> = {};
  const resistances: Record<string, number> = {};

  typeChart.forEach((attackingType) => {
    let totalEffectiveness = 0;

    team.forEach((pokemon) => {
      const defendingTypes = pokemon;
      const effectiveness = getTypeEffectiveness(
        attackingType.type,
        defendingTypes
      );
      totalEffectiveness += effectiveness;
    });

    const avgEffectiveness = totalEffectiveness / team.length;

    if (avgEffectiveness > 1) {
      weaknesses[attackingType.type] = avgEffectiveness;
    } else if (avgEffectiveness < 1) {
      resistances[attackingType.type] = avgEffectiveness;
    }
  });

  return { weaknesses, resistances };
};

export const recommendCounterTypes = (
  opponentTeam: { types: Array<{ type: { name: string } }> }[]
) => {
  const typeEffectiveness: Record<string, number> = {};

  Object.keys(typeChart).forEach((attackingType) => {
    let totalDamage = 0;

    opponentTeam.forEach((pokemon) => {
      const defendingTypes = pokemon.types.map((t) => t.type.name);
      const effectiveness = getTypeEffectiveness(attackingType, defendingTypes);
      totalDamage += effectiveness;
    });

    typeEffectiveness[attackingType] = totalDamage / opponentTeam.length;
  });

  return Object.entries(typeEffectiveness)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([type, effectiveness]) => ({ type, effectiveness }));
};
