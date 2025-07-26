import { useEffect, useState } from 'react';
import PokeBall from '../../PokeBall';

interface Props {
  pokeName: string;
  pokeHp: number;
  maxPokeHp: number;
  teamCount: number;
  pokemonDeadCounter: number;
}

const positions = [1, 2, 3, 4, 5, 6];

const PokeScooter = ({
  pokeName,
  maxPokeHp,
  pokeHp,
  teamCount,
  pokemonDeadCounter,
}: Props) => {
  const [currentPokeHp, setCurrentPokeHp] = useState<number>();

  const getLifeBarPercentual = () => {
    if (currentPokeHp) {
      return (currentPokeHp * 100) / maxPokeHp;
    }
  };

  useEffect(() => {
    setCurrentPokeHp(pokeHp);
  }, [pokeHp]);

  return (
    <>
      <div className='grid grid-cols-4 gap-2 bg-gray-300 mt-10 px-3 py-1'>
        <div className='col-span-3 flex flex-col gap-2'>
          <h4 className='font-bold capitalize'>{pokeName}</h4>
          <div className='flex justify-start items-center gap-2'>
            <div className='w-full h-[8px] bg-gray-500 border border-gray-800/60 rounded-full mb-2'>
              <div
                className='h-full bg-green-500'
                style={{ width: `${getLifeBarPercentual()}%` }}
              ></div>
            </div>
            <p className='text-xs font-semibold'>
              {pokeHp.toFixed(0)}/{maxPokeHp}
            </p>
          </div>
        </div>
        <div className='col-span-1'>
          <span className='font-bold text-xs'>Lv. 50</span>
        </div>
      </div>

      <div className='flex gap-2 justify-start items-center mt-1'>
        {positions.map((i) => {
          if (pokemonDeadCounter >= i) {
            return <PokeBall alive={false} />;
          } else if (teamCount >= i) {
            return <PokeBall alive={true} />;
          } else {
            return (
              <div className='w-5 h-5 rounded-full border border-gray-800/70 bg-gray-500/70'></div>
            );
          }
        })}
      </div>
    </>
  );
};

export default PokeScooter;
