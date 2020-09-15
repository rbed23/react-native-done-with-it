import * as SecureStore from 'expo-secure-store';

const key = "authToken"

const storeToken = async (authToken) => {
    try {
        console.log("storing token", authToken)
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log("Error storing auth token", error)
    }
}

const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key);
        console.log("got token...", token);
        return token;
    } catch (error) {
        console.log("Error getting auth token", error)
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error removing auth token', error)
    }
}

export default {
    storeToken,
    getToken,
    removeToken,
}