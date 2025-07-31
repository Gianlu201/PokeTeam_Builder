import { Target, Users } from 'lucide-react';
import TeamBox from '../components/teamPage/TeamBox';
import { useAppSelector } from '../app/hooks';
import { getTeamComponentsCount } from '../utils/mainUtils';
import TeamAnalysis from '../components/teamPage/TeamAnalysis';
import SuggestedTeam from '../components/teamPage/SuggestedTeam';

const TeamPage = () => {
  const currentTeam = useAppSelector((state) => state.teams.currentTeam);
  const enemyTeam = useAppSelector((state) => state.teams.enemyTeam);

  return (
    <div className='max-w-7xl mx-auto bg-background max-xl:mx-10'>
      {/* my team */}
      <div className='bg-indigo-50/80 border border-gray-300/40 rounded-xl mx-2 my-7 p-6 shadow-lg'>
        <div className='flex justify-between items-center mb-3'>
          <h2 className='flex justify-start items-center gap-2 text-lg xs:text-2xl font-bold'>
            <Users className='text-blue-500 w-7 h-7' />
            Team Builder
          </h2>
          <span className='text-xs font-medium'>
            {getTeamComponentsCount(currentTeam.team)}/6
          </span>
        </div>

        <TeamBox
          savedTeam={{ teamName: '', team: currentTeam.team, savedDate: '' }}
          isMyTeam={true}
        />
      </div>
      {getTeamComponentsCount(currentTeam.team) > 0 && (
        <TeamAnalysis pokeTeam={currentTeam.team} />
      )}

      {/* enemy team */}
      <div className='bg-red-100/80 border border-gray-300/40 rounded-xl mx-2 my-7 p-6 shadow-lg'>
        <div className='flex justify-between items-center mb-3'>
          <h2 className='flex justify-start items-center gap-2 text-lg xs:text-2xl font-bold'>
            <Target className='text-red-500 w-7 h-7' />
            Enemy Team
          </h2>
          <span className='text-xs font-medium'>
            {getTeamComponentsCount(enemyTeam)}/6
          </span>
        </div>

        <TeamBox
          savedTeam={{ teamName: '', team: enemyTeam, savedDate: '' }}
          isMyTeam={false}
        />
      </div>
      {getTeamComponentsCount(enemyTeam) > 0 && (
        <SuggestedTeam pokeTeam={enemyTeam} />
      )}
    </div>
  );
};

export default TeamPage;
