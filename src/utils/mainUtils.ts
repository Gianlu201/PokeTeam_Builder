import type {
  Pokemon,
  Pokemon_v2_move,
  PokemonMoveEntry,
} from '../types/APITypes';
import type { PokeTeam } from '../types/myTypes';
import { getSelectedPokemonsMoves } from './query';

export const showPokedexNumber = (pokedexNumb: number) => {
  let pokedexNumber = '#';
  switch (`${pokedexNumb}`.length) {
    case 1:
      pokedexNumber += `00${pokedexNumb}`;
      break;
    case 2:
      pokedexNumber += `0${pokedexNumb}`;
      break;
    default:
      pokedexNumber += `${pokedexNumb}`;
      break;
  }

  return pokedexNumber;
};

export const getTeamComponentsCount = (team: PokeTeam) => {
  let count = 0;
  team.forEach((element) => {
    if (element) {
      count += 1;
    }
  });

  return count;
};

export const teamPreparation = async (pokeTeam: Pokemon[]) => {
  const ids = pokeTeam.map((poke) => {
    if (poke != undefined) {
      return poke.id;
    }
  });

  const pokemonForMoves = await getMoves(ids as number[]);

  const actualTeam = [] as Pokemon[];

  pokeTeam.forEach((pokemon) => {
    if (pokemon && pokemon.id) {
      const tempMoves = [] as Pokemon_v2_move[];

      pokemonForMoves?.forEach((element) => {
        if (element.id === pokemon.id) {
          element.pokemon_v2_pokemonmoves?.forEach((move) => {
            tempMoves.push(move.pokemon_v2_move);
          });
        }
      });

      if (tempMoves?.length && tempMoves.length > 0) {
        const moves = reduceToFourMoves(tempMoves);
        const newPokemon = { ...pokemon };
        newPokemon.pokemon_v2_pokemonmoves = moves;
        actualTeam.push(newPokemon);
      }
    }
  });

  return actualTeam;
};

export const getMoves = async (ids: number[]) => {
  try {
    const query = getSelectedPokemonsMoves(ids);

    const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (response.ok) {
      const data = await response.json();

      return data.data.pokemon_v2_pokemon as Pokemon[];
    } else {
      throw new Error('Error in fetching datas');
    }
  } catch (error) {
    console.error(error);
  }
};

export const reduceToFourMoves = (pokeMoves: Pokemon_v2_move[]) => {
  const moves = [...pokeMoves];

  moves.sort((a) => a.power);

  const pokemonMoves = [] as PokemonMoveEntry[];

  const movesIds = [] as number[];
  moves.forEach((move) => {
    if (pokemonMoves.length < 4 && !movesIds.includes(move.id)) {
      pokemonMoves.push({ pokemon_v2_move: move });
      movesIds.push(move.id);
    }
  });

  console.info(pokemonMoves);
  return pokemonMoves;
};
