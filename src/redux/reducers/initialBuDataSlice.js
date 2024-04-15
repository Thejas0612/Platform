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
  errorMsg: null
};

export const fetchSchema = createAsyncThunk("loadSchema/fetchSchema", async (buType) => {
  // TODO: upload the lookout schema to the backend.
  if (buType.buType === "project_Lookout") {
    return isolateSchema(lookoutSchema[0], "lookout");
  }

  try {
    const { default: data } = await import(`../../../ui_schemas/${buType.buType}.json`);
    if (Array.isArray(data)) {
      return isolateSchema(data[0]);
    } else {
      throw `Invalid JSON in /ui_schemas/'${buType.buType}'.json schema.`;
    }
  } catch (localSchemaError) {
    try {
      const schemas = await findSchemaByBusinessUnitCode(buType.buType);
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
    updateVariation: (state, action) => {
      const { type, rightSection } = action.payload;

      const updatedRightSection = rightSection.map((section) => {
        const variations = section.componentProps.schema_variations[type] || [];
        const schemaIds = section.componentProps.schema.map((item) => item.id);
        const newSchema = [...section.componentProps.schema];

        variations.forEach((variation) => {
          const index = schemaIds.indexOf(variation.id);
          if (index !== -1) {
            newSchema[index] = variation;
          } else {
            newSchema.push(variation);
          }
        });

        return {
          ...section,
          componentProps: {
            ...section.componentProps,
            schema: newSchema
          }
        };
      });

      state.rightSection = updatedRightSection;
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

export const {
  changeActiveIndex,
  resetActiveIndex,
  updateBu,
  updateLeftSection,
  updateRightSection,
  updateVariation
} = initialBuSchema.actions;
export default initialBuSchema.reducer;
