import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator'

import colors from '../globals/colors';

export default function Account() {

    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: 'format-list-bulleted',
                backgroundColor: colors.primary,
            },
            onPress: "()=>console.log('nothing')",
        },
        {
            title: "My Messages",
            icon: {
                name: 'email',
                backgroundColor: colors.secondary,
            },
            onPress: "()=>console.log('nothing')",
        }
    ]
    return (
        <Screen style={styles.container}>
            <ListItem
                title="Mosh"
                subTitle="email"
                image={require('../assets/mosh.jpg')}
                onPress={()=>console.log('nothing')}
            />

            <View style={styles.section}>
            <FlatList
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({ item })=>
                    <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                                color={colors.white}
                                size={50}
                            />
                        }
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
            />
            </View>

            <View style={styles.section}>
                <ListItem
                        title="Logout"
                        IconComponent={
                            <Icon
                                name="logout"
                                backgroundColor={colors.logout}
                                color={colors.white}
                                size={50}
                            />
                        }
                    />
                
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray
    },
    section: {
        marginTop: 20,
        backgroundColor: colors.white,
    }
})
