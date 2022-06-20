import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../styles/components/orderCard.style'

export default function OrderCard() {
    return (
        <TouchableOpacity>
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <Text>#9</Text>
                    <Text>Mohammad Faiz Bin Marzuki</Text>
                </View>
                <View style={styles.container3}>
                    <Text>Subtotal</Text>
                    <Text>RM11.00</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}