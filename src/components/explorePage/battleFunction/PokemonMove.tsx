import { useState } from 'react';
import type { Pokemon_v2_move } from '../../../types/APITypes';

interface Props {
  move: Pokemon_v2_move;
  setChosenMove: (move: Pokemon_v2_move) => void;
}

const PokemonMove = ({ move, setChosenMove }: Props) => {
  const [currentPP, setCurrentPP] = useState<number>(move.pp);

  return (
    <div
      className='bg-gray-300 border border-gray-600/50 rounded-md px-2 py-1 text-sm font-medium'
      onClick={() => {
        if (currentPP > 0) {
          setCurrentPP((state) => state - 1);
          setChosenMove(move);
        }
      }}
    >
      <p>{move.name}</p>
      <div className='flex justify-between items-center'>
        <span>{move.power}</span>
        <span>
          {currentPP}/{move.pp}
        </span>
      </div>
    </div>
  );
};

export default PokemonMove;
