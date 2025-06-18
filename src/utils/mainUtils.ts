import type { PokeTeam } from '../types/myTypes';

export const showPokedexNumber = (pokedexNumb: number) => {
  let pokedexNumber = '#';
  switch (`${pokedexNumb}`.length) {
    case 1:
      pokedexNumber += `00${pokedexNumb}`;
      break;
    case 2:
      pokedexNumber += `0${pokedexNumb}`;
      break;
    default:
      pokedexNumber += `${pokedexNumb}`;
      break;
  }

  return pokedexNumber;
};

export const getTeamComponentsCount = (team: PokeTeam) => {
  let count = 0;
  team.forEach((element) => {
    if (element) {
      count += 1;
    }
  });

  return count;
};
