import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Alert } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import colors from '../globals/colors';
import Screen from './Screen';

function AppImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const result = Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA, Permissions.LOCATION)
        if (!result.granted)
          alert('You need to enable permissions')
      }
      
    const handlePress = () => {
      if(!imageUri) selectedImage();
      else Alert.alert('Delete', 'Are you sure?', [
          { text: 'Yes', onPress: () => onChangeImage(null) },
          { text: 'No' },
      ])
    }



    const selectedImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
          });
          if (!result.cancelled)
            onChangeImage(result.uri);
        } catch (error) {
          console.log('Error reading image', error)
        }
      }
    
    return (
      <Screen style={styles.container}>
        <TouchableOpacity style={styles.selector} onPress={handlePress}>
        { imageUri && <Image source={{uri: imageUri}} style={styles.selectedImage} /> }
        { !imageUri && (
            <MaterialCommunityIcons 
                color={colors.mediumGray}
                name='camera'
                size={50}
            />
            ) }
        </TouchableOpacity>
      </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    selector: {
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        borderRadius: 20,
        height: 100,
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 10,
        width: 100,
    },
    selectedImage: {
        borderRadius: 20,
        height: 100,
        width: 100,
        marginLeft: 10,
        marginTop: 10,
    }
});

export default AppImageInput;