import { combineReducers } from "redux";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import blogReducer from "./blogReducer";
import allBlogReducer from "./allBlogReducer";
import messageReducer from "./messageReducer";

//store looklike this
// {
//   user:{}
//   blogs:[blog]
//   comments:[comment]
//   errorMessage:""
// }

const rootReducer = combineReducers({
  user: userReducer,
  comments: commentReducer,
  blog: blogReducer,
  blogs: allBlogReducer,
  message: messageReducer,
});

export default rootReducer;
