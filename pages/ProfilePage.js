import React from 'react'
import {View,TouchableOpacity,StyleSheet,Icon} from 'react-native'
class ProfilePage extends React.Component{
    render(){
        return(
            <View style={styles.footer}>
            <View style={styles.containerIconBottom}>
                <TouchableOpacity onPress={()=>this.onPageChange(0)}>
                    <Icon name="home"color={this.state.currentPage == 0 ? "white" : "black"}  size={60}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerIconBottom}>
                <TouchableOpacity onPress={()=>this.onPageChange(1)}>
                <Icon name="user" color={this.state.currentPage == 1 ? "white" : "black"} size={60}/>
                </TouchableOpacity>
                
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create ({
    footer  : {
        flex : 0.15,
        backgroundColor : "#FF7E1C",
        flexDirection : "row"
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
    iconBottom : {
        
    }
})

export default ProfilePage