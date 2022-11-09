import { useWord } from '../hooks/word-context';
import { TestItem } from './TestItem';

export const Test = ({ isAll }) => {
  const { data, checkedItems } = useWord();
  const wordsData = data.notes.filter((note) =>
    isAll ? note : checkedItems.has(note.id)
  );

  const answerList = data.notes.reduce(
    (pre, cur) => [...pre, ...cur.words.map((word) => word.ko)],
    []
  );

  const testingData = wordsData.reduce((pre, cur) => {
    const correctAnswer = Math.floor(Math.random() * 4);
    const randAnswers = [];
    while (randAnswers.length < 3) {
      const tempAns = answerList[Math.floor(Math.random() * answerList.length)];
      if (!randAnswers.includes(tempAns)) randAnswers.push(tempAns);
    }

    return [
      ...pre,
      ...cur.words.map((word) => [
        word.en,
        word.ko,
        correctAnswer,
        randAnswers,
      ]),
    ];
  }, []);
  console.log(testingData);

  // console.log(checkedWords);
  return (
    <div className='grid grid-cols-2'>
      {checkedItems.size === 0 && !isAll ? (
        <h1>체크된 데이터가 없습니다.</h1>
      ) : (
        <>
          {testingData.map((data) => (
            <TestItem key={testingData.indexOf(data)}></TestItem>
          ))}
        </>
      )}
    </div>
  );
};
