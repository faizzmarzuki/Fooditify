import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    headerContainer:{
        marginTop: 50,
    },
    input: {
        height: 40,
        margin: 12,
        width: '60%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    h1: {
        color: '#523700',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 12,
    },
    button: {
        width: '30%',
        height:45,
        marginTop: 10,
        marginRight: 20,
        alignItems: 'center',
        backgroundColor: '#523700',
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        color: '#FFEFC7',
    },
    viewContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})