import React from 'react'
import {View , StyleSheet , Image , Text , TouchableOpacity} from 'react-native'
import key from '../../assets/key.png'
import card from '../../assets/card.png'
import wallet from '../../assets/wallet.png'
import phone from '../../assets/phone.png'
import other from '../../assets/other.png'
class ItemCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            width : 0,
            height : 0,
        }
    }
    render(){   
        
        // let PictureModel = test
        // console.log(PictureModel)
        // if(this.props.tag  == 1){
        //     PictureModel = key
        //     console.log(PictureModel)
        // }
        // else if(this.props.tag  == 2){
        //     PictureModel = card
        //     console.log(PictureModel)
        // }
        // else if(this.props.tag  == 3){
        //     PictureModel = wallet
        //     console.log(PictureModel)
        // }
        // else if(this.props.tag  == 4){
        //     PictureModel = phone
        //     console.log(PictureModel)
        // }
        // else if(this.props.tag  == 5){
        //     PictureModel = other
        //     console.log(PictureModel)
        // }
        return (
            
            <TouchableOpacity style={styles.container}>
                <View style={{flex : 0.2 , flexDirection :"row" , margin : 5 }}>
                    <View>
                        <Image
                            style={{width : 40 , height : 40 , borderRadius : 20}}
                             source={{uri : "https://pbs.twimg.com/profile_images/1002272769352978433/9S4QWSR0_400x400.jpg"}} 
                        />
                    </View>
                    <View style={{justifyContent :"center" , alignItems :"center" , marginLeft : 5,}}>
                        <Text>{this.props.fname}</Text>
                    </View> 
                </View>
                <View 
                    onLayout={(layout) => this.setState({height : layout.nativeEvent.layout.height , width : layout.nativeEvent.layout.width})}
                    style={{flex : 0.6}}>
                    <Image 
                    style={{width : this.state.width , height : 300}}
                    source={key} />
                </View> 
                <View style={{flex : 0.2 , margin : 5}}>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles= StyleSheet.create({
    container : {
        backgroundColor :"white",
        margin : 10,
        borderWidth :1,
        borderColor :"rgb(183,183,183)"
        
    }
})
export default ItemCard