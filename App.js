import React from 'react';

import AuthNavigator from './app/navigation/authNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import Screen from './app/components/Screen';
import EditListingIcon from './app/icons/editListing';
import AppNavigator from './app/navigation/appNavigator';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
