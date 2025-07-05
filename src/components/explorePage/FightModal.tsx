import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import type { PokeTeam } from '../../types/myTypes';
import FightModalMyTeam from './FightModalMyTeam';

interface Props {
  onClose: () => void;
  fightModalOpen: boolean;
  setFightModalOpen: (open: boolean) => void;
}

const FightModal = ({ fightModalOpen, setFightModalOpen }: Props) => {
  const [mySelectedTeam, setMySelectedTeam] = useState<PokeTeam>();
  const [enemySelectedTeam, setEnemySelectedTeam] = useState<PokeTeam>();
  const [selectionStep, setSelectionStep] = useState<number>(0);
  // 0 => select my pokemon team
  // 1 => select enemy's pokemon team
  // 2 => battle area

  const getCurrentScena = (stage: number) => {
    switch (stage) {
      case 0:
        return (
          <FightModalMyTeam
            fightModalOpen={fightModalOpen}
            mySelectedTeam={mySelectedTeam}
            setMySelectedTeam={setMySelectedTeam}
            setSelectionStep={setSelectionStep}
          />
        );
        break;

      case 1:
        break;

      case 2:
        break;

      default:
        break;
    }
  };

  return (
    <Dialog open={fightModalOpen} onOpenChange={setFightModalOpen}>
      <DialogContent className='max-h-[80vh] sm:max-w-2xl xl:max-w-4xl bg-white border-0 shadow-2xl overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>
            Pokémon Battle Arena
          </DialogTitle>
        </DialogHeader>

        <div>{getCurrentScena(selectionStep)}</div>
      </DialogContent>
    </Dialog>
  );
};

export default FightModal;
