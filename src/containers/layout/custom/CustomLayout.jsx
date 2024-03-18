import React, { Suspense, lazy } from "react";
// import MSOLDynamicForm from "../../../components/shared/DynamicFrom/MSOLDynamicForm";
// import NavigationComponent from "./NavigationLayout";
import { Grid, Skeleton } from "@mui/material";
const NavigationComponent = lazy(() => import("./NavigationLayout"));
const MSOLDynamicForm = lazy(() =>
  import("../../../components/shared/DynamicFrom/MSOLDynamicForm")
);

const schema = [
  {
    group: "Project Details",
    fields: [
      {
        type: "TEXT_INPUT",
        name: "projectname",
        title: "Project Name",
        label: "Project Name",
        inputClass: "",
        labelClass: "app-content-label",
        value: "Digital Product Platform Discovery",
        disabled: true,
        required: true
      },
      {
        type: "NUMBER_INPUT",
        name: "lrp",
        label: "LRP",
        title: "Lrp",
        inputClass: "",
        labelClass: "app-content-label",
        value: "6609",
        required: true
      },
      {
        type: "SINGLE_SELECT",
        name: "critical",
        label: "Critical",
        title: "Critical",
        inputClass: "",
        labelClass: "app-content-label",
        disabled: false,
        value: "-1",
        options: [
          {
            value: "1",
            label: "Yes",
            id: "1"
          },
          {
            value: "0",
            label: "No",
            id: "0"
          }
        ],
        datasourceUrl: ""
      },
      {
        type: "SINGLE_SELECT",
        name: "entity",
        label: "Entity",
        title: "Entity",
        inputClass: "",
        labelClass: "app-content-label",
        value: "Automation Solutions",
        options: [],
        datasourceUrl: ""
      },
      {
        type: "SINGLE_SELECT",
        name: "approved",
        label: "Approved",
        title: "Approved",
        inputClass: "",
        labelClass: "app-content-label",
        value: "1",
        options: [
          {
            value: "1",
            label: "Yes",
            id: "1"
          },
          {
            value: "0",
            label: "No",
            id: "0"
          }
        ],
        datasourceUrl: ""
      },
      {
        type: "TABLE_INPUT",
        data: [
          [
            {
              align: "center",
              label: "",
              name: "",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              align: "center",
              label: "MIN",
              name: "r1min",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              align: "center",
              label: "MAX",
              name: "r1max",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              align: "center",
              label: "UNITS",
              name: "r1units",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            }
          ],
          [
            {
              align: "right",
              label: "FLOW RATE",
              name: "lbl_flow_rate",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              label: "",
              name: "flow_rate_min",
              required: true,
              type: "TEXT_INPUT",
              validations: [
                {
                  validationKey: "S",
                  validationMessage: "This is required"
                }
              ]
            },
            {
              label: "",
              name: "flow_rate_max",
              required: true,
              type: "TEXT_INPUT",
              validations: [
                {
                  validationKey: "S",
                  validationMessage: "This is required"
                }
              ]
            },
            {
              label: "",
              name: "flow_rate_units",
              options: [
                {
                  label: "Gallons(US)/hr",
                  value: "USGPH"
                },
                {
                  label: "Gallons",
                  value: "Gallons"
                }
              ],
              type: "SINGLE_SELECT"
            }
          ],
          [
            {
              align: "right",
              label: "LINE PRESSURE",
              name: "lbe_line_pressure",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              label: "",
              name: "line_pressure_min",
              type: "TEXT_INPUT"
            },
            {
              label: "",
              name: "line_pressure_max",
              type: "TEXT_INPUT"
            },
            {
              label: "",
              name: "line_pressure_unit",
              options: [
                {
                  label: "PSIG",
                  value: "psig"
                },
                {
                  label: "PSI",
                  value: "psi"
                }
              ],
              type: "SINGLE_SELECT"
            }
          ]
        ],
        column: 12,
        label: "Table Input",
        group: "Table Input",
        onChange: () => {},
        value: {
          flow_rate_max: "",
          flow_rate_min: "",
          flow_rate_units: "USGPH",
          line_pressure_max: "",
          line_pressure_min: "",
          line_pressure_unit: "psig"
        }
      }
    ]
  },
  {
    group: "Project Owner Details",
    fields: [
      {
        type: "TEXT_INPUT",
        name: "designation",
        label: "Designation",
        inputClass: "",
        labelClass: "app-content-label",
        value: ""
      },
      {
        type: "TEXT_INPUT",
        name: "email",
        label: "Email",
        inputClass: "",
        labelClass: "app-content-label",
        value: ""
      },
      {
        type: "BUTTON",
        name: "submit",
        label: "Submit"
      }
    ]
  },
  {
    group: "Process Variable",
    fields: [
      {
        type: "TABLE_INPUT",
        data: [
          [
            {
              align: "center",
              label: "",
              name: "",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              align: "center",
              label: "MIN",
              name: "r1min",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              align: "center",
              label: "MAX",
              name: "r1max",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              align: "center",
              label: "UNITS",
              name: "r1units",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            }
          ],
          [
            {
              align: "right",
              label: "FLOW RATE",
              name: "lbl_flow_rate",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              label: "",
              name: "flow_rate_min",
              required: true,
              type: "TEXT_INPUT",
              validations: [
                {
                  validationKey: "S",
                  validationMessage: "This is required"
                }
              ]
            },
            {
              label: "",
              name: "flow_rate_max",
              required: true,
              type: "TEXT_INPUT",
              validations: [
                {
                  validationKey: "S",
                  validationMessage: "This is required"
                }
              ]
            },
            {
              label: "",
              name: "flow_rate_units",
              options: [
                {
                  label: "Gallons(US)/hr",
                  value: "USGPH"
                },
                {
                  label: "Gallons",
                  value: "Gallons"
                }
              ],
              type: "SINGLE_SELECT"
            }
          ],
          [
            {
              align: "right",
              label: "LINE PRESSURE",
              name: "lbe_line_pressure",
              textStyles: {
                fontSize: "0.8rem"
              },
              type: "TEXT"
            },
            {
              label: "",
              name: "line_pressure_min",
              type: "TEXT_INPUT"
            },
            {
              label: "",
              name: "line_pressure_max",
              type: "TEXT_INPUT"
            },
            {
              label: "",
              name: "line_pressure_unit",
              options: [
                {
                  label: "PSIG",
                  value: "psig"
                },
                {
                  label: "PSI",
                  value: "psi"
                }
              ],
              type: "SINGLE_SELECT"
            }
          ]
        ],
        column: 12,
        label: "Table Input",
        // group: "Table Input",
        onChange: () => {},
        value: {
          flow_rate_max: "",
          flow_rate_min: "",
          flow_rate_units: "USGPH",
          line_pressure_max: "",
          line_pressure_min: "",
          line_pressure_unit: "psig"
        }
      }
    ]
  },
  {
    type: "TABLE_INPUT",
    group: "Table Input",
    fields: [
      [
        {
          align: "center",
          label: "",
          name: "",
          textStyles: {
            fontSize: "0.8rem"
          },
          type: "TEXT"
        },
        {
          align: "center",
          label: "MIN",
          name: "r1min",
          textStyles: {
            fontSize: "0.8rem"
          },
          type: "TEXT"
        },
        {
          align: "center",
          label: "MAX",
          name: "r1max",
          textStyles: {
            fontSize: "0.8rem"
          },
          type: "TEXT"
        },
        {
          align: "center",
          label: "UNITS",
          name: "r1units",
          textStyles: {
            fontSize: "0.8rem"
          },
          type: "TEXT"
        }
      ],
      [
        {
          align: "right",
          label: "FLOW RATE",
          name: "lbl_flow_rate",
          textStyles: {
            fontSize: "0.8rem"
          },
          type: "TEXT"
        },
        {
          label: "",
          name: "flow_rate_min",
          required: true,
          type: "TEXT_INPUT",
          validations: [
            {
              validationKey: "S",
              validationMessage: "This is required"
            }
          ]
        },
        {
          label: "",
          name: "flow_rate_max",
          required: true,
          type: "TEXT_INPUT",
          validations: [
            {
              validationKey: "S",
              validationMessage: "This is required"
            }
          ]
        },
        {
          label: "",
          name: "flow_rate_units",
          options: [
            {
              label: "Gallons(US)/hr",
              value: "USGPH"
            },
            {
              label: "Gallons",
              value: "Gallons"
            }
          ],
          type: "SINGLE_SELECT"
        }
      ],
      [
        {
          align: "right",
          label: "LINE PRESSURE",
          name: "lbe_line_pressure",
          textStyles: {
            fontSize: "0.8rem"
          },
          type: "TEXT"
        },
        {
          label: "",
          name: "line_pressure_min",
          type: "TEXT_INPUT"
        },
        {
          label: "",
          name: "line_pressure_max",
          type: "TEXT_INPUT"
        },
        {
          label: "",
          name: "line_pressure_unit",
          options: [
            {
              label: "PSIG",
              value: "psig"
            },
            {
              label: "PSI",
              value: "psi"
            }
          ],
          type: "SINGLE_SELECT"
        }
      ]
    ],
    label: "TableInput",
    onChange: () => {},
    value: {
      exclude_model: "3.000",
      flow_rate_max: "",
      flow_rate_min: "",
      flow_rate_units: "USGPH",
      line_pressure_max: "",
      line_pressure_min: "",
      line_pressure_unit: "psig"
    }
  }
];

function CustomLayout() {
  return (
    <Suspense
      fallback={
        <>
          <Skeleton animation="wave" />
        </>
      }
    >
      <Grid className="layout_container" container>
        <Grid item xs={3}>
          <NavigationComponent />
        </Grid>
        <Grid item xs={9}>
          <MSOLDynamicForm schema={schema} />
        </Grid>
      </Grid>
    </Suspense>
  );
}

export default CustomLayout;
