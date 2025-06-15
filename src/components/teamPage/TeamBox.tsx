import { Users } from 'lucide-react';
import type { PokeTeam } from '../../types/myTypes';
import TeamPokemonSlot from './TeamPokemonSlot';

interface Props {
  pokeTeam: PokeTeam;
}

const TeamBox = ({ pokeTeam }: Props) => {
  return (
    <div className='max-w-2xl mx-auto grid grid-cols-3 gap-5'>
      {pokeTeam.map((pokemon, i) => {
        if (pokemon) {
          return <TeamPokemonSlot pokemon={pokemon} />;
        } else {
          return (
            <div className='flex flex-col justify-center items-center gap-2 w-full aspect-square border-2 border-dashed border-gray-500 text-gray-500 bg-background rounded-lg '>
              <Users />
              <p>Slot {i + 1}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TeamBox;
