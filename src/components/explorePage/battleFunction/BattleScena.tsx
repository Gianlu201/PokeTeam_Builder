import { useEffect, useState } from 'react';
import type { Pokemon } from '../../../types/APITypes';
import { teamPreparation } from '../../../utils/mainUtils';
import type { PokeTeam } from '../../../types/myTypes';
import PokeScooter from './PokeScooter';

interface Props {
  mySelectedTeam: PokeTeam | undefined;
  enemySelectedTeam: PokeTeam | undefined;
}

const BattleScena = ({ mySelectedTeam, enemySelectedTeam }: Props) => {
  const [myTeam, setMyTeam] = useState<Pokemon[]>([]);
  const [enemyTeam, setEnemyTeam] = useState<Pokemon[]>([]);

  const handleTeam = async (team: Pokemon[], teamOption: number) => {
    const squad = await teamPreparation(team);
    console.log('CI ENTRO');
    if (teamOption === 1) {
      console.log('MY TEAM');
      console.info(squad);
      setMyTeam(squad);
    } else if (teamOption === 2) {
      console.log('ENEMY TEAM');
      console.info(squad);
      setEnemyTeam(squad);
    }
  };

  useEffect(() => {
    if (mySelectedTeam && mySelectedTeam.length > 0) {
      const team1 = mySelectedTeam.map((slot) => {
        if (slot) {
          return slot;
        }
      }) as Pokemon[];
      handleTeam(team1 as Pokemon[], 1);
    }
    if (enemySelectedTeam && enemySelectedTeam.length > 0) {
      const team2 = enemySelectedTeam.map((slot) => {
        if (slot) {
          return slot;
        }
      }) as Pokemon[];
      handleTeam(team2 as Pokemon[], 2);
    }
  }, []);

  useEffect(() => {
    if (myTeam.length > 0 && enemyTeam.length > 0) {
      console.info(myTeam);
      console.info(enemyTeam);
    }
  }, [myTeam, enemyTeam]);

  return (
    <>
      {myTeam.length > 0 && enemyTeam.length > 0 && (
        <div>
          <div
            className='max-w-[600px] max-h-[310px] mx-auto px-6 py-2 bg-no-repeat bg-contain'
            style={{
              backgroundImage: `url('public/images/battleBackground.jpg')`,
            }}
          >
            {/* enemy team */}
            <div className='grid grid-cols-12 items-start'>
              <div className='col-span-5'>
                <PokeScooter pokeName={enemyTeam[0].name} />
              </div>
              <div className='col-span-7 flex justify-center items-center'>
                <img
                  className='w-[150px] h-[150px] relative top-14'
                  src={
                    enemyTeam[0].pokemon_v2_pokemonsprites[0].front_sprite ?? ''
                  }
                  alt={enemyTeam[0].name}
                />
              </div>
            </div>

            {/* my team */}
            <div className='grid grid-cols-12 items-start'>
              <div className='col-span-7 flex justify-center items-center'>
                <img
                  className='w-[150px] h-[150px] relative bottom-6'
                  src={myTeam[0].pokemon_v2_pokemonsprites[0].back_sprite ?? ''}
                  alt={myTeam[0].name}
                />
              </div>
              <div className='col-span-5'>
                <PokeScooter pokeName={myTeam[0].name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BattleScena;
