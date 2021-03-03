import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_EMPDETAILS } from "../types/empDetails.types";
import empDetailsService from "../services/empDetails.service";
import { setEmpDetails } from "../actions/empDetails.actions";

function* fetchEmpDetails() {
  try {
    const empDetails = yield call(empDetailsService.getAllEmpDetails);

    yield put(setEmpDetails(empDetails));
  } catch (e) {}
}

export function* waitForFetchEmpDetails() {
  yield takeEvery(FETCH_EMPDETAILS, fetchEmpDetails);
}