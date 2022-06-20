import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../../styles/components/foodCard.style'

export default function FoodCard(){
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/Foodie-assets/food-1.jpg')} style={styles.image}/>
            <View style={styles.infoContainer}>
                <Text style={styles.text}>Mee Goreng</Text>
                <Text style={styles.text}>RM5.00</Text>
            </View>
        </View>
    )
}
