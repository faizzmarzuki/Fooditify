import React, { useEffect, useState } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Seller/homeScreen';
import FinishScreen from '../screens/Seller/finishScreen';
import MenuScreen from '../screens/Seller/menuScreen';
import MenuScreenEdit from '../screens/Seller/menuScreen.edit';
import OrderScreen from '../screens/Seller/orderScreen';
import PendingScreen from '../screens/Seller/pendingScreen';
import Profile from '../screens/Seller/profileScreen';
import Email from '../screens/Seller/profileScreen.email';
import Name from '../screens/Seller/profileScreen.name';
import Mobile from '../screens/Seller/profileScreen.mobile';
import Restaurant from '../screens/Seller/profileScreen.restaurant';
import ViewFinish from '../screens/Seller/viewScreen.finish';
import ViewOrder from '../screens/Seller/viewScreen.order';
import ViewPending from '../screens/Seller/viewScreen.pending';
import MainTabNavigator from './bottomTab.seller';
import RegisterRestaurant from '../screens/Seller/addRestaurantData';
import { authentication, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import MenuScreenAdd from '../screens/Seller/menuScreen.add';


const Stack = createNativeStackNavigator();


export default function SellerNavigator(){

    const [userInfo, setUserInfo] = useState([]);

    const GetData = async () => {
        const docRef = doc(db, "users", authentication.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        const fetch = async () => {
            const fetchedData = await GetData();
            setUserInfo(fetchedData);
        }
        fetch();
    }, [])

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {userInfo.firstTime === "yes" ? 
            <Stack.Screen name='RegisterRestaurant' component={RegisterRestaurant} /> : 
                <Stack.Screen name='BottomTab' component={MainTabNavigator} />
            }
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Finish' component={FinishScreen} />
            <Stack.Screen name='Menu' component={MenuScreen} />
            <Stack.Screen name='MenuEdit' component={MenuScreenEdit} />
            <Stack.Screen name='MenuAdd' component={MenuScreenAdd} />
            <Stack.Screen name='Order' component={OrderScreen} />
            <Stack.Screen name='Pending' component={PendingScreen} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Email' component={Email} />
            <Stack.Screen name='Name' component={Name} />
            <Stack.Screen name='Mobile' component={Mobile} />
            <Stack.Screen name='Restaurant' component={Restaurant} />
            <Stack.Screen name='ViewFinish' component={ViewFinish} />
            <Stack.Screen name='ViewOrder' component={ViewOrder} />
            <Stack.Screen name='ViewPending' component={ViewPending} />
        </Stack.Navigator>
    )
}