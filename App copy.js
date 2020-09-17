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

export default function App() {

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    return (user) ? setUser(user) : null;
  };

  
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        { user ? <AppNavigator /> : <AuthNavigator /> }
      </NavigationContainer>

    </AuthContext.Provider>
  );
}
