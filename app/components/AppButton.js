import React from 'react'
import { Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import defaultStyles from '../globals/styles';

function AppButton({ color, title, onPress, style }) {
    return (
        <TouchableOpacity 
            style={[
                style,
                styles.appButton,
                {backgroundColor: color ? color : defaultStyles.colors.primary},
                ]}
            onPress={onPress}
        >
            <Text style={[
                defaultStyles.text,
                styles.appButtonText
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButton: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 0,
    },
    appButtonText: {
        color: defaultStyles.colors.white,
        fontSize: 20,
    }
});

export default AppButton;
