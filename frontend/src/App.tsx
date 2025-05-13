import React from 'react';
import { ProfileProvider } from "./contexts/ProfileContext";
import { CartProvider } from "./contexts/CartContext";
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <ProfileProvider>
      <CartProvider> 
        <AppNavigator>
          
        </AppNavigator>
      </CartProvider>
    </ProfileProvider>
  );
};

export default App;
