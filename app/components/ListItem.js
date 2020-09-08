import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../globals/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image, IconComponent, onPress, swipeRight, showChevrons }) {
    return (
        <Swipeable renderRightActions={swipeRight}>
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={colors.lightGray}
        >
            <View style={styles.container}>
                {IconComponent}
                {image && <Image 
                    style={styles.image}
                    source={image}
                />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>
                        {title}
                    </AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>
                        {subTitle}
                    </AppText>}
                </View>

                { showChevrons && 
                        <MaterialCommunityIcons
                            name='chevron-right'
                            size={25}
                            color={colors.mediumGray}
                        />
                }
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        height: 70,
        width: 70,
        resizeMode: 'stretch',
        borderRadius: 70,
    },
    title: {
        fontSize: 18,
    },
    subTitle: {
        fontSize: 15,
        color: colors.mediumGray,
    },
});

export default ListItem;
