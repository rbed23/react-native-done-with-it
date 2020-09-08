import React from 'react'
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../globals/colors';
import ListingEdit from '../screens/listingEdit';

import FeedNavigator from './feedNavigator';
import AcctNavigator from './acctNavigator';
import EditListingIcon from '../icons/editListing';
import navigationTheme from './navigationTheme';

const BottomTab = createBottomTabNavigator();

const AppNavigator = () => (
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

const styles = StyleSheet.create({
    editIcon: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    }
});

export default AppNavigator;