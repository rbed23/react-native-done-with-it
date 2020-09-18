import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import colors from '../globals/colors';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

function ItemDetails({ route }) {
    const listing = route.params;
    return (
        <Screen>

        {/* <View style={styles.container}> */}
        <View>
            <Image
                style={styles.image}
                uri={listing.images[0].url}
                preview={{uri: listing.images[0].thumbnailUrl}}
                tint="light"
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
        </View>
        
        </Screen>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: 300,    
    },
    text: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        marginLeft: 20,
        color: colors.secondary,
        marginTop: 10,
        fontSize: 22,
    }

})

export default ItemDetails;