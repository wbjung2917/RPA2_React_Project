import { Word } from './Word';
import {
  TrashIcon,
  PencilIcon,
  PlusIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { useRef, useEffect, useReducer } from 'react';
import { useWord } from '../hooks/word-context';

export const Note = ({ note, name, words }) => {
  const [isChecked, toggleChecked] = useReducer((pre) => !pre, false);
  const [isEditing, toggleIsEditing] = useReducer((pre) => !pre, false);
  const newNoteName = useRef();
  const { checkedItems } = useWord();

  useEffect(() => {
    if (isChecked) {
      checkedItems.add(note.id);
    } else if (!isChecked && checkedItems.has(note.id)) {
      checkedItems.delete(note.id);
    }
  });

  return (
    <li className='m-2 rounded-xl border-4 border-sky-700 p-2 even:bg-sky-100'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            className='mx-2 h-8 w-8 appearance-none rounded-full border-4 checked:border-sky-700 checked:bg-sky-200'
            type='checkbox'
            onChange={() => toggleChecked()}
          />
          {isEditing ? (
            <input
              className='border-2 text-3xl font-bold text-sky-700'
              type='text'
              placeholder='새 제목'
              ref={newNoteName}
            ></input>
          ) : (
            <h1 className='text-3xl font-bold text-sky-700'>{name}</h1>
          )}
        </div>
        <div className='flex items-center'>
          {isEditing ? (
            <button className='mx-2 w-6 text-sky-700 hover:w-8'>
              <CheckIcon />
            </button>
          ) : (
            <></>
          )}
          <button
            onClick={() => toggleIsEditing()}
            className='mx-2 w-6 text-sky-700 hover:w-8'
          >
            {isEditing ? <XMarkIcon /> : <PencilIcon />}
          </button>
          <button className='mx-2 w-6 text-sky-700 hover:w-8'>
            <TrashIcon />
          </button>
        </div>
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
