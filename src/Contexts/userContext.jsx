import { createContext, useState, React } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const userInfos = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(userInfos === null ? null : userInfos);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
