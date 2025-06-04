import type { Pokemon } from '../types/pokemon';
import { StartCapitalLetter } from '../utils/mainUtils';
import { getTypeGradient } from '../utils/typeColors';
import { Button } from './ui/button';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const types = pokemon.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );

  return (
    <div
      className='text-white rounded-xl p-4'
      style={{ background: getTypeGradient(types) }}
    >
      <h3 className='text-lg font-bold'>{StartCapitalLetter(pokemon.name)}</h3>
      <p>{pokemon.id}</p>

      <div className='flex justify-start items-center gap-2'>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <span key={type.pokemon_v2_type.id}>{type.pokemon_v2_type.name}</span>
        ))}
      </div>

      <div className='flex justify-between items-end'>
        <img
          src={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default ?? ''}
          alt={pokemon.name}
          className='bg-white/30 rounded-full'
        />

        <Button variant={'outline'}>Add</Button>
      </div>
    </div>
  );
};

export default PokemonCard;
