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
        top: 60,
        left: 20,
    },
    container: {
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 10,
        width: "100%",
        height: 400,
        marginTop: 110,
    },
    container1: {
        alignItems: 'center',
        marginTop: 50,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#fff',
        borderWidth: 3,
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
        color: "rgb(10, 10, 10)",
    },
    inputNome: {
        borderRadius: 5,
        borderColor: "transparent",
        borderWidth: 1,
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },

    inputEmail: {
        marginBottom: 15,
        borderRadius: 5,
        borderColor: "rgb(2, 2, 2)",
        backgroundColor: 'rgb(224, 224, 224)',
        fontFamily: "Roboto",
        width: "100%",
        height: 40
    },

    ButtonSaveProfile: {
        backgroundColor: 'rgb(50, 142, 248)',
        borderRadius: 10,
    },
    TextButtonSaveProfile: {
        color: "rgb(255, 255, 255)",
        fontSize: 17,
    },
});