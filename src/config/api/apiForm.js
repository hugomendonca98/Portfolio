import axios from 'axios';

const api = axios.create({
    baseURL: 'https://submit-form.com/'
});

export default api;