import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 40,
    },
    botContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginHorizontal: 25,
        marginRight: 70,
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
        width: '106%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        // marginBottom: 1,
        marginLeft: 25,
        borderRadius: 10,
    },
    buttonOutline: {
        borderWidth: 2,
        borderColor: '#523700',
        // backgroundColor: '#523700',
        width: '50%',
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
    buttonTextOutline: {
        color: '#523700',
    },
    totalContainer: {
        marginTop: 200,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})