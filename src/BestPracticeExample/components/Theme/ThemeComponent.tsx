import { useContext } from 'react';

import type { ThemeContextStateType } from '../../types';

import { THEME_OPTIONS } from '../../types';
import { ThemeContext } from '../../Providers/ThemeProvider';

const ThemeComponent = () => {
  const [, setTheme] = useContext(ThemeContext) as ThemeContextStateType;

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME_OPTIONS.LIGHT ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT));
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
};

export default ThemeComponent;
