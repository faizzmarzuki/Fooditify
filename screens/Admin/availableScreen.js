import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from '../../styles/screens/Seller/viewfinishScreen.style'
import { Ionicons } from '@expo/vector-icons';
import AvailableList from '../../components/Admin/availableList';

export default function AvailableScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={30} />
                <Text style={styles.headerText}>Available</Text>
            </View>
            <ScrollView>
                <AvailableList/>
            </ScrollView>
        </View>
    )
}