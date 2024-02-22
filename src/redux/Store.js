import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { UiBuilderRootSaga } from "./RootSaga";
import { UiBuilderReducer } from "./reducers/Reducer";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(UiBuilderReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(UiBuilderRootSaga);
