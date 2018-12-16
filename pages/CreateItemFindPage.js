import React from 'react'
import {View,StyleSheet,Text,Image,Button,TextInput,Picker,TouchableOpacity} from 'react-native'
import { ImagePicker } from 'expo';
import key from '../assets/key.png'
import card from '../assets/card.png'
export default class DetailPage extends React.Component{
    constructor(){
        super()
        this.state={
            filterType : 0,
            image : "",
            PickerValue:''
        }
    }
    onPickPicture(onValueChange) {
        if(PickerValue == "key"){
            this.setState({visible : key , modalVisible : !this.state.modalVisible,select :"key"})
        }
        else if (onValueChange == "card"){
            this.setState({visible : card , modalVisible : !this.state.modalVisible,select :"card"})
         }
    //   else if (key == 3){
    //       this.setState({visible : luxby , modalVisible : !this.state.modalVisible,key :3})
    //   }
    //   else if (key == 4){
    //       this.setState({visible : bas , modalVisible : !this.state.modalVisible,key :4})
    //   }
    //   else if (key == 5){
    //       this.setState({visible : art , modalVisible : !this.state.modalVisible,key :5})
    //   }
    }
    // _pressImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes : ImagePicker.MediaTypeOptions.Images
            
    //     });
    // }
    render(){
        const { selection } = this.state;
        return( 
            <View style={styles.container}>
            <View style={styles.header}>    
            <View style={{marginTop:20}}>
            <Image style= {{height:30,width:30,marginLeft:'auto',marginBottom:-35}} 
                                source={require('../assets/delete.png')}></Image>
            <Text style={{fontSize:30,color:'white'}}>สร้างโพสต์ตามหาของหาย</Text>               
            </View>
            </View>
                        <View style={styles.body}>     
                        <Text style={{fontSize:22,color:'black',marginTop:10,marginButtom:10}}>หัวข้อ* :</Text>
                        <TextInput
                    style={{height: 40,width:'80%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:75,marginRight:'auto',
                    marginTop:'auto',marginBottom:10,borderWidth : 1,borderColor :"#FF8000"
                    }}
                />   
                    <View style={{
                        backgroundColor :"rgb(246,246,246)",
                        width: 240 ,marginLeft:80,marginRight:'auto',marginTop: 10,marginBottom:'auto' 
                    }}>
                    <Picker
                    mode="dropdown"
                     style={{ height: 40, }}
                     selectedValue={this.state.PickerValue}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerValue: itemValue})}
                   >
                    <Picker.Item label="กุญแจ" value="key" />
                    <Picker.Item label="บัตร" value="card" />
                    <Picker.Item label="กระเป๋าสตางค์" value="wallet" />
                    <Picker.Item label="โทรศัพท์มือถือ" value="phone" />
                    <Picker.Item label="อื่นๆ" value="other" />
                    </Picker>
                    </View>
                        <Text style={{fontSize:22,color:'black',marginTop:5,marginBottom:10}}>ประเภท :</Text>            
                        </View>
                    <View>   
            </View>
            <View style={styles.detailbox}> 
                {() =>{this.onChangePicture("key")}}
                    <Image style={styles.Image} source={key} />
                {() =>{this.onChangePicture("card")}}
                    <Image style={styles.Image} source={card} />
                {/* <View style={{
                    backgroundColor : "#FF8000",
                    borderRadius : 100,
                    padding :3,
                    width: 100, height: 100,marginTop:8,
                    marginLeft:'auto',marginRight:'auto',padding:10 
                                
                }}>
                 <TouchableOpacity
                        onPress={this._pressImage}>
                <Image style= {{height:60,width:60,marginRight:'auto',marginLeft:'auto',marginTop:16}} 
                                source={require('../assets/picture.png')}></Image>
                                </TouchableOpacity>
                </View>                     */}
            </View>
            <View style={styles.detailbox2}> 
            <Text style={{fontSize:22,color:'black',marginTop:10,marginButtom:10}}>รายละเอียด :</Text>
            <TextInput
                    style={{height: 150,width:320,color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    marginTop:'auto',marginBottom:10,borderWidth : 1,borderColor :"#FF8000",padding:10 
                    }}
                />                          
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
        height: 60,
        backgroundColor: '#FF8000',
        justifyContent: 'center',
        padding : 10           
      },
    body:{
        flex:1,
        backgroundColor:'#FFE1B0',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding : 20,
        borderWidth : 3,
        borderColor :"#FF8000"
    },
    detailbox:{
        height: 150,
        backgroundColor: '#FFF1D9',
        alignItems: 'center',
        padding : 20,
        borderWidth : 3,
        borderColor :'#FF8000'
        },
    detailbox2:{
        height: 230,
        backgroundColor: '#FFE1B0',
        padding : 10,
        borderWidth : 3,
        borderColor :'#FF8000'
    }
    })