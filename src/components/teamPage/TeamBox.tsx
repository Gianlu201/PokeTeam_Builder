import { Users } from 'lucide-react';
import type { PokeTeam } from '../../types/myTypes';
import TeamPokemonSlot from './TeamPokemonSlot';
import TeamStats from './TeamStats';
import SaveTeamComponent from './SaveTeamComponent';
import { getTeamComponentsCount } from '../../utils/mainUtils';

interface Props {
  pokeTeam: PokeTeam;
  isMyTeam: boolean | null;
}

const TeamBox = ({ pokeTeam, isMyTeam }: Props) => {
  return (
    <>
      {getTeamComponentsCount(pokeTeam) > 0 && isMyTeam && (
        <TeamStats pokeTeam={pokeTeam} />
      )}

      <div className='max-w-2xl mx-auto grid grid-cols-3 gap-5'>
        {pokeTeam.map((pokemon, i) => {
          if (pokemon) {
            return (
              <TeamPokemonSlot pokemon={pokemon} index={i} key={pokemon.id} />
            );
          } else {
            return (
              <div
                key={-i}
                className='flex flex-col justify-center items-center gap-2 w-full aspect-square border-2 border-dashed border-gray-400 text-gray-500 bg-background rounded-lg hover:border-gray-600'
              >
                <Users />
                <p>Slot {i + 1}</p>
              </div>
            );
          }
        })}
      </div>

      {isMyTeam && (
        <SaveTeamComponent
          pokeTeam={pokeTeam}
          isTeamEmpty={!(getTeamComponentsCount(pokeTeam) > 0)}
        />
      )}
    </>
  );
};

export default TeamBox;
