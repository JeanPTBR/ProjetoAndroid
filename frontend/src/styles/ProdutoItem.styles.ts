import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 16,
        backgroundColor: '#557dec',
    },
    nome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },

    descricao: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },

    preco: {
        fontSize: 16,
        color: '#2e7d32',
        fontWeight: 'bold',
        marginTop: 6,
    },

    imagem: {
        width: 200,
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain',
    },

    quantity: {
        fontSize: 14,
        marginBottom: 5,
    },

    productCard: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    productInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        borderColor: '#2492f8',
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        width: 140,
        backgroundColor: '#ffffff',
    },

    quantityButton: {
        width: 30,
        height: 30,
        tintColor: '#000000',
    },
    
});