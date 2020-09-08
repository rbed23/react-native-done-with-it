import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import colors from '../globals/colors';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText';

function ItemDetails(props) {

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={props.image}/>
            <AppText style={styles.text}>
                {props.title}
            </AppText>
            <AppText style={styles.subText}>
                {props.subTitle}
            </AppText>
            <ListItem 
                image={require('../assets/mosh.jpg')}
                title="Mosh"
                subTitle="22 Listings"
            />
        </View>
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