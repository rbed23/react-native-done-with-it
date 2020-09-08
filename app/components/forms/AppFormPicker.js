import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { useFormikContext } from 'formik';

import defaultStyles from '../../globals/styles';
import AppText from '../AppText';
import PickerItem from '../PickerItem';
import Screen from '../Screen';

import AppPicker from '../AppPicker';
import ErrorMssg from './AppFormErrorMssg';


export default function AppFormPicker( { fieldWidth, items, name, numberOfColumns, PickerItemComponent, placeholder } ) {

    const [modalVisible, setModalVisible] = useState(false)

    const { setFieldValue, values, errors, touched } = useFormikContext();

    return (
    <>
        <AppPicker
            items={items}
            fieldWidth={fieldWidth}
            numberOfColumns={numberOfColumns}
            onSelectItem={item => setFieldValue(name, item)}
            PickerItemComponent={PickerItemComponent}
            placeholder={placeholder}
            selectedItem={values[name]}
        />

        <ErrorMssg
                error={errors[name]}
                visible={touched[name]}/>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGray,
        width: '100%',
        padding: 15,
        marginVertical: 10,
        borderRadius: 25,
        flexDirection: 'row'
    },
    iconInput: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
})
