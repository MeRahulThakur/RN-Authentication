import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useState } from 'react';

type AuthContextType = {
  token: string|null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState<string|null>('');

  function authenticate(token: string) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;