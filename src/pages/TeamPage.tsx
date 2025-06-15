import { Users } from 'lucide-react';
import TeamBox from '../components/teamPage/TeamBox';
import type { PokeTeam } from '../types/myTypes';
import { useAppSelector } from '../app/hooks';

const TeamPage = () => {
  const currentTeam = useAppSelector((state) => state.teams.currentTeam);

  const getTeamComponentsCount = (team: PokeTeam) => {
    let count = 0;
    team.forEach((element) => {
      if (element) {
        count += 1;
      }
    });

    return count;
  };

  return (
    <div className='max-w-7xl mx-auto'>
      {/* my team */}
      <div className='bg-cyan-100/80 rounded-xl mx-2 my-4 p-6 shadow-lg'>
        <div className='flex justify-between items-center mb-3'>
          <h2 className='flex justify-start items-center gap-2 text-2xl font-bold'>
            <Users className='w-7 h-7' />
            Team Builder
          </h2>
          <span className='text-xs font-medium'>
            {getTeamComponentsCount(currentTeam)}/6
          </span>
        </div>

        <TeamBox pokeTeam={currentTeam} />
      </div>
    </div>
  );
};

export default TeamPage;
