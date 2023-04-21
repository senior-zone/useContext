import { useContext } from 'react';

import Container from './Container';
import { MyContext } from './MyContext';
import Layout from './Layout';
import MyContextProvider from './MyContext';
import Header from './Header/Header';
import AuthContainer from './Auth/AuthContainer';
import ThemeContainer from './Theme/ThemeContainer';

const ContextExample = () => {
  // const context = useContext(MyContext)![];
  // const themeStyles = {
  //   backgroundColor: context.theme === 'dark' ? '#333333' : '#fff',
  //   color: context.theme === 'dark' ? '#fff' : '#333333',
  // };
  return (
    <MyContextProvider>
      {/* <div style={themeStyles}> */}
      {/* <Header />
      <AuthContainer />
      <ThemeContainer /> */}
      {/* </div> */}

      <Layout />
    </MyContextProvider>
  );
};

export default ContextExample;
