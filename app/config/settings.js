import Constants from 'expo-constants';

const settings = {
    dev: {
        apiUrl: 'http://192.168.2.119:9000/api',
        timeout: 2000,
    },
    staging: {
        apiUrl: 'http://192.168.2.119:9000/api',
        timeout: 5000,
    },
    prod: {
        apiUrl: 'http://192.168.2.119:9000/api',
        timeout: 10000
    },
}

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();