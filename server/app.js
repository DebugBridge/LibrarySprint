/* eslint-disable no-console */
const express = require('express');

const app = express();
const cors = require('cors');
const knex = require('knex')(require('./knexfile').development);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET, POST, PATCH, PUT, DELETE' }));

app.get('/', (req, res) => res.status(200).send({ message: 'welcome' }))
    .get('/books/all', async (req, res) => {
        try {
            const allBooks = await knex('books').select('*');
            res.send({
                message: 'Hit  /books/all',
                books: allBooks,
            });
        } catch (err) {
            if (err.status === 404) {
                const error = new Error();
                error.message = 'Can\'t find resources';
                res.send(error);
            }
        }
    })
    .get('/library', async (req, res) => {
        try {
            const joinTable = await knex.select('*')
                .from('books')
                .fullOuterJoin('user_books_checkout', 'books.id', 'user_books_checkout.book_id');
            res.status(200).send({ joinTable });
        } catch (err) {
            res.send(err);
        }
    });

app.get('/api/checkout/', async (req, res) => {
    try {
        const transactions = await knex('user_books_checkout')
            .select('*');
        if (transactions) {
            res.status(200).send({ transactions });
        } else {
            console.log('didnt make it back with data');
            res.status(200).send({ message: 'Available' });
        }
    } catch (err) {
        const error = new Error();
        error.message = 'Issue with request';
        res.status(500).send({ error: err, errorMsg: error });
    }
});

// app.get('/api/books/:bookId', async (req, res) => {
//   try {
//     let bookID = req.params.bookId;
//     const bookById = await knex('books').select('*').where('id', bookID);
//     res.send({})
//   } catch (err) {

//   }
//   res.send({ message: `Hit  /api/books/:isbn: ${req.params.isbn}` });
// })

// app.delete('/api/delete/record', async (req, res) => {
//   res.send({
//  message:
//  `Hit  /api/delete
//  ENTITY${req.query.table}
//  RECORD ${req.query.recordCol} ${req.query.recordVal}`
// });
// });

module.exports = app;
