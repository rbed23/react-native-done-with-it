import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import colors from '../globals/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Items() {
    return (
        <View style={styles.container}>
            <View style={styles.headerIconArea}>
                <TouchableHighlight style={[
                        styles.headerIcons,
                        {backgroundColor: colors.primary}]}>
                    <MaterialCommunityIcons
                        name='close'
                        size={60}
                    />
                </TouchableHighlight>
                <TouchableHighlight style={[
                        styles.headerIcons,
                        {backgroundColor: colors.secondary}]}>
                    <MaterialCommunityIcons
                        name='trash-can-outline'
                        size={60}
                    />
                </TouchableHighlight>
            </View>
            <Image 
                style={styles.item}
                source={require('../assets/chair.jpg')}
            />
    </View>
    );
}



const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    headerIconArea: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    headerIcons: {
        width: 60,
        height: 60,
    },
    item: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
        flex: 1
    },
})