import { useContext } from 'react';

import { AuthContextStateType } from '../../types';

import { AuthContext } from '../../Providers/AuthProvider';

const AuthComponent = () => {
  const [, setAuth] = useContext(AuthContext) as AuthContextStateType;

  const login = () => {
    setAuth((prev) => ({
      ...prev,
      username: 'Tony',
    }));
  };

  const logout = () => {
    setAuth((prev) => ({
      ...prev,
      username: '',
    }));
  };

  return (
    <div>
      <button style={{ marginRight: '10px' }} onClick={login}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthComponent;
