import type { AuthProps } from '../../types';

import AuthComponent from './AuthComponent';
import Container from '../Container';

const AuthContainer = ({ user, login, logout }: AuthProps) => {
  // some logic
  return (
    <Container>
      {/* some components */}
      <AuthComponent user={user} login={login} logout={logout} />
    </Container>
  );
};

export default AuthContainer;
