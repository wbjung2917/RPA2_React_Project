export const TestItem = ({ userAnswers, questionData }) => {
  return (
    <div className='m-2 rounded-xl border-4 border-blue-500 p-2 '>
      <div className='flex items-end justify-between'>
        <h1 className='mx-5 mb-2 text-center font-Jua text-2xl font-bold text-blue-500'>
          #{questionData.id + 1}
        </h1>
        <h1 className='mx-5 mb-2 text-center font-Jua text-4xl font-bold text-blue-500'>
          {questionData.en}
        </h1>
      </div>
      <hr />
      <form
        onChange={(e) => (userAnswers[questionData.id] = parseInt(e.target.id))}
      >
        {questionData.options.map((option) => (
          <div key={questionData.options.indexOf(option)}>
            <label className='flex items-center text-xl font-bold text-indigo-500'>
              <input
                className='m-1 h-6 w-6 appearance-none rounded-full border-4 border-blue-200 checked:bg-blue-500'
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
