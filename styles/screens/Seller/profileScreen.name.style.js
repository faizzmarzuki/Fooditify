import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        paddingHorizontal: 10,
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
    },
    headerText: {
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        marginTop: 10,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    containerIn: {
        marginLeft: 20,
    },
    containerInput: {
        marginTop: 40,
        marginLeft: 20,
    },
    containerButton: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 350,
        alignItems: 'center',
    },
    button: {
        width: '100%',
        margin: 12,
        alignItems: 'center',
        backgroundColor: '#523700',
        borderRadius: 10,
        padding: 10,
    },
    textButton: {
        color: '#FFEFC7',
        fontWeight: 'bold',
    },
})