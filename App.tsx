import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/HomePage';
import { CountryDetails } from './components/CountryDetails';
import { Weather } from './components/Weather';

export type RootStackParams ={
  Home: Object
  Country: Object
  Weather: Object

}

const Stack= createNativeStackNavigator<RootStackParams>()


export default function App() {
  return (
  <NavigationContainer>
   <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Country" component={CountryDetails}/>
    <Stack.Screen name="Weather" component={Weather}/>
   </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
