import { all } from "redux-saga/effects";
import { waitForFetchEmpDetails } from "./empDetails.saga";

export default function* rootSaga() {
  yield all([waitForFetchEmpDetails()]);
}