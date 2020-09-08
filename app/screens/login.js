import React from 'react'
import { StyleSheet, Image } from 'react-native'

import * as Yup from 'yup';

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormSubmitButton } from '../components/forms';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password")
});


export default function Login(props) {

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo-red.png')}
                />
            
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={vals=>console.log(vals)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType="email-address"
                    name='email'
                    placeholder='email'
                    textContentType="emailAddress"
                />
                
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name='password'
                    placeholder="password"
                    secureTextEntry={true}
                    textContentType="password"
                />

                <AppFormSubmitButton 
                    title="Login"
                />
            </AppForm>            
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,

    }
})
