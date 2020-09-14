import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, AppFormSubmitButton } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen'
import AppFormImagePicker from '../components/forms/AppFormImagePicker';

import listingsApi from '../api/listings';

import useLocation from '../hooks/useLocation';
import useApiCall from '../hooks/useApi';
import Upload from './upload';


const validationSchema = Yup.object().shape({
    category: Yup.string().required().nullable().label('category'),
    description: Yup.string().label('description'),
    images: Yup.array().min(1, "Please select at least 1 image."),
    price: Yup.string().required().min(1).max(10000).label('price'),
    title: Yup.string().required().min(5).label('title'),
});


export default function ListingEdit() {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const { 
        data: categories,
        error,
        loading,
        dataRequest: loadCategories } = useApiCall(listingsApi.getCategories);
    
    
    useEffect(() => {
        loadCategories();
    }, [])


    const handleSubmit = async (listing) => {
        setProgress(0);
        setUploadVisible(true);

        const result = await listingsApi.postListing(
            {...listing, location},
            (progress) => setProgress(progress)
        );

        setUploadVisible(true);

        if(!result.ok) return alert('Could not save the listing.');
        alert("Success");
    }

    return (
        <Screen style={styles.container}>
            
            <Upload progress={progress} visible={uploadVisible} />
            
            <AppForm
                initialValues={{
                    images: [],
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                <AppFormImagePicker name='images' />

                <AppFormField 
                    autoCapitalize='words'
                    autoCorrect={false}
                    maxLength={255}
                    name='title'
                    placeholder='Title'
                />

                <AppFormField 
                    fieldWidth={'33%'}
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='$'
                />
                
                <AppFormPicker 
                    fieldWidth={'50%'}
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="category"
                />
                
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={true}
                    multiline={true}
                    name='description'
                    numberOfLines={3}
                    placeholder="description"
                />

                <AppFormSubmitButton
                    title="Post"
                />

            </AppForm>            
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,

    }
})
