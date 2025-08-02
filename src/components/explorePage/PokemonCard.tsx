import { Plus } from 'lucide-react';
import type { Pokemon } from '../../types/APITypes';
import {
  getTeamComponentsCount,
  showPokedexNumber,
} from '../../utils/mainUtils';
import { getTypeGradient } from '../../utils/typeColors';
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentTeam } from '../../features/teams/teamsSlice';
import type { PokeTeam } from '../../types/myTypes';

interface Props {
  pokemon: Pokemon;
  setSelectedPokemon: (pokemon: Pokemon) => void;
  showToastMessage: (message: string, pokemonName?: string) => void;
}

const PokemonCard = ({
  pokemon,
  setSelectedPokemon,
  showToastMessage,
}: Props) => {
  const types = pokemon.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );
  const currentTeam = useAppSelector((state) => state.teams.currentTeam);

  const dispatch = useAppDispatch();

  const addPokemonToTeam = (pokemon: Pokemon) => {
    let currentTeamFull = true;
    let emptySlot = 0;

    currentTeam.team.forEach((slot, index) => {
      if (!slot && currentTeamFull) {
        currentTeamFull = false;
        emptySlot = index;
      }
    });

    if (!currentTeamFull) {
      const temporaryTeam: PokeTeam = [null, null, null, null, null, null];
      currentTeam.team.forEach((slot, i) => {
        temporaryTeam[i] = slot;
      });

      temporaryTeam[emptySlot] = pokemon;
      dispatch(
        setCurrentTeam({
          teamName: currentTeam.teamName,
          team: temporaryTeam,
          savedDate: currentTeam.savedDate,
        })
      );
      showToastMessage('pokemonAdded', pokemon.name);
    }
  };

  return (
    <div
      className='text-white rounded-xl p-4 cursor-pointer duration-300 hover:scale-105 hover:opacity-90 hover:animate-poke-jump shadow-md shadow-black/40'
      style={{ background: getTypeGradient(types) }}
      onClick={() => setSelectedPokemon(pokemon)}
    >
      <h3 className='capitalize text-lg font-bold'>{pokemon.name}</h3>
      <p className='mb-2'>{showPokedexNumber(pokemon.id)}</p>

      <div className='flex justify-start items-center gap-2 mb-3'>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <span
            key={type.pokemon_v2_type.id}
            className='capitalize text-sm font-medium bg-white/20 rounded-full py-0.5 px-2 hover:bg-white/30'
          >
            {type.pokemon_v2_type.name}
          </span>
        ))}
      </div>

      <div className='flex justify-between items-end'>
        <div className='max-w-1/3 bg-white/30 rounded-full p-2'>
          <img
            src={pokemon.pokemon_v2_pokemonsprites[0].front_sprite ?? ''}
            alt={pokemon.name}
            className=''
          />
        </div>

        <Button
          variant={'outline'}
          onClick={(e) => {
            e.stopPropagation();
            if (getTeamComponentsCount(currentTeam.team) < 6) {
              addPokemonToTeam(pokemon);
            }
          }}
          className={`${
            getTeamComponentsCount(currentTeam.team) === 6
              ? 'cursor-not-allowed border-gray-300/40 text-gray-300 bg-gray-700/10'
              : ''
          }`}
        >
          <Plus />
          Add
        </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
