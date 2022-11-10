import { useRef } from 'react';
import { useUser } from '../hooks/user-context';

export const Login = () => {
  const { login } = useUser();
  const userIdRef = useRef();
  const userPwdRef = useRef();
  return (
    <>
      <form
        className='flex items-center'
        onSubmit={(evt) => {
          evt.preventDefault();
          login(userIdRef.current.value, userPwdRef.current.value);
        }}
      >
        <label
          className='font-Jua text-2xl font-bold text-indigo-700'
          htmlFor='user-id'
        >
          ID
        </label>
        <input
          className='m-2 h-10 rounded-xl border-2 border-blue-400 p-1 font-Jua text-indigo-700'
          type='text'
          ref={userIdRef}
        />
        <label
          className='font-Jua text-2xl font-bold text-indigo-700'
          htmlFor='user-pwd'
        >
          PW
        </label>
        <input
          className='m-2 h-10 rounded-xl border-2 border-blue-400 p-1'
          type='password'
          ref={userPwdRef}
        />
        <button className='min-h-10 w-24 rounded-xl bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-700 p-2 text-xl font-bold text-white'>
          Log In
        </button>
      </form>
    </>
  );
};
