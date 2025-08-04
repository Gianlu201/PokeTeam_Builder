import { useEffect, useRef, useState } from 'react';
import type { Pokemon } from '../../types/APITypes';
import PokemonCard from './PokemonCard';
import MyModal from './MyModal';
import { toast, Toaster } from 'sonner';
import StandardToast from '../ui/StandardToast';

interface Params {
  pokemonList: Pokemon[];
}

const PokemonBox = ({ pokemonList }: Params) => {
  const [pokemonShowedNum, setPokemonShowedNum] = useState<number>(24);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const showToastMessage = (message: string, pokemonName?: string) => {
    switch (message) {
      case 'pokemonAdded':
        toast.custom((t) => (
          <StandardToast
            t={t}
            actionMessage='pokemonAdded'
            elementName={pokemonName}
          />
        ));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPokemonShowedNum((prev) => {
            const next = prev + 24;
            return next <= pokemonList.length ? next : prev;
          });
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [pokemonList.length]);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-between items-start mt-2'>
        {pokemonList.slice(0, pokemonShowedNum).map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            setSelectedPokemon={(pokemon) => {
              setSelectedPokemon(pokemon);
              setIsModalOpen(true);
            }}
            showToastMessage={(message: string, pokemonName?: string) => {
              showToastMessage(message, pokemonName);
            }}
          />
        ))}

        {selectedPokemon != null &&
          selectedPokemon.pokemon_v2_pokemonsprites[0].front_sprite != null && (
            <MyModal
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedPokemon(null);
              }}
              open={isModalOpen}
              setOpen={setIsModalOpen}
            />
          )}
      </div>

      <div ref={sentinelRef} className='h-10 mt-10' />

      <Toaster />
    </>
  );
};

export default PokemonBox;
