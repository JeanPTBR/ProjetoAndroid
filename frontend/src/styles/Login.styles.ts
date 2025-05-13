import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
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
        top: 60,
        left: 20,
    },
    container1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
    },

    logo: {
        width: 160,
        height: 160,
        marginBottom: 10,
        borderRadius: 100,
        borderColor: '#ffffff',
        borderWidth: 3,
        marginTop: 20,
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
    title: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 10,
        color: 'rgb(19, 19, 19)',
        marginLeft: 2,
    },
    input: {
        marginBottom: 10,
        width: "100%",
    },

    inputEmail: {
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "transparent",
        borderWidth: 1,
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },
    inputSenha: {
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "transparent",
        borderWidth: 1,
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },

    labelInputEmail: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    labelInputSenha: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        backgroundColor: "rgb(29, 138, 240)",
        marginTop: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 19,
        color: 'rgb(252, 252, 252)',
    },
    buttonEsqueciaSenha: {
        backgroundColor: "transparent",
        marginTop: 5,
        marginLeft: -30,
        width: "70%",
    },
    buttonTextEsqueciaSenha: {
        textDecorationLine: 'underline',
        fontSize: 16,
        color: 'rgb(250, 0, 0)',
    },
    icon: {
        position: 'absolute',
        top: 140,
        left: 280,
    },
});