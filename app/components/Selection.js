import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../globals/colors';
import AppText from './AppText';
import Icon from './Icon';

function Selection(props) {
    return (
        <TouchableHighlight 
            onPress={props.onPress}
            underlayColor={colors.lightGray}
        >
            <View style={styles.container}>
                <Icon 
                    color={props.iconColor}
                    backgroundColor={props.iconBackgroundColor}
                    size={props.iconSize}
                    image={props.iconImage}
                />
                <AppText style={styles.title}>
                    {props.title}
                </AppText>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
    },
});

export default Selection;
