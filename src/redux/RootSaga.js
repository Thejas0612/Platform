import { all } from "@redux-saga/core/effects";
import { UiBuilderSaga } from "./Saga";

export function* UiBuilderRootSaga() {
  yield all([UiBuilderSaga()]);
}
