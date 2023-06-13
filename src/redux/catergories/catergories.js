const checkcategory = 'bookstore/categories/checkcategory';

const initialcategories = {
  category: [],
};

// Create Reducer
export const checkCategory = () => ({
  type: checkcategory,
});

// Add Reducer
export const categoryReducer = (state = initialcategories, action) => {
  switch (action.type) {
    case 'checkcategory':
      return 'Under construction';
    default:
      return state;
  }
};
