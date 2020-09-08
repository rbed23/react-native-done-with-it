import React, {useState} from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../globals/colors';

export default function Listings() {

    const initialListings = [{
        id: 1,
        title: "red jacket",
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "couch for sale",
        price: 60,
        image: require('../assets/couch.jpg')
    }]

    const [listings, setListings] = useState(initialListings);

    return (
        <Screen style={styles.container}>
        <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) =>
                <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    imagePath={item.image}
                />
                    }
        />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        padding: 20,
    }
})
