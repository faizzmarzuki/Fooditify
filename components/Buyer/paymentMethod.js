import React, { useState } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Entypo, Foundation } from '@expo/vector-icons';
import styles from '../../styles/components/paymentMethod.style'
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function PaymentMethod(){

    const navigation = useNavigation()
    const [paymentMethod, setPaymentMethod] = useState("Online Transfer")
    const nav = () => {
        
        navigation.navigate("Checkout",{
            payment: paymentMethod
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <Entypo name='wallet' size={18} style={styles.icon}>
                    <Text style={styles.h1}>Payment Method</Text>
                </Entypo>
                <TouchableHighlight onPress={() => navigation.navigate('Payment')}>
                    <Foundation name='pencil' size={18}/>
                </TouchableHighlight>
            </View>
            <View style={styles.container2}>
                
                {/* <Text>FPX Online Banking</Text> */}
                <Picker
                    selectedValue={paymentMethod}
                    onValueChange={(itemValue) => setPaymentMethod(itemValue)}
                    // style={styles.picker}
                >
                    <Picker.Item label='Online Transfer' value="Online Transfer" />
                    <Picker.Item label='Card Credit' value="Card Credit" />
                </Picker>
                {/* <Text>RM11.00</Text> */}
            </View>
        </View>
    )
}