import React from 'react'
import {Button,AppRegistry,View,StyleSheet,Icon,Image,ImageBackground,TouchableOpacity} from 'react-native'
import axios from 'axios'
import {withRouter} from 'react-router-native'
class ProfilePage extends React.Component{
    componentDidMount(){

    }
    constructor(){
        super()
        this.state ={
            currentPage : 0
        }
    }
    onPageChange(item){
       
        this.setState({currentPage : item})
       
    }
    render()
    {
      return(           
        <View style={styles.container}>
          <ImageBackground style={{width: '100%',height: '100%'}} source={require('../assets/Capture.png')}>

                    
        <View style={{
             
            backgroundColor : "pink",
            borderRadius : 150,
            padding :3,
            width: 150, height: 150,
            marginLeft:'auto',marginRight:'auto',marginTop:100
        }}>
        <View style={{height: 60,width:300,marginLeft:-80,marginTop:280}}>
                <Button
                  title="Sign Out"
                  color="red"
                  accessibilityLabel="Sign Out"
                />
                </View>
         </View>                                

        </ImageBackground>
        </View>
        );
    }
  }
  const styles = StyleSheet.create(
    {
         container:
         {
             flex: 1,
             backgroundColor: '#F5F5F5'
         },  
     footer  : {
         flex:0.15,
         backgroundColor : "#FF7E1C",
         flexDirection : "row",
         marginBottom:0
     },
    containerIconBottom : {
         flex : 1,
         borderWidth : 1,
         borderTopColor : "#FF7E1C",
         borderBottomColor : "#FF7E1C",
         borderLeftColor : "white",
         borderRightColor : "white",
         justifyContent : "center",
         alignItems : "center",
     
        
     },  
    // iconBottom : {
        
    // }
    });
    AppRegistry.registerComponent('App', () => App);
            
export default ProfilePage