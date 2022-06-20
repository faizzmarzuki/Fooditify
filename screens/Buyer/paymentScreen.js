import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/screens/Buyer/paymentScreen.style'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-web';

export default function PaymentScreen() {

    const navigation = useNavigation()
    const [checked, setChecked] = useState('first');
    const [paymentValue, setPaymentValue] = useState('');

    const PaymentMethod = () => {
        setPaymentValue(checked);
        navigation.navigate('Order',{
            paymentType: paymentValue
        });
    }

    return (
        <View>
            <View style={styles.containerHeader}>
                <FontAwesome name='close' size={20}/>
                <Text style={styles.textHeader}>Payment Method</Text>
            </View>
            <View style={styles.containerRadio}>
                <View style={styles.containerContent}>
                    <RadioButton 
                        value="Credit or debit card"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={styles.textContent}>Credit or debit card</Text>
                </View>
                <View style={styles.containerContent}>
                    <RadioButton 
                        value="Cash"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text style={styles.textContent}>Cash</Text>
                </View>
                <View style={styles.containerContent}>
                    <RadioButton 
                        value="FPX"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    />
                    <Text style={styles.textContent}>FPX Online Banking</Text>
                </View>
                <TouchableHighlight onPress={PaymentMethod}>
                    <Text>Pay with this method</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}