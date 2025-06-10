const PokeLoader = () => {
  return (
    <div>
      <div className='w-38 h-38 relative animate-spin-3x rounded-full overflow-hidden border-[6px] border-black mx-auto my-10'>
        <div className='absolute top-0 left-0 w-full h-1/2 bg-red-600'></div>
        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white'></div>
        <div className='absolute top-1/2 left-0 w-full h-[6px] bg-black -translate-y-1/2'></div>
        <div className='absolute top-1/2 left-1/2 w-6 h-6 bg-white border-[4px] border-black rounded-full -translate-x-1/2 -translate-y-1/2 z-10'></div>
      </div>
    </div>
  );
};

export default PokeLoader;
