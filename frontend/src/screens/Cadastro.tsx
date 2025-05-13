import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Image, View, Pressable } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { styles } from '../styles/Cadastro.styles';

type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;

const Cadastro = () => {

  const navigation = useNavigation<CadastroScreenNavigationProp>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [isHoveredButtonRegister, setIsHoveredButtonRegister] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const realizarCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Ops!", "Por favor, preencha todos os campos.");
      return;
    }
    try {
      const response = await axios.post("http://192.168.1.19:3000/register", {
        nome,
        email,
        senha
      });

      Alert.alert("Cadastro feito com sucesso ✔", response.data.message);

      setNome('');
      setEmail('');
      setSenha('');

      navigation.navigate('Home', { nome: nome, email: email });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.error === "Este email já esta cadastrado!") {
          Alert.alert("Erro!", "Este email já está cadastrado.");
        } else {
          Alert.alert("Erro!", error.response?.data.message || "Voce já está cadastrado.");
        }
      } else {
        Alert.alert("Erro desconhecido ☹", "Ocorreu um erro inesperado.");
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Ionicons
        style={styles.iconVoltar}
        onPress={() => navigation.navigate('Introducao')}
        name="arrow-back"
        size={30}
        color="black" />
      <View style={styles.container1}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
          Formulário de cadastro
        </Text>
        <TextInput
          label={<Text style={styles.labelInputSenha}>Nome</Text>}
          style={styles.inputNome}
          placeholder='Digite seu nome'
          placeholderTextColor="#3b3b3b"
          value={nome}
          onChangeText={setNome}
          activeUnderlineColor="rgb(255, 0, 0)"
        />
        <TextInput
          label={<Text style={styles.labelInputSenha}>Email</Text>}
          style={styles.inputEmail}
          placeholder='Seuemail@gmail.com'
          placeholderTextColor="#3b3b3b"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          activeUnderlineColor="rgb(102, 255, 0)"
        />
        <TextInput
          label={<Text style={styles.labelInputSenha}>Senha</Text>}
          style={styles.inputSenha}
          placeholder={'Digite sua senha'}
          placeholderTextColor="#3b3b3b"
          secureTextEntry={!showPassword}
          value={senha}
          onChangeText={setSenha}
          activeUnderlineColor="rgb(0, 47, 255)"
        />
        <Icon
          name={showPassword ? "visibility-off" : "visibility"}
          size={24}
          onPress={togglePasswordVisibility}
          style={styles.icon}
        />
        <Pressable
          onPress={realizarCadastro}
          onPressIn={() => setIsHoveredButtonRegister(true)}
          onPressOut={() => setIsHoveredButtonRegister(false)} >
          <Button
            style={[
              styles.buttonBase,
              isHoveredButtonRegister ? styles.buttonRegisterhover : styles.buttonRegister
            ]}>
            <Text style={isHoveredButtonRegister ? styles.textButtonRegisterHover : styles.textButtonRegister}>
              Cadastrar
            </Text>
          </Button>
        </Pressable>
      </View>
    </View>
  );
};

export default Cadastro;
