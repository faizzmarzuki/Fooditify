import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7', 
    },
    stallButton: {
        marginTop: 30,
        marginHorizontal: 5,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        width: 178,
        height: 77,
        borderRadius: 8,
        backgroundColor: '#523700',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        marginTop: 5,
        width: 90,
        height: 21,
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 18,
        color: '#FFEFC7',
    },
});