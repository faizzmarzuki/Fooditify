import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Register from '../screens/LogoutStack/Register';
import Login from '../screens/LogoutStack/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './bottomTab.buyer';
import SellerNavigator from './screenNav.seller';
import AdminNavigator from './screenNav.admin';


const Stack = createNativeStackNavigator();

export default function LogoutStackNav(){

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={MainTabNavigator}/>
                <Stack.Screen name='Seller' component={SellerNavigator}/>
                <Stack.Screen name='Admin' component={AdminNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
