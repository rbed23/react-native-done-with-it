import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Listings from '../screens/listings';
import ItemDetails from '../screens/itemDetails';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator 
      initialRouteName="Listings"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen 
        component={Listings}
        name='Listings'
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen
        component={ItemDetails}
        name='ItemDetails'
      />
    </Stack.Navigator>
)

export default FeedNavigator;