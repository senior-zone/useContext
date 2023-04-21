import type { HeaderProps } from '../../types';

import Container from '../Container';

const Header = ({ user, theme }: HeaderProps) => {
  return (
    <Container>
      Current user: {user || 'unauthorized'}
      <br />
      Current theme: {theme}
    </Container>
  );
};

export default Header;
