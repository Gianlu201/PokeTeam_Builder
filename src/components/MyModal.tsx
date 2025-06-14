import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

import type { Pokemon } from '../types/pokemon';
import { showPokedexNumber } from '../utils/mainUtils';
import { typeColors } from '../utils/typeColors';
import { Ruler, Star, Weight, Zap } from 'lucide-react';
import { stats } from '../utils/stats';

interface Props {
  selectedPokemon: Pokemon;
  onClose: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MyModal = ({ selectedPokemon, open, setOpen }: Props) => {
  const infos = [
    {
      icon: <Ruler className='text-gray-600' />,
      title: 'Height',
      value: `${selectedPokemon?.height} m`,
    },
    {
      icon: <Weight className='text-gray-600' />,
      title: 'Weight',
      value: `${selectedPokemon?.weight} kg`,
    },
    {
      icon: <Star className='text-gray-600' />,
      title: 'Experience',
      value: `${selectedPokemon?.id}`,
    },
    {
      icon: <Zap className='text-gray-600' />,
      title: 'Abilities',
      value: `${selectedPokemon?.pokemon_v2_pokemonabilities.length}`,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {selectedPokemon != null && (
        <DialogContent className='max-h-[80vh] sm:max-w-md xl:max-w-4xl bg-white border-0 shadow-2xl overflow-y-auto'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold'>
              <span className='capitalize'>{selectedPokemon?.name}</span>{' '}
              <span className='inline-block text-xs ms-1 py-0.5 px-2 border border-gray-600/30 rounded-full'>
                {showPokedexNumber(selectedPokemon.id)}
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className='mt-4 text-center text-xl flex justify-center'>
            <img
              src={
                selectedPokemon.pokemon_v2_pokemonsprites?.[0]?.sprites
                  ?.front_default ?? ''
              }
              alt={selectedPokemon.name}
              className='w-1/3 bg-gray-400/20 rounded-full p-1'
            />
          </div>

          <div className='flex justify-center items-center gap-2'>
            {selectedPokemon.pokemon_v2_pokemontypes.map((type) => (
              <span
                key={type.pokemon_v2_type.id}
                className='text-white text-sm capitalize font-medium py-0.5 px-5 rounded-full'
                style={{
                  backgroundColor: typeColors[type.pokemon_v2_type.name],
                }}
              >
                {type.pokemon_v2_type.name}
              </span>
            ))}
          </div>

          <div className='grid grid-cols-4 gap-4'>
            {infos.map((info) => (
              <div
                key={info.title}
                className='bg-gray-300/20 rounded-xl flex flex-col justify-center items-center gap-0.5 py-4'
              >
                <span>{info.icon}</span>
                <span className='text-sm'>{info.title}</span>
                <span className='font-bold'>{info.value}</span>
              </div>
            ))}
          </div>

          <div className='bg-gray-300/20 rounded-xl p-4'>
            <h2>Evolution chain</h2>
          </div>

          <div className='bg-gray-300/20 rounded-xl p-4'>
            <h2>Basic stats</h2>
            <div className='flex justify-center items-center gap-4'>
              {selectedPokemon?.pokemon_v2_pokemonstats.map((stat) => (
                <div
                  key={stat.pokemon_v2_stat.id}
                  className='flex flex-col items-center bg-white border-1 border-gray-400/20 shadow-xl rounded-full p-1.5 py-2'
                >
                  <span
                    className='text-white text-xs rounded-full p-1.5 w-8 aspect-square flex justify-center items-center font-bold'
                    style={{
                      backgroundColor: stats[stat.pokemon_v2_stat.name].color,
                    }}
                  >
                    {stats[stat.pokemon_v2_stat.name].nameShort}
                  </span>
                  <span className='font-bold'>{stat.base_stat}</span>
                </div>
              ))}

              <div className='flex flex-col items-center bg-[#9598D1]/70 shadow-xl rounded-full p-1.5 py-2'>
                <span
                  className='text-white text-xs rounded-full p-1.5 w-8 aspect-square flex justify-center items-center font-bold'
                  style={{
                    backgroundColor: stats['total'].color,
                  }}
                >
                  {stats['total'].nameShort}
                </span>
                <span className='font-bold'>
                  {
                    selectedPokemon?.pokemon_v2_pokemonstats[
                      selectedPokemon?.pokemon_v2_pokemonstats.length - 1
                    ].base_stat
                  }
                </span>
              </div>
            </div>
          </div>

          <div className='bg-gray-300/20 rounded-xl p-4'>
            <h2>
              {selectedPokemon?.pokemon_v2_pokemonabilities.length === 1
                ? 'Ability'
                : 'Abilities'}
            </h2>

            <div className='flex justify-start items-center gap-2'>
              {selectedPokemon?.pokemon_v2_pokemonabilities.map((ability) => (
                <span
                  key={ability.id}
                  className='inline-block text-sm py-0.5 px-3 border border-gray-600/30 rounded-full shadow-md bg-white capitalize'
                >
                  {ability.pokemon_v2_ability.name}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default MyModal;
