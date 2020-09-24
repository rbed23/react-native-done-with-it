import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Login from '../screens/login';
import Register from '../screens/register';
import styles from '../globals/styles';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={styles.headerOptions}
    >
        <Stack.Screen
            component={Home} 
            name="Welcome"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
)

export default AuthNavigator;