import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import isolateSchema from "../../adapterDataManager/schema/schemaSeperator";
import { STATUS } from "../../status";
import lookoutSchema from "./lookoutSchema.json";
import { findSchemaByBusinessUnitCode } from "../../api/schemaApi";

const initialState = {
  topSection: [],
  leftSection: [],
  rightSection: [],
  activeIndex: 0,
  screens: [],
  selectedBu: "",
  status: STATUS.IDLE,
  error: false,
  errorMsg: null,
  dropDownsValues : {'communicationProtocol':'', 'formFactor':'', 'noOfInputs':''}
};

export const fetchSchema = createAsyncThunk("loadSchema/fetchSchema", async (buType) => {
  // TODO: upload the lookout schema to the backend.
  if (buType.buType === "project_Lookout") {
    return isolateSchema(lookoutSchema[0]);
  }

  try {
    const { default: data } = await import(`../../../ui_schemas/${buType.buType}.json`);
    if (Array.isArray(data)) {
       return isolateSchema(data[0]);
    } else {
       throw(`Invalid JSON in /ui_schemas/'${buType.buType}'.json schema.`)
    }
 } catch (localSchemaError) {
    try {
      const schemas = await findSchemaByBusinessUnitCode(buType.buType)
      return isolateSchema(schemas[0]);
    } catch (err) {
       console.log("Error occurred while fetching schema", err);
       return "Error occurred while fetching schema";
    }
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
    },
    updateBu: (state, action) => {
      state.selectedBu = action.payload;
    },
    updateLeftSection: (state, action) => {
      state.leftSection = action.payload;
    },
    updateRightSection: (state, action) => {
      state.rightSection = action.payload;
    },
    updateDropdownPayload :(state, action) => {
      state.dropDownsValues = action.payload;
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

export const { changeActiveIndex, resetActiveIndex, updateBu, updateLeftSection, updateRightSection, updateDropdownPayload } = initialBuSchema.actions;
export default initialBuSchema.reducer;
