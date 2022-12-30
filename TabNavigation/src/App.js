import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './screens/HomeScreen'
import Detail from './screens/Detail'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'infocirlceo' : 'infocirlceo';
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: "Home",
            headerTitle: "Home Sayfası",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "tomato"
            }
          }} />
        <Tab.Screen name="Detail" component={Detail}
          options={{
            title: "Detail",
            headerTitle: "Detail Sayfası",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "orange"
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}