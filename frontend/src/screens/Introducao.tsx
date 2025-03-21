import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Introducao'>;

const Introducao = () => {
    const navigation = useNavigation<IntroScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />

            <Text style={styles.banner}>Bem-vindo à nossa loja!</Text>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/produto.jpg')} style={styles.image} />
                <Image source={require('../assets/loja.jpg')} style={styles.image} />
            </View>

            <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.button}>
                Login
            </Button>

            <Button mode="outlined" onPress={() => navigation.navigate('Cadastro')} style={styles.button}>
                Cadastrar-se
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    banner: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    button: {
        width: '80%',
        marginTop: 10,
    },
});

export default Introducao;
