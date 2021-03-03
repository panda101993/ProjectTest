import { SET_EMPDETAILS, FETCH_EMPDETAILS } from "../types/empDetails.types";

export const fetchEmpDetails = () => {

  return { type: FETCH_EMPDETAILS };
};

export const setEmpDetails = (empDetails = null) => {
  if (empDetails) {
    return {
      type: SET_EMPDETAILS,
      payload: empDetails,
    };
  }
};