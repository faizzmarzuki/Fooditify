import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native'
import Header from '../../components/All/header';
import styles from '../../styles/screens/Seller/homeScreen.style'

export default function HomeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonHeader}>Restaurant</Text>
                        <Text style={styles.buttonText}>16</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Occupied')}>
                        <Text style={styles.buttonHeader}>Occupied</Text>
                        <Text style={styles.buttonText}>13</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Available')}>
                        <Text style={styles.buttonHeader}>Available</Text>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add')}>
                        <Text style={styles.buttonHeader}>Add Restaurant Owner</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}