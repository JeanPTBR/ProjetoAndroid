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
        paddingTop: 50,
    },

    logo: {
        width: 160,
        height: 160,
        marginBottom: 10,
        borderRadius: 100,
        borderColor: '#ffffff',
        borderWidth: 3,
    },

    container: {
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgb(255, 255, 255)",
        marginBottom: 100,
        borderRadius: 10,
        width: "100%",
        height: 400
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        fontFamily: "Arial",
        color: 'rgb(22, 22, 22)'
    },

    inputNome: {
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "transparent",
        borderWidth: 1,
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },

    inputEmail: {
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "rgb(2, 2, 2)",
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },

    inputSenha: {
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "rgb(2, 2, 2)",
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },

    labelInputNome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },

    labelInputSenha: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },

    labelInputEmail: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },

    icon: {
        position: 'absolute',
        top: 225,
        left: 290,
    },

    buttonBase: {
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonRegister: {
        backgroundColor: "rgba(43, 255, 0, 0.411)",
        borderWidth: 1.5,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 10,
        padding: 7,
    },
    buttonRegisterhover: {
        backgroundColor: "rgba(13, 252, 13, 0.733)",
        borderWidth: 1.5,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 10,
        padding: 7,
    },

    textButtonRegister: {
        fontSize: 19,
        color: 'rgb(78, 78, 78)',
    },
    textButtonRegisterHover: {
        fontSize: 19,
        color: 'rgb(255, 255, 255)',
    },
});