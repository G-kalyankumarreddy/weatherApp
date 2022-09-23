import {useNavigation} from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 

import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native"; 
import { countryData } from "../HomePage";
import { RootStackParams } from "../../App";


interface WeatherData {
    weatherIcon:string;
    temperature:number;
    precipitation: number;
    windSpeed: number;
    

}

export let WeatherData={
    weatherIcon:"",
    temperature:0,
    precipitation: 0,
    windSpeed: 0 
}

export const CountryDetails=()=>{
    
    const navigation=useNavigation<NativeStackNavigationProp<RootStackParams>>()

    const onPressCapitalWeather=async()=>{
        const url=`http://api.weatherstack.com/current?access_key=930651754ba66805388f97c9574bfb7b&query={${countryData.capital}}`
        const options={
            method:"GET",
        }
        const response=await fetch(url,options)
        const data=await response.json()
        WeatherData={
            weatherIcon:data.current.weather_icons[0],
            temperature:data.current.temperature,
            precipitation: data.current.precip,
            windSpeed: data.current.wind_speed 
        }
        
         navigation.navigate("Weather")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Country Details</Text>
            <Image source={{uri: `${countryData.flag}`}} style={styles.flag}/>
            <Text style={styles.details}>Capital : {countryData.capital}</Text>
            <Text style={styles.details}>Latitude: {countryData.latitude} deg</Text>
            <Text style={styles.details}>Latitude: {countryData.longitude} deg</Text>
            <Text style={styles.details}>Country Details: {countryData.population}</Text>
            <TouchableOpacity style={styles.button} onPress={onPressCapitalWeather}>
                <Text>Capital Weather</Text>
             </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
      paddingLeft:30,
      flex:1,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        margin:10
    },
    flag:{
        height:300,
        width:300,
        marginTop:20
    },
    details:{
        marginTop:20,
        fontSize:15
    },
    button: {
        alignSelf:"center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop:20
      },
})