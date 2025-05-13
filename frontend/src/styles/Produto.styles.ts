import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#557dec',
        paddingHorizontal: 10,
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
        top: 50,
        left: 20,
    },

    container: {
        padding: 11,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 250,
        width: 430,
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
        position: 'absolute',
        top: 90,
    },
    title: {
        fontSize: 20,
        color: "#000000",
        marginBottom: 10,
    },
    saudacao: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 45,
        left: 225,
    },

    nome: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    listaDescricao: {
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    itemDescricao: {
        fontSize: 16,
        marginBottom: 4,
    },

    preco: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain',
    },
});