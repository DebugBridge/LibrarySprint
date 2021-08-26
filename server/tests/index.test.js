/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

describe('testing GET /books/all', () => {
    it('when a request is passed, get a good status', async () => {
        const response = await request(app).get('/books/all');
        expect(response.status).toEqual(200);
    });

    it('returns all books', async () => {
        const response = await request(app).get('/books/all');

        const testBook = {
            author: 'Fay, Eduardo',
            id: 1001,
            isbn: '44718',
            title: 'The Heights of the wireless portal',
        };
        expect(response.body.books.find((book) => book)).toEqual(testBook);
    });
});

xdescribe('testing GET /api/book/:bookid', () => {
    it('when given a :bookid, return all information pertaining to the :bookid', async () => {
        const response = await request(app).get('/api/book/5');
        expect(response.body[0].id).toBe(5);
    });

    it('the return for a :bookid should return ', async () => {

    });

    it('when given a :bookid that does not exist, return status 404', async () => {
        const response = await request(app).get('/api/book/99999999');
        expect(response.status).toEqual(404);
        expect(response.message).toEqual('Your request was not found');
    });
});

xdescribe('testing POST /api/books/:bookid/checkout/:userid', () => {
    xit('added a checked out book to the db', async () => {
        const response = await request(app).get('/api/books/4/checkout/2');
        expect(response.status).toEqual(200);
        expect(response.message).toEqual('Book Checked Out Successful!');
    });

    xit('if book is checked out to same user, should return a checkout notification', async () => {
        const response = await request(app).get('/api/books/4/checkout/2');
        expect(response.status).toEqual(201);
        expect(response.message).toEqual('You already checked this book out!');
    });

    xit('if book is checked out to another user, should return a checked out to other user notification', async () => {
        const response = await request(app).get('/api/books/4/checkout/3');
        expect(response.status).toEqual(202);
        expect(response.message).toEqual('This Book Is Already Checked Out To Another User!');
    });
});

xdescribe('testing DELETE /api/books/:bookid/return', () => {
    xit('a librarian should be able to return a book', async () => {
        const response = await request(app).get('/api/books/4/return');
        expect(response.status).toEqual(200);
        expect(response.message).toEqual('This Book Is turned in!');
        // added check for db if its deleted (possibily a return body?)_
    });
});
