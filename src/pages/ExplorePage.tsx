import { useEffect, useState } from 'react';
import type { Pokemon } from '../types/pokemon';
import PokemonBox from '../components/PokemonBox';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setReduxPokemonList } from '../features/pokemon/pokemonSlice';
import { Search } from 'lucide-react';

const ExplorePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const reduxPokemonList = useAppSelector((state) => state.pokemon.list);

  const dispatch = useAppDispatch();

  const getAllPokemons = async () => {
    try {
      const query = `
      query {
      pokemon_v2_pokemon(where: {is_default: {_eq: true}}) {
    height
    weight
    name
    id
    pokemon_species_id
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
        id
      }
    }
    pokemon_v2_pokemonstats {
      pokemon_v2_stat {
        id
        name
      }
      base_stat
    }
    pokemon_v2_pokemonsprites {
      sprites
    }
    pokemon_v2_pokemonabilities {
      ability_id
      id
      pokemon_v2_ability {
        name
      }
    }
    pokemon_v2_pokemoncries {
      cries
      pokemon_id
    }
    pokemon_v2_pokemonspecy {
      is_baby
      is_legendary
      is_mythical
      pokemon_color_id
      pokemon_v2_pokemoncolor {
        name
      }
    }
  }
    }
      `;
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

      {pokemonList.length > 0 && <PokemonBox pokemonList={pokemonList} />}
    </div>
  );
};

export default ExplorePage;
