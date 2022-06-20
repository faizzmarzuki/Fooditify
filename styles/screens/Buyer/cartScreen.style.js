import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7', 
        //alignItems: 'center',
    },
    totalContainer:{
        marginHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text:{
        fontWeight: 'bold',
    },
    button:{
        fontWeight: 'bold',
        marginLeft: 30,
    },
    buttonMain:{
        backgroundColor: '#523700',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        borderRadius: 10,
    },
    buttonText:{
        color:'#ebebeb',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 30,
    },
})