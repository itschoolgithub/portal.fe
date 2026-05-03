import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = 'http://portal.be/api';

export default api;