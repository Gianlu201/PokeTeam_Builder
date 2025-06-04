import { useState } from 'react';
import type { Pokemon } from '../types/pokemon';
import { Button } from './ui/button';
import PokemonCard from './PokemonCard';

interface Params {
  pokemonList: Pokemon[];
}

const PokemonBox = ({ pokemonList }: Params) => {
  const [pokemonShowedNum, setPokemonShowedNum] = useState<number>(24);

  return (
    <>
      <div className='grid grid-cols-4 gap-4 justify-between items-start'>
        {pokemonList.slice(0, pokemonShowedNum).map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div>
        <Button
          variant={'outline'}
          className='mx-auto'
          onClick={() => setPokemonShowedNum((prev) => (prev += 24))}
        >
          Show more
        </Button>
      </div>
    </>
  );
};

export default PokemonBox;
