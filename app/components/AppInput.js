import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../globals/styles';

export default function AppInput( { icon, fieldWidth, ...otherProps } ) {

    return (
        <View style={[styles.container, {width: fieldWidth}]}>
            {icon && <MaterialCommunityIcons 
                name={icon}
                size={30}
                color={defaultStyles.colors.mediumGray}
                style={styles.iconInput}
            />}

            <TextInput
                placeholderTextColor={defaultStyles.colors.mediumGray}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGray,
        width: '100%',
        padding: 15,
        marginVertical: 10,
        borderRadius: 25,
        flexDirection: 'row'
    },
    iconInput: {
        marginRight: 10,
    }
})
