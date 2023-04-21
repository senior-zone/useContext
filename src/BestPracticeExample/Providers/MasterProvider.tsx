import AuthProvider from './AuthProvider';
import ThemeProvider from './ThemeProvider';

import type { PropsWithChildren } from 'react';

const MasterProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default MasterProvider;
