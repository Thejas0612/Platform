/* eslint-disable quotes */
import { createSlice } from "@reduxjs/toolkit";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const componentSlice = createSlice({
  name: "componentData",
  initialState: {
    application: {
      type: "DpFlow"
    },
    user: {},
    configs: {},
    layout: {},
    loadingPhase: false,
    sourceData: [], // data to be updated on click
    initData: []
  },
  reducers: {
    loadSchema: (state, action) => {
      const { payload } = action;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.sourceData = payload;
    },
    updateLayoutContent: (state, action) => {
      const { payload } = action;
      state.sourceData = payload;
    }
  }
});

export default componentSlice.reducer;
