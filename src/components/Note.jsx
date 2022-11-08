import { Word } from './Word';
import { TrashIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';

export const Note = ({ name, words }) => {
  return (
    <li className='m-2 rounded-xl border-4 border-sky-700 p-2 even:bg-sky-100'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <h1 className='text-3xl font-bold text-sky-700'>{name}</h1>
          <button className='mx-2 w-6 text-sky-700'>
            <PencilIcon />
          </button>
        </div>
        <button className='mx-2 w-6 text-sky-700'>
          <TrashIcon />
        </button>
      </div>
      <hr className='my-2' />
      <div className='flex'>
        {words.map((item) => (
          <Word key={item.id} en={item.en} ko={item.ko}></Word>
        ))}
        <button className='mx-2 w-20 rounded-xl border-2 border-sky-700 px-5 font-bold text-sky-700'>
          <PlusIcon />
        </button>
      </div>
    </li>
  );
};
