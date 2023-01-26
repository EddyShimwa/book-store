import { createReducer, createAction } from '@reduxjs/toolkit';

export const ADD_BOOK = createAction('books/add');
export const REMOVE_BOOK = createAction('book/remove');

const initialState = {
  books: [
    {
      id: '1',
      title: 'Harry Potter and the Sorcerers Stone',
      author: 'J.K. Rowling',
      category: 'Fantasy',
    },
    {
      id: '2',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
    },
    {
      id: '3',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      category: 'Coming of Age',
    },
    {
      id: '4',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Literary Fiction',
    },
    {
      id: '5',
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian',
    },
    {
      id: '6',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Literary Fiction',
    },
    {
      id: '7',
      title: 'Brave New World',
      author: 'Aldous Huxley',
      category: 'Dystopian',
    },
  ],
};

const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_BOOK, (state, action) => {
    const updatedState = {
      ...state,
      books: [
        ...state.books,
        { ...action.payload, id: `${state.books.length + 1}` },
      ],
    };
    return updatedState;
  });

  builder.addCase(REMOVE_BOOK, (state, action) => {
    const updatedBooks = [...state.books].filter(
      (book) => book.id !== action.payload,
    );
    return { ...state, books: updatedBooks };
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;
