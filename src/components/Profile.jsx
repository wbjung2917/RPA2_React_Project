import { useUser } from '../hooks/user-context';

export const Profile = () => {
  const { user, logout } = useUser();
  return (
    <div className='flex items-center'>
      <h1 className='m-3 text-2xl font-bold text-sky-700'>
        {user.userInfo.userid} 님의 단어장
      </h1>
      <button
        className='min-h-10 w-24 rounded-xl border-2 border-sky-700 bg-sky-200 p-1 font-bold text-sky-700'
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  );
};
