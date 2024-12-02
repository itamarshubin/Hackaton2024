import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from 'react';
import { UserData } from '../hooks/login.hook';

const AuthContext = createContext<{
  userDataState: [UserData | null, Dispatch<SetStateAction<UserData>> | null];
  loadingState: [boolean | null, Dispatch<SetStateAction<boolean>> | null];
  loginError: [boolean | null, Dispatch<SetStateAction<boolean>> | null];
}>({ loadingState: [null, null], userDataState: [null, null], loginError: [null, null] });

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const loadingState = useState(false);
  const loginError = useState(false);
  const userDataState = useState<UserData>(null);
  const value = { loadingState, userDataState, loginError };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
