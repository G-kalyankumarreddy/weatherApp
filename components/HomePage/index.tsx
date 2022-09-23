import { useState } from "react";


import {useNavigation} from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";
import { RootStackParams } from "../../App";

interface countryData {
    flag:string;
    capital:string;
    population: number;
    latitude: number;
    longitude:number;

}

type InputProps={
    value:string
    countryData:{}
} 

export let countryData={
    flag:"",
    capital:"",
    population:0,
    latitude:0,
    longitude:0

}



 const Home=(props: InputProps)=>{
    const navigation=useNavigation<NativeStackNavigationProp<RootStackParams>>()
    const[value,setInput]=useState("")
    const onPressButton=async()=>{
        const url=`https://restcountries.com/v3.1/name/${value}`
        const options={
            method:"GET"
        }
        const response=await fetch(url,options)
        const data=await response.json()
        const required=data[0]
        countryData={
            flag:required.flags.png,
            capital:required.capital,
            population:required.population,
            latitude:required.latlng[0],
            longitude:required.latlng[1]
        }

        navigation.navigate("Country")
    }

    const buttonDisable=value.length===0? true:false
   return(
    <View style={styles.container}>
       <TextInput style={styles.input} value={value} placeholder="Enter Country" onChangeText={(text)=>setInput(text)}/>
      <TouchableOpacity onPress={onPressButton}  style={[styles.button,buttonDisable===true? styles.buttonInactive:styles.buttonActive]} disabled={buttonDisable}>
        <Text style={[styles.buttonText,buttonDisable===true?styles.buttonInactiveText:styles.buttonActiveText]}>Submit</Text>
      </TouchableOpacity>
    </View>
   )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        width:200,
        height:40,
        borderWidth:1,
        borderColor: "#DDDDDD",
        padding:10
    },
    button:{
        width:80,
        marginTop:20,
        height:30,
        borderRadius:5
    },

    buttonActive:{
        backgroundColor:"#0000FF",
    },
    buttonInactive:{
        backgroundColor: "#DDDDDD"
    },
    buttonText:{
        alignSelf:"center",
        textAlign:"center",
        paddingTop:3 
    },
    buttonInactiveText:{
        color:"black"
    },
    buttonActiveText:{
        color:"white"
    }
})

export default Home