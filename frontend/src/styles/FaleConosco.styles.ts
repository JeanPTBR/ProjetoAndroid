import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#557dec',
        alignItems: 'center',
        padding: 20,
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
    title: {
        fontSize: 24,
        marginVertical: 20,
        fontWeight: 'bold',
        color: 'rgb(255, 255, 255)',
    },

    container1: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30,
    },

    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#fff',
        borderWidth: 3,
    },
    description: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 30,
        color: 'rgb(255, 255, 255)',
    },
    button: {
        width: '50%',
        paddingVertical: 8,
        borderRadius: 8,
        height: 60,
    },
});