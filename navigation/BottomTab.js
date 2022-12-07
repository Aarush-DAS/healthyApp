import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screen/DashBoard';
import Routine from '../screen/Routine';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    <Tab.Navigator>
        <Tab.Screen/>
        <Tab.Screen/>
    </Tab.Navigator>
}

export default BottomTabNavigator