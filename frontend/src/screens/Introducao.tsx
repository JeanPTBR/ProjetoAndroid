import React, { useState } from 'react';
import { View, Image, ScrollView, Pressable } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/Introducao.styles';

type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Introducao'>;

const Introducao = () => {

    const navigation = useNavigation<IntroScreenNavigationProp>();
    const [isHoveredButton1, setIsHoveredButton1] = useState(false);
    const [isHoveredButton2, setIsHoveredButton2] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.containerButtons}>
                <Pressable
                    onPress={() => navigation.navigate('Login')}
                    onPressIn={() => setIsHoveredButton1(true)}
                    onPressOut={() => setIsHoveredButton1(false)} >
                    <Button
                        mode="contained"
                        style={[
                            styles.buttonBase,
                            isHoveredButton1 ? styles.button1Hover : styles.button1
                        ]}>
                        <Text style={isHoveredButton1 ? styles.textButtonLoginHover : styles.textButtonLogin}>
                            Login
                        </Text>
                    </Button>
                </Pressable>
                <Pressable
                    onPressIn={() => setIsHoveredButton2(true)}
                    onPressOut={() => setIsHoveredButton2(false)}
                    onPress={() => navigation.navigate('Cadastro')} >
                    <Button
                        mode="contained"
                        style={[
                            styles.buttonBase,
                            isHoveredButton2 ? styles.button2Hover : styles.button2
                        ]}>
                        <Text style={isHoveredButton2 ? styles.textButtonRegisterHover : styles.textButtonRegister}>
                            Cadastre-se
                        </Text>
                    </Button>
                </Pressable>
            </View>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
            <View style={styles.container}>
                <Text style={styles.title}>
                    Olá, seja bem vindo!
                </Text>
                <Text style={styles.title}>
                    Sinta-se em casa. A próxima fase da sua diversão começa agora!
                </Text>
            </View>
            <View style={styles.container_imagens}>
                <Text style={styles.title1}>
                    Venha conhecer nossa loja
                </Text>
                <Image source={require('../assets/Imagem1.jpg')} style={styles.img1} />
                <Image source={require('../assets/Imagem2.jpg')} style={styles.img2} />
                <Text style={styles.title1}>
                    Venha conhecer nossos produtos
                </Text>
                <Image source={require('../assets/Produto1.jpg')} style={styles.prod1} />
                <Image source={require('../assets/Produto2.jpg')} style={styles.prod2} />
            </View>
            <Text style={styles.label1}>
                Localização da loja
                <Icon name="location-sharp" size={30} color="#ffffff" />
            </Text>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -16.621962742033908,
                        longitude: -49.2852573315529,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }} >
                    <Marker
                        coordinate={{ latitude: -16.621962742033908, longitude: -49.2852573315529 }}
                        title="Lucas Games"
                        description="Av. Genésio de Lima Brito - Jardim Balneario Meia Ponte, Goiânia - GO, 74593-210"
                    />
                </MapView>
            </View>
        </ScrollView>
    );
};

export default Introducao;
