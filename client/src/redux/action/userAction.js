import axios from "axios";
import jwt_decode from "jwt-decode";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionTypes";
import getMessage from "./messageAction";

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

// export const registerUserAPI = (user) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios({
//         method: "post",
//         url: url + "/register",
//         data: user,
//       });
//       let status = { message: res.data.message, success: res.data.success };
//       dispatch(getMessage(status));
//       dispatch(registerUser());
//     } catch (error) {
//       // console.log(error);
//       let status = {
//         message: error.response.data.message,
//         success: error.response.data.success,
//       };
//       dispatch(getMessage(status));
//     }
//   };
// };

// export const loginUserAPI = (user) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios({
//         method: "post",
//         url: url + "/login",
//         data: user,
//       });
//       const token = res.data.token;
//       localStorage.setItem("token", token);
//       const decoded = jwt_decode(token);
//       localStorage.setItem("userId", decoded.userId);
//       localStorage.setItem("name", decoded.name);
//       localStorage.setItem("email", decoded.email);
//       dispatch(loginUser(decoded));
//       let status = { message: res.data.message, success: res.data.success };
//       dispatch(getMessage(status));
//     } catch (error) {
//       // console.log(error)
//       let status = {
//         message: error.response.data.message,
//         success: error.response.data.success,
//       };
//       dispatch(getMessage(status));
//     }
//   };
// };

export const logoutUserAPI = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    dispatch(logoutUser());
  };
};
