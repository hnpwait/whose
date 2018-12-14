import React, { Component } from 'react';
import { View,AppRegistry, Text, StyleSheet,ImageBackground,Image,TextInput,Button } from 'react-native';
export default class SignUpPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            email : "" ,firstname:"",lastname:"", password : "",
        }
    }
    onChangeText(text, field) {
            this.setState({ [field]: text });
    }
      render() {
        return (
          <ImageBackground style= {{height:'100%',width:'100%'}} source={require('../assets/BG.png')}>
            <View>
              <Image style= {{height:'60%',width:'60%',marginLeft:'auto',marginRight:'auto'}} source={require('../assets/logo4.png')}></Image>     
            </View>
            <TextInput
                    underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 180, left: 50,padding : 10 }}
                    placeholder="  Email"
                    onChangeText={(text) => this.onChangeText(text, 'email')}
                />
                <TextInput
                secureTextEntry
                underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 245, left: 50,padding : 10}}
                    placeholder="  Firstname"
                    onChangeText={(text) => this.onChangeText(text, 'firstname')}
                />
                 <TextInput
                    underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 310, left: 50,padding : 10 }}
                    placeholder="  Lastname"
                    onChangeText={(text) => this.onChangeText(text, 'lastname')}
                />
                <TextInput
                secureTextEntry
                underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 375, left: 50,padding : 10}}
                    placeholder="  Password"
                    onChangeText={(text) => this.onChangeText(text, 'password')}
                    
                />
                <View style={{height: 60,width:100,marginLeft:200,position: 'absolute',top: 440 }}>
                <Button
                  title="Sign Up!"
                  color="#FF8000"
                  accessibilityLabel="Sign Up"
                />
                </View>   
          </ImageBackground>
          
        );
      }
    }
