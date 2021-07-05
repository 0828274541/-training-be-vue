const axios = require('./apiHandler');

const booksApi = {
    paging: (payload) => axios.post('/apis/books/paging', payload),
    getBook: (payload) => axios.post('/apis/books/search', { payload }),
    addBook: (payload) => axios.post("/apis/books/", payload),
    updateBook: (id, payload) => axios.put("/apis/books/" + id, payload),
    deleteBook: (payload) => axios.post('/apis/books/delete', payload),
    findByBookId: (payload) => axios.post('/apis/books/findById', payload)
}

module.exports = booksApi;