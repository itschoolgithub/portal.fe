import axios from 'axios';

const api = axios.create();

if (process.env.NODE_ENV === 'production') {
    api.defaults.baseURL = '/api';
} else {
    api.defaults.baseURL = 'http://portal.be/api';
}

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;