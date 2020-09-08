import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../globals/colors';


export default function PickerItem( { item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>                
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    text: {
        padding: 10,

    }
})
