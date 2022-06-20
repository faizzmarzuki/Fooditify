import React from 'react'
import { View, Image } from 'react-native';
import styles from '../../styles/screens/splashScreen.style'

export default function splashScreen(){
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={require('../../assets/Foodie-assets/Splashscreen.png')}
            />
        </View>
    );
}