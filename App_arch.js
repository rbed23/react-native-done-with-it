import React from 'react';

import { Button } from 'react-native';
import Screen from './app/components/Screen';
import * as Notifications from 'expo-notifications';
import useNotifications from './app/hooks/useNotifications';

export default function App() {

  useNotifications();
  
  const showNotifications = async () => {
    
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    
    // Second, call the method
    
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      },
      trigger: null,
    });
    
    console.log('notification sent', id)
  };

  return (
    <Screen>
      <Button title="Tap" onPress={showNotifications} />
    </Screen>
  );
}
