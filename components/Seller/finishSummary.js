import React from 'react'
import { Text, View } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import styles from '../../styles/components/finishSummary.style'

export default function FinishSummary() {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Foundation name='clipboard-notes' size={18} style={styles.icon}>
                    <Text>Order summary</Text>
                </Foundation>
            </View>
            <View style={styles.container2}>
                <Text>1x</Text>
                <Text>Mee goreng</Text>
                <Text>RM6.00</Text>
            </View>
            <View style={styles.container2}>
                <Text>1x</Text>
                <Text>Laksa Johor</Text>
                <Text>RM6.00</Text>
            </View>
            <View style={styles.border} />
            <View style={styles.container3}>
                <Text>Subtotal</Text>
                <Text>RM11.00</Text>
            </View>
        </View>
    )
}