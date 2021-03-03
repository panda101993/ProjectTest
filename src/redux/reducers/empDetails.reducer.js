import { SET_EMPDETAILS } from "../types/empDetails.types";

export const empDetailsInitialState = [];

const empDetailsReducer = (state = empDetailsInitialState, action) => {
  switch (action.type) {
    case SET_EMPDETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default empDetailsReducer;