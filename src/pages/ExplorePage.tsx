import { useEffect, useState } from 'react';
import type { Pokemon } from '../types/APITypes';
import PokemonBox from '../components/explorePage/PokemonBox';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  setReduxPokemonList,
  setReduxPokemonEvolutionChains,
} from '../features/pokemon/pokemonSlice';
import { Search } from 'lucide-react';
import PokeLoader from '../components/PokeLoader';
import { getAllPokemonsQuery } from '../utils/query';
import { getAllEvolutionChainsQuery } from '../utils/query';

const ExplorePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const reduxPokemonList = useAppSelector((state) => state.pokemon.list);
  const reduxEvolutionChains = useAppSelector(
    (state) => state.pokemon.evolutionChains
  );

  const dispatch = useAppDispatch();

  const getAllPokemons = async () => {
    try {
      const query = getAllPokemonsQuery;

      setIsLoading(true);

      const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();
        console.info(data);
        dispatch(setReduxPokemonList(data.data.pokemon_v2_pokemon));
        setPokemonList(data.data.pokemon_v2_pokemon);
        setIsLoading(false);
      } else {
        throw new Error('Error in fetching datas');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const getAllEvolutionChains = async () => {
    try {
      const query = getAllEvolutionChainsQuery;

      const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();
        console.info(data);
        dispatch(
          setReduxPokemonEvolutionChains(data.data.pokemon_v2_evolutionchain)
        );
      } else {
        throw new Error('Error in fetching datas');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateFilteredList = () => {
    setPokemonList(
      reduxPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (reduxPokemonList.length === 0) {
      getAllPokemons();
    } else {
      setPokemonList(reduxPokemonList);
    }

    if (reduxEvolutionChains.length === 0) {
      getAllEvolutionChains();
    }
  }, []);

  useEffect(() => {
    updateFilteredList();
  }, [searchQuery]);

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center my-4'>
        <div className='grow relative border border-gray-400/30 rounded-xl p-3'>
          <input
            type='text'
            placeholder='Search for Pokémon by name..'
            className='w-full ms-10 focus:outline-0'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className='absolute top-1/2 start-4 -translate-y-1/2' />
        </div>
        <div></div>
        <div></div>
      </div>

      {isLoading ? (
        <PokeLoader />
      ) : (
        pokemonList.length > 0 && <PokemonBox pokemonList={pokemonList} />
      )}
    </div>
  );
};

export default ExplorePage;
