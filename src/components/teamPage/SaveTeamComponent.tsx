import { Save, Trash2, Users } from 'lucide-react';
import type { PokeTeam } from '../../types/myTypes';
import { Button } from '../ui/button';
import { useState } from 'react';

interface Props {
  pokeTeam: PokeTeam;
  isTeamEmpty: boolean;
}

const SaveTeamComponent = ({ pokeTeam, isTeamEmpty }: Props) => {
  const [teamName, setTeamName] = useState<string>('');

  if (isTeamEmpty) {
    return (
      <div className='flex flex-col justify-center items-center gap-4 my-5'>
        <Users />
        <h3>Empty Team</h3>
        <p>Visit "Explore" section to add Pokémon to your team!</p>
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
        <Button variant={'default'}>
          <Trash2 />
          Clean team
        </Button>
      </div>
    );
  }
};

export default SaveTeamComponent;
