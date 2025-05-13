import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 20,
        backgroundColor: '#557dec',
    },

    container1: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 60,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#fff',
        borderWidth: 3,
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
        top: 60,
        left: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#e0e0e0',
        marginTop: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    date: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555'
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10
    },
    nome: {
        fontSize: 16
    },
    preco: {
        fontSize: 16,
        color: 'green'
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    },
    buttonClearOrders: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 10,
    },
});