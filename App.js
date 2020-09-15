import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from 'expo';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/appNavigator';
import AuthNavigator from './app/navigation/authNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import JwtDecode from 'jwt-decode';

export default function App() {

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    console.log('getting token...')
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(JwtDecode(token));
  };

  
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        { user ? <AppNavigator /> : <AuthNavigator /> }
      </NavigationContainer>

    </AuthContext.Provider>
  );
}
