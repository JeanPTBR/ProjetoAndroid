import React, { useState } from 'react';
import axios from 'axios';
import { Alert, View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;

const Cadastro = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation<CadastroScreenNavigationProp>();

  const realizarCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Ops ❗", "Por favor, preencha todos os campos.");
      return;
    }
    try {
      const response = await axios.post("http://192.168.1.19:5000/register", {
        nome,
        email,
        senha
      });

      setNome("");
      setEmail("");
      setSenha("");

      Alert.alert("Sucesso ✔", response.data.message);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.error === "Este email já esta cadastrado!") {
          Alert.alert("Erro ❗", "Este email já está cadastrado.");
        } else {
          Alert.alert("Erro ❗", error.response?.data.message || "Voce já está cadastrado.");
        }
      } else {
        Alert.alert("Erro desconhecido", "Ocorreu um erro inesperado.");
      }
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Formulário de cadastro</Text>

        <TextInput
          label="Nome"
          placeholder='Digite seu nome'
          value={nome}
          onChangeText={setNome}
          style={styles.inputNome}
          mode="outlined"
        />

        <TextInput
          label="Email"
          placeholder='Digite seu email'
          value={email}
          onChangeText={setEmail}
          style={styles.inputEmail}
          mode="outlined"
          keyboardType="email-address"
        />

        <TextInput
          label="Senha"
          placeholder='Digite sua senha (4 dígitos)'
          value={senha}
          onChangeText={setSenha}
          style={styles.inputSenha}
          mode="outlined"
          maxLength={4}
          secureTextEntry={true}
          keyboardType="numeric"
        />

        <Button mode="contained" onPress={realizarCadastro} style={styles.buttonRegister} >
          <Text style={styles.Textbutton} >
            Cadastrar
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", padding: 20 },

  container: { justifyContent: "center", padding: 20, backgroundColor: "rgb(172, 172, 172)", marginBottom: 10, borderRadius: 10, width: "100%", height: 400 },

  title: {
    fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, fontFamily: "Arial",
    color: 'rgb(252, 252, 252)'
  },

  inputNome: { marginBottom: 10, borderColor: "rgb(2, 2, 2)", fontFamily: "Roboto", width: "100%", height: 40 },

  inputEmail: { marginBottom: 10, borderColor: "rgb(2, 2, 2)", fontFamily: "Roboto", width: "100%", height: 40 },

  inputSenha: { marginBottom: 10, borderColor: "rgb(2, 2, 2)", fontFamily: "Roboto", width: "100%", height: 40 },

  buttonRegister: { backgroundColor: "rgb(129, 129, 129)", marginTop: 30, borderRadius: 10, marginBottom: 10 },

  Textbutton: { fontSize: 19, fontFamily: "Roboto", color: 'rgb(252, 252, 252)' },

});

export default Cadastro;
