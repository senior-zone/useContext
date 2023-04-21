import { createContext, useState } from 'react';

import type { PropsWithChildren } from 'react';
import type { AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState({
    username: '',
  });
  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
