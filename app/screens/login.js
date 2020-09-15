import React, { useState, useContext } from 'react'
import { StyleSheet, Image } from 'react-native'

import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import Screen from '../components/Screen'
import { AppFormErrorMssg, AppForm, AppFormField, AppFormSubmitButton } from '../components/forms';
import authApi from '../api/auth';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password")
});


export default function Login(props) {

    const authContext = useContext(AuthContext)
    
    const [loginError, setLoginError] = useState(false);
    const [errorMssg, setErrorMssg] = useState();
    
    const handleSubmit = async (loginInfo) => {
        const result = await authApi.login(loginInfo.email, loginInfo.password)
        if (!result.ok) {
            setLoginError(true)
            setErrorMssg(result.data.error)
            return null
        }

        setLoginError(false);
        const user = jwtDecode(result.data);
        authContext.setUser(user);
        authStorage.storeToken(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                <AppFormErrorMssg error={errorMssg} visible={loginError} />

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
