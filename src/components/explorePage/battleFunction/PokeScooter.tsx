import PokeBall from '../../PokeBall';

interface Props {
  pokeName: string;
}

const PokeScooter = ({ pokeName }: Props) => {
  return (
    <>
      <div className='grid grid-cols-4 gap-2 bg-gray-300 mt-10 px-3 py-1'>
        <div className='col-span-3 flex flex-col gap-2'>
          <h4 className='font-bold capitalize'>{pokeName}</h4>
          <div className='w-full h-[8px] bg-green-500 border border-gray-800/60 rounded-full mb-2'></div>
        </div>
        <div className='col-span-1'>
          <span className='font-bold text-xs'>Lv. 50</span>
        </div>
      </div>

      <div className='flex gap-2 justify-start items-center mt-1'>
        <PokeBall alive={true} />
        <PokeBall alive={false} />
        <div className='w-5 h-5 rounded-full border border-gray-800/70 bg-gray-500/70'></div>
        <div className='w-5 h-5 rounded-full border border-gray-800/70 bg-gray-500/70'></div>
        <div className='w-5 h-5 rounded-full border border-gray-800/70 bg-gray-500/70'></div>
        <div className='w-5 h-5 rounded-full border border-gray-800/70 bg-gray-500/70'></div>
      </div>
    </>
  );
};

export default PokeScooter;
