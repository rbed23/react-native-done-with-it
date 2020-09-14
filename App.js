import React from 'react';

import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  NetInfo.fetch().then(netInfo => console.log(netInfo))
  
  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }))
      const value = await AsyncStorage.getItem('person')
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  }

  demo();
  
  
  return null;



    /*
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    */
}
