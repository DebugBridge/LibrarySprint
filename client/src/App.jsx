import * as React from 'react';
import axios from 'axios';
import Book from './components/book/Book';
import logo from './logo.svg';
import './App.css';

const getAllBooks = async () => axios.get('http://localhost:8080/books/all/');

const App = () => {
  const [booksArray, setBooksArray] = React.useState([]);

  React.useEffect(() => {
    const helper = async () => {
      const books = await getAllBooks();
      setBooksArray(books.data.books);
    };
    helper();
  }, [booksArray]);
  if (!booksArray) (<div><p>Nopez</p></div>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="app-container">
        {booksArray.map((book) => (
          <Book
            key={book.isbn + book.title}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
