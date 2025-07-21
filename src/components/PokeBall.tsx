interface Props {
  alive: boolean;
}

const PokeBall = ({ alive = true }: Props) => {
  return (
    <div className='flex items-center justify-center w-5'>
      <div className='relative w-full aspect-square rounded-full overflow-hidden border-[2px] border-black shadow-xl'>
        <div
          className={`absolute top-0 left-0 w-full h-1/2 ${
            alive ? 'bg-red-600' : 'bg-gray-600'
          }`}
        ></div>

        <div
          className={`absolute bottom-0 left-0 w-full h-1/2 ${
            alive ? 'bg-white' : 'bg-gray-200'
          }`}
        ></div>

        <div className='absolute top-1/2 left-0 w-full h-[2px] bg-black -translate-y-1/2'></div>

        <div
          className={`absolute top-1/2 left-1/2 w-2.5 h-2.5 border-[3px] border-black rounded-full -translate-x-1/2 -translate-y-1/2 shadow-md ${
            alive ? 'bg-white' : 'bg-gray-200'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default PokeBall;
