import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TextInput, Alert, BackHandler }
  from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, RouteProp, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Product, useCart } from '../contexts/CartContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../styles/Home.styles';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = React.memo(({ route }: { route: HomeScreenRouteProp }) => {

  const { nome, email } = route.params;
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [dados, setDados] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const { addToCart } = useCart();
  const { cart } = useCart();

  useEffect(() => {
    setLoading(true);

    const url = searchTerm.trim()
      ? `http://192.168.1.19:3000/dadosDosProdutos?nome=${encodeURIComponent(searchTerm)}`
      : 'http://192.168.1.19:3000/dadosDosProdutos';

    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (json.length === 0) {
          Alert.alert('Ops!', 'Produto não encontrado.');
        }
        setDados(json);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [searchTerm]);


  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => backHandler.remove();
    }, [])
  );

  
  return (
    <View style={styles.body}>
      <View style={styles.menu}>
        <View style={styles.ContainerPerfil}>
          <MaterialCommunityIcons
            name="account"
            size={50}
            color="#000000"
            style={styles.meuPerfil}
            onPress={() => navigation.navigate('Perfil', { nome: nome, email: email })}
          />
          <MaterialCommunityIcons
            onPress={() => navigation.navigate('Avaliacao', { nome: nome, email: email })}
            name="star"
            size={40}
            color="#000000"
            style={styles.star}
          />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.saudacao}>Olá {nome}!</Text>
      </View>
      <View style={styles.container1}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      </View>
      <TextInput
        placeholder='Pesquise aqui'
        placeholderTextColor="#3b3b3b"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (

            <View style={styles.productCard}>

              <Image source={{ uri: item.imagemUrl }} style={styles.image} />

              <Text style={styles.productName}>{item.nome}</Text>

              <Button
                mode="outlined"
                onPress={() => addToCart(item, true)}
                style={styles.addButton}>
                <Text style={styles.TextaddButton}>Adicionar ao carrinho</Text>
              </Button>

              <Button
                mode="outlined"
                onPress={() => navigation.navigate("Produto", { nome: nome, email: email, produto: item })}
                style={styles.verProduto}>
                <Text style={styles.TextVerProduto} >Ver sobre</Text>
              </Button>
            </View>
          )}
          extraData={cart}
        />
      )}
    </View>
  );
});

export default Home;