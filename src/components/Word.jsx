import { XCircleIcon } from '@heroicons/react/24/outline';
export const Word = ({ en, ko }) => {
  return (
    <div className='mx-2 flex-col text-center'>
      <h1 className='text-xl font-bold text-sky-500'>{en}</h1>
      <div className='flex items-center justify-center'>
        <h1 className='mr-2 text-lg font-bold text-sky-700'>{ko}</h1>
        <button className='w-6 text-rose-500'>
          <XCircleIcon />
        </button>
      </div>
    </div>
  );
};
