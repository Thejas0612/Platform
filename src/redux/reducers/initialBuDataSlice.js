import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import isolateSchema from "../../adapterDataManager/schema/schemaSeperator";
import axios from "axios";

const initialState = {
  topSection: [],
  leftSection: [],
  rightSection: [],
  activeIndex: 0,
  screens: [],
  status: "idle",
  error: false,
  errorMsg: null,
  bu_code:'',
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
    console.log("Error occured while fetching schema", err);
    return "Error occured while fetching schema";
  }
});

const initialBuSchema = createSlice({
  initialState,
  name: "loadSchema",
  reducers: {
    loadInitialBuSchema: (state, payload) => {
      //state.buSchemaData = payload;
    },
    changeActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    resetActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    activeBuCode:(state, action) =>{
      state.activeBuCode =  action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSchema.pending, (state) => {
      state.status = "laoding";
    });
    builder.addCase(fetchSchema.fulfilled, (state, action) => {
      console.log("action", action);
      state.leftSection = action.payload?.left;
      state.rightSection = action.payload?.right;
      state.status = "successeded";
      state.isLoading = false;
    });
    builder.addCase(fetchSchema.rejected, (state, action) => {
      console.log("errMsg", action);
      state.error = true;
      state.errorMsg = "error occurred while fetching schema";
      state.status = "failed";
    });
  }
});

// export const {lo} = initialBuSchema.reducer
export const { changeActiveIndex, resetActiveIndex, activeBuCode } = initialBuSchema.actions;
export default initialBuSchema.reducer;
