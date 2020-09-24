import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../screens/myAccount';
import Messages from '../screens/messages';
import styles from '../globals/styles';

const Stack = createStackNavigator();

const AcctNavigator = () => (
    <Stack.Navigator 
      initialRouteName='Account'
      screenOptions={styles.headerOptions}
    >

        <Stack.Screen 
            component={Account}
            name='Account'
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            component={Messages}
            name='Messages'
        />
    </Stack.Navigator>
)

export default AcctNavigator;