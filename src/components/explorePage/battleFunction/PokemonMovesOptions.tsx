import type {
  Pokemon_v2_move,
  PokemonMoveEntry,
} from '../../../types/APITypes';
import PokemonMove from './PokemonMove';

interface Props {
  moves: PokemonMoveEntry[];
  setChosenMove: (move: Pokemon_v2_move) => void;
}

const PokemonMovesOptions = ({ moves, setChosenMove }: Props) => {
  return (
    <div className='w-1/2 p-1 bg-gray-200/60 rounded'>
      <div className='grid grid-cols-2 gap-1 mb-1'>
        <PokemonMove
          move={moves[0].pokemon_v2_move}
          setChosenMove={setChosenMove}
        />
        <PokemonMove
          move={moves[1].pokemon_v2_move}
          setChosenMove={setChosenMove}
        />
      </div>
      <div className='grid grid-cols-2 gap-1'>
        <PokemonMove
          move={moves[2].pokemon_v2_move}
          setChosenMove={setChosenMove}
        />
        <PokemonMove
          move={moves[3].pokemon_v2_move}
          setChosenMove={setChosenMove}
        />
      </div>
    </div>
  );
};

export default PokemonMovesOptions;
