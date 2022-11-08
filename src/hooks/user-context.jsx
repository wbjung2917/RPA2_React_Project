import { createContext, useContext, useState } from 'react';

const SampleUser = {
  userInfo: { userid: 'wbjung2917', userpwd: 'mypwd2917' },
};

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(SampleUser);

  const login = (userid, userpwd) => {
    setUser({ ...user, userInfo: { userid, userpwd } });
  };

  const logout = () => {
    setUser({ ...user, userInfo: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
