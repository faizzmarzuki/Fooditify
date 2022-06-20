import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../../styles/screens/Buyer/orderScreen.style'
import OrderDetails from '../../components/Buyer/orderDetails';
import { useNavigation } from '@react-navigation/native';

export default function OrderScreen(){

    const navigation = useNavigation()

    return(
        <ScrollView vertical={true}>
            <View style={styles.mainContainer}>
                <View style={styles.firstContainer}>
                    <Text style={styles.header}>Your order</Text>
                    <Text style={styles.h2}>Estimated finish time</Text>
                    <Text style={styles.h3}>10 min</Text>
                    <FontAwesome5 name={'check-circle'} size={40} color={'green'} />
                    <Text style={styles.h4}>Got your order Faiz!</Text>
                </View>
                <OrderDetails/>
                <View style={styles.sixthContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonMain}>
                        <Text style={styles.buttonText}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}