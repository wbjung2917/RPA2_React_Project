import { Login } from './Login';
import { Profile } from './Profile';
import { useUser } from '../hooks/user-context';

export const LoginBar = () => {
  const { user } = useUser();
  return <>{user.userInfo ? <Profile /> : <Login />}</>;
};
