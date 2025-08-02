import { Users } from 'lucide-react';
import type { SavedTeam } from '../../types/myTypes';
import TeamPokemonSlot from './TeamPokemonSlot';
import TeamStats from './TeamStats';
import SaveTeamComponent from './SaveTeamComponent';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import SelectEnemyComponent from './SelectEnemyComponent';
import { toast, Toaster } from 'sonner';
import StandardToast from '../ui/StandardToast';

interface Props {
  savedTeam: SavedTeam;
  isMyTeam: boolean;
}

const TeamBox = ({ savedTeam, isMyTeam }: Props) => {
  const showToastMessage = (pokemonName: string) => {
    toast.custom((t) => (
      <StandardToast
        t={t}
        actionMessage='pokemonRemoved'
        elementName={pokemonName}
      />
    ));
  };

  return (
    <>
      {getTeamComponentsCount(savedTeam.team) > 0 && isMyTeam && <TeamStats />}

      {!isMyTeam && <SelectEnemyComponent />}

      <div className='max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {savedTeam.team.map((pokemon, i) => {
          if (pokemon) {
            return (
              <TeamPokemonSlot
                pokemon={pokemon}
                index={i}
                key={i}
                isMyTeam={isMyTeam}
                showToastMessage={(pokemonName: string) => {
                  showToastMessage(pokemonName);
                }}
              />
            );
          } else {
            return (
              <div
                key={-i}
                className='flex flex-col justify-center items-center gap-2 w-full aspect-square border-2 border-dashed border-gray-400 text-gray-500 bg-background rounded-lg hover:border-gray-600'
              >
                <Users />
                <p>Slot {i + 1}</p>
              </div>
            );
          }
        })}
      </div>

      {isMyTeam && <SaveTeamComponent />}

      <Toaster />
    </>
  );
};

export default TeamBox;
