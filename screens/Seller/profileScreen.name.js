import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../styles/screens/Seller/profileScreen.name.style'
import { Ionicons } from '@expo/vector-icons';

export default function NameScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={20} />
                <Text style={styles.headerText}>Name</Text>
            </View>
            <View style={styles.containerIn}>
                <Text>This is how we'll address you.</Text>
            </View>
            <View style={styles.containerInput}>
                <Text>First name</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <Text>Last name</Text>
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