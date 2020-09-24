import React from 'react'

import { useFormikContext } from 'formik';

import AppButton from '../AppButton';


export default function AppSubmitButton({ title, style }) {
    
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton 
            onPress={handleSubmit}
            style={style}
            title={title}
        />
    )
}
