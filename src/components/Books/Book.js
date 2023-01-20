import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Interface/Card';

const Book = ({
  id, title, author, category, onRemoveBookHandler,
}) => (
  <li>
    <Card id={id}>
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={onRemoveBookHandler}>
        Remove
      </button>
    </Card>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemoveBookHandler: PropTypes.func.isRequired,
};

export default Book;
