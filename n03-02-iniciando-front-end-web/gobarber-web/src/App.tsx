import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
