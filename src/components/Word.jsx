import {
  XCircleIcon,
  PencilIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useReducer, useRef } from 'react';
import { useWord } from '../hooks/word-context';
export const Word = ({ note, word, en, ko }) => {
  const [isEditing, toggleIsEditing] = useReducer((pre) => !pre, false);
  const { saveWord, removeWord } = useWord();
  const newWordEn = useRef();
  const newWordKo = useRef();
  return (
    <>
      <div className='mx-2 shrink-0 flex-col rounded-xl border-2 p-2 text-center'>
        {word.id === 0 ? (
          <>
            <div className='flex'>
              <div className='flex flex-col'>
                <input
                  className='mb-1 mr-1 h-7 w-20 rounded-full bg-slate-300 px-2'
                  placeholder='어휘'
                  type='text'
                  ref={newWordEn}
                />
                <input
                  className='h-7 w-20 rounded-full bg-slate-300 px-2'
                  placeholder='뜻'
                  type='text'
                  ref={newWordKo}
                />
              </div>
              <div className='flex flex-col'>
                <button
                  onClick={() => {
                    if (
                      newWordEn.current.value !== '' &&
                      newWordKo.current.value !== ''
                    ) {
                      saveWord(
                        note,
                        word,
                        newWordEn.current.value,
                        newWordKo.current.value
                      );
                      toggleIsEditing();
                    } else {
                      alert('어휘와 뜻이 입력되지 않았습니다.');
                    }
                  }}
                  className='mb-1 mr-1 w-7 rounded-full border-2 border-blue-500 p-1 text-blue-500 hover:bg-blue-500 hover:text-slate-100'
                >
                  <PencilIcon />
                </button>
                <button
                  onClick={() => removeWord(note, word.id)}
                  className='w-7 rounded-full border-2 border-blue-500 p-1 text-blue-500 hover:bg-blue-500 hover:text-slate-100'
                >
                  <XMarkIcon />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className='text-xl font-bold text-indigo-500'>{en}</h1>
            <div className='flex items-center justify-center'>
              <h1 className='mr-2 text-lg font-bold text-blue-500'>{ko}</h1>
              <button
                onClick={() => removeWord(note, word.id)}
                className='w-6 text-rose-500'
              >
                <XCircleIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
