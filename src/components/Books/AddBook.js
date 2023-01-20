import React from 'react';
import Card from '../Interface/Card';

const AddBook = () => (
  <Card>
    <h3>Add New Book</h3>
    <form>
      <div>
        <input type="text" placeholder="Book Title" />
      </div>
      <div>
        <input type="text" placeholder="Author" />
      </div>
      <div>
        <button type="button">Add Book</button>
      </div>
    </form>
  </Card>
);

export default AddBook;
