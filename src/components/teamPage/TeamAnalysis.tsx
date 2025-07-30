import {
  Shield,
  ShieldPlus,
  ShieldX,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import type { PokeTeam } from '../../types/myTypes';
import { useEffect, useState } from 'react';
import { analyzeTeam } from '../../utils/typeEffectiveness';
import { typeColors } from '../../utils/typeColors';

interface Props {
  pokeTeam: PokeTeam;
}

const TeamAnalysis = ({ pokeTeam }: Props) => {
  const [weaknesses, setWeaknesses] = useState<Record<string, number>>();
  const [resistances, setResistances] = useState<Record<string, number>>();

  const teamComposition = (team: PokeTeam) => {
    const members = [] as string[][];

    team.forEach((slot) => {
      if (slot) {
        const types = [] as string[];

        slot.pokemon_v2_pokemontypes.forEach((type) => {
          const currentType = type.pokemon_v2_type.name;
          types.push(currentType);
        });

        members.push(types);
      }
    });

    const results = analyzeTeam(members);

    setWeaknesses(results.weaknesses);
    setResistances(results.resistances);
  };

  useEffect(() => {
    teamComposition(pokeTeam);
  }, [pokeTeam]);

  return (
    <div className='bg-indigo-50/80 border border-gray-300/40 rounded-xl mx-2 my-4 p-6 shadow-lg'>
      <h3 className='flex items-center gap-2 text-xl font-bold mb-2'>
        <Shield className='w-6 h-6 text-purple-600' />
        Team's Analysis
      </h3>

      <div className='grid grid-cols-2 gap-10'>
        <div>
          <h4 className='flex items-center gap-2 font-medium'>
            <TrendingDown className='w-5 h-5 text-red-600' />
            Vulnerability
          </h4>

          <div>
            {weaknesses &&
              Object.entries(weaknesses)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([type, effectiveness]) => (
                  <div
                    key={type}
                    className='flex justify-between items-center my-2'
                  >
                    <span
                      className='text-white text-sm capitalize font-medium py-0.5 px-5 rounded-full'
                      style={{
                        backgroundColor: typeColors[type],
                      }}
                    >
                      {type}
                    </span>

                    <span className='flex justify-center items-center gap-1 text-red-500'>
                      {effectiveness.toFixed(1)} <ShieldX className='w-5 h-5' />
                    </span>
                  </div>
                ))}
          </div>
        </div>

        <div>
          <h4 className='flex items-center gap-2 font-medium'>
            <TrendingUp className='w-5 h-5 text-green-600' />
            Resistance
          </h4>

          <div>
            {resistances &&
              Object.entries(resistances)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([type, effectiveness]) => (
                  <div
                    key={type}
                    className='flex justify-between items-center my-2'
                  >
                    <span
                      className='text-white text-sm capitalize font-medium py-0.5 px-5 rounded-full'
                      style={{
                        backgroundColor: typeColors[type],
                      }}
                    >
                      {type}
                    </span>

                    <span className='flex justify-center items-center gap-1 text-green-600'>
                      {effectiveness.toFixed(1)}{' '}
                      <ShieldPlus className='w-5 h-5' />
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAnalysis;
