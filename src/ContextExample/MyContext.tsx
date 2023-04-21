import { createContext, useState, PropsWithChildren } from 'react';

import type { MyContextType } from '../types';

// export const MyContext = createContext({
//   user: '',
//   theme: 'light',
// });

// const MyContextProvider = ({ children }: PropsWithChildren) => {
//   const [myContextValue, setMyContextValue] = useState({
//     user: '',
//     theme: 'light',
//   });
//   return <MyContext.Provider value={myContextValue}>{children}</MyContext.Provider>;
// };

// export default MyContextProvider;

export const MyContext = createContext<MyContextType>(undefined);

const MyContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <MyContext.Provider
      value={useState({
        user: '',
        theme: 'light',
      })}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
