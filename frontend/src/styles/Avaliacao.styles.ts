import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        padding: 20,
        backgroundColor: '#4971df',
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
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: 20,
    },
    logo: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderColor: '#ffffff',
        borderWidth: 3,
        marginTop: 0,
        marginBottom: 10,
    },
    container: {
        backgroundColor: 'rgb(187, 187, 187)',
        borderRadius: 12,
        padding: 20,
    },
    greeting: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'rgb(61, 61, 61)',
    },
    section: {
        marginBottom: 25,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
        fontWeight: '600',
    },
    starsContainer: {
        flexDirection: 'row',
    },
    star: {
        marginHorizontal: 5,
    },
    emojiContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10,
    },
    emojiSelected: {
        transform: [{ scale: 1.2 }],
    },
    textInputArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        textAlignVertical: 'top',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    saudacao: {
        color: 'white',
        fontSize: 18,
        marginTop: 30,
        marginLeft: 210,
        marginBottom: 20,
    },

    button: { 
        marginTop: 10,
        marginBottom: 20,
    },
});