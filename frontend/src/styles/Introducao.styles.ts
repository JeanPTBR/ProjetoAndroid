import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: '#557dec',
        
    },
    logo: {
        width: 140,
        height: 140,
        marginBottom: 5,
        borderRadius: 100,
        marginTop: 2,
        borderColor: '#ffffff',
        borderWidth: 3,
    },
    container: {
        flexDirection: "column",
        backgroundColor: "rgb(252, 252, 252)",
        alignItems: "center",
        width: "90%",
        borderRadius: 10,
        padding: 30,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    containerButtons: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        color: 'rgb(51, 51, 51)',
        marginBottom: 10,
    },
    title1: {
        fontSize: 18,
        color: 'rgb(231, 231, 231)',
        marginBottom: 15,
    },
    label: {
        fontSize: 12,
        color: 'rgb(255, 0, 0)',
    },
    buttonBase: {
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        width: 150,
    },

    button1: {
        backgroundColor: "rgba(0, 247, 255, 0.301)",
        borderColor: "rgba(0, 0, 0, 0.603)",
        borderWidth: 1.5,
    },

    button1Hover: {
        backgroundColor: "rgba(0, 247, 255, 0.733)",
        borderColor: "rgba(255, 255, 255, 0.603)",
        borderWidth: 1.5,
    },

    button2: {
        backgroundColor: "rgba(51, 255, 0, 0.438)",
        borderColor: "rgba(0, 0, 0, 0.603)",
        borderWidth: 1.5,
    },

    button2Hover: {
        backgroundColor: "rgb(66, 221, 27)",
        borderColor: "rgba(255, 255, 255, 0.603)",
        borderWidth: 1.5,
    },

    textButtonLogin: {
        fontSize: 16,
        color: 'rgba(7, 7, 7, 0.699)',
    },

    textButtonLoginHover: {
        fontSize: 16,
        color: 'rgb(255, 255, 255)',
    },

    textButtonRegister: {
        fontSize: 16,
        color: 'rgba(7, 7, 7, 0.699)',
    },

    textButtonRegisterHover: {
        fontSize: 16,
        color: 'rgb(255, 255, 255)',
    },

    container_imagens: {
        flexDirection: "column",
        width: '100%',
        justifyContent: 'center',
        backgroundColor: "rgba(48, 48, 48, 0.897)",
        padding: 10,
        alignItems: 'center',
        position: 'relative',
        top: 20,
    },
    img1: {
        width: 280,
        height: 380,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
    },
    img2: {
        width: 280,
        height: 380,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
    },
    prod1: {
        width: 280,
        height: 380,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
    },
    prod2: {
        width: 280,
        height: 380,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
    },
    mapContainer: {
        width: '95%',
        height: 280,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
        marginBottom: 5,
    },

    map: {
        ...StyleSheet.absoluteFillObject,

    },

    label1: {
        fontSize: 22,
        marginTop: 30,
        color: 'rgb(247, 247, 247)',
    },
});
