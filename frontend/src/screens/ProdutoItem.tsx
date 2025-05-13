import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { styles } from '../styles/ProdutoItem.styles';

interface ProductItemProps {
    item: any;
    isSelected: boolean;
    onToggleSelect: (id: number) => void;
    onUpdateQuantity: (id: number, newQuantity: number) => void;
}

const ProductItem = ({ item, isSelected, onToggleSelect, onUpdateQuantity }: ProductItemProps) => {
    return (
        <View style={styles.productCard}>
            <View style={styles.productInfo}>
                <Checkbox
                    status={isSelected ? 'checked' : 'unchecked'}
                    onPress={() => onToggleSelect(item.id)}
                />
                <View>
                    <Image source={{ uri: item.imagemUrl }} style={styles.imagem} />
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                    <Text style={styles.preco}>R$ {item.preco}</Text>
                    <Text style={styles.quantity}>Quantidade: {item.quantidade}</Text>
                </View>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => onUpdateQuantity(item.id, Math.max(1, item.quantidade - 1))}>
                    <Image source={require('../assets/menos.png')} style={styles.quantityButton} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onUpdateQuantity(item.id, item.quantidade + 1)}>
                    <Image source={require('../assets/mais.png')} style={styles.quantityButton} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default React.memo(ProductItem);