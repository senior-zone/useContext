import { useContext } from 'react';

import { MyContext } from '../MyContext';
import Container from '../Container';

const Header = () => {
  const context = useContext(MyContext)![0];
  return (
    <Container>
      Current user: {context.user || 'unauthorized'}
      <br />
      Current theme: {context.theme}
    </Container>
  );
};

export default Header;
