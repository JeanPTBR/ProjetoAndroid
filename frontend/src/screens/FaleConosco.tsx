import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/FaleConosco.styles';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';

type SobreScreenRouteProp = RouteProp<RootStackParamList, 'FaleConosco'>;
type SobreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FaleConosco'>;

const FaleConosco = ({ route }: { route: SobreScreenRouteProp }) => {

    const { nome, email } = route.params;
    const navigation = useNavigation<SobreScreenNavigationProp>();

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Sobre a nossa loja</Text>
            <Ionicons
                style={styles.iconVoltar}
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={30}
                color="black"
            />
            <View style={styles.container1}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>

            <Text style={styles.description}>
                Bem-vindo à nossa loja online, {nome}!{"\n\n"}
                Oferecemos uma grande variedade de produtos com qualidade, rapidez e segurança.
                Nossa missão é entregar excelência a cada clique!
            </Text>

            <Text style={styles.description}>
                Contatos{"\n\n"}
                Nome{"\n"} Lucas Gomes de Carvalho{"\n\n"}
                Telefone{"\n"} +55 (62) 9152-6593{"\n\n"}
                Email{"\n"}elianaferreiragomescarvalho@gmail.com
            </Text>
        </View >
    );
};

export default FaleConosco;