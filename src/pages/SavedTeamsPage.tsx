import { Users } from 'lucide-react';
import { useAppSelector } from '../app/hooks';
import SavedTeamComponent from '../components/savedTeams/SavedTeamComponent';
import { toast, Toaster } from 'sonner';
import StandardToast from '../components/ui/StandardToast';

const SavedTeamsPage = () => {
  const savedTeams = useAppSelector((state) => state.teams.savedTeams);

  const showToastMessage = (actionMessage: string, teamName: string) => {
    switch (actionMessage) {
      case 'uploadTeam':
        toast.custom((t) => (
          <StandardToast
            t={t}
            actionMessage='teamUploaded'
            elementName={teamName}
          />
        ));
        break;

      case 'teamRemoved':
        toast.custom((t) => (
          <StandardToast
            t={t}
            actionMessage='teamRemoved'
            elementName={teamName}
          />
        ));
        break;

      default:
        break;
    }
  };

  return (
    <div className='max-w-7xl mx-auto min-h-[50vh] pt-4 pb-10 bg-background max-xl:mx-10'>
      <h2
        className='flex justify-start items-center gap-2 text-2xl font-bold mb-6'
        data-testid='savedTeams-title'
      >
        <Users className='text-blue-500 w-7 h-7' />
        Saved Teams
        <span className='text-sm font-normal'>({savedTeams.length})</span>
      </h2>

      {savedTeams.length > 0 ? (
        <div>
          {savedTeams.map((team, i) => (
            <SavedTeamComponent
              key={i}
              team={team}
              showToastMessage={(actionMessage: string, teamName: string) => {
                showToastMessage(actionMessage, teamName);
              }}
            />
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

      <Toaster />
    </div>
  );
};

export default SavedTeamsPage;
