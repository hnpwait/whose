import React from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import {withRouter} from 'react-router-native'
class DetailPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>        
                    <Text style={{fontSize:30,color:'white',marginTop:20}}>พบกุญแจที่โรงใหม่</Text>
                        <View style = {{marginTop:-40,marginLeft:-290}}>
                            <TouchableOpacity
                                onPress={()=>this.props.history.push('/ItemPage')}>
                                <Image style= {{height:25,width:25}} 
                                source={require('../assets/left-arrow.png')}></Image>    
                            </TouchableOpacity>
                        </View>                       
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
export default withRouter(DetailPage)        
        
