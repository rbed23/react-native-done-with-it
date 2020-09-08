import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useFormikContext } from 'formik';
import AppButton from '../AppButton';



export default function AppSubmitButton({ title }) {
    
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton 
            title={title}
            onPress={handleSubmit}
            style={{marginTop: 20}}
        />
    )
}

const styles = StyleSheet.create({})
