import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../globals/colors';

import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';


export default function Listings({ navigation }) {

    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadListings();
    }, [])

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        console.log('1 ' + response.ok);
        if (!response.ok) return setError(true);
        else setError(false);
        console.log('2 ' + error)
        console.log('3' + response.data);
        setListings(response.data);
    }

    return (
        <Screen style={styles.container}>
            { error && (
                <>
                <AppText>Couldnt Retrieve the Listings...</AppText>
                <AppButton title="Retry" onPress={loadListings} />
                </>
            )}
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
