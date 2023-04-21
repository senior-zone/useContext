import { ToggleThemeProps } from '../../types';

const ThemeComponent = ({ toggleTheme }: ToggleThemeProps) => {
  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
};

export default ThemeComponent;
