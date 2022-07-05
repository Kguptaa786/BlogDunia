import axios from "axios";
import jwt_decode from "jwt-decode";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionTypes";

const url = "http://localhost:8000";

const registerUser = () => {
  return {
    type: REGISTER_USER,
  };
};

const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const registerUserAPI = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "post",
        url: url + "/register",
        data: user,
      });
      dispatch(registerUser());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const loginUserAPI = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: url + "/login",
        data: user,
      });
      const { token } = data;
      localStorage.setItem("token", token);
      const decoded = jwt_decode(token);
      localStorage.setItem("userId", decoded.userId);
      localStorage.setItem("name", decoded.name);
      localStorage.setItem("email", decoded.email);
      dispatch(loginUser(decoded));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUserAPI = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };
};
