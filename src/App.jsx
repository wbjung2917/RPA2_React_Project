import { useReducer } from 'react';
import { Nav } from './components/Nav';
import { WordNotes } from './components/WordNotes';
import { WordContextProvider } from './hooks/word-context';
import { Test } from './components/Test';

function App() {
  const [isTesting, toggleIsTesting] = useReducer((pre) => !pre, false);

  console.log('redered App.jsx');

  return (
    <div className='flex flex-col'>
      <Nav> </Nav>

      <WordContextProvider>
        {isTesting ? (
          <>
            <button onClick={() => toggleIsTesting()}>돌아가기</button>
            <Test></Test>
          </>
        ) : (
          <>
            <div className='flex'>
              <button
                onClick={() => toggleIsTesting()}
                className='h-30 mx-2 basis-1/2 rounded-xl border-4 border-sky-700 bg-sky-200 p-2 text-4xl font-bold text-sky-700'
              >
                선택사항 테스트하기
              </button>
              <button
                onClick={() => toggleIsTesting()}
                className='h-30 mx-2 basis-1/2 rounded-xl border-4 border-sky-700 bg-sky-200 p-2 text-4xl font-bold text-sky-700'
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
