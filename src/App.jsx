import { Nav } from './components/Nav';
import { WordNotes } from './components/WordNotes';
import { WordContextProvider } from './hooks/word-context';

function App() {
  return (
    <div className='flex flex-col'>
      <Nav> </Nav>
      <div className='flex'>
        <button className='h-30 mx-2 basis-1/2 rounded-xl border-4 border-sky-700 bg-sky-200 p-2 text-4xl font-bold text-sky-700'>
          선택사항 테스트하기
        </button>
        <button className='h-30 mx-2 basis-1/2 rounded-xl border-4 border-sky-700 bg-sky-200 p-2 text-4xl font-bold text-sky-700'>
          전체 테스트하기
        </button>
      </div>
      <WordContextProvider>
        <WordNotes></WordNotes>
      </WordContextProvider>
    </div>
  );
}

export default App;
