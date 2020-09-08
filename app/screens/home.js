import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../globals/colors';
import AppButton from '../components/AppButton';

export default function Home() {

    return (
        <ImageBackground 
            source={require('../assets/background.jpg')}    
            style={styles.background}
            blurRadius={2}>
            
                <View style={styles.logo}>
                    <Image
                        source={require('../assets/logo-red.png')}
                        style={styles.logoImage}
                        />

                    <Text style={styles.logoTagLine}> 
                        Sell What You Don't Need
                    </Text>
                </View>

                <View style={styles.basementItem}>
                    <AppButton
                        title="LOGIN"
                        color={colors.primary}/>
                </View>
                <View style={styles.basementItem}>
                    <AppButton
                        title="REGISTER"
                        color={colors.secondary}/>
                </View>


        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },
    basementItem: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    basementText: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold'
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
        top: 50
    },

})