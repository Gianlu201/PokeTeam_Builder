import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './ui/dialog';

import { Button } from './ui/button';
import { useState } from 'react';

const MyModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Pokéball Aperta</DialogTitle>
          <DialogDescription>
            Hai trovato un Pokémon! Vuoi catturarlo?
          </DialogDescription>
        </DialogHeader>

        <div className='mt-4 text-center text-xl'>
          ✨ Pikachu selvatico appare! ⚡
        </div>

        <DialogFooter className='mt-4'>
          <DialogClose asChild>
            <Button variant='outline' onClick={() => setOpen(false)}>
              Chiudi
            </Button>
          </DialogClose>
          <Button className='bg-yellow-400 text-black hover:bg-yellow-500'>
            Lancia Pokéball
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MyModal;
