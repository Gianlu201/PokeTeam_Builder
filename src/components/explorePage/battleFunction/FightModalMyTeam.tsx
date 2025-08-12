import { useState } from 'react';
import { Button } from '../../ui/button';
import { useAppSelector } from '../../../app/hooks';
import { getTeamComponentsCount } from '../../../utils/mainUtils';
import SavedTeamShowCard from '../SavedTeamShowCard';
import type { PokeTeam } from '../../../types/myTypes';

interface Props {
  fightModalOpen: boolean;
  mySelectedTeam: PokeTeam | undefined;
  setMySelectedTeam: (team: PokeTeam) => void;
  setSelectionStep: (step: number) => void;
}

const FightModalMyTeam = ({
  mySelectedTeam,
  setMySelectedTeam,
  setSelectionStep,
}: Props) => {
  // se il valore di "myTeamOption" è true allora l'opzione selezionata sarà "Current Team"
  // altrimenti con false l'opzione sarà "Saved Teams"
  const [myTeamOption, setMyTeamOption] = useState<boolean>(true);

  const currentTeam = useAppSelector((state) => state.teams.currentTeam);
  const savedTeams = useAppSelector((state) => state.teams.savedTeams);

  return (
    <div className='flex flex-col items-center justify-start h-[100%] relative'>
      <h2 className='font-bold text-3xl mb-1'>Select your team</h2>
      <p className='mb-3 text-gray-700'>
        Choose between your saved teams or your current team
      </p>
      <div className='bg-gray-400/20 rounded-lg p-0.5'>
        <Button
          variant={myTeamOption ? 'default' : 'ghost'}
          className='my-0.5 ms-0.5'
          onClick={() => {
            setMyTeamOption(true);
          }}
        >
          Current Team
        </Button>
        <Button
          variant={!myTeamOption ? 'default' : 'ghost'}
          className='my-0.5 ms-0.5'
          onClick={() => {
            setMyTeamOption(false);
          }}
        >
          Saved Teams
        </Button>
      </div>

      {myTeamOption ? (
        <div className='flex flex-row justify-center items-start gap-2 w-full h-full'>
          {getTeamComponentsCount(currentTeam.team) > 0 ? (
            <div
              className={`flex justify-center items-center gap-2 border rounded-xl px-5 py-3 my-4 ${
                mySelectedTeam === currentTeam.team
                  ? 'border-black border-2'
                  : 'border-gray-500/40'
              }`}
              onClick={() => {
                setMySelectedTeam(currentTeam.team);
              }}
            >
              {currentTeam.team.map((pokemon) => {
                if (pokemon) {
                  return (
                    <div key={pokemon?.id}>
                      <img
                        src={
                          pokemon?.pokemon_v2_pokemonsprites[0].front_sprite ??
                          ''
                        }
                        alt={pokemon?.name}
                      />
                      <p className='text-sm text-center capitalize'>
                        {pokemon?.name}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          ) : (
            <h4>Current team is empty!</h4>
          )}
        </div>
      ) : (
        <div className='w-full h-[100%] flex flex-col justify-center items-center'>
          {savedTeams.length > 0 ? (
            <div className='w-full my-5'>
              {savedTeams.map((team) => (
                <SavedTeamShowCard
                  key={team.teamName}
                  savedTeam={team}
                  mySelectedTeam={mySelectedTeam}
                  setMySelectedTeam={setMySelectedTeam}
                />
              ))}
            </div>
          ) : (
            <div className='flex justify-center items-center h-[100%]'>
              <h4 className='text-center text-xl font-semibold text-gray-700'>
                No saved teams found!
              </h4>
            </div>
          )}
        </div>
      )}

      <div className='sticky bottom-0 flex justify-end p-2'>
        <Button
          variant={'sysOpt'}
          disabled={mySelectedTeam ? false : true}
          onClick={() => {
            if (mySelectedTeam) {
              setSelectionStep(1);
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FightModalMyTeam;
