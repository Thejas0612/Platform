import * as actionConstants from "../constants/constants";
const initialState = {
  application: {
    type: "DpFlow"
  },
  user: {},
  configs: {},
  layout: {},
  loadingPhase: false,
  sourceData: [], // data to be updated on click
  initData: []
};

export const UiBuilderReducer = (state = initialState, action) => {
  if (typeof initialState === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case actionConstants.LOAD_SCHEMA:
      return {
        ...state,
        loadingPhase: true
      };
    case actionConstants.LOAD_SCHEMA_ERROR:
      return {
        ...state
      };
    case actionConstants.UPDATE_PAGE_CONFIG:
      return {
        ...state,
        configs: {
          updated: true
        },
        loadingPhase: false
      };
    case actionConstants.LOAD_SCHEMA_SUCCESS:
      return {
        ...state,
        sourceData: action.payload.components || [],
        initData: action.payload.components,
        schemaContent: action.payload.schemaContent
      };
    case "SELECTED_VALUES":
      return {
        ...state,
        configs: {
          updated: true
        }
      };
    case "SET_LAYOUT":
      return {
        ...state,
        layout: action.payload
      };
    case "UPDATE_LAYOUT_SELECTIONS":
      return {
        ...state,
        sourceData: action.payload
      };
    default:
      return state;
  }
};
