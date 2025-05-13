import React, { useEffect, useContext, useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper"
import { ProfileContext } from "../contexts/ProfileContext";
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import { styles } from "../styles/Perfil.styles";
import { useCart } from '../contexts/CartContext';

type PerfilScreenRouteProp = RouteProp<RootStackParamList, 'Perfil'>;
type PerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Perfil'>;

const Perfil = ({ route }: { route: PerfilScreenRouteProp }) => {

  const navigation = useNavigation<PerfilScreenNavigationProp>();

  const { cart } = useCart();
  const { nome: nomeAtual, email: emailAtual } = route.params;

  const [nome] = useState(nomeAtual);
  const [email] = useState(emailAtual);
  const { imagemPerfil, setImagemPerfil } = useContext(ProfileContext);
  const total = cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
  const data = new Date().toLocaleDateString();
  const [selectedItems] = useState<number[]>([]);

  useEffect(() => {
    carregarImagem();
  }, []);

  const carregarImagem = async () => {
    const uriSalva = await AsyncStorage.getItem('imagemPerfil');
    if (uriSalva) {

      const fileExistsResult = await fileExists(uriSalva);
      if (fileExistsResult) {
        setImagemPerfil(uriSalva);
      } else {
        await AsyncStorage.removeItem('imagemPerfil');
        setImagemPerfil(null);
      }
    } else {
      setImagemPerfil(null);
    }
  };

  const fileExists = async (uri: string): Promise<boolean> => {
    try {
      const response = await fetch(uri);
      return response.status === 200;
    } catch (error) {
      return false;
    }
  };

  const handleCameraPress = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      await AsyncStorage.setItem('imagemPerfil', uri);
      setImagemPerfil(uri);
    }
  };

  const goRedefinedProfile = async () => {
    navigation.navigate('RedefinirPerfil', { nome: nome, email: email });
  };

  const goMyOrders = async () => {

    const selectedProducts = cart.filter(item => selectedItems.includes(item.id));
    const totalSelecionado = selectedProducts.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    const dataCompra = new Date().toISOString();

    navigation.navigate('Pedidos', {
      nome,
      email,
      produtos: selectedProducts,
      total: totalSelecionado,
      data: dataCompra
    });
  };

  const goMyCart = async () => {
    navigation.navigate('Carrinho', { nome: nome, email: email, produtos: [], total, data })
  }

  const handleLogout = () => {
    navigation.navigate('Introducao');
  };

  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <View style={styles.logoutButton}>
          <Button onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Sair</Text>
          </Button>
        </View>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      </View>
      <Ionicons
        style={styles.iconVoltar}
        onPress={() => navigation.navigate('Home', { nome, email })}
        name="arrow-back"
        size={30}
        color="black" 
      />
      <View style={styles.container}>

        {imagemPerfil ? (
          <Image source={{ uri: imagemPerfil }} style={styles.image} />
        ) : (
          <Image source={require("../assets/Perfil.webp")} style={styles.image} />
        )}
        <MaterialCommunityIcons
          name="camera"
          size={40}
          color="#000"
          style={styles.camera}
          onPress={handleCameraPress}
        />
        <View style={styles.botao}>
          <Feather name="edit-2" size={30} color="white" onPress={goRedefinedProfile} />
        </View>
        <Text style={styles.title}>Dados do usuário</Text>
        <View style={styles.textContainer}>
          <Text style={styles.dados}>Nome: {nome}</Text>
          <Text style={styles.dados}>Email: {email}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonMyOrders} onPress={goMyOrders}>
            <Text style={styles.textButtonMyOrders}>
              Meus Pedidos
            </Text>
          </Button>
          <Button style={styles.buttonMyCart} onPress={goMyCart}>
            <Text style={styles.textButtonMyCart}>
              Meu carrinho
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Perfil;
