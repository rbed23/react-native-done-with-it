import React from 'react';

import { useFormikContext } from 'formik';

import AppImageInputList from '../AppImageInputList';
import ErrorMssg from './AppFormErrorMssg';

export default function AppFormImagePicker({ name }) {
    
    const { setFieldValue, values, errors, touched } = useFormikContext();    
    const imageUris = values[name]


    const handleAdd = uri => {
      setFieldValue(name, [...imageUris, uri]);
    }
  
    const handleRemove = uri => {
      setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
    }

    return (
    <>
        <AppImageInputList 
            imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />
        <ErrorMssg
            error={errors[name]}
            visible={touched[name]}/>
    </>
    );
}
