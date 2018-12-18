import React from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import {withRouter} from 'react-router-native'
import { DOMAIN } from '../constant/environment';
import Axios from 'axios'
import moment from 'moment'
import key from '../assets/key.png'
import card from '../assets/card.png'
import wallet from '../assets/wallet.png'
import phone from '../assets/phone.png'
import other from '../assets/other.png'
import user from '../assets/user.png'
class DetailPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            event : {},
            loading : true
        }
    }
    componentDidMount(){
        console.log(DOMAIN + '/post/detail')
        Axios.get(DOMAIN + '/post/detail/'+this.props.match.params.item)
        .then(result=>{
            const data = result.data
            const event = data.docs[0]
            console.log(event)
            this.setState({event  , loading : false})
        })
        .catch(err=>{
            console.log(err.response)
            this.setState({loading : false})
        })
    }
    render(){
        let PictureModel 
        if(this.state.event.tag  == 1){
            PictureModel = key
            
        }
        else if(this.state.event.tag  == 2){
            PictureModel = card
            
        }
        else if(this.state.event.tag  == 3){
            PictureModel = wallet
            
        }
        else if(this.state.event.tag  == 4){
            PictureModel = phone
            
        }
        else if(this.state.event.tag  == 5){
            PictureModel = other
            
        }
        if(Object.keys(this.state.event).length == 0){
            return <View style={{    backgroundColor:"rgb(231,231,231)",
            flex:1,
            justifyContent: 'center',
            alignItems :"center"}}>
                <Text style={{justifyContent : "center",fontSize:30,color:"#FF8000"}}>Loading..</Text>
            </View>
        }
        else 
        return(
            <View style={styles.container}>
                <View style={styles.header}>        
                    <Text style={{fontSize:30,color:'white',marginTop:20}}>{this.state.event.title}</Text>
                        <View style = {{marginTop:-40,marginLeft:-290}}>
                            <TouchableOpacity
                                onPress={()=>this.props.history.push('/ItemPage')}>
                                <Image style= {{height:25,width:25}} 
                                source={require('../assets/left-arrow.png')}></Image>    
                            </TouchableOpacity>
                        </View>                       
                </View>
                <View style={styles.body}> 
                    <Image style= {{height:'80%',width:'100%',marginLeft:'auto',marginRight:'auto',marginTop:10}} 
                        source={
                            PictureModel

                        }></Image>
                </View>
                    <View>    
                </View>
                
                <View style={styles.detailbox}>
                    <Text style={{fontSize:20,color:'black'}}>{this.state.event.detail}</Text> 
                    <Text style={{fontSize:23,color:'black',marginLeft:'auto',marginTop:'auto'}}>{this.state.event.author.fName + " " +this.state.event.author.lName}</Text>     
                    <Text style={{fontSize:20,color:'black',marginLeft:'auto',marginBottom:'auto'}}>{moment(this.state.event.datePost).format("LLLL")}</Text>                   
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
        
