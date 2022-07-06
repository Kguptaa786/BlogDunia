import {
  DELETE_COMMENT,
  POST_COMMENT,
  GET_BLOG_COMMENTS,
} from "../actionTypes";
const commentReducer = (state = "", action) => {
  switch (action.type) {
    case DELETE_COMMENT: {
      return state;
    }
    case POST_COMMENT: {
      return state;
    }
    case GET_BLOG_COMMENTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default commentReducer;
