import React, { useState } from 'react';
import axios from 'axios';
import { Alert, View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const realizarLogin = async () => {
        if (!email || !senha) {
            Alert.alert("Ops ❗", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await axios.post("http://192.168.1.19:5000/login", {
                email,
                senha
            });

            const { nome } = response.data;
            
            Alert.alert("Sucesso ✔", "Login realizado com sucesso!");

            navigation.navigate('Home', { nome, email });

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.error === "Usuário não encontrado") {
                    Alert.alert("Erro ❗", "Usuário não cadastrado.");
                } else if (error.response?.data.error === "Senha incorreta") {
                    Alert.alert("Erro ❗", "Senha incorreta. Tente novamente.");
                } else {
                    Alert.alert("Erro ❗", "Ocorreu um erro inesperado.");
                }
            } else {
                Alert.alert("Erro desconhecido", "Ocorreu um erro inesperado.");
            }
        }
    };

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    label="Email"
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    mode="outlined"
                    keyboardType="email-address"
                />

                <TextInput
                    label="Senha"
                    placeholder='Digite sua senha'
                    value={senha}
                    onChangeText={setSenha}
                    style={styles.input}
                    mode="outlined"
                    secureTextEntry
                />

                <Button mode="contained" onPress={realizarLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    container: {
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgb(172, 172, 172)",
        borderRadius: 10,
        width: "100%",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: 'rgb(252, 252, 252)',
    },
    input: {
        marginBottom: 10,
        width: "100%",
    },
    button: {
        backgroundColor: "rgb(129, 129, 129)",
        marginTop: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 19,
        color: 'rgb(252, 252, 252)',
    }
});

export default Login;
