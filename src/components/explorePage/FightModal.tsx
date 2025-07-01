import { useEffect, useState } from 'react';
import { getSelectedPokemonsMoves } from '../../utils/query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { useAppSelector } from '../../app/hooks';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import SavedTeamShowCard from './SavedTeamShowCard';

interface Props {
  onClose: () => void;
  fightModalOpen: boolean;
  setFightModalOpen: (open: boolean) => void;
}

const FightModal = ({ fightModalOpen, setFightModalOpen }: Props) => {
  // se il valore di "myTeamOption" è true allora l'opzione selezionata sarà "Current Team"
  // altrimenti con falce l'opzione sarà "Saved Teams"
  const [myTeamOption, setMyTeamOption] = useState<boolean>(true);

  const currentTeam = useAppSelector((state) => state.teams.currentTeam);
  const savedTeams = useAppSelector((state) => state.teams.savedTeams);

  const getMoves = async () => {
    try {
      const query = getSelectedPokemonsMoves([3, 6, 9]);
      console.info(query);

      const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();
        console.info(data);
      } else {
        throw new Error('Error in fetching datas');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (fightModalOpen) {
      getMoves();
    }
  }, [fightModalOpen]);

  return (
    <Dialog open={fightModalOpen} onOpenChange={setFightModalOpen}>
      <DialogContent className='max-h-[80vh] sm:max-w-2xl xl:max-w-4xl bg-white border-0 shadow-2xl overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>
            Pokémon Battle Arena
          </DialogTitle>
        </DialogHeader>

        <div className='flex flex-col items-center justify-start'>
          <h2>Select your team</h2>
          <p>Choose between your saved teams or your current team</p>
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
            <div className='flex flex-row justify-center items-center gap-2 w-full'>
              {getTeamComponentsCount(currentTeam) > 0 ? (
                currentTeam.map((pokemon) => {
                  if (pokemon) {
                    return (
                      <div key={pokemon?.id}>
                        <img
                          src={
                            pokemon?.pokemon_v2_pokemonsprites[0].sprites ?? ''
                          }
                          alt={pokemon?.name}
                        />
                        <p className='text-sm text-center capitalize'>
                          {pokemon?.name}
                        </p>
                      </div>
                    );
                  }
                })
              ) : (
                <h4>Current team is empty!</h4>
              )}
            </div>
          ) : (
            <div className='w-full'>
              {savedTeams.length > 0 ? (
                <div>
                  {savedTeams.map((team) => (
                    <SavedTeamShowCard savedTeam={team} />
                  ))}
                </div>
              ) : (
                <h4>No saved teams found!</h4>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FightModal;
