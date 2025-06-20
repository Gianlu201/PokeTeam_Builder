import { useLocation, useNavigate } from 'react-router';
import { Button } from './ui/button';
import {
  getAllEvolutionChainsQuery,
  getAllPokemonsQuery,
} from '../utils/query';
import { useAppDispatch } from '../app/hooks';
import {
  setLoading,
  setReduxPokemonEvolutionChains,
  setReduxPokemonList,
} from '../features/pokemon/pokemonSlice';
import { useEffect } from 'react';

const HeroComponent = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getAllPokemons = async () => {
    try {
      const query = getAllPokemonsQuery;

      // setIsLoading(true);
      dispatch(setLoading(true));

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
        dispatch(setLoading(false));
      } else {
        throw new Error('Error in fetching datas');
      }
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
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

  useEffect(() => {
    getAllPokemons();
    getAllEvolutionChains();
  }, []);

  return (
    <>
      <div
        className='min-h-[200px] h-[50vh] bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: 'url(/images/wallpaper.jpg)' }}
      >
        <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-black/50 px-4'>
          <h1 className='text-3xl sm:text-5xl md:text-7xl font-black text-red-600'>
            PokeTeam Builder
          </h1>
          <p className='text-white sm:text-xl font-medium max-w-[500px]'>
            Explore the Pokémon world, discover new creatures and build the
            perfect team for your adventure!
          </p>
          <div className='bg-white/20 text-white rounded-lg p-0.5'>
            <Button
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              className='my-0.5 ms-0.5'
              onClick={() => navigate('/')}
            >
              Explore
            </Button>
            <Button
              variant={location.pathname === '/team' ? 'default' : 'ghost'}
              className='my-0.5'
              onClick={() => navigate('/team')}
            >
              Team
            </Button>
            <Button
              variant={
                location.pathname === '/saved-teams' ? 'default' : 'ghost'
              }
              className='my-0.5 me-0.5'
              onClick={() => navigate('/saved-teams')}
            >
              Saved
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
