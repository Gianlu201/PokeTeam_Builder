import type { Pokemon } from '../types/pokemon';
import { StartCapitalLetter } from '../utils/mainUtils';
import { getTypeGradient } from '../utils/typeColors';
import { Button } from './ui/button';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const types = pokemon.pokemon_v2_pokemontypes.map(
    (type) => type.pokemon_v2_type.name
  );

  const showPokedexNumber = (pokedexNumb: number) => {
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

  return (
    <div
      className='text-white rounded-xl p-4 cursor-pointer hover:scale-110 duration-500 ease-in-out'
      style={{ background: getTypeGradient(types) }}
    >
      <h3 className='text-lg font-bold'>{StartCapitalLetter(pokemon.name)}</h3>
      <p className='mb-2'>{showPokedexNumber(pokemon.id)}</p>

      <div className='flex justify-start items-center gap-2 mb-3'>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <span
            key={type.pokemon_v2_type.id}
            className='text-sm font-medium bg-white/20 rounded-full py-0.5 px-2'
          >
            {type.pokemon_v2_type.name}
          </span>
        ))}
      </div>

      <div className='flex justify-between items-end'>
        <img
          src={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default ?? ''}
          alt={pokemon.name}
          className='bg-white/30 rounded-full'
        />

        <Button variant={'outline'}>Add</Button>
      </div>
    </div>
  );
};

export default PokemonCard;
