import { Trash2 } from 'lucide-react';
import type { Pokemon } from '../../types/APITypes';
import { typeColors } from '../../utils/typeColors';

interface Props {
  pokemon: Pokemon;
}

const TeamPokemonSlot = ({ pokemon }: Props) => {
  return (
    <div className='w-full aspect-square border border-gray-400/30 bg-white rounded-lg shadow-md p-3'>
      <div className='flex justify-between items-center mb-2'>
        <h3 className='capitalize font-bold'>{pokemon.name}</h3>
        <Trash2 className='text-red-500 w-4 h-4 cursor-pointer' />
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
          src={pokemon.pokemon_v2_pokemonsprites[0].sprites ?? ''}
          alt={pokemon.name}
          className='block mx-auto'
        />
      </div>
    </div>
  );
};

export default TeamPokemonSlot;
