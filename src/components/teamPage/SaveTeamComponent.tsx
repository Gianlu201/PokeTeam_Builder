import { Save, Trash2, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addTeamToSaved,
  cleanCurrentTeam,
  updateSavedTeam,
} from '../../features/teams/teamsSlice';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import type { SavedTeam } from '../../types/myTypes';

import { toast, Toaster } from 'sonner';
import ActionToast from '../ui/ActionToast';

const SaveTeamComponent = () => {
  const currentTeam = useAppSelector((state) => state.teams.currentTeam);

  const [teamName, setTeamName] = useState<string>('');

  const teams = useAppSelector((state) => state.teams.savedTeams);

  const dispatch = useAppDispatch();

  const saveTeam = () => {
    if (
      !teams.find((t) => t.teamName.toLowerCase() === teamName.toLowerCase())
    ) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('it-IT', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });

      const newSavedTeam: SavedTeam = {
        teamName: teamName,
        team: currentTeam.team,
        savedDate: formattedDate,
      };

      dispatch(addTeamToSaved(newSavedTeam));
    } else {
      toast.custom((t) => (
        <ActionToast t={t} actionMode='overwriteTeam' action={overwriteTeam} />
      ));
    }
  };

  const overwriteTeam = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const updatedTeam: SavedTeam = {
      teamName: teamName,
      team: currentTeam.team,
      savedDate: formattedDate,
    };

    dispatch(updateSavedTeam(updatedTeam));
  };

  useEffect(() => {
    console.log(currentTeam.teamName);
    if (currentTeam.teamName) {
      setTeamName(currentTeam.teamName);
    }
  }, [currentTeam]);

  if (!(getTeamComponentsCount(currentTeam.team) > 0)) {
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

        <Toaster />
      </div>
    );
  }
};

export default SaveTeamComponent;
