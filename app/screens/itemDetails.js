import React from 'react';
import { StyleSheet, Keyboard, Alert, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';

import colors from '../globals/colors';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import { AppForm, AppFormField, AppFormSubmitButton } from '../components/forms';
import messageApi from '../api/messages';
import logger from '../utility/logger';


const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(10).label('message'),
});


function ItemDetails({ route }) {
    
    const listing = route.params;

    const handleSend = async (formData) => {
        const response = await Notifications.scheduleNotificationAsync({
            content: {
                title: "You have received a new message!",
                body: formData.message
            },
            trigger: null,
        });
        
        logger.log('notification sent', response)
    }

    const handleSubmit = async (formData) => {
        Keyboard.dismiss();
        try {
            const result = await messageApi.sendMessage(formData);
            handleSend(formData);

        } catch (error) {
            logger.log(error)
            return Alert.alert("Error", "Could not send message to user.");
        }
        
        
    }

    return (

        
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "android" ? 180 : 0}
        >
            <View style={styles.container}>
                <Image
                    preview={{uri: listing.images[0].thumbnailUrl}}
                    style={styles.image}
                    tint="light"
                    uri={listing.images[0].url}
                />
                <AppText style={styles.text}>
                    {listing.title}
                </AppText>

                <AppText style={styles.subText}>
                    ${listing.price}
                </AppText>

                <ListItem 
                    image={require('../assets/mosh.jpg')}
                    title="Mosh"
                    subTitle="22 Listings"
                    />

                <AppForm
                    initialValues={{message: '', listingId: listing.id}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    >

                    <AppFormField
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='message'
                        fieldWidth="100%"
                        name='message'
                        placeholder='Message Seller...'
                        style={styles.messagesArea}
                        textContentType="none"
                    />

                    <AppFormSubmitButton 
                        title="Contact Seller"
                    />
                </AppForm>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: 200,    
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        color: colors.secondary,
        fontSize: 20,
    },
    messagesArea: {
        marginBottom: 10,
        marginTop: 20,
    }

})

export default ItemDetails;