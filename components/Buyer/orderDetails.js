import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../../styles/screens/Buyer/orderScreen.style'

export default function OrderDetails(){
    return(
        <View>
            <View style={styles.secondContainer}>
                <Text style={styles.h4}>Order Details</Text>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>1x Nasi Goreng Paprik</Text>
                    <Text style={styles.text2}>RM 6.00</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>1x Nasi Goreng</Text>
                    <Text style={styles.text2}>RM 5.00</Text>
                </View>
            </View>
            <View style={styles.split}></View>
            <View style={styles.thirdContainer}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text2}>RM 11.00</Text>
            </View>
            <View style={styles.split}></View>
            <View style={styles.fourthContainer}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text2}>RM 11.00</Text>
            </View>
            <View style={styles.split}></View>
            <View style={styles.fifthContainer}>
                <Text style={styles.text}>Paid with</Text>
                <Text style={styles.text2}>Cash</Text>
            </View>
        </View>
    )
}