import React from 'react'
import {View , StyleSheet , Image , Text , TouchableOpacity} from 'react-native'
class ItemCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            width : 0,
            height : 0,
        }
    }
    render(){   

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
                        <Text>Header</Text>
                    </View> 
                </View>
                <View 
                    onLayout={(layout) => this.setState({height : layout.nativeEvent.layout.height , width : layout.nativeEvent.layout.width})}
                    style={{flex : 0.6}}>
                    <Image 
                    style={{width : this.state.width , height : 300}}
                    source={{uri : "https://pbs.twimg.com/profile_images/1002272769352978433/9S4QWSR0_400x400.jpg"}} />
                </View> 
                <View style={{flex : 0.2 , margin : 5}}>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
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