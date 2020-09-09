import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'

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
                <AppText>Couldnt Retrieve the Listings...</AppText>
                <AppButton title="Retry" onPress={loadListings} />
                </>
            )}
            <ActivityIndicator animating={true} size="large"/>
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
