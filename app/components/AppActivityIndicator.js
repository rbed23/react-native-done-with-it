import React from 'react';
import { Image, View, Text } from 'react-native';

import LottieView from 'lottie-react-native';

function AppActivityIndicator({ action, loop, onAnimationFinish, visible = false }) {
    if (!visible) return null;
    
    if (action == 'loading') {
        return (
            <View>
                <Image 
                    style={{
                        height: 300,
                        width: 300,
                    }}
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

export default AppActivityIndicator;