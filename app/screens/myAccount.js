import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator'

import colors from '../globals/colors';
import routes from '../navigation/routes';

export default function Account({ navigation }) {

    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: 'format-list-bulleted',
                backgroundColor: colors.primary,
            },
            targetScreen: ()=>console.log('clicked on My Listings'),
        },
        {
            title: "My Messages",
            icon: {
                name: 'email',
                backgroundColor: colors.secondary,
            },
            targetScreen: () => navigation.navigate(routes.MESSAGES),
        }
    ]
    return (
        <Screen style={styles.container}>
            <ListItem
                title="Mosh"
                subTitle="email"
                image={require('../assets/mosh.jpg')}
                onPress={()=>console.log('clicked on Mosh')}
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
                        onPress={item.targetScreen}
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
                        onPress={()=>console.log('clicked on Logout')}
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
