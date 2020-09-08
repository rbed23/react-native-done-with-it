import React, { useState } from 'react'
import { StyleSheet, View, Button, Modal } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../globals/styles';
import AppText from './AppText';
import { TouchableWithoutFeedback, FlatList } from 'react-native-gesture-handler';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker( { fieldWidth, icon, items, numberOfColumns=1, placeholder, onSelectItem, PickerItemComponent = PickerItem, selectedItem } ) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
    <>
        <TouchableWithoutFeedback
            onPress={()=>setModalVisible(true)}
        >
        <View style={[styles.container, {width: fieldWidth}]}>
            
            {icon && <MaterialCommunityIcons 
                name={icon}
                size={30}
                color={defaultStyles.colors.mediumGray}
                style={styles.iconInput}
            />}

            { selectedItem ? (
                <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
                <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}
            

            <MaterialCommunityIcons 
                name="chevron-down"
                size={30}
                color={defaultStyles.colors.mediumGray}
            />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title='Close' onPress={()=>setModalVisible(false)}/>
                <FlatList
                    data={items}
                    keyExtractor={item=>item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item})=> 
                        <PickerItemComponent
                            item={item}
                            onPress={()=> {
                                setModalVisible(false)
                                onSelectItem(item)
                            }}
                        />
                    }
                />
            </Screen>
        </Modal>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.lightGray,
        borderRadius: 25,
        flexDirection: 'row', 
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    iconInput: {
        marginRight: 10,
    },
    placeholder: {
        color: defaultStyles.colors.unselected,
        flex: 1,
    },
    text: {
        color: defaultStyles.colors.darkGray,
        flex: 1,
    }
})
