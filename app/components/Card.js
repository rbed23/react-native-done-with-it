import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import AppText from './AppText';
import colors from '../globals/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Card(props) {

    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View 
                onPress={props.onPress}
                style={styles.card}
            >
                <Image
                    style={styles.image}
                    source={props.imagePath}
                />
                <AppText style={styles.title} numberOfLines={1}>
                    {props.title}
                </AppText>
                <AppText style={styles.subtitle} numberOfLines={3}>
                    {props.subTitle}
                </AppText>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 30,
        width: '100%',
        height: 300,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        flex: 5,
        width: '100%',
        height: '50%',
        resizeMode: "cover",
    },
    subtitle: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        color: colors.secondary,
        fontSize: 22,
    },
    title: {
        marginLeft: 10,
        color: colors.black,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Card;