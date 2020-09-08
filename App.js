import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar, Switch, Button, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Home from './app/screens/home';
import Items from './app/screens/items';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ItemDetails from './app/screens/itemDetails';
import Messages from './app/screens/messages';
import Account from './app/screens/myAccount';
import Icon from './app/components/Icon';
import colors from './app/globals/colors';
import Selection from './app/components/Selection';
import Listings from './app/screens/listings';
import Screen from './app/components/Screen'
import AppInput from './app/components/AppInput';
import AppPicker from './app/components/AppPicker';
import Login from './app/screens/login';
import Register from './app/screens/register';
import ListingEdit from './app/screens/listingEdit';
import ListItem from './app/components/ListItem';
import AppImageInput from './app/components/AppImageInput';


export default function App() {

  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <AppImageInput 
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  }

});
