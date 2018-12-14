import React from 'react'
import {ScrollView,View , Text , TouchableNativeFeedback , TouchableOpacity , Picker , Alert , Dimensions} from 'react-native'
import ItemCard from '../component/Card/ItemCard'
import Icon from 'react-native-vector-icons/Feather';
import { ImagePicker } from 'expo';
class ItemPage extends React.Component { 
    constructor(){
        super()
        this.state={
            filterType : 0,
            image : ""
        }
    }
    _pressImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes : ImagePicker.MediaTypeOptions.Images
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      }
    render(){
        const {width , height} = Dimensions.get("window")
        console.log(this.state)
        return (     
            <View style={{
              
            }}>
            
                <View style={{
                  
                    flex : 1,
                    height : 120,
                    justifyContent :"center"
                }}>
                    <View style={{justifyContent : "space-around" , flexDirection : "row" , alignItems :"center"}}>
                      <TouchableNativeFeedback
                      
                       onPress={()=>this.setState({filterType : 0})}
                      >
                      <View style={this.state.filterType == 0? {
                        
                            backgroundColor :"#FF7E1C",
                            padding : 10,
                            borderRadius : 10, 
                            borderWidth : 2,
                            elevation:4,
                            shadowOffset: { width: 5, height: 5 },
                            shadowColor: "grey",
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            borderColor :"white"
                          
                      } : {
                        backgroundColor :"white",
                        padding : 10,
                        borderRadius : 10, 
                        borderWidth : 2,
                        elevation:4,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        borderColor :"white"
                      
                  }}>
                      <Text style={{  
                         color:this.state.filterType == 0 ? "white" : "black",
                         fontSize: 18 }}>ประกาศพบของหาย</Text>
                      </View>
                      
                      </TouchableNativeFeedback>
                      <TouchableNativeFeedback
                         onPress={()=>this.setState({filterType : 1})}
                      >
                         <View style={this.state.filterType == 1? {
                        
                        backgroundColor :"#FF7E1C",
                        padding : 10,
                        borderRadius : 10, 
                        borderWidth : 2,
                        elevation:4,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        borderColor :"white"
                      
                  } : {
                    backgroundColor :"white",
                    padding : 10,
                    borderRadius : 10, 
                    borderWidth : 2,
                    elevation:4,
                    shadowOffset: { width: 5, height: 5 },
                    shadowColor: "grey",
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    borderColor :"white"
                  
              }}>
                      <Text style={{  
                           color:this.state.filterType == 1 ? "white" : "black",
                         fontSize: 18 }}>ประกาศตามหาของหาย</Text>
                      </View>
                      </TouchableNativeFeedback>
                    
                      
                     
                    </View>
                <View style={{
                  marginTop : 10,
                  marginBottom : 10
                }}>
                    <View style={{
                        flexDirection :"row",
                        justifyContent :"space-around",
                        alignItems :"center"
                    }}>
                    <View style={{
                        backgroundColor :"rgb(246,246,246)",
                        width: width / 1.2 , 
                    }}>
                    <Picker
                    mode="dropdown"
                     style={{ height: 40, }}
                   >
                    <Picker.Item label="ทั้งหมด" value="all" />
                    <Picker.Item label="กุญแจ" value="key" />
                    <Picker.Item label="บัตร" value="card" />
                    <Picker.Item label="กระเป๋าสตางค์" value="wallet" />
                    <Picker.Item label="โทรศัพท์มือถือ" value="phone" />
                    </Picker>
                    </View>
                        <TouchableOpacity
                        onPress={this._pressImage}
                        >
                        <View style={{
                            backgroundColor : "#FF7E1C",
                            borderRadius : 40,
                            padding :3
                        }}>
                            <Icon style={{fontSize : 35}} name="plus" color="black"/>
                        </View>
                        </TouchableOpacity>
                    </View>
                   
                </View>
                    
                </View>
           
                    <ItemCard 

                    />
                     <ItemCard 

                    />
                    <ItemCard 

                    />
            </View>

        )
    }
}

export default ItemPage