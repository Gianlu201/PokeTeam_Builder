import { useEffect, useState } from 'react';
import type { Pokemon } from '../types/APITypes';
import PokemonBox from '../components/explorePage/PokemonBox';
import { useAppSelector } from '../app/hooks';
import { Scale, Search, Shuffle, Swords, Zap } from 'lucide-react';
import PokeLoader from '../components/PokeLoader';
import { Button } from '../components/ui/button';
import FightModal from '../components/explorePage/battleFunction/FightModal';
import MultifunctionalModal from '../components/explorePage/MultifunctionalModal';
import MyModal from '../components/explorePage/MyModal';

const ExplorePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFightModalOpen, setIsFightModalOpen] = useState<boolean>(false);

  const reduxPokemonList = useAppSelector((state) => state.pokemon.list);
  const isLoading = useAppSelector((state) => state.pokemon.loading);

  const [modalTitle, setModalTitle] = useState<string>('');
  const [pokeModal, setPokeModal] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>();

  const updateFilteredList = () => {
    setPokemonList(
      reduxPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const getRandomPokemon = () => {
    if (pokemonList.length) {
      setRandomPokemon(
        pokemonList[Math.floor(Math.random() * pokemonList.length)]
      );
    }
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
      <div className='grid grid-cols-4 justify-start items-center gap-4 mt-5 mb-1'>
        <Button
          variant={'default'}
          className='font-bold'
          onClick={() => {
            setPokeModal(true);
            getRandomPokemon();
          }}
        >
          <Shuffle />
          Random Pokémon
        </Button>
        <Button
          variant={'action'}
          onClick={() => {
            setIsFightModalOpen(true);
          }}
        >
          <Swords />
          Fight
          <Swords />
        </Button>
        <Button
          variant={'default'}
          className='font-bold'
          onClick={() => {
            setModalTitle('Poké Quiz');
            setModalOpen(true);
          }}
        >
          <Zap />
          Pokè Quiz
        </Button>
        <Button
          variant={'default'}
          className='font-bold'
          onClick={() => {
            setModalTitle('Types Effectiveness');
            setModalOpen(true);
          }}
        >
          <Scale />
          Types Effectiveness
        </Button>
      </div>

      {randomPokemon != null &&
        randomPokemon.pokemon_v2_pokemonsprites[0].front_sprite != null && (
          <MyModal
            selectedPokemon={randomPokemon}
            setSelectedPokemon={setRandomPokemon}
            onClose={() => {
              setPokeModal(false);
              setRandomPokemon(null);
            }}
            open={pokeModal}
            setOpen={setPokeModal}
          />
        )}

      <MultifunctionalModal
        title={modalTitle}
        open={modalOpen}
        setOpen={setModalOpen}
      />

      {/* search bar */}
      <div className='flex justify-between items-center py-5'>
        <div className='grow relative border border-gray-400/30 bg-white rounded-xl p-3 overflow-hidden shadow-sm'>
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
