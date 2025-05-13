import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Product = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    imagemUrl: string;
};

export type Pedido = {
    id: string;
    produtos: Product[];
    total: number;
    data: string;
};

type CartContextType = {
    cart: Product[];
    addToCart: (product: Product, showAlert?: boolean) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, newQuantity: number) => void;
    totalItems: number;
    totalPrice: number;
    pedidos: Pedido[];
    clearPedidos: () => void;
    addPedido: (pedido: Pedido) => void;
    removerPedido: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const loadCart = async () => {
            const savedCart = await AsyncStorage.getItem('cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        };
        loadCart();
    }, []);

    useEffect(() => {
        const saveCart = async () => {
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
        };
        saveCart();
    }, [cart]);

    useEffect(() => {
        const loadPedidos = async () => {
            const savedPedidos = await AsyncStorage.getItem('pedidos');
            if (savedPedidos) {
                setPedidos(JSON.parse(savedPedidos));
            }
        };
        loadPedidos();
    }, []);

    useEffect(() => {
        const savePedidos = async () => {
            await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
        };
        savePedidos();
    }, [pedidos]);

    const clearPedidos = () => {
        if (pedidos.length === 0) {
            Alert.alert('Ops!', 'A lista de pedidos está vazia');
            return;
        }
        setPedidos([]);
        Alert.alert('Sucesso!', 'A lista de pedidos foi limpada');
    };

    const removerPedido = (id: string) => {
        setPedidos((prevPedidos) => prevPedidos.filter((pedido) => pedido.id !== id));
    };

    const addToCart = (product: Product, showAlert: boolean = true) => {
        if (isNaN(Number(product.preco)) || product.preco <= 0) {
            Alert.alert('Erro', 'Preço inválido para o produto.');
            return;
        }
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                if (showAlert) {
                    Alert.alert('Produto Atualizado', `${product.nome} foi atualizado no carrinho.`);
                }
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantidade: Math.max(1, item.quantidade + 1) }
                        : item
                );
            }
            if (showAlert) {
                Alert.alert('Produto Adicionado', `${product.nome} foi adicionado ao carrinho.`);
            }
            return [...prevCart, {
                ...product,
                quantidade: isNaN(Number(product.quantidade)) ? 1 : Math.max(1, Number(product.quantidade))
            }];
        });
    };

    const addPedido = (pedido: Pedido) => {
        setPedidos(prev => [...prev, pedido]);
    };

    const removeFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }

    const updateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCart(prevCart => prevCart.map(item => item.id === productId ? {
            ...item, quantidade: Math.max(1, newQuantity)
        } : item));
    };

    const totalItems = useMemo(() => cart.reduce((acc, item) => acc + item.quantidade, 0), [cart]);

    const totalPrice = useMemo(() => cart.reduce((total, item) => total + (item.preco * item.quantidade), 0), [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalItems,
                totalPrice,
                pedidos,
                clearPedidos,
                removerPedido,
                addPedido
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
};
