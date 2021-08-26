import axios from 'axios';

export const getAllBooks = () => axios.get('http://localhost:8080/books/all');

export const getBookById = (bookId) => axios.get(`http://localhost:8080/books/${bookId}`);

export const getTransactions = () => axios.get('http://localhost:8080/api/checkout');

export const getJoinTable = () => axios.get('http://localhost:8080/library');
