import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import { setEnemyTeam } from '../../features/teams/teamsSlice';
import type { PokeTeam } from '../../types/myTypes';
import CustomSelect from '../ui/CustomSelect';

const SelectEnemyComponent = () => {
  const [currentEnemySelected, setCurrentEnemySelected] =
    useState<string>('Select a Pokémon');

  const pokemonList = useAppSelector((state) => state.pokemon.list);
  const enemyTeam = useAppSelector((state) => state.teams.enemyTeam);

  const dispatch = useAppDispatch();

  const addPokemonToEnemyTeam = (pokemonName: string) => {
    const enemiesCount = getTeamComponentsCount(enemyTeam);
    if (enemiesCount < 6) {
      const tempEnemyTeam: PokeTeam = [...enemyTeam];
      const selectedPokemon = pokemonList.find(
        (pokemon) => pokemon.name == pokemonName
      );

      if (selectedPokemon) {
        tempEnemyTeam[enemiesCount] = selectedPokemon;
        dispatch(setEnemyTeam(tempEnemyTeam));
        setCurrentEnemySelected('Select a Pokémon');
      }
    }
  };

  return (
    <div data-testid='select-enemy'>
      <form
        className='sm:flex justify-center items-center gap-2 mb-4'
        onSubmit={(e) => {
          e.preventDefault();
          addPokemonToEnemyTeam(currentEnemySelected);
        }}
      >
        <CustomSelect
          className='w-full'
          options={['Select a Pokémon'].concat(pokemonList.map((p) => p.name))}
          value={currentEnemySelected}
          onChange={(e) => {
            setCurrentEnemySelected(e);
          }}
          testid='enemy-selector'
        />

        <Button
          variant={'sysOpt'}
          disabled={currentEnemySelected === 'Select a Pokémon' ? true : false}
          className='max-sm:relative max-sm:left-[100%] max-sm:-translate-x-[100%]'
          data-testid='addEnemy-button'
        >
          <Search />
          Add
        </Button>
      </form>
    </div>
  );
};

export default SelectEnemyComponent;
