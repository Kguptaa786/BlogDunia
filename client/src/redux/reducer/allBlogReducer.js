import { GET_BLOG_BY_CATEGORY } from "../actionTypes";

const allBlogReducer = (state = "", action) => {
  switch (action.type) {
    case GET_BLOG_BY_CATEGORY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default allBlogReducer;
