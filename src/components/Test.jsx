import { useState } from 'react';
import { useWord } from '../hooks/word-context';
import { TestItem } from './TestItem';

export const Test = ({ isAll }) => {
  const { data, checkedItems } = useWord();

  const wordsData = data.notes.filter((note) =>
    isAll ? note : checkedItems.has(note.id)
  );

  const testingData = wordsData.reduce((pre, cur) => {
    return [...pre, ...cur.words.map((word) => [word.en, word.ko])];
  }, []);

  const numOfQuestions = testingData.length > 20 ? 20 : testingData.length;

  const [userAnswers, setUserAnswers] = useState(
    new Array(numOfQuestions).fill(NaN)
  );

  const getRandNumberList = (maxNumber, listLength) => {
    const randList = [];
    while (randList.length < listLength) {
      const tempNum = Math.floor(Math.random() * maxNumber);
      if (!randList.includes(tempNum)) {
        randList.push(tempNum);
      }
    }

    return randList;
  };

  const testSample = getRandNumberList(testingData.length, numOfQuestions).map(
    (idx) => testingData[idx]
  );

  const answerList = getRandNumberList(50000, numOfQuestions).map(
    (ans) => ans % 4
  );

  const allAnswers = data.notes.reduce((pre, cur) => {
    return [...pre, ...cur.words.map((word) => word.ko)];
  }, []);

  const getWrongAnswers = (answers, correctAns) => {
    const avoidIdx = answers.indexOf(correctAns);
    const randList = [];
    while (randList.length < 3) {
      const tempNum = Math.floor(Math.random() * answers.length);
      if (!randList.includes(tempNum) && tempNum !== avoidIdx) {
        randList.push(tempNum);
      }
    }
    const wrongAnsList = randList.map((idx) => answers[idx]);
    return wrongAnsList;
  };

  const wrongAnswers = testSample.map((item) =>
    getWrongAnswers(allAnswers, item[1])
  );

  const makeTestItems = (testSample, answerList, wrongAnswers) => {
    const testItems = [];
    for (let i = 0; i < testSample.length; i++) {
      testItems.push({
        id: i,
        en: testSample[i][0],
        answer: answerList[i],
        options: [
          ...wrongAnswers[i].slice(0, answerList[i]),
          testSample[i][1],
          ...wrongAnswers[i].slice(answerList[i]),
        ],
      });
    }
    return testItems;
  };

  const testItems = makeTestItems(testSample, answerList, wrongAnswers);
  const [isWrongList, setIsWrongList] = useState(
    new Array(numOfQuestions).fill(false)
  );

  return (
    <>
      {checkedItems.size === 0 && !isAll ? (
        <div className='flex h-[50vh] w-full items-center justify-center'>
          <h1 className='text-4xl font-bold text-blue-500'>
            체크된 데이터가 없습니다.
          </h1>
        </div>
      ) : (
        <div className='grid h-[80vh] w-full grid-cols-2 overflow-y-auto'>
          {testItems.map((data) => (
            <TestItem
              key={data.id}
              userAnswers={userAnswers}
              questionData={data}
            ></TestItem>
          ))}
        </div>
      )}
      <button
        onClick={() => {
          if (userAnswers.includes(NaN)) {
            alert('답안을 덜 작성 했습니다.');
          } else {
            const WrongNumbers = [];
            for (let i = 0; i < numOfQuestions; i++) {
              if (answerList[i] !== userAnswers[i]) {
                WrongNumbers.push(i + 1);
              }
            }
            WrongNumbers.length === 0
              ? alert('채점결과 모두 정답입니다.')
              : alert(`채점결과 ${WrongNumbers}번 오답입니다.`);
          }
        }}
        className='h-30 mx-2 basis-full rounded-xl bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-700 p-3 font-Jua text-4xl text-white'
      >
        채점하기
      </button>
    </>
  );
};
