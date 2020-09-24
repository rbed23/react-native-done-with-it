import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

import colors from '../globals/colors';
import ListingEdit from '../screens/listingEdit';

import FeedNavigator from './feedNavigator';
import AcctNavigator from './acctNavigator';
import EditListingIcon from '../icons/editListing';
import useNotifications from '../hooks/useNotifications';
import navigation from './rootNavigation';

const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {

    const test = () =>
            navigation.navigate('Account')
    
    //useNotifications(test);
    useNotifications();
    
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
        })
      });

    return (
        <BottomTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.primary,
                activeBackgroundColor: colors.white,
                inactiveBackgroundColor: colors.white,
                inactiveTintColor: 'black',
            }}
        >
            <BottomTab.Screen
                component={FeedNavigator}
                name="Feed"
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' size={size} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="ListingEdit"
                component={ListingEdit}
                options={({ navigation }) => ({
                    tabBarButton: () => <EditListingIcon onPress={() => navigation.navigate("ListingEdit")} /> 
                })}
            />
            <BottomTab.Screen
                name="Account"
                component={AcctNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' size={size} color={color}/>,
                }} 
            />
        </BottomTab.Navigator>
    )
};

export default AppNavigator;