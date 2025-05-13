import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { styles } from '../styles/Produto.styles';

type DetalhesProdutoRouteProp = RouteProp<RootStackParamList, 'Produto'>;
type DetalhesProdutoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Produto'>;

const Produto = ({ route }: { route: DetalhesProdutoRouteProp }) => {

    const { produto } = route.params;
    const { nome } = route.params;
    const descricaoLista = produto.descricao.split('\n');

    return (
        <View style={styles.body}>
            <Text style={styles.saudacao}>Olá {nome} </Text>
            <View style={styles.container1}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Informações do produto</Text>
                <Image source={{ uri: produto.imagemUrl }} style={styles.imagem} />
                <Text style={styles.nome}>Produto: {produto.nome}</Text>

                <View style={styles.listaDescricao}>
                    {descricaoLista.map((item, index) => (
                        <Text key={index} style={styles.itemDescricao}>Descrição: {item}</Text>
                    ))}
                </View>

                <Text style={styles.preco}>R$ {produto.preco}</Text>
            </View>
        </View>
    );
};

export default Produto;