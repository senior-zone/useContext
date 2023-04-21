import { useContext } from 'react';

import { MyContext } from '../MyContext';

const ThemeComponent = () => {
  const setContext = useContext(MyContext)![1];

  const toggleTheme = () => {
    setContext((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
};

export default ThemeComponent;
