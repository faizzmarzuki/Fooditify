import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        justifyContent: 'center',
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 20,
        //marginLeft: 23,
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
        // marginBottom: 1,
        marginLeft: 25,
        borderRadius: 10,
    },
    buttonText: {
        color: '#ebebeb',
    },
    totalContainer: {
        marginTop: 260,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})