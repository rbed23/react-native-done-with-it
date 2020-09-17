import client from './client';

const register = (registrationInfo) => client.post('/users', registrationInfo)

export default {
    register,
}