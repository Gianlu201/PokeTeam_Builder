import type { PokeTeam } from '../../../types/myTypes';

interface Props {
  mySelectedTeam: PokeTeam | undefined;
  enemySelectedTeam: PokeTeam | undefined;
}

const BattleScena = ({ mySelectedTeam, enemySelectedTeam }: Props) => {
  return (
    <>
      <div>
        {mySelectedTeam && mySelectedTeam?.length > 0 && (
          <>
            {mySelectedTeam?.map((pokemon) => (
              <div>{pokemon?.name}</div>
            ))}
          </>
        )}
      </div>

      <div>
        {enemySelectedTeam && enemySelectedTeam?.length > 0 && (
          <>
            {enemySelectedTeam?.map((pokemon) => (
              <div>{pokemon?.name}</div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default BattleScena;
