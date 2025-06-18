import { Users } from 'lucide-react';
import { useAppSelector } from '../app/hooks';
import SavedTeamComponent from '../components/savedTeams/SavedTeamComponent';

const SavedTeamsPage = () => {
  const savedTeams = useAppSelector((state) => state.teams.savedTeams);

  return (
    <div className='max-w-7xl mx-auto mt-4'>
      <h2 className='flex justify-start items-center gap-2 text-2xl font-semibold mb-6'>
        <Users className='text-blue-500 w-7 h-7' />
        Saved Teams
        <span className='text-sm font-normal'>({savedTeams.length})</span>
      </h2>

      <div>
        {savedTeams.map((team, i) => (
          <SavedTeamComponent key={i} team={team} />
        ))}
      </div>
    </div>
  );
};

export default SavedTeamsPage;
