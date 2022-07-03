import { combineReducers } from "redux";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import blogReducer from "./blogReducer";
import allBlogReducer from "./allBlogReducer";

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  blog: blogReducer,
  blogs: allBlogReducer,
});

export default rootReducer;
