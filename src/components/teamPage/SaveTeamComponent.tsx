import { Save, Trash2, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cleanCurrentTeam } from '../../features/teams/teamsSlice';
import { getTeamComponentsCount } from '../../utils/mainUtils';

const SaveTeamComponent = () => {
  const [teamName, setTeamName] = useState<string>('');

  const pokeTeam = useAppSelector((state) => state.teams.currentTeam);

  const dispatch = useAppDispatch();

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
      <div className='flex justify-between items-center gap-2 my-5'>
        <input
          type='text'
          placeholder={`Put your team's name...`}
          className='grow bg-white border border-gray-400/50 rounded-md py-1 px-3'
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <Button variant={'sysOpt'}>
          <Save />
          Save team
        </Button>

        <Button
          variant={'default'}
          onClick={() => {
            dispatch(cleanCurrentTeam());
          }}
        >
          <Trash2 />
          Clean team
        </Button>
      </div>
    );
  }
};

export default SaveTeamComponent;
