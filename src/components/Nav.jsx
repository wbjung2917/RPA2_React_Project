import { LoginBar } from '../components/LoginBar';
import { UserContextProvider } from '../hooks/user-context';
import mlvLogo from '../assets/My_Little_Voca_Logo.png';

export const Nav = () => {
  return (
    <div className='m-3 flex-col items-center justify-between'>
      <div className='flex justify-center'>
        <img
          className='col-span-1 col-start-2 h-32'
          src={mlvLogo}
          alt='mlvLogo'
        />
      </div>

      <div className='flex items-end justify-end'>
        <UserContextProvider>
          <LoginBar></LoginBar>
        </UserContextProvider>
      </div>
    </div>
  );
};
