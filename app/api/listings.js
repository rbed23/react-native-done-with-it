import client from './client';

const endpoint = '/listings';
const categories = '/categories';

const getListings = ( a, b, c ) => client.get(endpoint);
const getCategories = () => client.get(categories);

export default {
    getListings,
    getCategories
}
