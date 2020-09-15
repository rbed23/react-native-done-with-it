import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/appNavigator';
import AuthNavigator from './app/navigation/authNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';

export default function App() {

  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        { user ? <AppNavigator /> : <AuthNavigator /> }
      </NavigationContainer>

    </AuthContext.Provider>
  );
}
