import { configureStore } from "@reduxjs/toolkit";
import initialBuSchema from "../reducers/initialBuDataSlice";
export default configureStore({
  reducer: {
    initialBuData: initialBuSchema
  }
});
