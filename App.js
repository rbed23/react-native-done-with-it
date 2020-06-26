import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Home from './screens/home';
import Items from './screens/items';

export default function App() {
  return (
    <View style={styles.container}>
      <Items />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 0,
    //paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  },
});
