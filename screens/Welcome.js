import React from "react";
import {StyleSheet, Text, View} from "react-native";


const Welcome =({route})=>{
    const {username}=route.params || {}
    return(<View style={style.container}>
        <Text style={style.title}>Welcome {username ? `,${username}`:"" } </Text>
        <Text>THIS IS THE SECOND SCREEN WHERE WE SHOW THE LOGGED-IN USERS</Text>
    </View>

    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:80,
        paddingHorizontal:20,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:24,
        marginBottom:20,
        textAlign:"center"
    }
})
export default Welcome;