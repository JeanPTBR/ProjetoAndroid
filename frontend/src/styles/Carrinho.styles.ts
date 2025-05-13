import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 16,
        backgroundColor: '#557dec',
    },

    iconVoltar: {
        color: 'rgb(255, 255, 255)',
        borderColor: '#ffffff',
        borderWidth: 2,
        padding: 5,
        alignItems: 'center',
        borderRadius: 50,
        width: 45,
        height: 45,
        position: 'absolute',
        top: 65,
        left: 20,
    },

    frase: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 29,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 150,
    },

    container1: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50,
    },

    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#fff',
        borderWidth: 3,
    },

    container: {
        flex: 1,
        padding: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 29,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
    },

    saudacao: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fdfdfd',
        position: 'absolute',
        top: 50,
        left: 250,
    },

    checkboxSelectAll: {
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },

    textSavePedido: {
        color: '#000000',
    },

    savePedido: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },

    buttonPayment: {
        backgroundColor: '#2ff52f',
        borderRadius: 10,
        marginBottom: 10,
    },

    TextButtonPayment: {
        fontSize: 17,
        color: '#000000',
    },

    buttonPedido: {
        backgroundColor: '#aaaaaa',
        borderRadius: 10,
        marginBottom: 10,
    },

    TextButtonPedido: {
        color: '#ffffff',
    },

    buttonClearCart: {
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 16, 
        alignSelf: 'flex-end', 
        marginRight: 16,
        marginTop: 8,
        marginBottom: 10,
    },
    
});