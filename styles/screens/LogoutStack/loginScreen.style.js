import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        height: 40,
        margin: 12,
        alignItems: 'center',
        backgroundColor: '#523700',
        borderRadius: 10,
        padding: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    textButton: {
        color: '#FFEFC7',
        fontWeight: 'bold',
    },
    text: {
        color: '#523700',
        marginLeft: 12,
        marginTop: 10,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    h1: {
        color: '#523700',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 12,
    },
    upper:{
        alignItems: 'center',
        marginBottom: 10,
    },
    image:{
        alignItems: 'center',
        marginBottom: 20,
    },
    or:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    }
});