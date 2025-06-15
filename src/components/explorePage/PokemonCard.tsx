import { Plus } from 'lucide-react';
import type { Pokemon } from '../../types/APITypes';
import { showPokedexNumber } from '../../utils/mainUtils';
import { getTypeGradient } from '../../utils/typeColors';
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentTeam } from '../../features/teams/teamsSlice';
import type { PokeTeam } from '../../types/myTypes';

interface Props {
  pokemon: Pokemon;
  setSelectedPokemon: (pokemon: Pokemon) => void;
}

const PokemonCard = ({ pokemon, setSelectedPokemon }: Props) => {
  const types = pokemon.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );
  const currentTeam = useAppSelector((state) => state.teams.currentTeam);

  const dispatch = useAppDispatch();

  const addPokemonToTeam = (pokemon: Pokemon) => {
    let currentTeamFull = true;
    let emptySlot = 0;

    currentTeam.forEach((slot, index) => {
      if (!slot && currentTeamFull) {
        currentTeamFull = false;
        emptySlot = index;
      }
    });

    if (!currentTeamFull) {
      const temporaryTeam: PokeTeam = [null, null, null, null, null, null];
      currentTeam.forEach((slot, i) => {
        temporaryTeam[i] = slot;
      });

      temporaryTeam[emptySlot] = pokemon;
      dispatch(setCurrentTeam(temporaryTeam));
    }
  };

  return (
    <div
      className='text-white rounded-xl p-4 cursor-pointer hover:scale-110 duration-500 ease-in-out'
      style={{ background: getTypeGradient(types) }}
      onClick={() => setSelectedPokemon(pokemon)}
    >
      <h3 className='capitalize text-lg font-bold'>{pokemon.name}</h3>
      <p className='mb-2'>{showPokedexNumber(pokemon.id)}</p>

      <div className='flex justify-start items-center gap-2 mb-3'>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <span
            key={type.pokemon_v2_type.id}
            className='capitalize text-sm font-medium bg-white/20 rounded-full py-0.5 px-2'
          >
            {type.pokemon_v2_type.name}
          </span>
        ))}
      </div>

      <div className='flex justify-between items-end'>
        <img
          src={pokemon.pokemon_v2_pokemonsprites[0].sprites ?? ''}
          alt={pokemon.name}
          className='max-w-1/3 bg-white/30 rounded-full p-2'
        />

        <Button
          variant={'outline'}
          onClick={(e) => {
            e.stopPropagation();
            addPokemonToTeam(pokemon);
          }}
        >
          <Plus />
          Add
        </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
