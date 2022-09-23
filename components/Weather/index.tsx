

import { View,Text,Image,StyleSheet} from "react-native";
import { WeatherData } from "../CountryDetails";

export const Weather=()=>{

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Weather Details</Text>
        <View style={styles.detailsContaienr}>
        <Image source={{uri:`${WeatherData.weatherIcon}`}} 
        style={styles.weatherIcon}/>
        <Text style={styles.details}>Temperature : {WeatherData.temperature} °C</Text>
        <Text style={styles.details}>Precipitation : {WeatherData.precipitation}</Text>
        <Text style={styles.details}>Wind Speed : {WeatherData.windSpeed} kmph</Text>
        </View>
      </View>
    )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  },
  detailsContaienr:{
    marginTop:"auto",
    marginBottom:"auto",
    alignSelf:"center"
  },
  weatherIcon:{
    height:100,
    width:130,
    marginBottom:20,
    borderRadius:5
  },
  details:{
    marginBottom:20,
    fontSize:20
  } 

})