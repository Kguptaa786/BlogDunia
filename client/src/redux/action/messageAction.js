import { MESSAGE } from "../actionTypes";

const getMessage = (status) => {
  return {
    type: MESSAGE,
    payload: status,
  };
};

export default getMessage;
