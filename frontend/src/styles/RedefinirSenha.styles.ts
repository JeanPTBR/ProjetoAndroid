import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: '#557dec',
    },
    container1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
    },

    logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
        borderRadius: 100,
        borderColor: '#ffffff',
        borderWidth: 3,
    },

    container: {
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 10,
        width: "100%",
        position: 'absolute',
        top: 260,
        left: 20,
    },
    sair: {
        position: 'absolute',
        top: 40,
        left: 20,
        right: 330,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: 'rgb(82, 82, 82)',
    },
    inputNovaSenha: {
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "transparent",
        borderWidth: 1,
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },
    inputConfirmeSenha: {
        marginBottom: 1,
        borderRadius: 5,
        borderColor: "transparent",
        borderWidth: 1,
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },
    button: {
        backgroundColor: "rgb(60, 135, 233)",
        marginTop: 20,
        borderRadius: 5,
        width: "100%",
    },
    button1: {
        backgroundColor: "rgb(230, 29, 29)",
        marginTop: 15,
        borderRadius: 5,
        width: "100%",
    },
    buttonText: {
        fontSize: 19,
        color: 'rgb(252, 252, 252)',
    },
    icon1: {
        position: 'absolute',
        top: 15,
        left: 260,
    },
    icon2: {
        position: 'absolute',
        top: 15,
        left: 260,
    },
    containerInput1: {
        justifyContent: "center",
        padding: 5,
        backgroundColor: "rgb(255, 255, 255)",
        width: "100%",
    },
    containerInput2: {
        justifyContent: "center",
        padding: 5,
        backgroundColor: "rgb(255, 255, 255)",
        width: "100%",
    },
    label1: {
        fontSize: 16,
        marginLeft: 5,
        color: 'rgb(20, 20, 20)',
    },
    label2: {
        fontSize: 15,
        marginLeft: 5,
        color: 'rgb(20, 20, 20)',
    },
});