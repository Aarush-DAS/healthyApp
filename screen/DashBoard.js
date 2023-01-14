import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from "firebase";
export default class DashBoard extends Component {
    getRoutine=()=>{firebase.database().ref("/users/" + userCredential.user.uid)
    .get({
      email: userCredential.user.email,
      first_name: first_name,
      last_name: last_name,
      DOB:DOB,
      contact:contact,
    })}
    
                
                render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Dashboard</Text>
            </View>
        )
        
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
      alignItems: "center",
      justifyContent: "center"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appIcon: {
      width: RFValue(200),
      height: RFValue(200),
      resizeMode: "contain",
      marginBottom: RFValue(20)
    },
    appTitleText: {
      color: "white",
      textAlign: "center",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans",
      marginBottom: RFValue(20)
    },
    textinput: {
      width: RFValue(250),
      height: RFValue(50),
      padding: RFValue(10),
      borderColor: "#FFFFFF",
      borderWidth: RFValue(4),
      borderRadius: RFValue(10),
      fontSize: RFValue(20),
      color: "#FFFFFF",
      backgroundColor: "#15193c",
      fontFamily: "Bubblegum-Sans"
    },
    button: {
      width: RFValue(250),
      height: RFValue(50),
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: RFValue(30),
      backgroundColor: "white",
      marginBottom: RFValue(20)
    },
    buttonText: {
      fontSize: RFValue(24),
      color: "#15193c",
      fontFamily: "Bubblegum-Sans"
    }
  });
  
  

