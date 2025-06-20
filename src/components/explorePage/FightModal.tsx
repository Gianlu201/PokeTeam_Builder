import { getSelectedPokemonsMoves } from '../../utils/query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

interface Props {
  onClose: () => void;
  fightModalOpen: boolean;
  setFightModalOpen: (open: boolean) => void;
}

const FightModal = ({ fightModalOpen, setFightModalOpen }: Props) => {
  const getMoves = async () => {
    try {
      const query = getSelectedPokemonsMoves([3, 6, 9]);

      const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();
        console.info(data);
      } else {
        throw new Error('Error in fetching datas');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={fightModalOpen} onOpenChange={setFightModalOpen}>
      <DialogContent className='max-h-[80vh] sm:max-w-2xl xl:max-w-4xl bg-white border-0 shadow-2xl overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>
            Pokémon Battle Arena
          </DialogTitle>
        </DialogHeader>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            aut aperiam earum quae quos fugit eveniet deserunt et nostrum,
            incidunt doloremque, dolorem consequuntur facilis voluptatem nobis
            dolor aliquid veritatis sequi.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FightModal;
