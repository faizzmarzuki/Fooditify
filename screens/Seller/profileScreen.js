import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons, Foundation } from '@expo/vector-icons';
import styles from '../../styles/screens/Seller/profileScreen.style'
import RestaurantCard from '../../components/Seller/restaurantCard';
import MobileCard from '../../components/Seller/mobileCard';
import EmailCard from '../../components/Seller/emailCard';
import NameCard from '../../components/Seller/nameCard';
import { useNavigation } from '@react-navigation/native';
import { authentication } from '../../firebase';
import { signOut } from 'firebase/auth';

export default function ProfileScreen() {

    const navigation = useNavigation()

    const SignOut = () => {
        signOut(authentication)
            .then(() => {
                console.log("Successfully sign out")
                navigation.navigate('Login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Text style={styles.header}>Profile</Text>
                <Ionicons name='ios-log-out-outline' size={30} onPress={SignOut}/>
            </View>
            <NameCard/>
            <EmailCard/>
            <MobileCard/>
            <RestaurantCard/>
        </View>
    )
}