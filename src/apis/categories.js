const axios = require('./apiHandler');

const categoriesApi = {
    getCategory: () => axios.get('/apis/categories'),
    addCategory: (payload) => axios.post('/apis/categories', { payload }),
    updateCategory: (payload) => axios.put('/apis/categories', { payload }),
    deleteCategory: (payload) => axios.post('/apis/categories/delete', payload)
}

module.exports = categoriesApi;