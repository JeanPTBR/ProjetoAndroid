import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { CartProvider } from '../contexts/CartContext';

// import das navegaçoes
import Introducao from '../screens/Introducao';
import Login from '../screens/Login';
import RedefinirSenha from '../screens/RedefinirSenha';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import Carrinho from '../screens/Carrinho';
import Pedidos from '../screens/Pedidos';
import Perfil from '../screens/Perfil';
import RedefinirPerfil from '../screens/RedefinirPerfil';
import Pagamento from '../screens/Pagamento';
import Produto from '../screens/Produto';
import Avaliacao from '../screens/Avaliacao';
import FaleConosco from '../screens/FaleConosco';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introducao">
          <Stack.Screen name="Introducao" component={Introducao} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} />
          <Stack.Screen name='Pedidos' component={Pedidos} options={{ headerShown: false }} />
          <Stack.Screen name="Pagamento" component={Pagamento} options={{ headerShown: false }}/>
          <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
          <Stack.Screen name="RedefinirPerfil" component={RedefinirPerfil} options={{ headerShown: false }} />
          <Stack.Screen name="Produto" component={Produto} options={{ headerShown: false }} />
          <Stack.Screen name="Avaliacao" component={Avaliacao} options={{ headerShown: false }}/>
          <Stack.Screen name="FaleConosco" component={FaleConosco} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppNavigator;