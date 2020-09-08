import React from 'react';

import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../globals/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function EditListingIcon({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons 
                name="plus-circle"
                color={colors.white}
                size={40}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 30,
        height: 80,
        justifyContent: 'center',
        width: 80,
    },
});


export default EditListingIcon;