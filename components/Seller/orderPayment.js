import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Entypo, Foundation } from '@expo/vector-icons';
import styles from '../../styles/components/orderPayment.style'

export default function OrderPayment() {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Entypo name='wallet' size={18} style={styles.icon}>
                    <Text style={styles.h1}>Payment Method</Text>
                </Entypo>
            </View>
            <View style={styles.container2}>
                <Text>FPX Online Banking</Text>
                <Text>RM11.00</Text>
            </View>
        </View>
    )
}