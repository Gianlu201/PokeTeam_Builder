import { useEffect, useState } from 'react';
import type { Pokemon } from '../../../types/APITypes';
import { teamPreparation } from '../../../utils/mainUtils';
import type { PokeTeam } from '../../../types/myTypes';

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
      <div>
        {myTeam.length > 0 && (
          <>
            {myTeam.map((pokemon) => (
              <>
                <div>
                  {pokemon.name} {pokemon.pokemon_v2_pokemonmoves?.length}
                </div>
                <ul>
                  {pokemon.pokemon_v2_pokemonmoves &&
                    pokemon.pokemon_v2_pokemonmoves.map((move) => (
                      <li className='text-red-700'>
                        {move.pokemon_v2_move.name}
                      </li>
                    ))}
                </ul>
              </>
            ))}
          </>
        )}
      </div>

      <div>
        {enemyTeam.length > 0 && (
          <>
            {enemyTeam.map((pokemon) => (
              <>
                <div>{pokemon.name}</div>
                <ul>
                  {pokemon.pokemon_v2_pokemonmoves?.map((move) => (
                    <li>
                      {move.pokemon_v2_move.name} - {move.pokemon_v2_move.power}
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default BattleScena;
