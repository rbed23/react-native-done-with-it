import { useEffect } from 'react'

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = (notificationListener) =>{
    
    useEffect(() => {
        registerPushNotifications();
        if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
    }, []);

    const registerPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return null;
            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.registerPushToken(token);
        } catch (error) {
            console.log(error)
        }
    };
};
