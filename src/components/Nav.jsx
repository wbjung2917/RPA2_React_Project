import { LoginBar } from '../components/LoginBar';
import { UserContextProvider } from '../hooks/user-context';

export const Nav = () => {
  return (
    <div className='m-3 mb-10 flex items-center justify-between'>
      <h1 className='text-4xl font-bold text-sky-700'>My Little Voca</h1>
      <UserContextProvider>
        <LoginBar></LoginBar>
      </UserContextProvider>
    </div>
  );
};
