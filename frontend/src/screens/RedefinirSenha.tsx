import React, { useState } from 'react';
import axios from 'axios';
import { Alert, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { styles } from '../styles/RedefinirSenha.styles';

type RedefinirSenhaScreenRouteProp = RouteProp<RootStackParamList, 'RedefinirSenha'>;
type RedefinirSenhaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RedefinirSenha'>;

const RedefinirSenha = ({ route }: { route: RedefinirSenhaScreenRouteProp }) => {

    const [novaSenha, setNovaSenha] = useState('');
    const [ConfirmeSenha, setConfirmeSenha] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const { email } = route.params;

    const navigation = useNavigation<RedefinirSenhaScreenNavigationProp>();

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const resetPassword = async () => {
        if (!novaSenha || !ConfirmeSenha) {
            Alert.alert("Ops ❗", "Por favor, preencha todos os campos.");
            return;
        }
        if (novaSenha !== ConfirmeSenha) {
            Alert.alert("Erro", "As senhas não coincidem");
            return;
        }
        try {
            const response = await axios.put("http://192.168.1.19:3000/UpdatePasswordUser", {
                email,
                novaSenha
            });
            
            if (response.status === 200) {
                Alert.alert("Sucesso", "Senha redefinida com sucesso! ✔");
                navigation.navigate('Login');
            } else {
                Alert.alert("Erro", "Não foi possível redefinir a senha.");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Erro ao conectar ao servidor.");
        }
    };

    const cancelresetPassword = async () => { navigation.navigate('Login'); };

    const goHome = async () => { navigation.navigate('Introducao'); };

    return (
        <View style={styles.body}>
            <Icon name="home" onPress={goHome} style={styles.sair} size={40} color="#ffffff" />
            <View style={styles.container1}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Alteração de senha</Text>

                <Text style={styles.label1}>Nova senha</Text>
                <View style={styles.containerInput1}>
                    <TextInput
                        placeholder='Digite sua senha'
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        style={styles.inputNovaSenha}
                        mode="outlined"
                        secureTextEntry={!showPassword1}
                        outlineColor="#ccc"
                        activeOutlineColor="#ccc"
                    />
                    <Icon
                        name={showPassword1 ? "visibility-off" : "visibility"}
                        size={24}
                        onPress={togglePasswordVisibility1}
                        style={styles.icon1}
                    />
                </View>

                <Text style={styles.label2}>Confirmar senha</Text>
                <View style={styles.containerInput2}>
                    <TextInput
                        placeholder='Confirme sua senha'
                        value={ConfirmeSenha}
                        onChangeText={setConfirmeSenha}
                        style={styles.inputConfirmeSenha}
                        mode="outlined"
                        secureTextEntry={!showPassword2}
                        outlineColor="#ccc"
                        activeOutlineColor="#ccc"
                    />
                    <Icon
                        name={showPassword2 ? "visibility-off" : "visibility"}
                        size={24}
                        onPress={togglePasswordVisibility2}
                        style={styles.icon2}
                    />
                </View>
                <Button mode="contained" onPress={resetPassword} style={styles.button}>
                    <Text style={styles.buttonText}>Alterar</Text>
                </Button>
                <Button mode="contained" onPress={cancelresetPassword} style={styles.button1}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </Button>
            </View>
        </View>
    );
};

export default RedefinirSenha;
