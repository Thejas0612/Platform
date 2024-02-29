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
const obj = {
  dpFlow: {
    uiComponents: [
      {
        componentName: "NavigationMenu",
        alignment: "left",
        componentProps: {
          schema: [
            {
              label: "Measurement Type",

              enabled: true,

              selected: true,

              name: "fpa_MeasurementType",

              ne_id: 0,

              np_id: 7,

              sn_id: 4347,

              step_order: 1,

              bu_code: "FLOW_PA_NEW",

              gui_type_code: "TEXT",

              attribute_code_json: "N/A",

              html_field_name: "fpa_MeasurementType",

              badges: []
            },

            {
              label: "Process Condition",

              enabled: true,

              selected: true,

              name: "fpa_ProcessCondition",

              sn_id: 4347,

              ne_id: 1,

              bu_code: "FLOW_PA_NEW",

              np_id: 7,

              element_label: "Process Condition",

              step_order: 2,

              gui_type_code: "TEXT",

              attribute_code_json: "N/A",

              html_field_name: "fpa_ProcessCondition",

              badges: []
            },

            {
              label: "Process Variable",

              enabled: true,

              selected: false,

              name: "fpa_lh_ProcessVariable",

              badges: [],

              sn_id: 4347,

              ne_id: 2,

              bu_code: "FLOW_PA_NEW",

              np_id: 7,

              element_label: "Process Variable",

              step_order: 3,

              left_right_anchor_flag: "L",

              gui_type_code: "TEXT",

              attribute_code_json: "N/A",

              html_field_name: "fpa_lh_processVariable"
            }
          ]
        }
      },

      {
        componentName: "DynamicForm",
        alignment: "right",
        componentProps: {
          schema: [
            {
              id: 0,
              fields: [
                {
                  column: 12,
                  label: "LABEL_TEXT",
                  labelClass: "app-content-label",
                  name: "LABEL_TEXT",
                  showLabel: false,
                  subText: "",
                  tableClass: "",
                  text: "Measurement Type",
                  textClass: "ddl-typography--h5",
                  title: "this is title",
                  type: "LABEL_TEXT",
                  textStyles: {}
                },
                {
                  column: 12,
                  type: "TILE_THUMBNAIL",
                  name: "tile_thumb",
                  buttonLabel: "btn lble",
                  imgUrl: "7bd555544cf68071bafa.png",
                  attribute_code_value: {
                    description: "",
                    defaultDirection: "tile"
                  },
                  showAlert: false,
                  defaultIds: [],
                  options: [
                    {
                      id: 1,
                      title: "Flow",
                      description:
                        "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",
                      imgUrl: "https://emerson-cdn.azurewebsites.net/7bd555544cf68071bafa.png"
                    }
                  ]
                }
              ]
            },
            {
              id: 1,

              fields: [
                {
                  column: 12,
                  label: "LABEL_TEXT",
                  labelClass: "app-content-label",
                  name: "LABEL_TEXT",
                  showLabel: false,
                  subText: "",
                  tableClass: "",
                  text: "Process Piping",
                  textClass: "ddl-typography--h5",
                  title: "this is title",
                  type: "LABEL_TEXT",
                  textStyles: { textAlign: "start" }
                },
                {
                  column: 3,
                  type: "SINGLE_SELECT",

                  name: "nominalpipesize",

                  label: "Line Size",

                  labelClass: "app-content-label",

                  disabled: false,

                  value: "",

                  options: [
                    {
                      value: "0",

                      label: "15",

                      id: "0"
                    },

                    {
                      value: "1",

                      label: "20",

                      id: "1"
                    },

                    {
                      value: "2",

                      label: "25",

                      id: "2"
                    },

                    {
                      value: "3",

                      label: "30",

                      id: "3"
                    }
                  ],

                  required: true,

                  error: "",

                  errorClass: ""
                },

                {
                  column: 3,
                  type: "SINGLE_SELECT",

                  name: "pipeschedule",

                  label: "Pipe Schedule",

                  labelClass: "app-content-label",

                  disabled: false,

                  value: "",

                  options: [
                    {
                      value: "0",

                      label: "5",

                      id: "0"
                    },

                    {
                      value: "1",

                      label: "10",

                      id: "1"
                    },

                    {
                      value: "2",

                      label: "30",

                      id: "2"
                    },

                    {
                      value: "3",

                      label: "40",

                      id: "3"
                    }
                  ],

                  required: true,

                  error: "",

                  errorClass: ""
                },

                {
                  column: 3,
                  type: "TEXT_INPUT",

                  name: "pipeid",

                  label: "Pipe ID",

                  labelClass: "app-content-label",

                  inputClass: "app-content-text-width-custom",

                  value: "",

                  required: false,

                  error: "",

                  disabled: false,

                  errorClass: ""
                },
                {
                  column: 3,
                  type: "SINGLE_SELECT",

                  name: "unit",

                  label: "Unit",

                  labelClass: "app-content-label",

                  disabled: false,

                  value: "",

                  options: [
                    {
                      value: "INCH",

                      label: "INCH",

                      id: "0"
                    },

                    {
                      value: "MM",

                      label: "MM",

                      id: "1"
                    }
                  ],

                  required: true,

                  error: "",

                  errorClass: ""
                },
                {
                  column: 12,
                  label: "LABEL_TEXT",
                  labelClass: "app-content-label",
                  name: "LABEL_TEXT",
                  showLabel: false,
                  subText: "",
                  tableClass: "",
                  text: "Process Fluid",
                  textClass: "ddl-typography--h5",
                  title: "this is title",
                  type: "LABEL_TEXT",
                  textStyles: { textAlign: "start" }
                },
                {
                  type: "CUSTOM_BUTTON_GROUP",
                  column: 12,
                  title: "Fluid Type",
                  label: "Fluid Type",
                  name: "fluidtype",
                  options: [
                    {
                      id: "1",

                      label: "Liquid"
                    },

                    {
                      id: "2",

                      label: "Gas"
                    },

                    {
                      id: "3",

                      label: "Steam"
                    },
                    {
                      id: "4",

                      label: "Natural Gas"
                    },
                    {
                      id: "5",

                      label: "Slurry"
                    }
                  ],

                  showLabel: true,

                  wrapperId: "",

                  wrapperClass: "cutsom_class",

                  labelClass: "ddl-from-custom-label",

                  value: ["1"],

                  attribute_code_value: {
                    multiple: false,

                    size: "medium"
                  }
                },
                {
                  column: 6,
                  type: "RADIO_INPUT",
                  name: "fluidsource",
                  label: "Fluid Source",
                  labelClass: "app-content-label",
                  value: "",
                  options: [
                    {
                      value: "0",
                      label: "Database"
                    },
                    {
                      value: "1",
                      label: "Custom"
                    }
                  ],
                  required: true,
                  error: "",
                  errorClass: ""
                },
                {
                  column: 6,
                  type: "SINGLE_SELECT",
                  name: "fluidsdatabase",

                  label: "Fluids Database",
                  labelClass: "app-content-label",
                  value: "0",
                  options: [
                    {
                      value: "0",
                      label: "water",
                      id: "0"
                    },
                    {
                      value: "1",
                      label: "Air",
                      id: "1"
                    }
                  ],

                  required: true
                },
                {
                  column: 12,
                  align: "left",
                  btnType: "textary",
                  error: "",
                  errorClass: "",
                  label: "Additional Options",
                  required: true,
                  showBackIcon: false,
                  type: "BUTTON",
                  value: ""
                },
                {
                  column: 12,
                  disabledIds: [],
                  error: "",
                  errorClass: "",
                  labelClass: "app-content-label",
                  name: "CHECKBOX_INPUT",
                  options: [
                    {
                      label:
                        "Fluid Plugs or Clogs (High Viscosity, Slurry, Entrained Solids, Solidifies, Etc)",
                      value: "0"
                    },
                    {
                      label: "Fluid Causes Wear and Erosion ( Entrained Solids, Abrasive, Etc.)",
                      value: "1"
                    }
                  ],
                  required: true,
                  selectedIds: ["1"],
                  showAlert: false,
                  type: "CHECKBOX_INPUT"
                }
              ]
            }
          ]
        }
      }
    ]
  }
};
export const fetchSchema = createAsyncThunk("loadSchema/fetchSchema", async (buType) => {
  try {
    const res = await axios.post(
      "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/schema/loadSchema",
      { bu_code: buType.buType }
    );
    console.log("api-response", res);
    return isolateSchema(obj[buType?.buType]);
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
