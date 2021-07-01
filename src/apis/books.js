const axios = require('./apiHandler');

const booksApi = {
    paging: (payload) => axios.post('/apis/users/paging', { condition: payload }),
    getBook: (payload) => axios.post('/apis/books/search', { payload })
}

module.exports = booksApi;