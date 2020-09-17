import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from 'expo';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/appNavigator';
import AuthNavigator from './app/navigation/authNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import { Button } from 'react-native';
import Screen from './app/components/Screen';
import { Notifications } from 'expo';

export default function App() {

  const showNotifications = () => {
    Notifications.presentLocalNotificationAsync({
      title: "Congratulations",
      body: "Your order was placed",
      data: {
        _displayInForeground: true,
      }
    });
    console.log('notification sent')
  };

  return (
    <Screen>
      <Button title="Tap" onPress={showNotifications} />
    </Screen>
  );
}
