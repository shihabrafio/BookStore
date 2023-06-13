const addbook = "bookStore/books/addbook";
const removebook = "bookStore/books/removebook";

const initialbooks = {
  books: [],
};

// Create Action
export const addBooks = () => ({
  type: addbook,
  id: 1,
  title: "Harry Potter",
});

export const removeBooks = (id) => ({
  type: removebook,
  id,
});

// Add Reducer
export const bookReducer = (state = initialbooks, action) => {
  switch (action.type) {
    case "addbook":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ];
    case "removebook":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
