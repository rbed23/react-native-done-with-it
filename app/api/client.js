import { create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';

const apiClient = create({
    baseURL: 'http://192.168.2.119:9000/api',
    timeout: 5000,
})

apiClient.addAsyncRequestTransform(async(request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return null;
    request.headers['x-auth-token'] = authToken;
});

const get = apiClient.get;
apiClient.get = async ( url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data)
        return response;
    }

    const data = await cache.get(url);
    return data ? { ok: true, data} : response;
}

export default apiClient;