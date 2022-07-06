import { MESSAGE } from "../actionTypes";

const initialState = { message: "", success: "" };
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default messageReducer;
//
