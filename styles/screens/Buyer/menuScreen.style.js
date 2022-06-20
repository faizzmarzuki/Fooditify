import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
    }, 
    infoContainer: {
        borderBottomWidth: 2,
        borderColor: '#2222',
        backgroundColor: '#FFEFC7',
    },
    textContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    split: {
        marginTop: 320,
        borderBottomWidth: 2,
        width: '100%',
    },
    inputContainer:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
    },
    contentBottom:{
        flexDirection: 'row',
    },
    textBottom:{
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 165,
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#29211b',
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
    input: {
        height: 40,
        marginTop: 10,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
})