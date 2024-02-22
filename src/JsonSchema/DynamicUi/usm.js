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

const EMSOL_PA_BREADCRUMBS = {
  data: [
    {
      text: "Automation Solutions",
      url: "/"
    },
    {
      text: "Engineering Tools",
      url: "/"
    },
    {
      text: "Sizing & Selection",
      url: "/"
    },
    {
      text: "Measurement Type",
      url: "/"
    },
    {
      text: "Pressure Measurement",
      url: "/"
    }
  ],
  selected: "Pressure Measurement"
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
