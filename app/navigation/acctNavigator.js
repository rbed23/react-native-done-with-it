import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../screens/myAccount';
import Messages from '../screens/messages';

const Stack = createStackNavigator();

const AcctNavigator = () => (
    <Stack.Navigator 
      initialRouteName='Account'
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen 
            component={Account}
            name='Account'
        />
        <Stack.Screen
            component={Messages}
            name='Messages'
            options={{
                headerShown: true
            }}
        />
    </Stack.Navigator>
)

export default AcctNavigator;