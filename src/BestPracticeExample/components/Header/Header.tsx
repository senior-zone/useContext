import { useContext } from 'react';

import type { ThemeContextStateType, AuthContextStateType } from '../../types';

import { AuthContext } from '../../Providers/AuthProvider';
import { ThemeContext } from '../../Providers/ThemeProvider';
import Container from '../../ui/Container';

const Header = () => {
  const [theme] = useContext(ThemeContext) as ThemeContextStateType;
  const [auth] = useContext(AuthContext) as AuthContextStateType;

  return (
    <Container>
      Current user: {auth.username || 'unauthorized'}
      <br />
      Current theme: {theme}
    </Container>
  );
};

export default Header;
