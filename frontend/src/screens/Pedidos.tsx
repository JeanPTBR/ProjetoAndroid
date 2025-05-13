import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../contexts/CartContext';
import { styles } from '../styles/Pedidos.styles';

type PedidosScreenRouteProp = RouteProp<RootStackParamList, 'Pedidos'>;
type PedidosScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Pedidos'>;

const Pedidos = ({ route }: { route: PedidosScreenRouteProp }) => {

  const { nome, email } = route.params;
  const { pedidos, clearPedidos, removerPedido } = useCart();

  const formatarData = (dataString: string) => {

    const dataObj = new Date(dataString);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    const horas = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');
    return `Data: ${dia}/${mes}/${ano}\nHora: ${horas}:${minutos}`;
  };

  const navigation = useNavigation<PedidosScreenNavigationProp>();

  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      </View>
      <Ionicons
        style={styles.iconVoltar}
        onPress={() => navigation.navigate('Perfil', { nome: nome, email: email })}
        name="arrow-back"
        size={30}
        color="black" />
      <Button style={styles.buttonClearOrders} onPress={() => clearPedidos()}>
        Limpar pedidos
      </Button>
      <View style={styles.container}>
        <Text style={styles.title}>Meus Pedidos</Text>
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.date}>
                {formatarData(item.data)}
              </Text>
              {item.produtos.map(prod => (
                <View key={prod.id} style={{ marginVertical: 5 }}>
                  <Text style={styles.nome}>
                    {prod.nome} (x{prod.quantidade})
                  </Text>
                  <Text style={styles.preco}>
                    R$ {(prod.preco * prod.quantidade).toFixed(2)}
                  </Text>
                </View>
              ))}
              <Button
                mode="text"
                onPress={() => removerPedido(item.id)}
                style={{ marginTop: 2, alignSelf: 'flex-end', backgroundColor: '#ffffff',  borderRadius: 10, }}
              >
                Remover pedido
              </Button>
              <Text style={styles.total}>
                Pedido: R$ {item.total.toFixed(2)}
              </Text>
            </View>
          )}
        />
        <Text style={styles.total}>
          Total: R$ {pedidos.reduce((acc, pedido) => acc + pedido.total, 0).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default Pedidos;
