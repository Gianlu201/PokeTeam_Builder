import { Shield, TrendingDown, TrendingUp } from 'lucide-react';

const TeamAnalysis = () => {
  return (
    <div className='bg-indigo-50/80 border border-gray-300/40 rounded-xl mx-2 my-4 p-6 shadow-lg'>
      <h3 className='flex items-center gap-2 text-xl font-bold mb-2'>
        <Shield className='w-6 h-6 text-purple-600' />
        Team's Analysis
      </h3>

      <div className='grid grid-cols-2'>
        <div>
          <h4 className='flex items-center gap-2 font-medium'>
            <TrendingDown className='w-5 h-5 text-red-600' />
            Vulnerability
          </h4>
        </div>

        <div>
          <h4 className='flex items-center gap-2 font-medium'>
            <TrendingUp className='w-5 h-5 text-green-600' />
            Resistance
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TeamAnalysis;
