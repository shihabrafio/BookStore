const check_catergory = "bookstore/categories/check_catergory";

const initialcategories = {
  category: [],
};

//Create Reducer
export const checkCategory = () => ({
  type: check_catergory,
});

//Add Reducer
export const categoryReducer = (state = initialcategories, action) => {
  switch (action.type) {
    case "check_catergory":
      return "Under construction";
    default:
      return state;
  }
};
