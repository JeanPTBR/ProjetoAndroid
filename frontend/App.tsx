import React from 'react';
import { ProfileProvider } from "./src/screens/contexts/ProfileContext";
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ProfileProvider>
      <AppNavigator />
    </ProfileProvider>
  );
};

export default App;
