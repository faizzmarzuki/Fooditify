import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
    },
    bottomContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    split: {
        marginTop: 330,
        borderBottomWidth: 2,
        width: '100%',
    },
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 165,
    },
    button: {
        width: '100%',
        marginRight: 20,
        alignItems: 'center',
        backgroundColor: '#523700',
        borderRadius: 10,
        padding: 10,
    },
    textButton: {
        color: '#FFEFC7',
        fontWeight: 'bold',
    },
    textButton1: {
        color: '#523700',
        fontWeight: 'bold',
    },
    viewButton1: {
        width: '100%',
        height: 165,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        marginTop: 10,
        marginRight: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    icon:{
        display: 'flex',
    },
})