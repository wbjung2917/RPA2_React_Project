import { useReducer, useState } from 'react';
import { Nav } from './components/Nav';
import { WordNotes } from './components/WordNotes';
import { WordContextProvider } from './hooks/word-context';
import { Test } from './components/Test';

function App() {
  const [isTesting, toggleIsTesting] = useReducer((pre) => !pre, false);
  const [isAll, setIsAll] = useState(false);

  console.log('redered App.jsx');

  return (
    <div className='flex flex-col'>
      <Nav> </Nav>

      <WordContextProvider>
        {isTesting ? (
          <>
            <div className='flex'>
              <button
                className='font-Jua h-30 mx-2 basis-full rounded-xl bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-700 p-3 text-4xl text-white'
                onClick={() => {
                  toggleIsTesting();
                  setIsAll(false);
                }}
              >
                돌아가기
              </button>
            </div>
            <Test isAll={isAll}></Test>
          </>
        ) : (
          <>
            <div className='flex'>
              <button
                onClick={() => toggleIsTesting()}
                className='font-Jua h-30 mx-2 basis-1/2 rounded-xl bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-700 p-3 text-4xl text-white'
              >
                선택사항 테스트하기
              </button>
              <button
                onClick={() => {
                  toggleIsTesting();
                  setIsAll(true);
                }}
                className='font-Jua h-30 mx-2 basis-1/2 rounded-xl bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-700 p-3 text-4xl text-white'
              >
                전체 테스트하기
              </button>
            </div>
            <WordNotes></WordNotes>
          </>
        )}
      </WordContextProvider>
    </div>
  );
}

export default App;
