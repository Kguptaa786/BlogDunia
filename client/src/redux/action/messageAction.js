import { MESSAGE } from "../actionTypes";

const getMessage = (message) => {
  return {
    type: MESSAGE,
    payload: message,
  };
};

export default getMessage;
