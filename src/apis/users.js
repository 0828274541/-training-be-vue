const axios = require('./apiHandler');

const usersApi = {
    paging: (payload) => axios.post('/apis/users/paging', { condition: payload })
}

module.exports = usersApi;