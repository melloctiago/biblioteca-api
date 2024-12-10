const express = require('express');
const routes = express.Router();
const BookController = require('./BookController');

routes.get('/books', BookController.index);

routes.post('/books',BookController.store);

routes.get('/books/:id',BookController.show);

routes.put('/books/:id',BookController.update);

routes.delete('/books/:id',BookController.delete);

module.exports = routes;


