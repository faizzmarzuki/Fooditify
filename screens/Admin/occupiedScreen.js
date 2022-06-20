import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from '../../styles/screens/Seller/viewfinishScreen.style'
import { Ionicons } from '@expo/vector-icons';
import OccupiedList from '../../components/Admin/occupiedList';

export default function OccupiedScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={30} />
                <Text style={styles.headerText}>Occupied</Text>
            </View>
            <ScrollView>
                <OccupiedList/>
            </ScrollView>
        </View>
    )
}