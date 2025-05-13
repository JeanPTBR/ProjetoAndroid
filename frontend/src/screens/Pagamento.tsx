import React, { useEffect, useState } from 'react';
import {
    View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity, Alert
} from 'react-native';
import { Button } from 'react-native-paper';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../styles/Pagamento.styles';
import * as Clipboard from 'expo-clipboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type PagamentoScreenRouteProp = RouteProp<RootStackParamList, 'Pagamento'>;
type NavigationProp = StackNavigationProp<RootStackParamList>;

const Pagamento = ({ route }: { route: PagamentoScreenRouteProp }) => {

    const { produtos, total, nome, email } = route.params;
    const navigation = useNavigation<NavigationProp>();

    const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);
    const [pixCopiaECola, setPixCopiaECola] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const code = `${pixCopiaECola}`;

    const CanceledPayment = () => {
        navigation.navigate('Carrinho', {
            nome,
            email,
            produtos,
            total,
            data: new Date().toISOString(),
        });
    };

    const goMyStore = () => {
        navigation.navigate('FaleConosco', { nome, email });
    };

    useEffect(() => {
        const gerarPagamento = async () => {
            try {
                const response = await fetch('http://192.168.1.19:3000/api/pagamento', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ valor: total, nome, email }),
                });
                const data = await response.json();
                setQrCodeImage(data.image);
                setPixCopiaECola(data.brcode);
            } catch (error) {
                console.error('Erro ao gerar pagamento:', error);
            } finally {
                setLoading(false);
            }
        };

        gerarPagamento();
    }, []);

    const copiarCodigo = async () => {
        await Clipboard.setStringAsync(code);
        Alert.alert('Sucesso!', 'Código PIX copiado.');
    };

    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.container1}>
                    <Image source={require('../assets/Logo.png')} style={styles.logo} />
                </View>
                <Text style={styles.title}>Pagamento</Text>
                <View style={styles.container}>
                    <View style={styles.productList}>
                        {produtos.map((produto) => (
                            <View key={produto.id} style={styles.product}>
                                <View style={styles.productInfo}>
                                    <Text style={styles.nome}>{produto.nome}</Text>
                                    <Text style={styles.quantidade}>Quantidade: ({produto.quantidade}x)</Text>
                                    <Text style={styles.preco}>R$ {produto.preco}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.total}>Total a Pagar: R$ {total.toFixed(2)}</Text>

                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        qrCodeImage && (
                            <Image
                                source={{ uri: qrCodeImage }}
                                style={styles.QrCode}
                            />
                        )
                    )}

                    {!loading && pixCopiaECola && (
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={copiarCodigo}>
                                <Icon name="content-copy" size={30} color="#007AFF" />
                            </TouchableOpacity>
                        </View>
                    )}

                    <Button onPress={CanceledPayment} style={styles.ButtonCancelPayment}>
                        <Text style={styles.TextButtonCancelPayment}>Cancelar</Text>
                    </Button>
                    <View>
                        <Text style={styles.faleconosco} onPress={goMyStore}>Fale conosco</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Pagamento;
