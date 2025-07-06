import { useEffect, useState } from 'react';
import type { Pokemon } from '../types/APITypes';
import PokemonBox from '../components/explorePage/PokemonBox';
import { useAppSelector } from '../app/hooks';
import { Search } from 'lucide-react';
import PokeLoader from '../components/PokeLoader';
import { Button } from '../components/ui/button';
import FightModal from '../components/explorePage/battleFunction/FightModal';

const ExplorePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFightModalOpen, setIsFightModalOpen] = useState<boolean>(false);

  const reduxPokemonList = useAppSelector((state) => state.pokemon.list);
  const isLoading = useAppSelector((state) => state.pokemon.loading);

  const updateFilteredList = () => {
    setPokemonList(
      reduxPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (pokemonList.length === 0 && reduxPokemonList.length > 0) {
      setPokemonList(reduxPokemonList);
    }
  }, [reduxPokemonList]);

  useEffect(() => {
    updateFilteredList();
  }, [searchQuery]);

  return (
    <div className='max-w-7xl mx-auto bg-background max-xl:mx-10'>
      <div>
        <Button
          onClick={() => {
            setIsFightModalOpen(true);
          }}
        >
          Fight
        </Button>
      </div>

      {/* search bar */}
      <div className='flex justify-between items-center py-4'>
        <div className='grow relative border border-gray-400/30 rounded-xl p-3 overflow-hidden'>
          <input
            type='text'
            placeholder='Search for Pokémon by name..'
            className='w-full ms-5 sm:ms-10 focus:outline-0 text-sm'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className='absolute top-1/2 start-2 sm:start-4 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6' />
        </div>
        <div>{/* filtri1 */}</div>
        <div>{/* filtri2 */}</div>
      </div>

      {isLoading ? (
        <PokeLoader />
      ) : (
        pokemonList.length > 0 && <PokemonBox pokemonList={pokemonList} />
      )}

      <FightModal
        onClose={() => {
          setIsFightModalOpen(false);
        }}
        fightModalOpen={isFightModalOpen}
        setFightModalOpen={setIsFightModalOpen}
        startStep={0}
      />
    </div>
  );
};

export default ExplorePage;
