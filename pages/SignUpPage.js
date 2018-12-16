import React, { Component } from 'react';
import { View,AppRegistry, Text, StyleSheet,ImageBackground,Image,TextInput,Button } from 'react-native';
import axios from 'axios'
import {DOMAIN} from '../constant/environment'
import {login} from '../action/userAction'
import {connect} from 'react-redux'
export default connect(null , {login})(class SignUpPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            email : "" ,firstname:"",lastname:"", password : "",
        }
    }
    async onSubmit(){
      try{
        const result = await axios.post(DOMAIN +"/user/register", {email : this.state.email , lName:this.state.lastname , fName : this.state.firstname , password :this.state.password})
        const data = result.data
        axios.defaults.headers.common.authorization = "Bearer " + data.token
        this.props.login(data.token)
          
        console.warn(data.token)
      }catch(err){
        console.log(err)
        console.warn("Register failed")
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
                  onPress={()=>this.onSubmit()}
                />
                </View>   
          </ImageBackground>
          
        );
      }
    }
)