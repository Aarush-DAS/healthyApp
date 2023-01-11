import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
import { withTheme } from 'react-native-elements';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};
const appIcon = require("../assets/logo.png");

export default class Routine extends Component {
constructor(props){
    super(props);
    this.state={
        fontsLoaded:false,
        dropDownHeight:40,
        routine:"DrinkingWater",
    }
    

}
async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }


   async addRoutine(){
        if (this.state.routine && this.state.time){
            let routineData={
                routine:this.state.routine,
                time:this.state.time,
                routine_uid:firebase.aut().currentUser.uid,
            }
        

        await firebase.database().ref('/routine/'+(Math.random().toString(36).slice(2)))
            .set(routineData)
            .then(function(snapShot){
                
            })
            this.props.navigation.navigate("DashBoard")
        }
        else{Alert.alert('Error', 'fill all the field')}
    }
    render() {
        return (
            <View>
                <SafeAreaView/>
                //title
                //logo
            <DropDownPicker
            items={[
             {label:  "food",value:"food"},
             {label:"exercise",value:"exercise" },
             {label: "DrinkingWater",value:"DrinkingWater"},
             {label: "homeWork",value:"homeWork"},
             {label:"sleeping",value:"sleeping" }   
            ]}
            defaultValue={this.state.routine}
            open={this.state.dropDownHeight==100?true:false}
            onOpen={()=>{
                this.setState({dropDownHeight:100});
            }}
            onClose={()=>{
                this.setState({dropDownHeight:40});
            }}
            style={{backgroundColor:"transparent",
        borderWidth:1,
        borderColor:"white",
        }}
        textStyle={{
            color:this.state.dropDownHeight==100?"black":"white",
            fontFamily:"Bubblegum-Sans"
        }}
        onSelectItem={(item)=>
        this.setState({
            routine:item.value
        })
        }
            />
            <TextInput
            style={styles.textinput}
              onChangeText={text => this.setState({ Time: text })}
              placeholder={"TIME"}
              placeholderTextColor="#FFFFFF"
              
            />
             <TouchableOpacity>
             style={[styles.button, { marginTop: 30 }]}
              onPress={() => this.addRoutine()}
              <Text style={styles.buttonText}>Submit</Text>
             </TouchableOpacity>
            </View>
       
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
      alignItems:"center",
      justifyContent:"center"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appIcon: {
      width: RFValue(200),
      height: RFValue(200),
      resizeMode: "contain",
      marginBottom:RFValue(20)
    },
    appTitleText: {
      color: "white",
      textAlign: "center",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans",
      marginBottom:RFValue(20)
    },
    textinput: {
      width:  RFValue(250),
      height: RFValue(40),
      padding: RFValue(10),
      marginTop:RFValue(10),
      borderColor: "#FFFFFF",
      borderWidth: RFValue(4),
      borderRadius: RFValue(10),
      fontSize: RFValue(15),
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
      marginBottom:RFValue(20)
    },
    buttonText: {
      fontSize: RFValue(24),
      color: "#15193c",
      fontFamily: "Bubblegum-Sans"
    }
  });
  
