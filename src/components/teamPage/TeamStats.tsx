import { ChartSpline, Star } from 'lucide-react';
import type { PokeTeam } from '../../types/myTypes';
import { getTeamComponentsCount } from '../../utils/mainUtils';
import { useEffect, useState } from 'react';
import { typeColors } from '../../utils/typeColors';

interface Props {
  pokeTeam: PokeTeam;
}

const TeamStats = ({ pokeTeam }: Props) => {
  const [teamTypes, setTeamTypes] = useState<string[]>([]);

  const stats = [
    'Hp',
    'Attack',
    'Defense',
    'Special-Attack',
    'Special-Defense',
    'Speed',
  ];

  const updateTeamTypes = (team: PokeTeam) => {
    const tempArr: string[] = [];

    team.forEach((slot) => {
      if (slot) {
        slot.pokemon_v2_pokemontypes.forEach((type) => {
          if (!tempArr.includes(type.pokemon_v2_type.name)) {
            tempArr.push(type.pokemon_v2_type.name);
          }
        });
      }
    });
    tempArr.sort();

    setTeamTypes(tempArr);
  };

  const getStatAverage = (index: number) => {
    const pokeCount = getTeamComponentsCount(pokeTeam);
    let statTotal = 0;

    pokeTeam.forEach((slot) => {
      if (slot) {
        statTotal += slot.pokemon_v2_pokemonstats[index].base_stat;
      }
    });

    return Math.floor(statTotal / pokeCount);
  };

  const getTotalPower = () => {
    let total = 0;

    pokeTeam.forEach((slot) => {
      if (slot) {
        slot.pokemon_v2_pokemonstats.forEach(
          (stat) => (total += stat.base_stat)
        );
      }
    });

    return total;
  };

  useEffect(() => {
    updateTeamTypes(pokeTeam);
  }, [pokeTeam]);

  return (
    <div className='bg-white rounded-xl p-4 my-4 mb-6'>
      <h3 className='flex items-center gap-2 font-medium mb-2'>
        <ChartSpline className='w-4 h-4' />
        Team Stats
      </h3>

      <div className='flex justify-around items-center mb-3'>
        {stats.map((stat, i) => (
          <div key={i} className='text-center'>
            <p className='font-normal'>{stat}</p>
            <p className='text-lg font-bold text-primary'>
              {getStatAverage(i)}
            </p>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className='columns-1 text-center'>
          <p className='flex justify-center items-center gap-1.5'>
            <Star className='w-4 h-4 text-amber-500' />
            Total Power
          </p>
          <p className='flex justify-center text-green-500 text-lg font-bold'>
            {getTotalPower()}
          </p>
        </div>

        <div className='columns-2 flex flex-col justify-center items-start gap-2'>
          <p>Types distribution:</p>
          <div className='flex justify-start items-center gap-2'>
            {teamTypes.map((element, i) => (
              <span
                key={i}
                className='text-white text-xs capitalize font-medium py-0.5 px-5 rounded-full'
                style={{
                  backgroundColor: typeColors[element],
                }}
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
