import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
export default class Routine extends Component {
constructor(props){
    super()
    

}






    
    render() {
        return (
            <View>
            <DropDownPicker
            items={[
             {label: "  "}   
            ]}/>
            <TextInput>
            
            </TextInput>
             <TouchableOpacity>
    
             </TouchableOpacity>
            </View>
       
        )
    }
}