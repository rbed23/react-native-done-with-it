import React from 'react';

import { useFormikContext } from 'formik';

import AppInput from '../AppInput';
import ErrorMssg from './AppFormErrorMssg';

export default function AppFormField({ name, fieldWidth, style, ...otherProps }) {
    
    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();

    return (
    <>
        <AppInput 
            fieldWidth={fieldWidth}
            onBlur={()=> setFieldTouched(name)}
            onChangeText={text => setFieldValue(name, text)}
            value={values[name]}
            {...otherProps}
        />
        <ErrorMssg
            error={errors[name]}
            visible={touched[name]}/>
    </>
    )
}
