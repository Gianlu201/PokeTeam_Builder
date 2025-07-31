import { X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './button';

interface Props {
  t: string | number;
  actionMode: string;
  action: () => void;
}

const ActionToast = ({ t, actionMode, action }: Props) => {
  const getActionTitle = () => {
    switch (actionMode) {
      case 'overwriteTeam':
        return 'Name already in use';

      default:
        return '';
    }
  };

  const getActionText = () => {
    switch (actionMode) {
      case 'overwriteTeam':
        return 'There is already a team with this name. If you continue, you will overwrite it. Do you want to continue?';

      default:
        return '';
    }
  };

  return (
    <div className='min-w-[300px] bg-white border border-gray-400/60 shadow-md rounded-lg mb-2 p-3 pb-4'>
      <div className='flex justify-between items-center mb-1'>
        <h3 className='font-semibold'>{getActionTitle()}</h3>
        <button className='cursor-pointer' onClick={() => toast.dismiss(t)}>
          <X className='w-4 h-4' />
        </button>
      </div>

      <div className='grid grid-cols-4 gap-3'>
        <p className='col-span-3 text-sm'>{getActionText()}</p>
        <Button
          variant={'sysOpt'}
          className='self-end'
          onClick={() => {
            action();
            toast.dismiss(t);
          }}
        >
          Do
        </Button>
      </div>
    </div>
  );
};

export default ActionToast;
