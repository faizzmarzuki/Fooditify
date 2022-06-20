import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddSeller from '../screens/Admin/AddSeller';
import AvailableScreen from '../screens/Admin/availableScreen';
import HomeScreen from '../screens/Admin/homeScreen';
import OccupiedScreen from '../screens/Admin/occupiedScreen';

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen name="Tab" component={MainTabNavigator} /> */}
            <Stack.Screen name="HomeAdmin" component={HomeScreen} />
            <Stack.Screen name="Add" component={AddSeller} />
            <Stack.Screen name="Available" component={AvailableScreen} />
            <Stack.Screen name="Occupied" component={OccupiedScreen} />
        </Stack.Navigator>
    )
}