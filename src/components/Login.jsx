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
        <label className='text-2xl font-bold text-sky-700' htmlFor='user-id'>
          ID
        </label>
        <input
          className='m-2 h-10 rounded-xl border-2 border-sky-700 p-1'
          type='text'
          ref={userIdRef}
        />
        <label className='text-2xl font-bold text-sky-700' htmlFor='user-pwd'>
          PW
        </label>
        <input
          className='m-2 h-10 rounded-xl border-2 border-sky-700 p-1'
          type='password'
          ref={userPwdRef}
        />
        <button className='min-h-10 w-24 rounded-xl border-2 border-sky-700 bg-sky-200 p-1 font-bold text-sky-700'>
          Log In
        </button>
      </form>
    </>
  );
};
