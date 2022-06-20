import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../../styles/components/availableRestaurant.style'

export default function AvailableCard() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.text}>#1</Text>
                    <Text style={styles.text}>Kedai Air Ahmad</Text>
                    <Text style={styles.text}>Ahmad bin Kassim</Text>
                </View>
                <Image source={require('../../assets/Foodie-assets/food-1.jpg')} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}
