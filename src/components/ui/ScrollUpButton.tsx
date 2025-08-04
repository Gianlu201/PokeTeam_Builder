import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='bg-black fixed bottom-6 right-3 cursor-pointer p-2 rounded-xl'
      hidden={!showButton}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <ArrowUp className='w-5 h-5 text-white stroke-3' />
    </div>
  );
};

export default ScrollUpButton;
