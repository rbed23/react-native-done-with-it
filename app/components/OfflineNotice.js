import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import Constants from 'expo-constants';

import colors from '../globals/colors';
import AppText from '../components/AppText';

function OfflineNotice() {

    const netInfo = useNetInfo();

    if (netInfo.type !== "unknown" &&
        netInfo.isInternetReachable === false
    )
        return (
            <View style={styles.offlineStatusBar}>
                <AppText style={{color: colors.white}}>No Internet Connection</AppText>
            </View>
        );

    return null;
}

const styles = StyleSheet.create({
    offlineStatusBar: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 60,
        justifyContent: 'center',
        opacity: 0.8,
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 1,
        elevation: 1,
    }
});

export default OfflineNotice;