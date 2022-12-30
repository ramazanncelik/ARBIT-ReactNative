// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import Detail from './screens/Detail'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title:"Home Sayfası",
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:'tomato'
          }
        }} />
        <Stack.Screen name="Detail" component={Detail} 
        options={{
          title:" Detail Sayfası",
          headerTintColor:"white",
          headerStyle:{
            backgroundColor:'orange'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;