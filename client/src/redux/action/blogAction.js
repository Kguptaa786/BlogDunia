import axios from "axios";
import {
  CREATE_BLOG,
  DELETE_BLOG,
  DETAIL_BLOG,
  GET_BLOG_BY_CATEGORY,
  UPDATE_BLOG,
} from "../actionTypes";

const url = "http://localhost:8000";

const createBlog = (blog) => {
  return {
    type: CREATE_BLOG,
    payload: blog,
  };
};

const updateBlog = (updatedBlog) => {
  return {
    type: UPDATE_BLOG,
    payload: updatedBlog,
  };
};

const deleteBlog = (blogId) => {
  return {
    type: DELETE_BLOG,
    payload: blogId,
  };
};

const detailBlog = (blog) => {
  return {
    type: DETAIL_BLOG,
    payload: blog,
  };
};

const getBlogByCategory = (blogs) => {
  return {
    type: GET_BLOG_BY_CATEGORY,
    payload: blogs,
  };
};

//API which dispatch action creator

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

export const createBlogAPI = (blog) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "post",
        url: url + "/create",
        data: blog,
      });
      dispatch(createBlog(blog));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBlogByCategoryAPI = (category) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: url + `/getBlogs/${category}`,
      });
      const blogs = res.data.blogs;
      dispatch(getBlogByCategory(blogs));
    } catch (error) {
      console.log(error);
    }
  };
};
