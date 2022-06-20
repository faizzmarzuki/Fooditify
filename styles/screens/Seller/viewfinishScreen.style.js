import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#FFEFC7',
        paddingHorizontal: 10,
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
    },
    headerText: {
        marginLeft: 10,
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    container1: {
        margin: 20,
        flexDirection: 'column',
        backgroundColor: '#FFEFC7',
        borderWidth: 1,
        borderColor: '#2222',
    },
    container2: {
        margin: 10,
    },
    container3: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})