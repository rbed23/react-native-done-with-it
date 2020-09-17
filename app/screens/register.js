import React, { useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'

import * as Yup from 'yup';

import Screen from '../components/Screen'
import { AppFormErrorMssg, AppForm, AppFormField, AppFormSubmitButton } from '../components/forms';
import useAuth from '../hooks/useAuth';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';
import AppActivityIndicator from '../components/AppActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password"),
    //password2: Yup.string().required().min(4).label("Password Re-Entry")
});


export default function Register(props) {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login)
    
    const { login } = useAuth();
    
    const [registrationError, setRegistrationError] = useState(false);
    const [errorMssg, setErrorMssg] = useState();
    
    const handleSubmit = async (registrationInfo) => {
        const result = await registerApi.dataRequest(registrationInfo)
        if (!result.ok) {
            if (result.data) {
                setRegistrationError(true);
                setErrorMssg(result.data.error);
            } else {
                setErrorMssg("An unexpected error occurred.")
            }
            return null;
        }

        setRegistrationError(false);
        const token = await loginApi.dataRequest(result.data.email, result.data.password)
        login(token.data);     
    }

    return (
        <>
            <AppActivityIndicator
                action="loading"
                visible={registerApi.loading || loginApi.loading}
                //visible={true}
                //size={{height: 200, width:200}}
            />

            <Screen style={styles.container}>

                <Image 
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                    />
                
                <AppForm
                    initialValues={{name: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >

                    <AppFormErrorMssg error={errorMssg} visible={registrationError} />

                    <AppFormField 
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='account'
                        name='name'
                        placeholder='name'
                        textContentType="name"
                    />

                    <AppFormField 
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='email'
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
                    
                    {/* <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name='password2'
                        placeholder="re-enter password"
                        secureTextEntry={false}
                        textContentType="password"
                    /> */}

                    <AppFormSubmitButton 
                        title="Register"
                    />

        
                </AppForm>            
                
            </Screen>
        </>
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
    },
})
