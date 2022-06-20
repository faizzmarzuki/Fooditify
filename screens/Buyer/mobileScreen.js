import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
import styles from '../../styles/screens/Buyer/mobileScreen.style'
import { Ionicons } from '@expo/vector-icons';

export default function MobileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='arrow-back' size={20} />
                <Text style={styles.headerText}>Mobile</Text>
            </View>
            <View style={styles.containerIn}>
                <Text>
                    If you change to a new number, we’ll take you
                    through a verification process at checkout the
                    next time you order.
                </Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.text}>Mobile number</Text>
                <PhoneInput containerStyle={styles.phoneInput} />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}