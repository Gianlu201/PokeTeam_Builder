import type { SavedTeam } from '../../types/myTypes';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import { Button } from '../ui/button';

interface Props {
  savedTeam: SavedTeam;
}

const SavedTeamShowCard = ({ savedTeam }: Props) => {
  return (
    <div className='border border-gray-500/40 rounded-xl w-full px-5 py-3 mb-3'>
      <div className='flex justify-between items-center'>
        <h3>{savedTeam.teamName}</h3>
        <Button variant={'sysOpt'}>Select</Button>
      </div>
      <p>{getTeamComponentsCount(savedTeam.team)} Pokèmon</p>
      <div className='flex justify-start items-center gap-2'>
        {savedTeam.team.map((pokemon) => {
          if (pokemon) {
            return (
              <div key={pokemon.id}>
                <img
                  src={pokemon.pokemon_v2_pokemonsprites[0].sprites ?? ''}
                  alt={pokemon.name}
                  className='max-w-[60px]'
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SavedTeamShowCard;
