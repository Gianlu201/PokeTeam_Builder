import type { PokeTeam, SavedTeam } from '../../types/myTypes';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import { Button } from '../ui/button';

interface Props {
  savedTeam: SavedTeam;
  mySelectedTeam: PokeTeam | undefined;
  setMySelectedTeam: (team: PokeTeam) => void;
}

const SavedTeamShowCard = ({
  savedTeam,
  mySelectedTeam,
  setMySelectedTeam,
}: Props) => {
  return (
    <div
      className={`border rounded-xl w-full px-5 py-3 mb-3 ${
        mySelectedTeam === savedTeam.team
          ? 'border-black/40 border-2'
          : 'border-gray-500/40'
      }`}
    >
      <div className='flex justify-between items-center'>
        <h3>{savedTeam.teamName}</h3>
        <Button
          variant={'sysOpt'}
          onClick={() => {
            setMySelectedTeam(savedTeam.team);
          }}
        >
          Select
        </Button>
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
