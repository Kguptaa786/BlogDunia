import { DELETE_BLOG, DETAIL_BLOG, UPDATE_BLOG } from "../actionTypes";
const blogReducer = (state = "", action) => {
  switch (action.type) {
    case DETAIL_BLOG: {
      return action.payload;
    }
    case DELETE_BLOG: {
      return state;
    }
    case UPDATE_BLOG: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default blogReducer;
