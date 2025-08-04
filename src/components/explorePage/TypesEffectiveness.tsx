import { useState } from 'react';
import { typeChart } from '../../utils/typeEffectiveness';
import { Minus } from 'lucide-react';
import type { TypeEffectiveness } from '../../types/myTypes';

const TypesEffectiveness = () => {
  const [selectedType, setSelectedType] = useState<string>('normal');

  const caption = [
    {
      description: 'Super effective',
      effectiveness: '2',
      background: 'bg-green-500',
    },
    {
      description: 'Normal effectiveness',
      effectiveness: '1',
      background: 'bg-blue-500',
    },
    {
      description: 'Not very effective',
      effectiveness: '½',
      background: 'bg-red-500',
    },
    {
      description: 'No effect',
      effectiveness: '0',
      background: 'bg-gray-500',
    },
  ];

  const getBackgroundColor = (defenderType: TypeEffectiveness) => {
    switch (true) {
      case defenderType.weak.includes(selectedType):
        return 'bg-green-500';
      case defenderType.strong.includes(selectedType):
        return 'bg-red-500';
      case defenderType.immune.includes(selectedType):
        return 'bg-gray-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getTypeEffectiveness = (defenderType: TypeEffectiveness) => {
    let effectiveness = '1';

    switch (true) {
      case defenderType.weak.includes(selectedType):
        effectiveness = '2';
        break;
      case defenderType.strong.includes(selectedType):
        effectiveness = '½';
        break;
      case defenderType.immune.includes(selectedType):
        effectiveness = '0';
        break;
    }

    return effectiveness;
  };

  const getEffectivenessDescription = (defenderType: TypeEffectiveness) => {
    switch (getTypeEffectiveness(defenderType)) {
      case '1':
        return 'Normal effectiveness';
      case '2':
        return 'Super effective';
      case '½':
        return 'Not very effective';
      case '0':
        return 'No effect';
    }
  };

  return (
    <div>
      <div className='flex justify-start items-center gap-3 mb-3'>
        <span>Main type:</span>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {typeChart.map((type) => (
            <option key={type.type} value={type.type}>
              {type.type}
            </option>
          ))}
        </select>
      </div>

      <div className='border border-gray-400/40 shadow rounded-lg px-4 py-3 mb-6'>
        <h3 className='text-lg font-semibold mb-2'>
          Effectiveness of {selectedType} type moves
        </h3>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-center gap-4'>
          {typeChart.map((type) => (
            <div
              key={type.type}
              className={`text-white rounded-lg px-3 py-2 ${getBackgroundColor(
                type
              )}`}
            >
              <div className='flex justify-between items-center mb-1'>
                <span className='capitalize font-bold'>{type.type}</span>
                <Minus />
              </div>

              <div className='flex justify-start items-center gap-0.5 mb-1'>
                <span className='font-bold'>{getTypeEffectiveness(type)}</span>
                <span className='text-xs font-bold'>x</span>
              </div>

              <p className='text-sm mb-0.5'>
                {getEffectivenessDescription(type)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='border border-gray-400/40 shadow rounded-lg px-4 py-3'>
        <h4 className='font-semibold mb-2'>Caption:</h4>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-center gap-6'>
          {caption.map((option) => (
            <div
              key={option.description}
              className='flex justify-start items-center gap-1.5'
            >
              <div
                className={`w-3.5 h-3.5 rounded-sm mt-0.5 ${option.background}`}
              ></div>
              <span>{option.effectiveness}</span>
              <span className='text-xs'>x</span>
              <span>{option.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypesEffectiveness;
