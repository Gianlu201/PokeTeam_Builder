import { Lightbulb, TrendingUp } from 'lucide-react';
import type { PokeTeam } from '../../types/myTypes';
import { useEffect, useState } from 'react';
import { analyzeTeam } from '../../utils/typeEffectiveness';
import { typeColors } from '../../utils/typeColors';

interface Props {
  pokeTeam: PokeTeam;
}

interface SimpleType {
  type: { name: string };
}

const SuggestedTeam = ({ pokeTeam }: Props) => {
  const [weaknesses, setWeaknesses] = useState<Record<string, number>>();

  const teamComposition = (team: PokeTeam) => {
    const members = [] as { types: Array<{ type: { name: string } }> }[];

    team.forEach((slot) => {
      if (slot) {
        const types = [] as SimpleType[];

        slot.pokemon_v2_pokemontypes.forEach((type) => {
          const currentType = {
            type: {
              name: type.pokemon_v2_type.name,
            },
          };
          types.push(currentType);
        });

        members.push({
          types: types,
        });
      }
    });

    const results = analyzeTeam(members);

    setWeaknesses(results.weaknesses);
  };

  useEffect(() => {
    teamComposition(pokeTeam);
  }, [pokeTeam]);

  return (
    <div className='bg-green-50/80 border border-green-200/40 rounded-xl mx-2 mb-10 p-6 shadow-lg'>
      <h3 className='flex items-center gap-2 text-xl font-bold mb-2'>
        <Lightbulb className='w-6 h-6 text-green-600' />
        Suggested Types
      </h3>

      <div>
        <div>
          <p className='text-sm mb-4'>
            These types are most effective against the analyzed opposing team:
          </p>

          <div className='grid grid-cols-3 gap-4'>
            {weaknesses &&
              Object.entries(weaknesses)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 6)
                .map(([type, effectiveness]) => (
                  <div
                    key={type}
                    className='bg-white rounded-lg shadow px-4 py-3 pb-5 my-2'
                  >
                    <div className='flex justify-between items-center mb-2'>
                      <span
                        className='text-white text-sm capitalize font-medium py-0.5 px-5 rounded-full'
                        style={{
                          backgroundColor: typeColors[type],
                        }}
                      >
                        {type}
                      </span>

                      <TrendingUp className='text-green-600' />
                    </div>

                    <p className='text-center text-xl font-bold text-green-600'>
                      {effectiveness.toFixed(1)}x
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedTeam;
