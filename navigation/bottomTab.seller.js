import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Seller/homeScreen';
import ProfileScreen from '../screens/Seller/profileScreen';
import {AntDesign, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function MainTabNavigator(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#523700',
                },
                tabBarActiveTintColor: '#FFEFC7'
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}