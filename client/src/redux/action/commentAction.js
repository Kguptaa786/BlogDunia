import axios from "axios";
import {
  POST_COMMENT,
  DELETE_COMMENT,
  GET_BLOG_COMMENTS,
} from "../actionTypes";

const url = "http://localhost:8000";

const postComment = () => {
  return {
    type: POST_COMMENT,
  };
};

const deleteComment = () => {
  return {
    type: DELETE_COMMENT,
  };
};

const getBlogComments = (comments) => {
  return {
    type: GET_BLOG_COMMENTS,
    payload: comments,
  };
};

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
export const postCommentAPI = (comment) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "post",
        url: url + "/comment/new",
        data: comment,
      });
      dispatch(postComment());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getBlogCommentsAPI = (blogId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: url + `/comments/${blogId}`,
      });
      const comments = res.data.comments;
      dispatch(getBlogComments(comments));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteCommentAPI = (commentId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "delete",
        url: url + `/comment/delete/${commentId}`,
      });
      dispatch(deleteComment());
    } catch (error) {
      console.log(error.message);
    }
  };
};
