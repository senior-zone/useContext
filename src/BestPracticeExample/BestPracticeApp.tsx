import { useContext } from 'react';

import type { ThemeContextStateType } from './types';

import { THEME_OPTIONS } from './types';
import { ThemeContext } from './Providers/ThemeProvider';
import AuthContainer from './components/Auth/AuthContainer';
import Header from './components/Header/Header';
import ThemeContainer from './components/Theme/ThemeContainer';

const BestPracticeApp = () => {
  const [theme] = useContext(ThemeContext) as ThemeContextStateType;
  const themeStyles = {
    backgroundColor: theme === THEME_OPTIONS.DARK ? '#333333' : '#fff',
    color: theme === THEME_OPTIONS.DARK ? '#fff' : '#333333',
  };

  // console.log('bestpractice app rerender');

  return (
    <div style={themeStyles}>
      <Header />
      <AuthContainer />
      <ThemeContainer />
    </div>
  );
};

export default BestPracticeApp;
