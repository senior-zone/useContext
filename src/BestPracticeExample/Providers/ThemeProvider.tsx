import { createContext, useState } from 'react';

import { THEME_OPTIONS } from '../types';

import type { PropsWithChildren } from 'react';
import type { ThemeContextType } from '../types';

export const ThemeContext = createContext<ThemeContextType>(undefined);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(THEME_OPTIONS.LIGHT);

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
