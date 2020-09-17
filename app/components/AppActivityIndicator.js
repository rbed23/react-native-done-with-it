import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

function AppActivityIndicator({ action, loop, size, onAnimationFinish, visible = false }) {
    if (!visible) return null;
    
    if (!size) {
        size = {height: 100, width: 100}
    }

    if (action == 'loading') {
        return (
            <View style={styles.overlay}>
                <Image
                    style={size}
                    source={require('../assets/animations/loader.gif' )}
                />
            </View>
        );
    }
    if (action == 'done') {
        return (
            <LottieView
                autoPlay
                autoSize
                loop={loop}
                onAnimationFinish={onAnimationFinish}
                source={require('../assets/animations/done.json')}
            />
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'white',
        alignItems: "center",
        height: "100%",
        justifyContent: 'center',
        position: "absolute",
        width: "100%",
        zIndex: 1,
        opacity: 0.4
    }
})
export default AppActivityIndicator;