import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/components/occupiedList.style'
import AvailableCard from './availableRestaurant';

export default function AvailableList() {
    return (
        <View style={styles.container}>
            <ScrollView vertical={true}>
                <AvailableCard/>
                <AvailableCard/>
                <AvailableCard/>
                <AvailableCard/>
                <AvailableCard/>
                <AvailableCard/>
                <AvailableCard/>
                <AvailableCard/>
                <AvailableCard/>
            </ScrollView>
        </View>
    )
}