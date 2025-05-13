import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#557dec',
        paddingHorizontal: 10,
        paddingTop: 50,
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
        width: "87%",
        height: 440,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        position: 'absolute',
        top: '30%',
        left: 35,
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
    camera: {
        position: 'absolute',
        top: 210,
        left: 250,
        padding: 5,
    },
    botao: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#668aee',
        padding: 5,
        borderRadius: 10,
        top: 20,
        left: 260,
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    dados: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
        textDecorationLine: 'underline',
        color: "rgb(27, 27, 27)",
        padding: 5,
        borderRadius: 10,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "rgb(14, 14, 14)",
        position: 'absolute',
        top: 40,
    },
    cart: {
        backgroundColor: "#ffffff",
        padding: 4,
        borderRadius: 10,
        marginLeft: 290,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: 75,
        marginTop: 80,
    },
    separator: {
        width: "100%",
        height: 1,
        marginTop: 5,
        backgroundColor: "black",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
    },
    buttonMyOrders: {
        borderRadius: 10,
        backgroundColor: "rgb(68, 156, 238)",
    },
    textButtonMyOrders: {
        fontSize: 17,
        color: "rgb(245, 245, 245)",
    },

    buttonMyCart: {
        borderRadius: 10,
        backgroundColor: "rgb(68, 156, 238)",
    },
    textButtonMyCart: {
        fontSize: 17,
        color: "rgb(245, 245, 245)",
    },

    logoutButton: {
        backgroundColor: "rgb(248, 31, 31)",
        padding: 5,
        borderRadius: 5,
        width: 70,
        height: 50,
        marginLeft: 290,
    },
    logoutButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});