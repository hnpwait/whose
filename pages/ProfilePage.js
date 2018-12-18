import React from 'react'
import {Button,AppRegistry,View,StyleSheet,Icon,Image,ImageBackground,TouchableOpacity,Text} from 'react-native'
import user from '../assets/user.png'
import axios from 'axios'
import { DOMAIN } from '../constant/environment';
import {withRouter} from 'react-router-native'
import {logout} from '../action/userAction'
import {connect} from 'react-redux'
class ProfilePage extends React.Component{
    componentDidMount(){

    }
    constructor(){
        super()
        this.state ={
            currentPage : 0,
            UserData : {},
        }
    }
    onPageChange(item){
       
        this.setState({currentPage : item})
       
    }
    componentDidMount(){
        axios.get(DOMAIN + '/user/')
        .then(result=>{
            const data = result.data
            this.setState({UserData: data})
            this.props.history.push("/")
            console.log(result.UserData)
        })
        .catch(err=>{
            console.log(err.response)
        })
    }
    render()
    {
      return(           
        <View style={styles.container}>                   
        <Image style= {{ width: 120,height:120,marginLeft:'auto',marginRight:'auto'}} source ={ user }/>
        <View style={{height: 60,width:300,marginLeft:'auto',marginRight:'auto',marginTop:150}}>
        <Text>{this.state.UserData.fName} {this.state.UserData.lName} </Text>
                <Button
                  title="Sign Out"
                  color="red"
                  accessibilityLabel="Sign Out"
                  onPress={()=>this.props.logout()}
                />
                </View>                              
        </View>
        );
    }
  }
  const styles = StyleSheet.create(
    {
         container:
         {
             flex: 1,
             backgroundColor: 'pink'
         }
        }
         );
    AppRegistry.registerComponent('App', () => App);
            
export default connect(null , {logout})(ProfilePage)