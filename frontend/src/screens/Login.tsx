import React, { useState } from 'react';
import axios from 'axios';
import { Alert, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { styles } from '../styles/Login.styles';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const realizarLogin = async () => {
        if (!email || !senha) {
            Alert.alert("Ops ❗", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await axios.post("http://192.168.1.19:3000/login", { email, senha });

            if (response.data.success) {
                const { user } = response.data;
                Alert.alert("Sucesso ✔", "Login realizado com sucesso!");
                navigation.navigate('Home', { nome: user.nome, email: user.email });
            } else {
                Alert.alert("Erro ❗", response.data.error || "Credenciais inválidas");
            }
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 401) {
                    Alert.alert("Erro ❗", "Email ou senha incorretos");
                } else {
                    Alert.alert("Erro ❗", error.response.data.error || "Ocorreu um erro no servidor");
                }
            } else if (error.request) {
                Alert.alert("Erro ❗", "Sem resposta do servidor. Verifique sua conexão.");
            } else {
                Alert.alert("Erro ❗", "Ocorreu um erro ao tentar fazer login");
            }
        }
    };

    const redefinirSenha = async () => {
        if (!email) {
            Alert.alert("Ops ❗", "Por favor, preencha o campo de email");
            return;
        }
        navigation.navigate('RedefinirSenha', { email })
    }
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
                <Text style={styles.title}>Login</Text>

                <TextInput
                    label={<Text style={styles.labelInputEmail}>Email</Text>}
                    placeholder='Seuemail@gmail.com'
                    placeholderTextColor="#3b3b3b"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputEmail}
                    mode="outlined"
                    keyboardType="email-address"
                    outlineColor="#ccc"
                    activeOutlineColor="#ccc"
                />

                <TextInput
                    label={<Text style={styles.labelInputSenha}>Senha</Text>}
                    placeholder='Digite sua senha'
                    value={senha}
                    onChangeText={setSenha}
                    style={styles.inputSenha}
                    mode="outlined"
                    secureTextEntry={!showPassword}
                    outlineColor="#ccc"
                    activeOutlineColor="#ccc"
                />
                <Icon
                    name={showPassword ? "visibility-off" : "visibility"}
                    size={24}
                    onPress={togglePasswordVisibility}
                    style={styles.icon}
                />
                <Button
                    mode="contained"
                    onPress={redefinirSenha}
                    style={styles.buttonEsqueciaSenha}>
                    <Text style={styles.buttonTextEsqueciaSenha}>
                        Esqueci minha senha
                    </Text>
                </Button>
                <Button
                    mode="contained"
                    onPress={realizarLogin}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Avançar
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default Login;
