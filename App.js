import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import Screen from './app/components/Screen'

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


const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator 
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: 'tomato' },
      headerTintColor: "white",
      headerShown: true,
    }}>
    <Stack.Screen 
      component={Tweets}
      name='Tweets'
      options={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: "white",
        headerShown: true,
      }} />
    <Stack.Screen 
      component={TweetDetails}
      name='TweetDetails' 
      options={( { route } ) => ({title: "Tweet Details " + route.params.id })}/>
  
  </Stack.Navigator>
)
export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
