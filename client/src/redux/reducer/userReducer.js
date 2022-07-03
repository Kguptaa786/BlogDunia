import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionTypes";
import isEmpty from "../../utils/isEmpty";

const initialState = {
  user: {},
  isAuthenticated: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return state;
    }
    case LOGIN_USER: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
    }
    case LOGOUT_USER: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
