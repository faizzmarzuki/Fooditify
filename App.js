import * as React from 'react';
import MainTabNavigator from './navigation/bottomTab.buyer';
import LogoutStackNav from './navigation/logoutNav';
import BuyerNavigator from './navigation/screenNav.buyer';
import RegisterSeller from './screens/Admin/AddSeller';
import HomeScreen from './screens/Admin/homeScreen';
import OccupiedScreen from './screens/Admin/occupiedScreen';
import Cart from './screens/Buyer/cartScreen';
import MenuScreenAdd from './screens/Seller/menuScreen.add';
import MenuScreenEdit from './screens/Seller/menuScreen.edit';
import InsertOrder from './test';
import TestMenuScreen from './test';
import Chart from './test2';
import CartItemTest from './test2';

export default function App() {
  return (
    // <LogoutStackNav/>
    //<TestMenuScreen/>
    // <CartItemTest/>
    // <Cart/>
    //<InsertOrder/>
    <Chart/>
  );
}

