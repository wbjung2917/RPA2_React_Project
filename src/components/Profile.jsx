import { useUser } from '../hooks/user-context';

export const Profile = () => {
  const { user, logout } = useUser();
  return (
    <div className='flex items-center'>
      <h1 className='my-3 font-Jua text-3xl font-bold text-indigo-700'>
        {user.userInfo.userid}
      </h1>
      <h1 className='m-3 font-Jua text-2xl text-indigo-500'>님의 단어장</h1>
      <button
        className='min-h-10 w-24 rounded-xl bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-700 p-2 text-xl font-bold text-white'
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  );
};
