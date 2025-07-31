import { Users } from 'lucide-react';
import { useAppSelector } from '../app/hooks';
import SavedTeamComponent from '../components/savedTeams/SavedTeamComponent';

const SavedTeamsPage = () => {
  const savedTeams = useAppSelector((state) => state.teams.savedTeams);

  return (
    <div className='max-w-7xl mx-auto min-h-[50vh] pt-4 bg-background max-xl:mx-10'>
      <h2 className='flex justify-start items-center gap-2 text-2xl font-bold mb-6'>
        <Users className='text-blue-500 w-7 h-7' />
        Saved Teams
        <span className='text-sm font-normal'>({savedTeams.length})</span>
      </h2>

      {savedTeams.length > 0 ? (
        <div>
          {savedTeams.map((team, i) => (
            <SavedTeamComponent key={i} team={team} />
          ))}
        </div>
      ) : (
        <div className='bg-white border border-gray-300/30 rounded-xl shadow-lg p-8 text-gray-500 flex flex-col justify-center items-center gap-2'>
          <Users className='w-12 h-12' />
          <h4 className='text-2xl font-semibold'>No saved teams found!</h4>
          <p className='font-medium'>
            Create your fitst team in "Team" section!
          </p>
        </div>
      )}
    </div>
  );
};

export default SavedTeamsPage;
