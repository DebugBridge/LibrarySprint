const express = require('express');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET, POST, PATCH, PUT, DELETE' }));

app
  .get('/books/all', async (req, res) => {
    res.send({ message: 'Hit  /books/all' });
  })
  .get('/books/:isbn', async (req, res) => {
    res.send({ message: `Hit  /books/:isbn: ${req.params.isbn}` });
  })
  .post('/checkout/:isbn', async (req, res) => {
    res.send({ message: `Hit  /checkout/:isbn: ${req.params.isbn}` });
  })
  .delete('/delete/record', async (req, res) => {
    res.send({ message: `Hit  /delete ENTITY${req.query.table} RECORD ${req.query.recordCol} ${req.query.recordVal}` });
  });

module.exports = app;
