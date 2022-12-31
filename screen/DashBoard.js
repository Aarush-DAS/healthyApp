import React, { Component } from 'react';
import { Text, View } from 'react-native';

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

