import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screen/DashBoard';
import Routine from '../screen/Routine';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({route})=>({
            tabBarIcon:({ focused, color, size })=>{
                let iconName;
                if( route.name ==="DashBoard"){
                    iconName = focused ? "home" : "home-outline";
                }else if (route.name ==="Routine"){
                    iconName = focused ? "add-circle" : "add-circle-outline";
                }

                return (
                    <Ionicons
                    name={iconName}
                    size={RFValue(25)}
                    color={color}
                    style={styles.icons}
                    />
                )
            }
        })

        }

        activeColor={"#ee8249"}
        inactiveColor={"gray"}
    >
        <Tab.Screen name="DashBoard" component={Dashboard} options={{headerShown:false}}/>
        <Tab.Screen name="Routine" component={Routine} options={{headerShown:false}}/>
    </Tab.Navigator>
}


const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor:"green" ,
        height:"8%",
        borderTopLeftRadius:RFValue(25),
        borderTopRightRadius:RFValue(25),
        
        overflow: "hidden",
        position: "absolute"


    },
    icons: {
        width: RFValue(25),
        height: RFValue(25)

    }
    
})
export default BottomTabNavigator

