import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Buyer/homeScreen.js';
import SearchScreen from '../screens/Buyer/searchScreen.js';
import CartScreen from '../screens/Buyer/cartScreen.js';
import ProfileScreen from '../screens/Buyer/profileScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import BuyerNavigator from './screenNav.buyer.js';


const Tab = createBottomTabNavigator()

export default function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#523700',
                },
                tabBarActiveTintColor: '#FFEFC7'
            }}
        >
            <Tab.Screen name="Stack" component={BuyerNavigator}
                options={{
                    tabBarButton: () => (<View style={{ width: 0, height: 0 }}></View>),
                    tabBarVisible: false
                }}
            />
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-search-sharp" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Cart" component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-bag" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}