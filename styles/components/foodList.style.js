import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    containerButton: {
        borderWidth: 2,
        borderColor: '#2222',
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 25,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
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
})