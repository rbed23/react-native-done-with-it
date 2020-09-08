import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants';

export default function Screen( props ) {
    return (
        <SafeAreaView style={[styles.screen, props.style]}>
            <View style={[styles.view, props.style]}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    view: {
        flex: 1,
    }
})
