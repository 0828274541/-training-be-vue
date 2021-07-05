const axios = require('./apiHandler');

const usersApi = {
    paging: (payload) => axios.post('/apis/users/paging', payload),
    addUser: (payload) => axios.post('/apis/users', payload),
    updateUser: (payload) => axios.put('/apis/users', payload),
    deleteUser: (payload) => axios.post('/apis/users/delete', payload)
}

module.exports = usersApi;