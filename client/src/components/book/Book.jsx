import React from 'react';
import PropTypes from 'prop-types';
import './Book.sass';

const Book = ({ title, author, isbn }) => (
    <ul className='book-list'>
        <li>{title}</li>
        <li>
            By:&nbsp;
            {author}
        </li>
        <li>
            ISBN:&nbsp;
            {isbn}
        </li>
    </ul>
);

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
};

export default Book;
