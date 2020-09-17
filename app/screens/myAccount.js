import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator'

import colors from '../globals/colors';
import routes from '../navigation/routes';
import useAuth from '../hooks/useAuth';

export default function Account({ navigation }) {

    const { user, logout } = useAuth();

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
            <View style={styles.section}>
            <ListItem
                title={user.name}
                subTitle={user.email}
                image={require('../assets/mosh.jpg')}
                onPress={()=>console.log('clicked on Mosh')}
            />
            </View>

            <View style={{marginTop: 20}}>
            <FlatList
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({ item })=>
                <View style={styles.section}>
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
                        </View>
                }
                ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <View style={[styles.section, {marginTop:20}]}>
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
                        onPress={() => logout()}
                    />
                
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        flex: 1,
    },
    section: {
        backgroundColor: colors.white,
    }
})
