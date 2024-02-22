import { put, takeLatest } from "@redux-saga/core/effects";
import { LOAD_SCHEMA, LOAD_SCHEMA_ERROR, LOAD_SCHEMA_SUCCESS } from "./constants/constants";
function* UiBuilder(data) {
  try {
    const { payload: value } = data;
    yield put({ type: LOAD_SCHEMA_SUCCESS, payload: value });
  } catch (error) {
    yield put(LOAD_SCHEMA_ERROR, error);
  }
}

export function* UiBuilderSaga() {
  yield takeLatest(LOAD_SCHEMA, UiBuilder);
}
