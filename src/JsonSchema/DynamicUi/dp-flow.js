const EMSOL_HEADER = {
  isAuthenticated: true,
  logo: "ba254b8c46f948c5911f.png",
  menuData: [
    {
      list: [
        "Operations Management Software",
        "Automation & Control Software",
        "Advanced Industry Software"
      ],
      title: "Automation"
    },
    {
      list: [
        "Heating & Air Conditioning",
        "Refrigeration & Cold Chain",
        "Professional Tools and Vacuums",
        "Construction & Plumbing Tools"
      ],
      title: "Commercial"
    }
  ],
  onLogin: () => {},
  onLogout: function noRefCheck() {},
  onOptionClick: function noRefCheck() {},
  title: "Product Advisor",
  userInfo: {
    name: "Demo User"
  }
};

const EMSOL_NAVIGATION = {
  data: [
    {
      attribute_code_json: "N/A",
      badges: [
        {
          id: "1",
          label: "1"
        },
        {
          id: "2",
          label: "22"
        },
        {
          id: "3",
          label: "111"
        },
        {
          id: "4",
          label: "2223"
        },
        {
          id: "5",
          label: "11133"
        },
        {
          id: "6",
          label: "222"
        }
      ],
      bu_code: "FLOW_PA_NEW",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_MeasurementType",
      label: "Measurement Type",
      name: "fpa_MeasurementType",
      ne_id: 263,
      np_id: 7,
      selected: true,
      sn_id: 4347,
      step_order: 1
    },
    {
      attribute_code_json: "N/A",
      badges: [
        {
          id: "111",
          label: "111"
        },
        {
          id: "222",
          label: "222555555555555"
        }
      ],
      bu_code: "FLOW_PA_NEW",
      element_label: "Process Piping",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_ProcessPiping",
      label: "Process Piping",
      name: "fpa_ProcessPiping",
      ne_id: 264,
      np_id: 7,
      selected: false,
      sn_id: 4347,
      step_order: 2
    },
    {
      attribute_code_json: "N/A",
      badges: [
        {
          id: "1144444444444444444444444444444444444441",
          label: "1144444444444444444444444444444444444441"
        },
        {
          id: "222",
          label: "222"
        }
      ],
      bu_code: "FLOW_PA_NEW",
      element_label: "Fluid Selection",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_lh_FluidSelection",
      label: "Fluid Selection",
      left_right_anchor_flag: "L",
      name: "fpa_lh_FluidSelection",
      ne_id: 266,
      np_id: 7,
      selected: false,
      sn_id: 4347,
      step_order: 3
    },
    {
      attribute_code_json: "N/A",
      badges: [
        {
          id: "114444444444",
          label: "114444444444"
        },
        {
          id: "222",
          label: "222"
        }
      ],
      bu_code: "FLOW_PA_NEW",
      element_label: "Fluid Selection",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_lh_FluidSelection",
      label: "Fluid Selection",
      left_right_anchor_flag: "L",
      name: "fpa_lh_FluidSelection",
      ne_id: 267,
      np_id: 7,
      selected: false,
      sn_id: 4347,
      step_order: 3
    }
  ],
  onDelete: () => {},
  onSelect: function noRefCheck() {}
};

const EMSOL_DYNAMIC_FORM = {
  schema: [
    {
      fields: [
        {
          error: "",
          errorClass: "",
          inputClass: "app-content-text-width-custom",
          label: "Project Name",
          labelClass: "app-content-label",
          name: "projectname",
          required: true,
          type: "TEXT_INPUT",
          value: ""
        },
        {
          error: "",
          errorClass: "",
          inputClass: "app-content-text-width-custom",
          label: "LRP",
          labelClass: "app-content-label",
          name: "lrp",
          required: true,
          type: "NUMBER_INPUT",
          value: "6609"
        },
        {
          disabled: false,
          error: "",
          errorClass: "",
          label: "Critical",
          labelClass: "app-content-label",
          name: "critical",
          options: [
            {
              id: "1",
              label: "Yes",
              value: "1"
            },
            {
              id: "0",
              label: "No",
              value: "0"
            }
          ],
          required: true,
          type: "SINGLE_SELECT",
          value: ""
        },
        {
          dataSourceUrl: "http://localhost:5000/entity",
          label: "Entity",
          labelClass: "app-content-label",
          name: "entity",
          options: [],
          required: true,
          type: "SINGLE_SELECT",
          value: "Automation Solutions"
        },
        {
          error: "",
          errorClass: "",
          label: "RADIO_INPUT",
          labelClass: "app-content-label",
          name: "RADIO_INPUT",
          options: [
            {
              label: "Yes",
              value: "1"
            },
            {
              label: "No",
              value: "0"
            }
          ],
          required: true,
          type: "RADIO_INPUT",
          value: ""
        },
        {
          disabledIds: [],
          error: "",
          errorClass: "",
          label: "CHECKBOX_INPUT",
          labelClass: "app-content-label",
          name: "CHECKBOX_INPUT",
          options: [
            {
              label: "Yes",
              value: "1"
            },
            {
              label: "No",
              value: "0"
            }
          ],
          required: true,
          selectedIds: ["1"],
          type: "CHECKBOX_INPUT"
        },
        {
          label: "TABLE_INPUT",
          labelClass: "app-content-label",
          name: "TABLE_INPUT",
          options: [
            [
              {
                align: "center",
                label: "Height",
                name: "r1height",
                type: "TEXT"
              },
              {
                align: "center",
                label: "Units",
                name: "r1units",
                type: "TEXT"
              }
            ],
            [
              {
                align: "right",
                disabled: false,
                inputClass: "",
                label: "",
                name: "vessel_dimension",
                precision: 1,
                type: "TEXT_INPUT",
                wrapperClass: ""
              },
              {
                align: "right",
                disabled: false,
                inputClass: "",
                label: "",
                name: "vessel_dimension_unit",
                options: [
                  {
                    label: "Meter",
                    value: "Meter"
                  },
                  {
                    label: "Feet",
                    value: "Feet"
                  }
                ],
                type: "SINGLE_SELECT",
                value: "meter"
              }
            ]
          ],
          tableClass: "",
          title: "",
          type: "TABLE_INPUT",
          value: {
            exclude_model: "3.000",
            vessel_dimension_unit: "Meter"
          }
        },
        {
          label: "LABEL_TEXT",
          labelClass: "app-content-label",
          name: "LABEL_TEXT",
          showLabel: true,
          subText: "This is subText",
          tableClass: "",
          text: "This is text",
          textClass: "ddl-typography--h5",
          title: "this is title",
          type: "LABEL_TEXT"
        },
        {
          align: "left",
          btnType: "secondary",
          error: "",
          errorClass: "",
          label: "SUBMIT",
          required: true,
          showBackIcon: false,
          type: "BUTTON",
          value: ""
        },
        {
          label: "CUSTOM_BUTTON_GROUP",
          labelClass: "ddl-from-custom-label",
          multiple: true,
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
              label: "test"
            }
          ],
          showLabel: "",
          size: "medium",
          title: "CUSTOM_BUTTON_GROUP",
          type: "CUSTOM_BUTTON_GROUP",
          value: ["1", "2"],
          wrapperClass: "cutsom_class",
          wrapperId: ""
        }
      ],
      id: 1
    }
  ],
  dataSourceUrl: "",
  handleChange: (a, b, c, d, e) => handleDataChange(a, b, c, d, e),
  handleKeyPress: () => handleDynamicKeypress(),
  handleSubmit: function noRefCheck() {},
  updateData: () => updateDynamicFormData()
};

const EMSOL_TILE_OR_TUMBNAIL = {
  data: [
    {
      buttonLabel: "SHOW FULL SPECS",
      clickHandle: () => {},
      description:
        "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",
      id: 1,
      imgUrl: "7bd555544cf68071bafa.png",
      title: "Flow"
    },
    {
      buttonLabel: "SHOW FULL SPECS",
      clickHandle: function noRefCheck() {},
      description:
        "Our density & viscosity measurement devices offer unbeatable performance for applications in alcohol concentration, API gravity, specific gravity and more.",
      id: 2,
      imgUrl: "940becae8b116d587fbd.png",
      title: "Density - Viscosity"
    }
  ],
  defaultDirection: "tile",
  defaultIds: [],
  description: "here is a toggle button",
  onChange: function noRefCheck() {}
};

const EMSOL_TEXT_INPUT = {
  label: "User Name",
  onBlur: () => {},
  onChange: function noRefCheck() {},
  onKeyPress: function noRefCheck() {},
  value: "",
  error: "",
  labelClass: "",
  placeholder: "",
  label: "",
  name: "",
  type: "",
  onBlur: () => {}
};

const EMSOL_NUMBER_INPUT = {
  label: "User Name",
  onBlur: () => {},
  onChange: function noRefCheck() {},
  onKeyPress: function noRefCheck() {},
  value: "",
  error: "",
  labelClass: "",
  placeholder: "",
  label: "",
  name: "",
  type: "",
  onBlur: () => {}
};

const EMSOL_SELECT_INPUT = {
  label: "Critical",
  labelClass: "app-content-label",
  name: "critical",
  onChange: () => {},
  options: [
    {
      label: "Yes",
      title: "Yestitle",
      value: "1"
    },
    {
      label: "No",
      title: "Notitle",
      value: "0"
    }
  ],
  placeholder: "PLEASE SELECT",
  value: "-1"
};

const EMSOL_TOGGLE_BUTTON = {
  data: [
    {
      label: "METRIC",
      value: "METRIC"
    },
    {
      label: "IMPERIAL",
      value: "IMPERIAL"
    }
  ],
  defaultId: "METRIC",
  label: "toggle button",
  onChange: () => {}
};

const EMSOL_PA_STAEPPER = {
  data: [
    {
      label: "Step1",
      ne_id: 221,
      url: "/"
    },
    {
      label: "Step2",
      ne_id: 222,
      url: "/"
    },
    {
      label: "Step3",
      ne_id: 223,
      url: "/"
    },
    {
      label: "Step4",
      ne_id: 224,
      url: "/"
    }
  ],
  onChange: () => {},
  activeIndex: ""
};
