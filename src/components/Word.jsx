export const Word = ({ en, ko }) => {
  return (
    <div className='mx-2 flex-col text-center'>
      <h1 className='text-xl font-bold text-sky-500'>{en}</h1>
      <h1 className='text-lg font-bold text-sky-700'>{ko}</h1>
    </div>
  );
};
