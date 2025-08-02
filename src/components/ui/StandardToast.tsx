import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface Props {
  t: string | number;
  actionMessage: string;
  elementName?: string;
}

const StandardToast = ({ t, actionMessage, elementName }: Props) => {
  const [title, setTitle] = useState<string>('');

  const getToastBody = () => {
    switch (actionMessage) {
      case 'pokemonAdded':
        return (
          <p className='col-span-3 text-sm'>
            <span className='capitalize'>{elementName}</span> has been added to
            the team
          </p>
        );

      case 'pokemonRemoved':
        return (
          <p className='col-span-3 text-sm'>
            <span className='capitalize'>{elementName}</span> has been removed
            from the team
          </p>
        );

      case 'teamUploaded':
        return (
          <p className='col-span-3 text-sm'>
            Team <span className='font-bold'>{elementName}</span> uploaded
            successfully!
          </p>
        );

      case 'teamSaved':
        return (
          <p className='col-span-3 text-sm'>
            New team <span className='font-bold'>{elementName}</span> saved
            successfully!
          </p>
        );

      case 'teamOverwritten':
        return (
          <p className='col-span-3 text-sm'>
            Team <span className='font-bold'>{elementName}</span> has been
            overwritten successfully!
          </p>
        );

      case 'teamRemoved':
        return (
          <p className='col-span-3 text-sm'>
            Team <span className='font-bold'>{elementName}</span> has been
            removed successfully!
          </p>
        );

      default:
        break;
    }
  };

  useEffect(() => {
    switch (actionMessage) {
      case 'pokemonAdded':
        setTitle('Pokémon added to the team!');
        break;

      case 'pokemonRemoved':
        setTitle('Pokémon removed from the team!');
        break;

      case 'teamUploaded':
        setTitle('Team uploaded!');
        break;

      case 'teamSaved':
        setTitle('Team saved!');
        break;

      case 'teamOverwritten':
        setTitle('Team overwritten!');
        break;

      case 'teamRemoved':
        setTitle('Team removed!');
        break;

      default:
        break;
    }
  }, []);

  return (
    <>
      {title && (
        <div className='min-w-[300px] bg-white border border-gray-400/60 shadow-md rounded-lg mb-2 p-3 pb-4'>
          <div className='flex justify-between items-center mb-1'>
            <h3 className='font-semibold'>{title}</h3>
            <button className='cursor-pointer' onClick={() => toast.dismiss(t)}>
              <X className='w-4 h-4' />
            </button>
          </div>

          {getToastBody()}
        </div>
      )}
    </>
  );
};

export default StandardToast;
