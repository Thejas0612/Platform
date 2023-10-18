import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSliceReducer";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
