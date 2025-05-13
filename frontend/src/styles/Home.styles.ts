import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#557dec',
        paddingHorizontal: 10,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    saudacao: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 1,
    },
    menu: {
        height: 65,
        width: '110%',
        position: 'absolute',
        left: 290,
        marginTop: 90,
    },
    ContainerPerfil: {
        backgroundColor: "transparent",
        height: 65,
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
        marginTop: -15,
        marginLeft: -10,
    },
    meuPerfil: {
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    star: {
        backgroundColor: "#ffffff",
        padding: 4,
        borderRadius: 10,
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
    productCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 16,
        color: '#444',
        marginBottom: 10,
    },
    verProduto: {
        marginTop: 10,
        borderColor: '#000000',
        borderRadius: 10,
        backgroundColor: "#acacac",
    },
    TextVerProduto: {
        color: '#ffffff',
    },
    addButton: {
        marginTop: 10,
        borderColor: '#000000',
        borderRadius: 10,
        backgroundColor: "#2ee0ff",
    },
    TextaddButton: {
        color: '#ffffff',
    },
    nosAvalie: {
        color: 'white',
    },
});