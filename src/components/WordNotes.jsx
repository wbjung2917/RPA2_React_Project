import { useWord } from '../hooks/word-context';
import { Note } from './Note';
import { PlusIcon } from '@heroicons/react/24/outline';

export const WordNotes = () => {
  const { data, addNote } = useWord();
  return (
    <div className='flex-col'>
      <ul>
        {data.notes.map((item) => (
          <Note
            key={item.id}
            note={item}
            name={item.name}
            words={item.words}
          ></Note>
        ))}
      </ul>
      <div className='mx-2 flex justify-center rounded-xl border-4 border-sky-700'>
        <button
          onClick={() => addNote()}
          className='flex w-full justify-center text-sky-700'
        >
          <div className='w-24'>
            <PlusIcon />
          </div>
        </button>
      </div>
    </div>
  );
};
