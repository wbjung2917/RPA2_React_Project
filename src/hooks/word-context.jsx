import { createContext, useContext, useState, useReducer } from 'react';

const SampleData = {
  notes: [
    {
      id: 1,
      name: '단어장1',
      words: [
        { id: 1, en: 'apple', ko: '사과' },
        { id: 2, en: 'banana', ko: '바나나' },
        { id: 3, en: 'carrot', ko: '당근' },
        { id: 4, en: 'durian', ko: '두리안' },
        { id: 5, en: 'eagle', ko: '독수리' },
      ],
    },
    {
      id: 2,
      name: '단어장2',
      words: [
        { id: 1, en: 'hospital', ko: '병원' },
        { id: 2, en: 'school', ko: '학교' },
      ],
    },
    {
      id: 5,
      name: '단어장5',
      words: [
        { id: 1, en: 'vocabulary', ko: '어휘' },
        { id: 2, en: 'phrase', ko: '구문' },
      ],
    },
    {
      id: 4,
      name: '단어장4',
      words: [
        { id: 1, en: 'monkey', ko: '원숭이' },
        { id: 2, en: 'elephant', ko: '코끼리' },
        { id: 3, en: 'zebra', ko: '얼룩말' },
      ],
    },
  ],
};

const reducer = (data, action) => {
  let newData;
  switch (action.type) {
    case 'add':
      newData = {
        ...data,
        notes: [...data.notes, { id: 0, name: '', words: [] }],
      };
      break;

    case 'save':
      newData = {
        ...data,
      };
      break;

    case 'remove':
      newData = {
        ...data,
        notes: [...data.notes.filter((note) => note.id !== action.payload)],
      };
      break;

    case 'add-word':
      newData = {
        ...data,
      };
      break;

    case 'save-word':
      newData = {
        ...data,
      };
      break;

    case 'remove-word':
      newData = {
        ...data,
      };
      break;

    default:
      throw new Error('Not Defined Action!!');
  }

  return newData;
};

const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, SampleData);

  const [checkedItems, setCheckedItems] = useState(new Set());

  const addNote = () => {
    dispatch({ type: 'add' });
  };

  const saveNote = (note, noteName, noteWords) => {
    if (!note.id) {
      note.id = Math.max(...data.notes.map((note) => note.id)) + 1;
    }
    note.name = noteName;
    for (const word of noteWords) {
      let tempId;
      note.words.length === 0
        ? (tempId = word.id)
        : (tempId = Math.max(...note.words.map((word) => word.id)) + 1);

      note.words.push({
        id: tempId,
        en: word.en,
        ko: word.ko,
      });
    }
    dispatch({ type: 'save', payload: note });
  };

  const removeNote = (noteId) => {
    dispatch({ type: 'remove', payload: noteId });
  };

  const addWord = (note) => {
    note.words.push({ id: 0, en: '', ko: '' });
    dispatch({ type: 'add-word', payload: note });
  };

  const saveWord = (note, word, en, ko) => {
    const newWord = {
      id: Math.max(...note.words.map((word) => word.id)) + 1,
      en,
      ko,
    };
    note.words.splice(note.words.indexOf(word), 1, newWord);
    dispatch({ type: 'save-word' });
  };

  const removeWord = (note, wordId) => {
    note.words = [...note.words.filter((word) => word.id !== wordId)];
    dispatch({ type: 'remove-word' });
  };

  return (
    <WordContext.Provider
      value={{
        data,
        checkedItems,
        addNote,
        saveNote,
        removeNote,
        addWord,
        saveWord,
        removeWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWord = () => useContext(WordContext);
