import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation} from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen'
import Home from './app/screens/home';
import { Login } from './app/screens/login';
import { Register } from './app/screens/register';

const Account = ({ route }) => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator 
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: true,
      backgroundColor: 'red',
    }}>
    <Stack.Screen 
      component={Home}
      name='Welcome'
      options={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: "white",
        headerShown: true,
      }} />
  
    <Stack.Screen 
      component={Login}
      name='Login' 
    />
  
    <Stack.Screen 
      component={Register}
      name='Register' 
    />
  
  </Stack.Navigator>
)

export default function App() {
  return (
    <Home />
  );
}
