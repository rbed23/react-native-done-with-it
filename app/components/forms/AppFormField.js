import React from 'react';

import { useFormikContext } from 'formik';

import AppInput from '../AppInput';
import ErrorMssg from './AppFormErrorMssg';

export default function AppFormField({ name, fieldWidth, style, ...otherProps }) {
    
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
    <>
        <AppInput 
            onBlur={()=> setFieldTouched(name)}
            onChangeText={handleChange(name)}
            fieldWidth={fieldWidth}
            {...otherProps}
        />
        <ErrorMssg
            error={errors[name]}
            visible={touched[name]}/>
    </>
    )
}
