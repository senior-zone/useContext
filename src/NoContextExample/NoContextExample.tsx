import { useState } from 'react';

import AuthContainer from './Auth/AuthContainer';
import ThemeContainer from './Theme/ThemeContainer';
import Header from './Header/Header';

const UseContextExample = () => {
  const [user, setUser] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const login = () => {
    setUser('Tony');
  };
  const logout = () => {
    setUser('');
  };
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = {
    backgroundColor: theme === 'dark' ? '#333333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333333',
  };

  return (
    <div style={themeStyles}>
      <Header user={user} theme={theme} />

      <AuthContainer user={user} login={login} logout={logout} />

      <ThemeContainer toggleTheme={toggleTheme} />
    </div>
  );
};

export default UseContextExample;
