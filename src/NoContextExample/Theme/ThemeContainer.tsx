import type { ToggleThemeProps } from '../../types';

import Container from '../Container';
import ThemeComponent from './ThemeComponent';

const ThemeContainer = ({ toggleTheme }: ToggleThemeProps) => {
  // some logic
  return (
    <Container>
      {/* some components */}
      <ThemeComponent toggleTheme={toggleTheme} />
    </Container>
  );
};

export default ThemeContainer;
