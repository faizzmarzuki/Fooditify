import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        justifyContent: 'center',
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 50,
        marginLeft: 20,
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    foodPrice: {
        fontSize: 14,
        fontWeight: '100',
        marginBottom: 10,
        color: 'black'
    },
    infoContainer: {
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: '#FFEFC7',
    },
    image: {
        width: '100%',
        height: 190,
    },
    buttonMain: {
        backgroundColor: '#523700',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 25,
        borderRadius: 10,
        position: 'absolute',
        bottom: 10,
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
    },
    headerText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#ebebeb',
    },
})