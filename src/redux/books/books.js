export const initialState = { books: [] };

const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REMOVE_BOOK:
      return state.filter((book, index) => index !== action.payLoad.index);
    case ADD_BOOK:
      return [...state, action.payLoad];
    default:
      return state;
  }
}

export function removeBook(index) {
  return { type: REMOVE_BOOK, payLoad: { index } };
}

export function addBook(index, title, author, category) {
  return {
    type: ADD_BOOK,
    payLoad: {
      index, title, author, category,
    },
  };
}
