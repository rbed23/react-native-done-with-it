import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList } from 'react-native'

import AppActivityIndicator from '../components/AppActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';

import colors from '../globals/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';


export default function Listings({ navigation }) {

    const [error, setError] = useState(false);
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    }, [])
    
    const loadListings = async () => {
        setLoading(true);
        const response = await listingsApi.getListings();
        setLoading(false);

        if (!response.ok) return setError(true);

        setError(false);
        setListings(response.data);
    }

    return (
        <Screen style={styles.container}>

            { error && (
                <>
                <AppText>Couldnt Retrieve the Listings...\n\n</AppText>
                <AppButton title="Retry" onPress={loadListings} />
                </>
            )}

            <AppActivityIndicator
                visible={loading}
            />

            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        imageUrl={item.images[0].url}
                        onPress={()=>navigation.navigate(routes.LISTING_DETAILS, item)}
                        subTitle={"$" + item.price}
                        title={item.title}
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
});
