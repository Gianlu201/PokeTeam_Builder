import { Calendar, Upload, Trash2 } from 'lucide-react';
import type { SavedTeam } from '../../types/myTypes';
import { Button } from '../ui/button';
import { typeColors } from '../../utils/typeColors';
import { useAppDispatch } from '../../app/hooks';
import {
  removeSavedTeam,
  setCurrentTeam,
} from '../../features/teams/teamsSlice';

interface Props {
  team: SavedTeam;
  showToastMessage: (actionMessage: string, teamName: string) => void;
}

const SavedTeamCompontnt = ({ team, showToastMessage }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className='bg-white border border-gray-300/40 rounded-lg shadow-md p-4 mb-5'
      data-testid='saved-team-component'
    >
      <div className='flex justify-between items-center mb-2'>
        <h3 className='text-xl font-bold max-xs:max-w-[90px] overflow-auto'>
          {team.teamName}
        </h3>
        <div className='flex justify-between items-center gap-2'>
          <Button
            variant={'sysOpt'}
            onClick={() => {
              dispatch(setCurrentTeam(team));
              showToastMessage('uploadTeam', team.teamName);
            }}
          >
            <Upload />
            Upload
          </Button>
          <Button
            variant={'outline'}
            onClick={() => {
              dispatch(removeSavedTeam(team));
              showToastMessage('teamRemoved', team.teamName);
            }}
            data-testid='removeTeam'
          >
            <Trash2 className='text-red-500' />
          </Button>
        </div>
      </div>

      <div className='flex justify-start items-center gap-2 text-gray-500 mb-3'>
        <Calendar className='w-5 h-5' />
        <span>{team.savedDate}</span>
      </div>

      <div className='flex justify-start items-center gap-4 overflow-x-auto pb-2'>
        {team.team.map((pokemon) => {
          if (pokemon) {
            return (
              <div
                key={pokemon.id}
                className='flex justify-between items-start gap-2 bg-background border border-gray-300/30 rounded-md shadow px-3 py-2'
              >
                <img
                  src={pokemon?.pokemon_v2_pokemonsprites[0].front_sprite ?? ''}
                  alt={pokemon?.name}
                  className='max-w-[50px]'
                />
                <div>
                  <h4 className='capitalize text-sm font-medium mb-1'>
                    {pokemon?.name}
                  </h4>
                  <div className='flex justify-start items-start gap-1'>
                    {pokemon?.pokemon_v2_pokemontypes.map((type) => (
                      <span
                        key={type.pokemon_v2_type.id}
                        className='inline-block rounded-full w-4 h-4'
                        style={{
                          backgroundColor:
                            typeColors[type.pokemon_v2_type.name],
                        }}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SavedTeamCompontnt;
