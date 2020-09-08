import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppImageInput from './AppImageInput';

function AppImageInputList( { imageUris = [], onRemoveImage, onAddImage } ) {
    
    const scrollView = useRef();
    
    return (
        <View>
            <ScrollView 
                horizontal 
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
                ref={scrollView}
            >
                <View style={styles.container}>
                    { imageUris.map((uri) => (
                        <AppImageInput 
                            imageUri={uri}
                            key={uri}
                            onChangeImage={() => onRemoveImage(uri)}
                        />
                    ))}
                    <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
});

export default AppImageInputList;