import { createContext, useContext, useState } from 'react';

const SampleWords = [
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
];

const reducer = (data, action) => {
  let newData;
  switch (action.type) {
    case 'add':
      newData = {
        ...data,
        books: [...data.books, { id: 0, title: '', marks: [] }],
      };
      break;

    case 'save':
      newData = {
        ...data,
        books: [
          ...data.books.filter((_book) => _book.id !== action.payload.id),
          action.payload,
        ],
      };
      break;

    case 'remove':
      newData = {
        ...data,
        books: [...data.books.filter((_book) => _book.id !== action.payload)],
      };
      break;

    case 'add-mark':
      newData = {
        ...data,
      };
      break;

    // case 'save-mark':
    //   newData = {
    //     ...data,
    //     books: [
    //       ...data.books.filter((_book) => _book.id !== action.payload.id),
    //       action.payload,
    //     ],
    //   };
    //   break;

    case 'remove-mark':
      newData = {
        ...data,
        books: [...data.books.filter((_book) => _book.id !== action.payload)],
      };
      break;

    default:
      throw new Error('Not Defined Action!!');
  }
};

const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
  const [Words, setWord] = useState(SampleWords);

  const [checkedItems, setCheckedItems] = useState(new Set());

  return (
    <WordContext.Provider value={{ Words, checkedItems }}>
      {children}
    </WordContext.Provider>
  );
};

export const useWord = () => useContext(WordContext);
