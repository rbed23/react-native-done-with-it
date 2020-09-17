import * as SecureStore from 'expo-secure-store';
import JwtDecode from 'jwt-decode';

const key = "authToken"

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log("Error storing auth token", error)
    }
}

const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key);
        return token;
    } catch (error) {
        console.log("Error getting auth token", error)
    }
}

const getUser = async () => {
    const token = await getToken();
    return (token) ? JwtDecode(token) : null;
  };

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error removing auth token', error)
    }
}

export default {
    storeToken,
    removeToken,
    getUser,
    getToken,
}