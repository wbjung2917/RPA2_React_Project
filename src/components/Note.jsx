import { Word } from './Word';
import {
  TrashIcon,
  PencilIcon,
  PlusIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { useRef, useEffect, useReducer, useState } from 'react';
import { useWord } from '../hooks/word-context';
import './Note.css';

export const Note = ({ note, name, words }) => {
  const [isChecked, toggleChecked] = useReducer((pre) => !pre, false);
  const [isUseFile, toggleIsUseFile] = useReducer((pre) => !pre, false);
  const [isEditing, toggleIsEditing] = useReducer((pre) => !pre, false);
  const [newNoteWords, setNewNoteWords] = useState([]);
  const newNoteName = useRef();
  const fileName = useRef();
  const { data, checkedItems, saveNote, removeNote, addWord } = useWord();

  useEffect(() => {
    if (isChecked) {
      checkedItems.add(note.id);
    } else if (!isChecked && checkedItems.has(note.id)) {
      checkedItems.delete(note.id);
    }
  });

  return (
    <li className='m-2 rounded-xl border-4 border-blue-500 p-2'>
      <div className='scrollbox flex items-center justify-between overflow-x-auto py-1'>
        <div className='flex items-center'>
          <input
            className='mx-2 h-8 w-8 appearance-none rounded-full border-4 checked:border-blue-500 checked:bg-sky-200'
            type='checkbox'
            onChange={() => toggleChecked()}
          />
          {isEditing || note.id === 0 ? (
            <div className='flex items-center '>
              <input
                className='w-64
 border-2 font-Jua text-3xl text-blue-500'
                type='text'
                placeholder='새 제목'
                ref={newNoteName}
              ></input>
              <input
                className='mx-4 h-4 w-4 appearance-none bg-slate-200 checked:bg-blue-500'
                type='checkbox'
                onChange={() => toggleIsUseFile()}
              />

              {isUseFile ? (
                <>
                  <input
                    type='file'
                    accept='.xls,.xlsx'
                    ref={fileName}
                    onChange={(e) => {
                      setNewNoteWords([]);
                      const input = e.target;
                      const reader = new FileReader();
                      reader.readAsBinaryString(input.files[0]);
                      reader.onload = function () {
                        const data = reader.result;
                        const workBook = XLSX.read(data, { type: 'binary' });
                        workBook.SheetNames.forEach((sheetName) => {
                          console.log('SheetName: ' + sheetName);
                          const rows = XLSX.utils.sheet_to_json(
                            workBook.Sheets[sheetName]
                          );
                          setNewNoteWords([...newNoteWords, ...rows]);
                        });
                      };
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <h1 className='my-1 font-Jua text-3xl text-blue-500'>{name}</h1>
          )}
        </div>
        <div className='flex items-center'>
          {isEditing || note.id === 0 ? (
            <button
              onClick={() => {
                if (newNoteName.current.value === '') {
                  alert('새 제목이 입력되지 않았습니다.');
                } else {
                  saveNote(note, newNoteName.current.value, newNoteWords);
                  toggleIsEditing();
                }
              }}
              className='mx-2 w-6 text-green-700 hover:w-8'
            >
              <CheckIcon />
            </button>
          ) : (
            <></>
          )}
          <button
            onClick={() => {
              if (note.id === 0) {
                removeNote(note.id);
              }
              toggleIsEditing();
            }}
            className='mx-2 w-6 text-blue-500 hover:w-8'
          >
            {isEditing || note.id === 0 ? <XMarkIcon /> : <PencilIcon />}
          </button>
          <button
            onClick={() => removeNote(note.id)}
            className='mx-2 w-6 text-rose-700 hover:w-8'
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      <hr className='my-2' />
      <div className='scrollbox flex overflow-x-auto py-1'>
        {words.map((item) => (
          <Word
            key={item.id}
            note={note}
            word={item}
            en={item.en}
            ko={item.ko}
          ></Word>
        ))}
        <button
          onClick={() => {
            note.words.filter((word) => word.id === 0).length !== 0
              ? alert('빈 단어를 두 개이상 만들 수 없습니다.')
              : addWord(note);
          }}
          className='mx-2 w-20 shrink-0 rounded-xl border-2 border-blue-500 px-5 font-bold text-blue-500'
        >
          <PlusIcon />
        </button>
      </div>
    </li>
  );
};
