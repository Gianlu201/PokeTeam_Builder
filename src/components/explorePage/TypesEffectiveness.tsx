import { useState } from 'react';
import { typeChart } from '../../utils/typeEffectiveness';
import { Minus } from 'lucide-react';

const TypesEffectiveness = () => {
  const [selectedType, setSelectedType] = useState<string>('normal');

  const getBackgroundColor = (defenderType: string) => {};

  return (
    <div>
      <div className='flex justify-start items-center gap-3'>
        <span>Main type:</span>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {Object.entries(typeChart).map(([type]) => (
            <option value={type} className='capitalize'>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4 className='text-lg font-semibold '>
          Effectiveness of {selectedType} type moves
        </h4>

        <div className='grid grid-cols-4 justify-start items-center gap-4'>
          {Object.entries(typeChart).map(([type, value]) => (
            <div className={`bg-blue-600 text-white rounded-lg px-3 py-2`}>
              <div className='flex justify-between items-center'>
                <span className='capitalize'>{type}</span>
                <Minus />
              </div>

              <p>1x</p>
              <p>Efficacia normale</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypesEffectiveness;
