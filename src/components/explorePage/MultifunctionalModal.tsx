import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './../ui/dialog';
import PokeQuiz from './PokeQuiz';
import TypesEffectiveness from './TypesEffectiveness';

interface Props {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MultifunctionalModal = ({ title, open, setOpen }: Props) => {
  const getMainContent = () => {
    switch (title) {
      case 'Poké Quiz':
        return <PokeQuiz />;

      case 'Types Effectiveness':
        return <TypesEffectiveness />;

      default:
        return <div></div>;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className='max-h-[80vh] sm:max-w-2xl xl:max-w-4xl bg-white border-0 shadow-2xl overflow-y-auto'
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>{title}</DialogTitle>
        </DialogHeader>

        {getMainContent()}
      </DialogContent>
    </Dialog>
  );
};

export default MultifunctionalModal;
