import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../../styles/components/occupiedList.style'
import OccupiedCard from './occupiedRestaurant';

export default function OccupiedList() {
    return (
        <View style={styles.container}>
            <ScrollView vertical={true}>
                <OccupiedCard/>
                <OccupiedCard/>
                <OccupiedCard/>
                <OccupiedCard/>
                <OccupiedCard/>
                <OccupiedCard/>
                <OccupiedCard/>
                <OccupiedCard/>
            </ScrollView>
        </View>
    )
}