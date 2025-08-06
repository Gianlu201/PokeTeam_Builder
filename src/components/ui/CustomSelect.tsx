import { useState, useRef, useEffect } from 'react';

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  className,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(
    options.findIndex((opt) => opt === value)
  );
  const selectRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // controllo eventuali click al di fuori dell'area della "select"
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // funzione per scroll continuo
  const startScroll = (direction: 'up' | 'down') => {
    stopScroll();
    scrollInterval.current = setInterval(() => {
      if (!listRef.current) return;
      listRef.current.scrollBy({
        top: direction === 'up' ? -20 : 20,
        behavior: 'smooth',
      });
    }, 100);
  };

  const stopScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  return (
    <div ref={selectRef} className={`relative w-44 ${className}`}>
      {/* Bottone */}
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex justify-between items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none'
      >
        {value}
        <svg
          className={`ml-2 h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <div className='absolute mt-1 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10'>
          {/* Fascia superiore */}
          <div
            className='flex justify-center items-center h-6 cursor-pointer bg-gradient-to-b from-gray-100 to-transparent'
            onMouseEnter={() => startScroll('up')}
            onMouseLeave={stopScroll}
            onMouseDown={() => startScroll('up')}
            onMouseUp={stopScroll}
          >
            <svg
              className='h-3 w-3 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 15l7-7 7 7'
              />
            </svg>
          </div>

          {/* Lista scrollabile */}
          <div ref={listRef} className='max-h-48 overflow-y-auto'>
            {options.map((option, index) => (
              <div
                key={option}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`cursor-pointer px-3 py-2 text-sm ${
                  index === highlightedIndex
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Fascia inferiore */}
          <div
            className='flex justify-center items-center h-6 cursor-pointer bg-gradient-to-t from-gray-100 to-transparent'
            onMouseEnter={() => startScroll('down')}
            onMouseLeave={stopScroll}
            onMouseDown={() => startScroll('down')}
            onMouseUp={stopScroll}
          >
            <svg
              className='h-3 w-3 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
