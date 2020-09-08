import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useFormikContext } from 'formik';

import AppInput from '../AppInput';
import ErrorMssg from './AppFormErrorMssg';

export default function AppFormField( { name, fieldWidth, style, ...otherProps }) {
    
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <AppInput 
                
                onBlur={()=> setFieldTouched(name)}
                onChangeText={handleChange(name)}
                fieldWidth={fieldWidth}
                {...otherProps}
                //autoCapitalize='none'
                //autoCorrect={false}
                //icon='email'
                //keyboardType="email-address"
                //placeholder='email'
                //textContentType="emailAddress"
            />
            <ErrorMssg
                error={errors[name]}
                visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
