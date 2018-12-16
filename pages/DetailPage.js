import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
export default class DetailPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Image style= {{height:25,width:25,marginRight:'auto',marginLeft:15,marginTop:10}} 
                                source={require('../assets/left-arrow.png')}></Image>               
                    <Text style={{fontSize:30,color:'white'}}>พบกุญแจที่โรงใหม่</Text>                    
                        </View>
                            <View style={styles.body}> 
                                <Image style= {{height:'80%',width:'60%',marginLeft:'auto',marginRight:'auto',marginTop:10}} 
                                source={require('../assets/key.jpg')}></Image>
                            </View>
                        <View>   
                </View>
                
                <View style={styles.detailbox}>
                    <Text style={{fontSize:20,color:'black'}}>เจอกุญแจที่โรงใหม่ของใครติดต่อ line:eieiza ค่ะ</Text> 
                    <Text style={{fontSize:23,color:'black',marginLeft:'auto',marginTop:'auto'}}>Hattara Trairattanasuwan</Text>     
                    <Text style={{fontSize:20,color:'black',marginLeft:'auto',marginBottom:'auto'}}>15/12/2018,15.30</Text>                   
                </View>
            </View>
        );
    }
}
    const styles = StyleSheet.create({
        container:{
            backgroundColor:'#FFF1D9',
            flex:1,
            justifyContent: 'center'
        },
        header: {
            height: 80,
            backgroundColor: '#FF8000',
            justifyContent: 'center',
            alignItems: 'center',        
          },
          body:{
            flex:1,
            backgroundColor:'#FFF1D9',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth : 3,
            borderColor :"#FF8000"
        },
            detailbox:{
            height: 200,
            backgroundColor: '#FFF1D9',
            alignItems: 'center',
            padding : 10,
            borderWidth : 3,
            borderColor :'#FF8000'
            }
        })
        
