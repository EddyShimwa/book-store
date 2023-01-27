import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Actions } from '../UI/slice';

const myId = '19vqSVg6r4EcmNkPgMeK';
axios.defaults.baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${myId}/books`;

// myActionss
export const fetchBooks = createAsyncThunk(
  'book/fetch_books',
  async (arg, thunkAPI) => {
    try {
      thunkAPI.dispatch(Actions.pendingModal());
      const response = await axios.get();
      if (response.status !== 200) {
        throw Error('Something went wrong!!');
      }
      const data = { ...response.data };
      if (!data) {
        throw Error('No Data found!');
      }
      const booksArr = [];
      Object.keys(data).forEach((key) => {
        booksArr.push({
          id: key,
          title: data[key][0].title,
          author: data[key][0].author,
          category: data[key][0].category,
        });
      });

      thunkAPI.dispatch(Actions.closeModal());
      return booksArr || [];
    } catch (err) {
      thunkAPI.dispatch(
        Actions.rejectModal(err.message || 'Failed to create the book!!'),
      );
    }
    return null;
  },
);

export const postNewBook = createAsyncThunk(
  'books/add',
  async (book, thunkAPI) => {
    try {
      const bookData = {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      };
      thunkAPI.dispatch(Actions.pendingModal());
      const response = await axios.post('', { ...bookData });
      if (response.status === 201) {
        thunkAPI.dispatch(
          Actions.successModal('Book is successfully created!!'),
        );
        return bookData;
      }
    } catch (err) {
      thunkAPI.dispatch(
        Actions.rejectModal(err.message || 'Failed to create the book!!'),
      );
    }

    return null;
  },
);

export const removeBook = createAsyncThunk(
  'book/remove',
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(Actions.pendingModal());
      const response = await axios.delete(`/${id}`);
      if (response.status !== 201) {
        throw Error('Failed to delete the book!!');
      }
      thunkAPI.dispatch(Actions.successModal(response.data));
      return id;
    } catch (err) {
      thunkAPI.dispatch(
        Actions.rejectModal(err.message || 'Failed to delete the book!!'),
      );
    }
    return null;
  },
);

// initialState
const initialState = {
  books: [],
};

// reducer
const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchBooks.fulfilled, (state, action) => {
    const updatedState = {
      ...state,
      books: [...action.payload],
    };
    return updatedState;
  });

  builder.addCase(removeBook.fulfilled, (state, action) => {
    const updatedBooks = [...state.books].filter(
      (book) => book.id !== action.payload,
    );
    return { ...state, books: updatedBooks };
  });

  builder.addCase(postNewBook.fulfilled, (state, { payload }) => {
    const book = {
      id: payload.item_id,
      title: payload.title,
      author: payload.author,
      category: payload.category,
    };
    const updatedState = { ...state, books: [...state.books, { ...book }] };
    return updatedState;
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;
