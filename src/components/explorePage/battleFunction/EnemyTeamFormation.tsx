import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Button } from '../../ui/button';
import { Search } from 'lucide-react';
import { getTeamComponentsCount } from '../../../utils/mainUtils';
import { setEnemyTeam } from '../../../features/teams/teamsSlice';
import type { PokeTeam } from '../../../types/myTypes';

const EnemyTeamFormation = () => {
  const [currentEnemySelected, setCurrentEnemySelected] = useState<string>('');

  const pokemonList = useAppSelector((state) => state.pokemon.list);
  const enemyTeam = useAppSelector((state) => state.teams.enemyTeam);

  const dispatch = useAppDispatch();

  const addPokemonToEnemyTeam = (pokemonId: string) => {
    const enemiesCount = getTeamComponentsCount(enemyTeam);
    if (enemiesCount < 6) {
      const tempEnemyTeam: PokeTeam = [...enemyTeam];
      const selectedPokemon = pokemonList.find(
        (pokemon) => pokemon.id.toString() == pokemonId
      );

      if (selectedPokemon) {
        tempEnemyTeam[enemiesCount] = selectedPokemon;
        dispatch(setEnemyTeam(tempEnemyTeam));
        setCurrentEnemySelected('');
      }
    }
  };

  return (
    <div className='mt-4'>
      <form
        className='sm:flex justify-center items-center gap-2 mb-4'
        onSubmit={(e) => {
          e.preventDefault();
          addPokemonToEnemyTeam(currentEnemySelected);
        }}
      >
        <select
          className='w-full grow capitalize bg-white border border-gray-400/50 rounded-md py-1.5 px-3 max-sm:mb-2'
          value={currentEnemySelected}
          onChange={(e) => {
            setCurrentEnemySelected(e.target.value);
          }}
          disabled={getTeamComponentsCount(enemyTeam) === 6 ? true : false}
        >
          <option value=''>Select a pokemon</option>
          {pokemonList.map((pokemon) => (
            <option value={pokemon.id} key={pokemon.id} className='capitalize'>
              {pokemon.name}
            </option>
          ))}
        </select>
        <Button
          variant={'sysOpt'}
          disabled={currentEnemySelected === '' ? true : false}
          className='max-sm:relative max-sm:left-[100%] max-sm:-translate-x-[100%]'
        >
          <Search />
          Add
        </Button>
      </form>
    </div>
  );
};

export default EnemyTeamFormation;
