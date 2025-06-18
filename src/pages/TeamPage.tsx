import { Users } from 'lucide-react';
import TeamBox from '../components/teamPage/TeamBox';
import { useAppSelector } from '../app/hooks';
import { getTeamComponentsCount } from '../utils/mainUtils';
import TeamAnalysis from '../components/teamPage/TeamAnalysis';

const TeamPage = () => {
  const currentTeam = useAppSelector((state) => state.teams.currentTeam);

  return (
    <div className='max-w-7xl mx-auto'>
      {/* my team */}
      <div className='bg-indigo-50/80 border border-gray-300/40 rounded-xl mx-2 my-7 p-6 shadow-lg'>
        <div className='flex justify-between items-center mb-3'>
          <h2 className='flex justify-start items-center gap-2 text-2xl font-bold'>
            <Users className='w-7 h-7' />
            Team Builder
          </h2>
          <span className='text-xs font-medium'>
            {getTeamComponentsCount(currentTeam)}/6
          </span>
        </div>

        <TeamBox pokeTeam={currentTeam} isMyTeam={true} />
      </div>
      {getTeamComponentsCount(currentTeam) > 0 && <TeamAnalysis />}
    </div>
  );
};

export default TeamPage;
