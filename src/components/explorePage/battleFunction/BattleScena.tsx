import { useEffect, useState } from 'react';
import { type Pokemon_v2_move, type Pokemon } from '../../../types/APITypes';
import { teamPreparation } from '../../../utils/mainUtils';
import type { PokeTeam } from '../../../types/myTypes';
import PokeScooter from './PokeScooter';
import PokemonMovesOptions from './PokemonMovesOptions';
import FightLogs from './FightLogs';
import { ShieldX, Trophy } from 'lucide-react';

interface Props {
  mySelectedTeam: PokeTeam | undefined;
  enemySelectedTeam: PokeTeam | undefined;
}

const BattleScena = ({ mySelectedTeam, enemySelectedTeam }: Props) => {
  const [myTeam, setMyTeam] = useState<Pokemon[]>([]);
  const [myDiedPokemon, setMyDiedPokemon] = useState<number>(0);
  const [enemyTeam, setEnemyTeam] = useState<Pokemon[]>([]);
  const [enemyDiedPokemon, setEnemyDiedPokemon] = useState<number>(0);
  const [myCurrentPokemonIndex, setMyCurrentPokemonIndex] = useState<number>(0);
  const [enemyCurrentPokemonIndex, setEnemyCurrentPokemonIndex] =
    useState<number>(0);

  // se currentTurn è vero sarà il turno di scegliere la mossa, altrimenti le mosse vengono nascoste
  const [currentTurn, setCurrentTurn] = useState<boolean>(true);

  const [currentPokemonLife, setCurrentPokemonLife] = useState<number>(1);
  const [currentEnemyLife, setCurrentEnemyLife] = useState<number>(1);

  const [chosenMove, setChosenMove] = useState<Pokemon_v2_move | null>(null);

  const [battleLogs, setBattleLogs] = useState<string[]>(['Battle started!']);

  const [battleEnded, setBattleEnded] = useState<boolean>(false);

  // se battleResult è true hai vinto, altrimenti hai perso
  const [battleResult, setBattleResult] = useState<boolean>();

  const handleTeam = async (team: Pokemon[], teamOption: number) => {
    const squad = await teamPreparation(team);

    if (teamOption === 1) {
      setMyTeam(squad);
    } else if (teamOption === 2) {
      setEnemyTeam(squad);
    }
  };

  const battleTime = () => {
    setCurrentTurn(false);

    // se firstToAttack è true allora colpirà per primo il mio pokemon
    // se firstToAttack è false allora colpirà per primo il pokemon nemico
    let firstToAttack = true;

    const enemyMove = getRandomEnemyMove();

    if (enemyMove && chosenMove) {
      switch (true) {
        case enemyMove?.priority > chosenMove?.priority:
          firstToAttack = false;
          break;

        case enemyMove?.priority === chosenMove?.priority:
          // se le priorità delle mosse sono uguali si confronta la velocità dei pokemon
          if (
            myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonstats[5] <
            enemyTeam[enemyCurrentPokemonIndex].pokemon_v2_pokemonstats[5]
          ) {
            // colpisce per primo il pokemon nemico
            firstToAttack = false;
          }
          break;

        default:
          break;
      }

      if (firstToAttack) {
        // il primo ad attaccare è il mio pokemon

        const enemyLife =
          currentEnemyLife -
          (chosenMove!.power *
            myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
              .base_stat) /
            100;
        setBattleLogs((logs) =>
          logs.concat(
            `${myTeam[myCurrentPokemonIndex].name} uses ${
              chosenMove.name
            } and makes ${
              (chosenMove.power *
                myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
                  .base_stat) /
              100
            } damages!`
          )
        );

        if (enemyLife <= 0) {
          if (enemyDiedPokemon + 1 === enemyTeam.length) {
            setBattleEnded(true);
            setBattleResult(true);
          } else {
            setBattleLogs((logs) =>
              logs.concat(
                `${enemyTeam[enemyCurrentPokemonIndex].name} enemy is exhausted and can no longer fight!`
              )
            );
            setEnemyDiedPokemon((state) => state + 1);
            setEnemyCurrentPokemonIndex((state) => state + 1);
            setCurrentEnemyLife(
              enemyTeam[enemyCurrentPokemonIndex + 1].pokemon_v2_pokemonstats[0]
                .base_stat * 10
            );

            setTimeout(() => {
              setChosenMove(null);
              setCurrentTurn(true);
            }, 1000);
          }

          return;
        } else {
          setCurrentEnemyLife(enemyLife);
        }

        const myPokemonLife =
          currentPokemonLife -
          (enemyMove!.power *
            enemyTeam[enemyCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
              .base_stat) /
            100;
        setBattleLogs((logs) =>
          logs.concat(
            `${enemyTeam[enemyCurrentPokemonIndex].name} enemy uses ${
              enemyMove.name
            } and makes ${
              (enemyMove.power *
                enemyTeam[enemyCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
                  .base_stat) /
              100
            } damages!`
          )
        );

        if (myPokemonLife <= 0) {
          if (myDiedPokemon + 1 === myTeam.length) {
            setBattleEnded(true);
            setBattleResult(false);
          } else {
            setBattleLogs((logs) =>
              logs.concat(
                `${myTeam[myCurrentPokemonIndex].name} is exhausted and can no longer fight!`
              )
            );
            setMyDiedPokemon((state) => state + 1);
            setMyCurrentPokemonIndex((state) => state + 1);
            setCurrentPokemonLife(
              myTeam[myCurrentPokemonIndex + 1].pokemon_v2_pokemonstats[0]
                .base_stat * 10
            );

            setTimeout(() => {
              setChosenMove(null);
              setCurrentTurn(true);
            }, 1000);
          }

          return;
        } else {
          setCurrentPokemonLife(myPokemonLife);
        }
      } else {
        // il primo ad attaccare è il pokemon nemico
        const myPokemonLife =
          currentPokemonLife -
          (enemyMove!.power *
            enemyTeam[enemyCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
              .base_stat) /
            100;
        setBattleLogs((logs) =>
          logs.concat(
            `${enemyTeam[enemyCurrentPokemonIndex].name} enemy uses ${
              enemyMove.name
            } and makes ${
              (enemyMove.power *
                enemyTeam[enemyCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
                  .base_stat) /
              100
            } damages!`
          )
        );

        if (myPokemonLife <= 0) {
          if (myDiedPokemon + 1 === myTeam.length) {
            setBattleEnded(true);
            setBattleResult(false);
          } else {
            setBattleLogs((logs) =>
              logs.concat(
                `${myTeam[myCurrentPokemonIndex].name} is exhausted and can no longer fight!`
              )
            );
            setMyDiedPokemon((state) => state + 1);
            setMyCurrentPokemonIndex((state) => state + 1);
            setCurrentPokemonLife(
              myTeam[myCurrentPokemonIndex + 1].pokemon_v2_pokemonstats[0]
                .base_stat * 10
            );

            setTimeout(() => {
              setChosenMove(null);
              setCurrentTurn(true);
            }, 1000);
          }

          return;
        } else {
          setCurrentPokemonLife(myPokemonLife);
        }

        const enemyLife =
          currentEnemyLife -
          (chosenMove!.power *
            myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
              .base_stat) /
            100;
        setBattleLogs((logs) =>
          logs.concat(
            `${myTeam[myCurrentPokemonIndex].name} uses ${
              chosenMove.name
            } and makes ${
              (chosenMove.power *
                myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonstats[1]
                  .base_stat) /
              100
            } damages!`
          )
        );

        if (enemyLife <= 0) {
          if (enemyDiedPokemon + 1 === enemyTeam.length) {
            setBattleEnded(true);
            setBattleResult(true);
          } else {
            setBattleLogs((logs) =>
              logs.concat(
                `${enemyTeam[enemyCurrentPokemonIndex].name} enemy is exhausted and can no longer fight!`
              )
            );
            setEnemyDiedPokemon((state) => state + 1);
            setEnemyCurrentPokemonIndex((state) => state + 1);
            setCurrentEnemyLife(
              enemyTeam[enemyCurrentPokemonIndex + 1].pokemon_v2_pokemonstats[0]
                .base_stat * 10
            );

            setTimeout(() => {
              setChosenMove(null);
              setCurrentTurn(true);
            }, 1000);
          }

          return;
        } else {
          setCurrentEnemyLife(enemyLife);
        }
      }
    }

    setTimeout(() => {
      setChosenMove(null);
      setCurrentTurn(true);
    }, 1000);
  };

  const getRandomEnemyMove = () => {
    const moveIndex = Math.floor(Math.random() * 4);
    if (
      enemyTeam.length > 0 &&
      enemyCurrentPokemonIndex >= 0 &&
      enemyTeam[enemyCurrentPokemonIndex].pokemon_v2_pokemonmoves
    ) {
      return enemyTeam[enemyCurrentPokemonIndex].pokemon_v2_pokemonmoves[
        moveIndex
      ].pokemon_v2_move;
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
      setCurrentPokemonLife(team1[0].pokemon_v2_pokemonstats[0].base_stat * 10);
    }
    if (enemySelectedTeam && enemySelectedTeam.length > 0) {
      const team2 = enemySelectedTeam.map((slot) => {
        if (slot) {
          return slot;
        }
      }) as Pokemon[];
      handleTeam(team2 as Pokemon[], 2);
      setCurrentEnemyLife(team2[0].pokemon_v2_pokemonstats[0].base_stat * 10);
    }
  }, []);

  useEffect(() => {
    if (chosenMove) {
      battleTime();
    }
  }, [chosenMove]);

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
          {!battleEnded && (
            <div
              className='max-w-[600px] max-h-[310px] mx-auto px-6 py-2 bg-no-repeat bg-contain relative'
              style={{
                backgroundImage: `url('/images/battleBackground.jpg')`,
              }}
            >
              {/* enemy team */}
              <div className='grid grid-cols-12 items-start'>
                <div className='col-span-5'>
                  <PokeScooter
                    pokeName={enemyTeam[enemyCurrentPokemonIndex].name}
                    maxPokeHp={
                      enemyTeam[enemyCurrentPokemonIndex]
                        .pokemon_v2_pokemonstats[0].base_stat * 10
                    }
                    pokeHp={currentEnemyLife}
                    teamCount={enemyTeam.length}
                    pokemonDeadCounter={enemyDiedPokemon}
                  />
                </div>
                <div className='col-span-7 flex justify-center items-center'>
                  <img
                    className='w-[150px] h-[150px] relative top-14'
                    src={
                      enemyTeam[enemyCurrentPokemonIndex]
                        .pokemon_v2_pokemonsprites[0].front_sprite ?? ''
                    }
                    alt={enemyTeam[enemyCurrentPokemonIndex].name}
                  />
                </div>
              </div>

              {/* my team */}
              <div className='grid grid-cols-12 items-start'>
                <div className='col-span-7 flex justify-center items-center'>
                  <img
                    className='w-[150px] h-[150px] relative bottom-6'
                    src={
                      myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonsprites[0]
                        .back_sprite ?? ''
                    }
                    alt={myTeam[myCurrentPokemonIndex].name}
                  />
                </div>
                <div className='col-span-5'>
                  <PokeScooter
                    pokeName={myTeam[myCurrentPokemonIndex].name}
                    maxPokeHp={
                      myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonstats[0]
                        .base_stat * 10
                    }
                    pokeHp={currentPokemonLife}
                    teamCount={myTeam.length}
                    pokemonDeadCounter={myDiedPokemon}
                  />
                </div>
              </div>

              <div className='absolute left-0 bottom-2 w-full px-2'>
                {myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonmoves && (
                  <PokemonMovesOptions
                    moves={
                      myTeam[myCurrentPokemonIndex].pokemon_v2_pokemonmoves
                    }
                    setChosenMove={setChosenMove}
                    currentTurn={currentTurn}
                  />
                )}
                <p className='bg-gray-100 rounded-md px-1 text-sm font-medium'>
                  {currentTurn ? 'Choose your move..' : 'Fighting..'}
                </p>
              </div>
            </div>
          )}

          {battleEnded && (
            <>
              {battleResult ? (
                <div className='mb-4'>
                  <Trophy className='w-16 h-16 text-amber-400 mx-auto mb-1' />
                  <h3 className='text-3xl font-bold text-center'>
                    Congratulations, you've won!
                  </h3>
                </div>
              ) : (
                <div className='mb-4'>
                  <ShieldX className='w-16 h-16 text-red-600 mx-auto mb-1' />
                  <h3>You lost, maybe next time</h3>
                </div>
              )}
            </>
          )}

          <FightLogs logs={battleLogs} />
        </div>
      )}
    </>
  );
};

export default BattleScena;
