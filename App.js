import * as React from "react";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"
import LoginScreen from "./screen/LoginScreen";
import Registration from "./screen/registration";
import DrawerNavigator from "./navigation/DrawerNavigator";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  
}else {firebase.app}
const stack=createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="registration" component={registrationScreen}/>
      <Stack.Screen name="Drawer" component={DrawerNavigator}/>
    </Stack.Navigator>
  )

}
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>)

}

