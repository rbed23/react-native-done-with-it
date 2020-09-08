import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../globals/colors'
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ListItemDeleteAction(props) {


    const handleDelete = message => {
        // Delete the message


        // Call the server
    }
    return (
        <TouchableWithoutFeedback
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name='trash-can'
                    size={35}
                    color={colors.white}
                    />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
