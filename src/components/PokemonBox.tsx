import { useState } from 'react';
import type { Pokemon } from '../types/pokemon';
import { Button } from './ui/button';
import PokemonCard from './PokemonCard';
import MyModal from './MyModal';

interface Params {
  pokemonList: Pokemon[];
}

const PokemonBox = ({ pokemonList }: Params) => {
  const [pokemonShowedNum, setPokemonShowedNum] = useState<number>(24);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className='grid grid-cols-4 gap-5 justify-between items-start'>
        {pokemonList.slice(0, pokemonShowedNum).map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            setSelectedPokemon={(pokemon) => {
              setSelectedPokemon(pokemon);
              setIsModalOpen(true);
            }}
          />
        ))}

        {selectedPokemon !== null && (
          <MyModal
            selectedPokemon={selectedPokemon}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedPokemon(null);
            }}
            open={isModalOpen}
            setOpen={setIsModalOpen}
          />
        )}
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
