import React, { useState } from 'react';
import { View, Text, FlatList, Image, Alert, Linking } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { useCart } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ProdutoItem from './ProdutoItem';
import { styles } from '../styles/Carrinho.styles';

type CarrinhoScreenRouteProp = RouteProp<RootStackParamList, 'Carrinho'>;

const Carrinho = ({ route }: { route: CarrinhoScreenRouteProp }) => {

    const { nome, email } = route.params;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Carrinho'>>();
    const { cart, updateQuantity, removeFromCart, addPedido } = useCart();

    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const toggleItemSelection = (id: number) => {
        setSelectedItems(prevState =>
            prevState.includes(id)
                ? prevState.filter(itemId => itemId !== id) : [...prevState, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cart.map(item => item.id));
        }
        setSelectAll(!selectAll);
    };

    const calculatorTotal = () => {
        return cart
            .filter(item => selectedItems.includes(item.id))
            .reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    };

    const handlePayment = () => {
        if (selectedItems.length === 0) {
            Alert.alert('Atenção', 'Selecione um item ou mais para realizar o pagamento.');
            return;
        }

        const selectedProducts = cart.filter(item => selectedItems.includes(item.id));
        const total = calculatorTotal();

        navigation.navigate('Pagamento', {
            nome,
            email,
            produtos: selectedProducts,
            total
        });
    };

    const sendRequestWhatsApp = () => {
        if (selectedItems.length === 0) {
            Alert.alert('Atenção', 'Selecione um item ou mais para enviar o pedido');
            return;
        }

        const selectedProducts = cart.filter(item => selectedItems.includes(item.id));
        const totalSelecionado = selectedProducts.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

        const mensagem = selectedProducts.map(item =>
            `• ${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`
        ).join('\n');

        const textoFinal = `🛒 *Novo pedido* \n\n${mensagem}\n\n*Total: R$ ${totalSelecionado.toFixed(2)}*`;

        const numero = '556291526593';
        const url = `whatsapp://send?phone=${numero}&text=${encodeURIComponent(textoFinal)}`;

        Linking.openURL(url).catch(() => {
            Alert.alert('Erro', 'Não foi possível abrir o WhatsApp. Verifique se está instalado.');
        });

    };

    const salvarPedido = () => {

        if (selectedItems.length === 0) {
            Alert.alert('Atenção', 'Selecione um item ou mais para salvar o pedido');
            return;
        }

        const selectedProducts = cart.filter(item => selectedItems.includes(item.id));
        const totalSelecionado = selectedProducts.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        const dataCompra = new Date().toISOString();

        const novoPedido = {
            id: Date.now().toString(),
            produtos: selectedProducts,
            total: totalSelecionado,
            data: dataCompra
        };

        addPedido(novoPedido);

        Alert.alert('Sucesso', 'Pedido salvo com sucesso!');
    };

    const limparItensSelecionados = () => {
        if (selectedItems.length === 0) {
            Alert.alert('Atenção', 'Selecione um ou mais itens para remover.');
            return;
        }

        selectedItems.forEach(id => removeFromCart(id));
        setSelectedItems([]);
        setSelectAll(false);
        Alert.alert('Sucesso ✔', 'O(s) produto(s) foram removidos do carrinho.');
    };
    return (
        <View style={styles.body}>
            <Ionicons
                style={styles.iconVoltar}
                onPress={() => navigation.navigate('Perfil', { nome: nome, email: email })}
                name="arrow-back"
                size={30}
                color="black"
            />
            <View style={styles.container1}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.title}>Carrinho de Compras</Text>
            <Text style={styles.saudacao}>Olá {nome}</Text>
            <View style={styles.container}>
                {cart.length === 0 ? (
                    <Text style={styles.frase}>Carrinho está vazio 🙁.</Text>
                ) : (
                    <>
                        <Ionicons
                            onPress={limparItensSelecionados}
                            name="trash"
                            size={29}
                            color="rgb(0, 0, 0)"
                            style={styles.buttonClearCart}
                        />
                        <Checkbox.Item
                            label={selectAll ? "Desmarcar" : "Todos"}
                            status={selectAll ? 'checked' : 'unchecked'}
                            onPress={toggleSelectAll}
                            labelStyle={{ color: '#000' }}
                            style={styles.checkboxSelectAll}
                        />
                        <FlatList
                            data={cart}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <ProdutoItem
                                    item={item}
                                    isSelected={selectedItems.includes(item.id)}
                                    onToggleSelect={toggleItemSelection}
                                    onUpdateQuantity={updateQuantity}

                                />
                            )}
                        />
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button onPress={salvarPedido} style={styles.savePedido}>
                                <Text style={styles.textSavePedido}>Salvar Pedido</Text>
                            </Button>
                            <Button onPress={sendRequestWhatsApp} style={styles.buttonPedido}>
                                <Text style={styles.TextButtonPedido}>Enviar Pedido</Text>
                            </Button>
                        </View>
                        <Button
                            style={styles.buttonPayment}
                            onPress={handlePayment}
                            mode="contained" >
                            <Text style={styles.TextButtonPayment}>
                                Finalizar
                            </Text>
                        </Button>
                    </>
                )}
            </View>
        </View>
    );
};

export default Carrinho;