import React from 'react'
import { Text, View } from 'react-native'

import defaultStyles from '../globals/styles';


function AppText({ children, style, ...otherProps }) {
    return (
        
        <Text
            style={[defaultStyles.text, style]}
            {...otherProps}
        >
            { children }
        </Text>
    )
}


export default AppText;
