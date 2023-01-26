import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const myStore = () => {
  const store = configureStore({ reducer: { books: bookReducer, category: categoryReducer } });
  return store;
};

export default myStore;
