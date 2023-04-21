import { useContext } from 'react';

import { MyContext } from './MyContext';

import Header from './Header/Header';
import AuthContainer from './Auth/AuthContainer';
import ThemeContainer from './Theme/ThemeContainer';

const Layout = () => {
  const context = useContext(MyContext)![0];
  const themeStyles = {
    backgroundColor: context.theme === 'dark' ? '#333333' : '#fff',
    color: context.theme === 'dark' ? '#fff' : '#333333',
  };
  return (
    <div style={themeStyles}>
      <Header />
      <AuthContainer />
      <ThemeContainer />
    </div>
  );
};

export default Layout;
