import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation} from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen'
import Home from './app/screens/home';


const Link = () => {
  const navigation = useNavigation();
  
  return (
    <Button 
      title='click'
      onPress={()=> navigation.navigate('TweetDetails', { id: 1 })}/>
  )}

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details { route.params.id } </Text>
  </Screen>
)

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
      headerShown: false,
    }}>
    <Stack.Screen 
      component={Home}
      name='Welcome'
      options={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: "white",
        headerShown: false,
      }} />
    <Stack.Screen 
      component={TweetDetails}
      name='TweetDetails' 
      options={( { route } ) => ({title: "Tweet Details " + route.params.id })}/>
  
  </Stack.Navigator>
)

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Link}
      name="Link"/>
  </Stack.Navigator>
)

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => (
  <BottomTab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: 'black',
    }}>
    <BottomTab.Screen 
      component={FeedNavigator}
      name="feed"
      options={{
        tabBarIcon: ( { color, size }) => <MaterialCommunityIcons name='home' size={size} color={color}/>
      }} />
    <BottomTab.Screen
      component={AccountNavigator}
      name="acct" />
  </BottomTab.Navigator>
)


export default function App() {

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
