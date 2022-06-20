import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from '../../styles/components/cartItem.style'

export default function CartItem() {
    return (
        <View>
            <View style={styles.containerList}>
                <TouchableHighlight style={styles.Button}>
                    <Text style={styles.textButton}>1</Text>
                </TouchableHighlight>
                <Image
                    source={require('../../assets/Foodie-assets/food-1.jpg')}
                    style={styles.image}
                />
                <Text>Mee goreng</Text>
                <Text>RM 5.00</Text>
            </View>
            <View style={styles.containerList}>
                <TouchableHighlight style={styles.Button}>
                    <Text style={styles.textButton}>1</Text>
                </TouchableHighlight>
                <Image
                    source={require('../../assets/Foodie-assets/food-2.jpg')}
                    style={styles.image}
                />
                <Text>Mee goreng</Text>
                <Text>RM 5.00</Text>
            </View>
        </View>
    )
}