import { AuthProps } from '../../types';

const AuthComponent = ({ login, logout }: AuthProps) => {
  return (
    <div>
      <button style={{ marginRight: '10px' }} onClick={login}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthComponent;
