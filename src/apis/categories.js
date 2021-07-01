const axios = require('./apiHandler');

const categoriesApi = {
    paging: (payload) => axios.post('/apis/users/paging', { condition: payload }),
    getCategory: () => axios.get('/apis/categories')
}

module.exports = categoriesApi;