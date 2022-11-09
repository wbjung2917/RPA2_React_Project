export const TestItem = ({ userAnswers, questionData }) => {
  return (
    <div className='m-2 rounded-xl border-4 border-sky-700 p-2'>
      <div className='flex items-end justify-between'>
        <h1 className='mx-5 mb-2 text-center text-2xl font-bold text-sky-700'>
          #{questionData.id + 1}
        </h1>
        <h1 className='mx-5 mb-2 text-center text-4xl font-bold text-sky-700'>
          {questionData.en}
        </h1>
      </div>
      <hr />
      <form
        onChange={(e) => (userAnswers[questionData.id] = parseInt(e.target.id))}
      >
        {questionData.options.map((option) => (
          <div key={questionData.options.indexOf(option)}>
            <label className='flex items-center font-bold text-sky-700'>
              <input
                className='m-1 h-6 w-6 appearance-none rounded-full border-4 border-sky-200 checked:bg-sky-700'
                id={questionData.options.indexOf(option)}
                type='radio'
                name='question'
              />
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};
