import React, { useEffect} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import AppActivityIndicator from '../components/AppActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';

import colors from '../globals/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import useApiCall from '../hooks/useApi';


export default function Listings({ navigation }) {
    //const getListingsResponse = useApiCall(listingsApi.getListings);
    const { 
        data: listings,
        error,
        loading,
        dataRequest: loadListings } = useApiCall(listingsApi.getListings);
    
    
    useEffect(() => {
        loadListings();
    }, [])


    return (
        <>
            <AppActivityIndicator
                action="loading"
                visible={loading}
            />

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
                            imageUrl={item.images[0].url}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            onPress={()=>navigation.navigate(routes.LISTING_DETAILS, item)}
                            subTitle={"$" + item.price}
                            title={item.title}
                        />
                    }
                />

            </Screen>
        </>
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
