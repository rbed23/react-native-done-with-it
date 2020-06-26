import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../app/globals/colors';

export default function Home() {

    return (
        <ImageBackground 
            source={require('../assets/background.jpg')}    
            style={styles.background}>
            
                <View style={styles.logo}>
                    <Image
                        source={require('../assets/logo-red.png')}
                        style={styles.logoImage}
                        />

                    <Text style={styles.logoTagLine}> 
                        Sell What You Don't Need
                    </Text>
                </View>

                <View 
                    style={[
                        styles.basementItem,
                        {backgroundColor: colors.primary}
                    ]} />
                <View 
                    style={[
                        styles.basementItem,
                        {backgroundColor: colors.secondary}
                    ]} />



        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    basementItem: {
        width: "100%",
        height: 80
    },
    logo: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoTagLine : {
        fontSize: 18,
        top: 20
    },

})