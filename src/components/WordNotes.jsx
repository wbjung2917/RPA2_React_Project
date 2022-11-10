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
      <div className='mx-2 flex justify-center rounded-xl border-4 border-blue-500'>
        <button
          onClick={() =>
            data.notes.filter((note) => note.id === 0).length !== 0
              ? alert('빈 노트를 두 개 이상 만들 수 없습니다.')
              : addNote()
          }
          className='flex w-full justify-center text-blue-500'
        >
          <div className='w-24'>
            <PlusIcon />
          </div>
        </button>
      </div>
    </div>
  );
};
