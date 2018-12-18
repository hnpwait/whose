import React from 'react'
import {Button,AppRegistry,View,StyleSheet,Icon,Image,TouchableOpacity,Text} from 'react-native'
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
            loading : true
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
            this.setState({UserData  , loading : false})
        })
        .catch(err=>{
            console.log(err.response)
            this.setState({loading : false})
        })
    }
    render()
    {
        if(Object.keys(this.state.UserData).length == 0){
            return <View style={{
            justifyContent: 'center',
            alignItems :"center"}}>
                <Text style={{fontSize:30,color:"#FF8000"}}>Loading..</Text>
            </View>
        }
        else 
      return(
        <View style={styles.box}>      
        <View style={styles.container}>   
        <View style={{height: 400,width:340,marginLeft:'auto',marginRight:'auto',marginTop:70,
        backgroundColor:"white",borderWidth:1,borderColor:'gray'}}>              
        <Image style= {{ width: 120,height:120,marginLeft:'auto',marginRight:'auto',
                            marginTop:30}} source ={ user }/>
        <Text style ={{fontSize:30, marginLeft:'auto',marginRight:'auto',marginTop:30,color:'black'}}>{this.state.UserData.fName} {this.state.UserData.lName} </Text>
                <View style = {{marginTop:70,height: 100,width:200,marginLeft:'auto',marginRight:'auto'}}>
                <Button 
                  title="Sign Out"
                  color="red"
                  accessibilityLabel="Sign Out"
                  onPress={()=>this.props.logout()}
                />
                </View>
            </View>
            </View> 
            </View>                               
        );
    }
  }
  const styles = StyleSheet.create(
    {
        box:{
            flex:1,
            backgroundColor: "rgb(251,251,251)"
        },
         container:
         {
             flex: 0.5,
             backgroundColor: "rgb(251,251,251)"
         }
        }
         );
            
export default connect(null , {logout})(ProfilePage)