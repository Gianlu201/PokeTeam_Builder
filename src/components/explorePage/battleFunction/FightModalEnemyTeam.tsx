import { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
// import EnemyTeamFormation from './EnemyTeamFormation';
import type { PokeTeam } from '../../../types/myTypes';
import SavedTeamShowCard from '../SavedTeamShowCard';
import { Button } from '../../ui/button';

interface Props {
  enemySelectedTeam: PokeTeam | undefined;
  setEnemySelectedTeam: (team: PokeTeam) => void;
  setSelectionStep: (step: number) => void;
}

const FightModalEnemyTeam = ({
  enemySelectedTeam,
  setEnemySelectedTeam,
  setSelectionStep,
}: Props) => {
  // se il valore di "teamOption" è true allora l'opzione selezionata sarà
  // quella per formare al momento un nuovo team, altrimenti si passerà a
  // mostrare tutti i team salvati e il team attuale
  const [teamOption, setTeamOption] = useState<boolean>(true);

  const savedTeams = useAppSelector((state) => state.teams.savedTeams);

  return (
    <div className='flex flex-col items-center justify-start h-full relative'>
      <h2 className='font-bold text-3xl mb-1'>Select your enemy's team</h2>
      <p className='mb-3 text-gray-700'>
        Choose between your saved teams or create a new one now
      </p>
      <div className='bg-gray-400/20 rounded-lg p-0.5'>
        <Button
          variant={teamOption ? 'default' : 'ghost'}
          className='my-0.5 ms-0.5'
          onClick={() => {
            setTeamOption(true);
          }}
        >
          New Team
        </Button>
        <Button
          variant={!teamOption ? 'default' : 'ghost'}
          className='my-0.5 ms-0.5'
          onClick={() => {
            setTeamOption(false);
          }}
        >
          Saved Teams
        </Button>
      </div>

      <div className='w-full h-full'>
        {teamOption ? (
          // <EnemyTeamFormation />
          <div className='text-center mt-14 text-gray-700 border border-gray-300 rounded-lg w-fit shadow-md mx-auto px-10 py-6'>
            <h3 className='font-bold text-2xl mb-2'>Work in progress</h3>
            <p className='text-black'>This option will be enabled soon</p>
          </div>
        ) : (
          <div className='flex flex-row justify-center items-center gap-2 w-full'>
            <div className='w-full'>
              {savedTeams.length > 0 ? (
                <div className='my-5'>
                  {savedTeams.map((team) => (
                    <SavedTeamShowCard
                      key={team.teamName}
                      savedTeam={team}
                      mySelectedTeam={enemySelectedTeam}
                      setMySelectedTeam={setEnemySelectedTeam}
                    />
                  ))}
                </div>
              ) : (
                <h4 className='text-center'>No saved teams found!</h4>
              )}
            </div>
          </div>
        )}
      </div>

      <div className='sticky bottom-0 flex justify-end p-4'>
        <Button
          variant={'sysOpt'}
          disabled={enemySelectedTeam ? false : true}
          onClick={() => {
            if (enemySelectedTeam) {
              setSelectionStep(2);
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FightModalEnemyTeam;
