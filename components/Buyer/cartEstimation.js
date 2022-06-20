import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../../styles/components/cartEstimation.style';

export default function CartEstimation() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Foodie-assets/illustration-1.png')}
                style={styles.illustration}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Estimated Pick Up</Text>
                <Text style={styles.text2}>30 min</Text>
            </View>
        </View>
    )
}