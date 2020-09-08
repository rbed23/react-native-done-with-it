import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../globals/colors';

function ListItemSeparator() {
    return (
        <View style={styles.separatorComponent}/>
    )
}

const styles = StyleSheet.create({
    separatorComponent: {
        width: '90%',
        height: 2,
        backgroundColor: colors.lightGray,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

export default ListItemSeparator;