import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../styles/screens/Buyer/emailScreen.style'
import { Ionicons } from '@expo/vector-icons';

export default function NameScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={20} />
                <Text style={styles.headerText}>Email</Text>
            </View>
            <View style={styles.containerIn}>
                <Text>Make sure we can reach you at your email.</Text>
            </View>
            <View style={styles.containerInput}>
                <Text>Email</Text>
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