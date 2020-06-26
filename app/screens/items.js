import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../app/globals/colors';
export default function Home() {
    console.log(colors.primary)
    return (
    <View style={styles.container}>
        <View>
            <View style={styles.headerIconArea}>
                <View style={[
                    styles.headerIcons, 
                    {backgroundColor: colors.primary}
                ]}/>
                <View style={[styles.headerIcons, {backgroundColor: colors.secondary}]}/>
            </View>
        </View>
        <View style={styles.itemArea}>
            <Image 
                style={styles.item}
                source={require('../assets/chair.jpg')}
            />
        </View>
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
        width: 50,
        height: 50,
    },
    item: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    itemArea: {
        flex: 1,
    },

})