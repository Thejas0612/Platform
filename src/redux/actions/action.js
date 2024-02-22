import * as actionConstants from "../constants/constants";
export const loadSchema = (data) => ({
  type: actionConstants.LOAD_SCHEMA,
  payload: data
});

export const updatePageConfig = (data) => ({
  type: actionConstants.UPDATE_PAGE_CONFIG,
  payload: data
});

export const userSelections = (value) => ({
  type: "SELECTED_VALUES",
  payload: value
});

export const loadLayoutData = (layout) => ({
  type: "SET_LAYOUT",
  payload: layout
});

// to update the UI compoenents based on selections
export const updateLayoutData = (value) => ({
  type: "UPDATE_LAYOUT_SELECTIONS",
  payload: value
});
