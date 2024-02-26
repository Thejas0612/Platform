import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "../reducers/componentReducer";

export default configureStore({
  reducer: {
    componentStore: componentReducer
  }
});
