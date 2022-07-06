import axios from "axios";
import jwt_decode from "jwt-decode";

const url = "http://localhost:8000";
export const uploadImageAPI = async (file) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/file/upload",
      data: file,
    });
    const image = res.data.image;
    return image;
  } catch (error) {
    console.log(error);
  }
};

export const helperGetBlogDetail = async (blogId) => {
  try {
    const res = await axios({
      method: "get",
      url: url + `/detail/${blogId}`,
    });
    let blog = res.data.blog;
    return blog;
  } catch (error) {
    console.log(error);
  }
};

export const registerUserAPI = async (user) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/register",
      data: user,
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error.response.data;
  }
};

export const loginUserAPI = async (user) => {
  try {
    const res = await axios({
      method: "post",
      url: url + "/login",
      data: user,
    });
    const token = res.data.token;
    localStorage.setItem("token", token);
    const decoded = jwt_decode(token);
    localStorage.setItem("userId", decoded.userId);
    localStorage.setItem("name", decoded.name);
    localStorage.setItem("email", decoded.email);
    return res.data;
  } catch (error) {
    // console.log(error)
    return error.response.data;
  }
};

export const deleteCommentAPI = async (commentId) => {
  try {
    const res = await axios({
      method: "delete",
      url: url + `/comment/delete/${commentId}`,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
