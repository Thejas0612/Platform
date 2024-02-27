import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import isolateSchema from "../../adapterDataManager/schema/schemaSeperator";
import axios from "axios";
import { STATUS } from "../../status";

const initialState = {
  topSection: [],
  leftSection: [],
  rightSection: [],
  activeIndex: 0,
  screens: [],
  status: STATUS.IDLE,
  error: false,
  errorMsg: null
};

export const fetchSchema = createAsyncThunk("loadSchema/fetchSchema", async (buType) => {
  try {
    const res = await axios.post(
      "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/schema/loadSchema",
      { bu_code: buType.buType }
    );
    console.log("api-response", res);
    return isolateSchema(res?.data[0]);
  } catch (err) {
    console.log("Error occurred while fetching schema", err);
    return "Error occurred while fetching schema";
  }
});

const initialBuSchema = createSlice({
  initialState,
  name: "loadSchema",
  reducers: {
    changeActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    resetActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSchema.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchSchema.fulfilled, (state, action) => {
      console.log("action", action);
      state.leftSection = action.payload?.left;
      state.rightSection = action.payload?.right;
      state.status = STATUS.SUCCESSED;
      state.isLoading = false;
    });
    builder.addCase(fetchSchema.rejected, (state, action) => {
      console.log("errMsg", action);
      state.error = true;
      state.errorMsg = "error occurred while fetching schema";
      state.status = STATUS.FAILED;
    });
  }
});

export const { changeActiveIndex, resetActiveIndex } = initialBuSchema.actions;
export default initialBuSchema.reducer;
