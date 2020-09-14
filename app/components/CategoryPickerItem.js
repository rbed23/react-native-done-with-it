import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';


export default function CategoryPickerItem( { item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon 
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <AppText style={
                [styles.text,
                {color: item.backgroundColor}]
                }>{item.name}</AppText>                
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    text: {
        fontSize: 13,
        marginTop: 10,
        textAlign: 'center',
    },
})
