import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#557dec',
        paddingHorizontal: 10,
        paddingTop: 70,
        paddingBottom: 30,
    },
    container1: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#fff',
        borderWidth: 3,
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingBottom: 20,
        width: '100%',
        borderRadius: 10,
        paddingTop: 20,
        marginBottom: 50,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
    },

    total: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold',
        marginVertical: 10,
    },

    productList: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },

    productInfo: {
        flex: 1,
        justifyContent: 'space-between',
    },

    nome: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    quantidade: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    preco: {
        fontSize: 16,
        color: 'green',
    },

    ButtonCancelPayment: {
        backgroundColor: '#fa2424',
        width: '40%',
        padding: 5,
        marginTop: 20,
        borderRadius: 5,
    },

    TextButtonCancelPayment: {
        fontSize: 17,
        color: 'rgb(255, 255, 255)',
    },

    QrCode: {
        height: 250,
        width: 250,
        marginTop: 20,
    },
    faleconosco:{ 
        marginTop: 20,
        backgroundColor: 'rgb(143, 143, 143)',
        padding: 10,
        borderRadius: 10,
        color: 'rgb(255, 255, 255)',
    },
});