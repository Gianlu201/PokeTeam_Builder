import { useEffect, useState } from 'react';

interface Props {
  logs: string[];
}

const FightLogs = ({ logs }: Props) => {
  const [reverseLogs, setReverseLogs] = useState<string[]>();

  useEffect(() => {
    setReverseLogs([...logs].reverse());
  }, [logs]);

  return (
    <div className='max-w-[600px] mx-auto mt-2'>
      <h3 className='font-bold mb-1'>FightLogs</h3>
      <div>
        {reverseLogs &&
          reverseLogs.map((log, i) => (
            <p key={i} className='text-sm mb-1'>
              {log}
            </p>
          ))}
      </div>
    </div>
  );
};

export default FightLogs;
