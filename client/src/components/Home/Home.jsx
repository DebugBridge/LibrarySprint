/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { getJoinTable } from '../../lib/service';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const helper = async () => {
            const joinTableResponse = await getJoinTable();

            setBooks(joinTableResponse.data.joinTable);
        };

        helper();
    }, [setBooks]);

    return (
        <div>
            <div className='home-container'>Home</div>

            {books.length > 0
                ? books.map((book) => (
                    <ul key={book.title + book.isbn + Math.random()}>
                        <li>{book.title}</li>
                        <li>{book.author}</li>
                        <li>{book.isbn}</li>
                        <li>{book.checkout_date ? 'Checked Out' : 'Available'}</li>
                    </ul>
                ))
                : <p>No Data</p>}
        </div>
    );
};

export default Home;
