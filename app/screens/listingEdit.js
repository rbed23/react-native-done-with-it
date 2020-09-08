import React from 'react'
import { StyleSheet } from 'react-native'

import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, AppFormSubmitButton } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen'
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(5).label('title'),
    price: Yup.string().required().min(1).max(10000).label('price'),
    description: Yup.string().label('description'),
    category: Yup.string().required().nullable().label('category'),
    images: Yup.array().min(1, "Please select at least 1 image."),
});


export default function ListingEdit() {

    const location = useLocation();

    const categories = [
        {iconColor: '#fc5c65', iconName: 'floor-lamp', label: 'Furniture', value: 1},
        {iconColor: '#2bcbba', iconName: 'login', label: 'Clothing', value: 2},
        {iconColor: 'gold', iconName: 'calculator', label: 'Electronics', value: 3},
        {iconColor: 'gold', iconName: 'food', label: 'Kitchen Supplies', value: 4},
        {iconColor: '#fd9644', iconName: 'car', label: 'Cars', value: 5},
        {iconColor: '#fed330', iconName: 'camera', label: 'Cameras', value: 6},
        {iconColor: '#26de81', iconName: 'cards', label: 'Games', value: 7},
        {iconColor: '#45aaf2', iconName: 'basketball', label: 'Sports', value: 8},
        {iconColor: '#4b7bec', iconName: 'headphones', label: 'Movies & Music', value: 9},
        {iconColor: 'gold', iconName: 'book', label: 'Books', value: 10},
        {iconColor: 'gray', iconName: 'hanger', label: 'Other', value: 11},
    ]

    return (
        <Screen style={styles.container}>
            
            <AppForm
                initialValues={{
                    images: [],
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={vals=>console.log(location)}
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
