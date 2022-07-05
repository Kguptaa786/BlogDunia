import axios from "axios";
import {
  CREATE_BLOG,
  DELETE_BLOG,
  DETAIL_BLOG,
  GET_BLOG_BY_CATEGORY,
  UPDATE_BLOG,
} from "../actionTypes";

const url = "http://localhost:8000";

const createBlog = () => {
  return {
    type: CREATE_BLOG,
  };
};

const deleteBlog = () => {
  return {
    type: DELETE_BLOG,
  };
};

const updateBlog = (updatedBlog) => {
  return {
    type: UPDATE_BLOG,
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

//interceptor
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
//API which dispatch action creator
export const createBlogAPI = (blog) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "post",
        url: url + "/create",
        data: blog,
      });
      dispatch(createBlog());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteBlogAPI = (blogId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "delete",
        url: url + `/delete/${blogId}`,
      });
      dispatch(deleteBlog());
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailBlogAPI = (blogId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: url + `/detail/${blogId}`,
      });
      const blog = res.data.blog;
      dispatch(detailBlog(blog));
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
