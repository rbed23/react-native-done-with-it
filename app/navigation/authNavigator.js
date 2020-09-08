import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Login from '../screens/login';
import Register from '../screens/register';
import colors from '../globals/colors';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.white,
        }}    
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