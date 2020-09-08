import React from 'react'
import { StyleSheet, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icon({
    name,
    size=40,
    backgroundColor = "#000",
    color = "#fff"
}) {
    const iconSize = size / 1.5;
    return (
        <View style={[
            styles.icon,
            {
                backgroundColor,
                height: size,
                width: size,
                borderRadius: size / 2
            }
        ]}>

            <MaterialCommunityIcons
                name={name}
                size={iconSize}
                color={color}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
