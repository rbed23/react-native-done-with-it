import React, { useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, Alert } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import colors from '../globals/colors';
import logger from '../utility/logger';


function AppImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA, Permissions.LOCATION)
        if (!granted)
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
          logger.log('Error reading image', error)
        }
      }
    
    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.container, styles.selector]}>
          { !imageUri && (
            <MaterialCommunityIcons 
              color={colors.mediumGray}
              name='camera'
              size={50}
            />
            )}
          { imageUri && <Image source={{uri: imageUri}} style={styles.selectedImage} /> }
        </View>
      </TouchableWithoutFeedback>
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
        marginRight: 10,
        marginTop: 10,
        overflow: 'hidden',
        width: 100,
    },
    selectedImage: {
        height: '100%',
        width: '100%',
    }
});

export default AppImageInput;