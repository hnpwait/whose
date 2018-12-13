import React, { Component } from 'react';
import { View,AppRegistry, Text, StyleSheet,ImageBackground,Image,TextInput,Button } from 'react-native';
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: false,
        email : "" , password : "",
    }
}

onChangeText(text, field) {
        this.setState({ [field]: text });
        console.warn(this.email)
      }
  render() {
    return (
      <ImageBackground style= {{height:'100%',width:'100%'}} source={require('../assets/BG.png')}>
        <View>
          <Image style= {{height:'72%',width:'72%',marginLeft:'auto',marginRight:'auto'}} source={require('../assets/logo4.png')}></Image>
        </View>

        <TextInput
                    underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 240, left: 50,padding : 10 }}
                    placeholder="  Email"
                    onChangeText={(text) => this.onChangeText(text, 'email')}
                />
                <TextInput
                secureTextEntry
                underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 305, left: 50,padding : 10}}
                    placeholder="  Password"
                    onChangeText={(text) => this.onChangeText(text, 'password')}
                />
                <View style={{height: 60,width:100,marginLeft:200,position: 'absolute', top: 370 }}>
                <Button
                  title="Login"
                  color="#FF8000"
                  accessibilityLabel="Login"                
                />
                </View>
                <View style={{height: 60,width:100,marginLeft:200,position: 'absolute',top: 415 }}>
                <Button
                  title="Sign Up?"
                  color="#8B5E30"
                  accessibilityLabel="Sign Up?"
                />
                </View>
        
      </ImageBackground>
      
    );
  }
}