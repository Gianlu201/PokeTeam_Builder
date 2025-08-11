import { Trash2 } from 'lucide-react';
import type { Pokemon } from '../../types/APITypes';
import { typeColors } from '../../utils/typeColors';
import type { PokeTeam } from '../../types/myTypes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentTeam, setEnemyTeam } from '../../features/teams/teamsSlice';

interface Props {
  pokemon: Pokemon;
  index: number;
  isMyTeam: boolean;
  showToastMessage: (pokemonName: string) => void;
}

const TeamPokemonSlot = ({
  pokemon,
  index,
  isMyTeam,
  showToastMessage,
}: Props) => {
  const currentTeam = useAppSelector((state) => state.teams.currentTeam);
  const enemyTeam = useAppSelector((state) => state.teams.enemyTeam);

  const dispatch = useAppDispatch();

  const removePokemonFromTeam = () => {
    let temporaryTeam: PokeTeam;

    if (isMyTeam) {
      temporaryTeam = [...currentTeam.team];
    } else {
      temporaryTeam = [...enemyTeam];
    }

    temporaryTeam[index] = null;

    const newTeam: PokeTeam = [null, null, null, null, null, null];
    let i = 0;
    temporaryTeam.forEach((slot) => {
      if (slot) {
        newTeam[i] = slot;
        i += 1;
      }
    });

    if (isMyTeam) {
      dispatch(setCurrentTeam({ teamName: '', team: newTeam, savedDate: '' }));
    } else {
      dispatch(setEnemyTeam(newTeam));
    }

    showToastMessage(pokemon.name);
  };

  return (
    <div
      className='w-full aspect-square border border-gray-400/30 bg-white rounded-lg shadow-md p-3 overflow-hidden hover:animate-poke-jump'
      data-testid='pokemon-slot'
    >
      <div className='flex justify-between items-center mb-2'>
        <h3 className='capitalize font-bold'>{pokemon.name}</h3>
        <Trash2
          className='text-red-500 w-4 h-4 cursor-pointer'
          onClick={removePokemonFromTeam}
          data-testid='pokemon-remove'
        />
      </div>

      <div className='flex justify-center items-center gap-2 mb-4'>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <span
            key={type.pokemon_v2_type.id}
            className='text-white text-xs capitalize font-medium py-0.5 px-5 rounded-full'
            style={{
              backgroundColor: typeColors[type.pokemon_v2_type.name],
            }}
          >
            {type.pokemon_v2_type.name}
          </span>
        ))}
      </div>

      <div>
        <img
          src={pokemon.pokemon_v2_pokemonsprites[0].front_sprite ?? ''}
          alt={pokemon.name}
          className='block mx-auto'
        />
      </div>
    </div>
  );
};

export default TeamPokemonSlot;
