import client from './client';

const endpoint = '/listings';
const categories = '/categories';

const getListings = () => client.get(endpoint);
const getCategories = () => client.get(categories);

export default {
    getListings,
    getCategories
}
