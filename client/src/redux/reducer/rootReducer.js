import { combineReducers } from "redux";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import blogReducer from "./blogReducer";
import allBlogReducer from "./allBlogReducer";

//store looklike this
// {
//   user:{}
//   blogs:[blog]
//   comments:[comment]
// }

const rootReducer = combineReducers({
  user: userReducer,
  comments: commentReducer,
  blog: blogReducer,
  blogs: allBlogReducer,
});

export default rootReducer;
