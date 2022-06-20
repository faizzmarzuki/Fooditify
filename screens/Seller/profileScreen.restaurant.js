import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../styles/screens/Seller/profileScreen.restaurant.style'
import { Ionicons } from '@expo/vector-icons';

export default function NameScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={20} />
                <Text style={styles.headerText}>Restaurant</Text>
            </View>
            <View style={styles.containerIn}>
                <Text>This is how we'll address your restaurant.</Text>
            </View>
            <View style={styles.containerInput}>
                <Text>Restaurant ID</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <Text>Restaurant name</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}