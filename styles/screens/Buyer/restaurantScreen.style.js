import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7', 
    },
    infoContainer:{
        borderBottomWidth: 2,
        borderColor: '#2222',
        backgroundColor: '#FFEFC7',
    },
    textContainer:{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonInfo:{
        borderWidth: 1,
        borderRadius: 8,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#29211b',
        borderColor: '#29211b',
    },
    buttonText:{
        margin: 5,
        color: '#FFEFC7',
    },
    mainText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#29211b',
    },
    minText:{
        marginLeft: 20,
        marginBottom: 10,
        color:'#29211b',
    },
    image:{
        width: '100%',
        height: 165,
    },
})