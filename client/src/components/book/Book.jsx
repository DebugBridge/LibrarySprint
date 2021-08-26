import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, isbn }) => (
  <ul>
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
}
export default Book;
