import React, { useState } from 'react';
import {
    View, Text, Image, TouchableOpacity,
    ScrollView, TextInput, Button, Alert
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { styles } from '../styles/Avaliacao.styles';
import { Ionicons } from '@expo/vector-icons';

type AvaliacaoScreenRouteProp = RouteProp<RootStackParamList, 'Avaliacao'>;
type AvaliacaoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Avaliacao'>;

const Avaliacao = ({ route }: { route: AvaliacaoScreenRouteProp }) => {

    const { nome, email } = route.params;
    const [feedback, setFeedback] = useState('');
    const [storeRating, setStoreRating] = useState(0);
    const [appRating, setAppRating] = useState(0);
    const [productRating, setProductRating] = useState(0);

    const emojis = ['😡', '😐', '🙂', '😃', '😍'];

    const navigation = useNavigation<AvaliacaoScreenNavigationProp>();

    const RatingSection = ({ title, rating, onRate }: {
        title: string;
        rating: number;
        onRate: (rating: number) => void;
    }) => (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.emojiContainer}>
                {emojis.map((emoji, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onRate(index + 1)}
                        style={rating === index + 1 ? styles.emojiSelected : {}}
                    >
                        <Text style={{ fontSize: 32 }}>{emoji}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>

    );

    const getNivelSatisfacao = (nota: number): string => {
        switch (nota) {
            case 1: return 'Péssimo';
            case 2: return 'Ruim';
            case 3: return 'Regular';
            case 4: return 'Bom';
            case 5: return 'Excelente';
            default: return 'Não avaliado';
        }
    };

    const enviarFeedback = () => {

        if (storeRating === 0 || appRating === 0 || productRating === 0) {
            Alert.alert("Ops ❗", "Por favor, avalie todos os itens (loja, app e produtos).");
            return;
        }
        if (!feedback.trim()) {
            Alert.alert("Ops ❗", "Por favor, preencha o campo de feedback.");
            return;
        }
        
        const corpoEmail = `
        Nota da loja: ${storeRating}/5
        Status: ${getNivelSatisfacao(storeRating)}

        Nota do app: ${appRating}/5
        Status:${getNivelSatisfacao(appRating)}
            
        Nota do(s) produto(s): ${productRating}/5
        Status: ${getNivelSatisfacao(productRating)}
            
        Feedback: ${feedback}
        `;

        const email = 'elianaferreiragomescarvalho@gmail.com';
        const assunto = 'Avaliação de um cliente!';

        const url = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;

        Linking.openURL(url);

        setFeedback('');
        setStoreRating(0);
        setAppRating(0);
        setProductRating(0);

        Alert.alert('Obrigado!', 'Sua Avaliação foi enviada com sucesso ✔');
    };

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <Ionicons
                style={styles.iconVoltar}
                onPress={() => navigation.navigate('Home', { nome: nome, email: email })}
                name="arrow-back"
                size={30}
                color="black" />
            <Text style={styles.saudacao}>Olá {nome}</Text>
            <View style={styles.container1}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    Seja bem-vindo!
                </Text>
                <RatingSection title="Avalie nossa Loja" rating={storeRating} onRate={setStoreRating} />
                <RatingSection title="Avalie nosso App" rating={appRating} onRate={setAppRating} />
                <RatingSection title="Avalie nossos Produtos" rating={productRating} onRate={setProductRating} />
            </View>
            <View style={{ padding: 16 }}>
                <TextInput
                    placeholder="Digite seu feedback..."
                    value={feedback}
                    onChangeText={setFeedback}
                    multiline
                    style={styles.textInputArea}
                    placeholderTextColor="#3b3b3b"
                />
                <View style={styles.button}>
                    <Button title="Enviar" onPress={enviarFeedback} />
                </View>
            </View>
        </ScrollView>
    );
};

export default Avaliacao;
