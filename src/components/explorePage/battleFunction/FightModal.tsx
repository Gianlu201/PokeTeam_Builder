import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../ui/dialog';
import type { PokeTeam } from '../../../types/myTypes';
import FightModalMyTeam from './FightModalMyTeam';
import FightModalEnemyTeam from './FightModalEnemyTeam';
import BattleScena from './BattleScena';

interface Props {
  onClose: () => void;
  fightModalOpen: boolean;
  setFightModalOpen: (open: boolean) => void;
  startStep: number;
}

const FightModal = ({
  fightModalOpen,
  setFightModalOpen,
  startStep = 0,
}: Props) => {
  const [mySelectedTeam, setMySelectedTeam] = useState<PokeTeam>();
  const [enemySelectedTeam, setEnemySelectedTeam] = useState<PokeTeam>();
  const [selectionStep, setSelectionStep] = useState<number>(startStep);
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
        return (
          <FightModalEnemyTeam
            enemySelectedTeam={enemySelectedTeam}
            setEnemySelectedTeam={setEnemySelectedTeam}
            setSelectionStep={setSelectionStep}
          />
        );
        break;

      case 2:
        return (
          <BattleScena
            mySelectedTeam={mySelectedTeam}
            enemySelectedTeam={enemySelectedTeam}
          />
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (fightModalOpen) {
      setSelectionStep(0);
      setMySelectedTeam(undefined);
      setEnemySelectedTeam(undefined);
    }
  }, [fightModalOpen]);

  return (
    <Dialog open={fightModalOpen} onOpenChange={setFightModalOpen}>
      <DialogContent className='min-h-[500px] max-h-[80vh] sm:max-w-2xl xl:max-w-4xl bg-white border-0 shadow-2xl overflow-y-auto flex flex-col items-start'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>
            Pokémon Battle Arena
          </DialogTitle>
        </DialogHeader>

        <div className='w-full h-[100vh]'>{getCurrentScena(selectionStep)}</div>
      </DialogContent>
    </Dialog>
  );
};

export default FightModal;
