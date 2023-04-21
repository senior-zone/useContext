import { useContext } from 'react';

import { MyContext } from '../MyContext';

const AuthComponent = () => {
  const setContext = useContext(MyContext)![1];

  const login = () => {
    setContext((prev: any) => ({
      ...prev,
      user: 'Tony',
    }));
  };

  const logout = () => {
    setContext((prev: any) => ({
      ...prev,
      user: '',
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
