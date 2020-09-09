import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../globals/colors';

import routes from '../navigation/routes';
import listingsApi from '../api/listings';


export default function Listings({ navigation }) {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        console.log('loading listings...')
        loadListings();
    }, [])

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        console.log(response);
        console.log(response.originalError);
        setListings(response.data);
    }

    return (
        <Screen style={styles.container}>
        <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={()=>navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
            }
        />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
    }
})
