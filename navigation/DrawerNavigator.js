import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from './BottomTab';
import Profile from '../screen/Profile';
import LogOut from '../screen/LogOut';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={BottomTab} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
}

export default DrawerNavigator;