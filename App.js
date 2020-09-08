import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar, Switch, Button, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

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
import AppImageInputList from './app/components/AppImageInputList';


export default function App() {

  return <ListingEdit />;
}
