export const CHECK_STATUS = 'categories/CHECK_STATUS';

export const initialState = {
  categories: [],
};

export default function categoryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS: return [...state, 'Under construction'];
    default:
      return state;
  }
}
