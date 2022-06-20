import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CartScreen from '../screens/Buyer/cartScreen.js';
import CheckoutScreen from '../screens/Buyer/checkoutScreen.js';
import EmailScreen from '../screens/Buyer/emailScreen.js';
import HomeScreen from '../screens/Buyer/homeScreen.js';
import MenuScreen from '../screens/Buyer/menuScreen.js';
import MobileScreen from '../screens/Buyer/mobileScreen.js';
import NameScreen from '../screens/Buyer/nameScreen.js';
import OrderScreen from '../screens/Buyer/orderScreen.js';
import PaymentScreen from '../screens/Buyer/paymentScreen.js';
import ProfileScreen from '../screens/Buyer/profileScreen.js';
import RestaurantScreen from '../screens/Buyer/restaurantScreen.js';
import SearchScreen from '../screens/Buyer/searchScreen.js';
import MainTabNavigator from './bottomTab.buyer'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function BuyerNavigator(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen name="Tab" component={MainTabNavigator} /> */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="Email" component={EmailScreen} />
            <Stack.Screen name="Mobile" component={MobileScreen} />
            <Stack.Screen name="Name" component={NameScreen} />
        </Stack.Navigator>
    )
}