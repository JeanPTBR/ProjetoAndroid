import React, { useState } from "react";
import axios from 'axios';
import { View, Text, Alert, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../styles/RedefinirPerfil.styles";

type RedefinirUsuarioScreenRouteProp = RouteProp<RootStackParamList, 'RedefinirPerfil'>;
type RedefinirUsuarioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RedefinirPerfil'>;

const RedefinirPerfil = ({ route }: { route: RedefinirUsuarioScreenRouteProp }) => {

    const { nome: nomeAtual, email: emailAtual } = route.params;
    const [nome, setNome] = useState(nomeAtual);
    const [email, setEmail] = useState(emailAtual);
    const [isEditing, setIsEditing] = useState(false);

    const navigation = useNavigation<RedefinirUsuarioScreenNavigationProp>();

    const handleEditPress = async () => {
        if (!nome || !email) {
            Alert.alert("Ops ❗", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await axios.put("http://192.168.1.19:3000/UpdateUser", {
                nome,
                email,
                emailAtual: route.params.email,
            });

            if (response.status === 200) {
                Alert.alert("Sucesso", "Perfil atualizado com sucesso! ✔");
                navigation.navigate('Perfil', { nome: nome, email: email });
            } else {
                Alert.alert("Erro", "Não foi possível atualizar o perfil.");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Erro ao conectar ao servidor.");
        }

        setIsEditing(true);
    };


    const handleSavePress = () => {

        const isValidEmail = (email: string) =>
            /\S+@\S+\.\S+/.test(email);

        if (!isValidEmail(email)) {
            Alert.alert("Erro", "Email inválido.");
            return;
        }
        setIsEditing(false);
        Alert.alert("Sucesso", "Nome e email atualizados com sucesso ✔");
    };

    return (

        <View style={styles.body}>
            <Ionicons
                style={styles.iconVoltar}
                onPress={() => navigation.navigate('Perfil', { nome: nome, email: email })}
                name="arrow-back"
                size={30}
                color="black" />
            <View style={styles.container1}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Redefinir meu perfil</Text>

                <TextInput
                    label="Nome"
                    style={[styles.text, styles.inputNome]}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite seu nome"
                />
                <TextInput
                    label="Email"
                    style={[styles.text, styles.inputEmail]}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />
                <Button
                    mode="contained"
                    onPress={handleEditPress}
                    style={styles.ButtonSaveProfile} >
                    <Text style={styles.TextButtonSaveProfile}>Salvar</Text>
                </Button>
            </View>
        </View>
    );
};

export default RedefinirPerfil;