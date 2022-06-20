import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        // justifyContent: 'center',
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 50,
        marginLeft: 23,
        marginRight: 20,
    },
    text: {
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 23,
        marginRight: 20,
    },
    buttonMain: {
        backgroundColor: '#523700',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 40,
        marginLeft: 25,
        borderRadius: 10,
    },
    buttonText: {
        color: '#ebebeb',
    },
    totalContainer: {
        marginTop: 200,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
})