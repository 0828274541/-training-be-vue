const axios = require('./apiHandler');

const usersApi = {
    paging: (payload) => axios.post('/apis/users/paging', payload),
    addCategory: (payload) => axios.post('/apis/users', { payload }),
    updateCategory: (payload) => axios.put('/apis/users', { payload }),
    deleteCategory: (payload) => axios.post('/apis/users/delete', payload)
}

module.exports = usersApi;