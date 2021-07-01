const axios = require('./apiHandler');

const authApi = {
    register: (payload) => axios.post('/apis/auth/register', payload),
    login: (payload) => axios.post('/apis/auth/login', payload),
    logout: () => axios.post('/apis/auth/logout'),
}

module.exports = authApi;