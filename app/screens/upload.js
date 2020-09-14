import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import * as Progress from 'react-native-progress';

import AppActivityIndicator from '../components/AppActivityIndicator';
import colors from '../globals/colors';

function Upload({ onDone, progress = 0,visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { progress < 1 ? (
                    <Progress.Bar
                        color={colors.primary}
                        progress={progress}
                        width={200}
                    /> ) : (
                    <AppActivityIndicator 
                        action='done'
                        loop={false}
                        onAnimationFinish={onDone}
                        visible
                    />
                    )
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
    
export default Upload;