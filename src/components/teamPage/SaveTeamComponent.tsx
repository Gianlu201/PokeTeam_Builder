import { Save, Trash2, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addTeamToSaved,
  cleanCurrentTeam,
} from '../../features/teams/teamsSlice';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import type { SavedTeam } from '../../types/myTypes';

const SaveTeamComponent = () => {
  const [teamName, setTeamName] = useState<string>('');

  const pokeTeam = useAppSelector((state) => state.teams.currentTeam);

  const dispatch = useAppDispatch();

  const saveTeam = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const newSavedTeam: SavedTeam = {
      teamName: teamName,
      team: pokeTeam,
      savedDate: formattedDate,
    };

    dispatch(addTeamToSaved(newSavedTeam));
  };

  if (!(getTeamComponentsCount(pokeTeam) > 0)) {
    return (
      <div className='flex flex-col justify-center items-center gap-2 my-2 mt-8'>
        <Users className='text-gray-500 w-10 h-10 stroke-2' />
        <h3 className='font-semibold text-lg text-gray-500'>Empty Team</h3>
        <p className='text-gray-500 text-sm'>
          Visit "Explore" section to add Pokémon to your team!
        </p>
      </div>
    );
  } else {
    return (
      <div className='md:flex justify-between items-center gap-3 my-5'>
        <input
          type='text'
          placeholder={`Put your team's name...`}
          className='block max-md:w-full max-md:mb-3 grow bg-white border border-gray-400/50 rounded-md py-1.5 px-3'
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <div className='flex justify-around items-center md:gap-3'>
          <Button variant={'sysOpt'} onClick={saveTeam}>
            <Save className='hidden sm:block' />
            Save team
          </Button>

          <Button
            variant={'default'}
            onClick={() => {
              dispatch(cleanCurrentTeam());
            }}
          >
            <Trash2 className='hidden sm:block' />
            Clean team
          </Button>
        </div>
      </div>
    );
  }
};

export default SaveTeamComponent;
