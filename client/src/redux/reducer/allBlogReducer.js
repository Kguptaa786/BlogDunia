import { GET_BLOG_BY_CATEGORY } from "../actionTypes";

const initialState = [];

const allBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_BY_CATEGORY: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default allBlogReducer;
