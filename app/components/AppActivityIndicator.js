import React from 'react';
import { Image, View, Text } from 'react-native';

import LottieView from 'lottie-react-native';

function AppActivityIndicator({ visible = false }) {
    if (!visible) return null;
    
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

export default AppActivityIndicator;