import React, { useState } from "react";
import MSOLDynamicForm from "../../../components/shared/dynamicform";
import { Grid } from "@mui/material";

function CustomLayout() {
  const [schema, setSchema] = React.useState([
    {
      group: "Process Variables",
      fields: [
        {
          type: "TABLE_INPUT",
          name: "process_variables",
          data: [
            [
              // {
              //   "type": "TEXT",
              //   "label": "",
              //   "name": "",
              //   "align": "center",
              //   "textStyles": {
              //     "fontSize": "0.8rem"
              //   }
              // },
              {
                type: "TEXT",
                label: "Line Size",
                align: "center",
                name: "r1min",
                title: "Line Size",
                textStyles: {
                  fontSize: "0.8rem"
                }
              },
              {
                type: "TEXT",
                label: "Pipe Schedule",
                align: "center",
                name: "r1min",
                title: "Pipe Schedule",
                textStyles: {
                  fontSize: "0.8rem"
                }
              },
              {
                type: "TEXT",
                label: "Pipe ID",
                name: "r1max",
                title: "Pipe ID",
                align: "center",
                textStyles: {
                  fontSize: "0.8rem"
                }
              },
              {
                type: "TEXT",
                label: "UNITS",
                name: "r1units",
                align: "center",
                textStyles: {
                  fontSize: "0.8rem"
                }
              }
            ],
            [
              // {
              //   "type": "TEXT",
              //   "label": "",
              //   "name": "lbl_flow_rate",
              //   "align": "right",
              // },
              {
                type: "SINGLE_SELECT",
                label: "Line Size",
                name: "line_size",
                inputclass: "selectinput",
                options: [
                  {
                    value: "1",
                    label: "Option-1",
                    title: "Yestitle",
                    greyedOut: true
                  },
                  {
                    value: "2",
                    label: "Option-2",
                    title: "Yestitle",
                    greyedOut: false
                  }
                ],
                required: true,
                error: "Please select",
                validations: []
              },
              {
                type: "SINGLE_SELECT",
                label: "",
                name: "pipe_schedule",
                inputclass: "selectinput",
                options: [
                  {
                    value: "1",
                    label: "Option-1",
                    title: "Yestitle",
                    greyedOut: true
                  },
                  {
                    value: "2",
                    label: "Option-2",
                    title: "Yestitle",
                    greyedOut: false
                  }
                ],
                validations: []
              },
              {
                type: "TEXT_INPUT",
                label: "",
                name: "pipe_id",
                required: true,
                inputclass: "selectinput",
                disabled: true,
                validations: [
                  {
                    type: "number",
                    validationKey: "\\S",
                    validationMessage: "This is required",
                    checks: [
                      {
                        key: "minLength",
                        val: 3
                      },
                      {
                        key: "maxLength",
                        val: 10
                      }
                    ],
                    target: {
                      id: ""
                    },
                    disabled: false
                  }
                ]
              },
              {
                type: "SINGLE_SELECT",
                label: "",
                name: "units",
                inputclass: "selectinput",
                options: []
              }
            ]
          ],
          value: {
            vessel_dimension_unit: "Meter"
          },
          column: 12,
          title: "",
          tableClass: "",
          labelClass: "app-content-label"
        }
      ]
    },
    {
      group: "Project Owner Details",
      fields: [
        {
          id: "project_type",
          type: "SINGLE_SELECT",
          name: "projectType",
          label: "Project Type",
          options: [
            {
              name: "Testing1",
              label: "Test 1",
              value: "testing_1",
              greyedOut: false
            },
            {
              name: "Testing2",
              label: "Test 2",
              value: "testing_2",
              greyedOut: true
            }
          ],
          column: "6",
          validations: {
            target: {
              id: "email"
            }
          }
        },
        {
          id: "email",
          type: "TEXT_INPUT",
          name: "email",
          label: "Email",
          title: "Email",
          error: "",
          inputclass: "",
          labelClass: "app-content-label",
          value: "Default Value",
          column: "6",
          validations: {
            target: {
              id: "project_type",
              value: "1"
            }
          }
        },
        {
          type: "RADIO_INPUT",
          name: "fluid",
          label: "Fluid",
          title: "Helo",
          labelClass: "app-content-label",
          selectedIds: ["2"],
          disabledIds: [],
          options: [
            {
              value: "Liquid",
              label: "Liquid"
            },
            {
              value: "Gas",
              label: "Gas"
            },
            {
              value: "Steam",
              label: "Steam"
            }
          ],
          column: "6",
          required: true,
          error: "",
          errorClass: "",
          showAlert: false
        },
        {
          type: "CUSTOM_TOGGLE_BUTTON",
          name: "metric",
          label: "Metric",
          title: "Helo",
          labelClass: "app-content-label",
          selectedIds: ["2"],
          disabledIds: [],
          data: [
            {
              value: "METRIC",
              label: "METRIC"
            },
            {
              value: "IMPERIAL",
              label: "IMPERIAL"
            }
          ],
          column: "6",
          required: true,
          error: "",
          errorClass: "",
          showAlert: false
        }
      ]
    },
    {
      group: "Selection",
      fields: [
        {
          type: "CHECKBOX_INPUT",
          name: "Diagnostics",
          label: "Diagnostics",
          title: "Helo",
          labelClass: "app-content-label",
          selectedIds: ["1"],
          disabledIds: [],
          options: [
            {
              value: "1",
              label: "Temperature",
              info: "This is Tooltip"
            },
            {
              value: "2",
              label: "Pressure"
            },
            {
              value: "3",
              label: "Density"
            }
          ],
          column: "6",
          required: true,
          error: "",
          errorClass: "",
          showAlert: false
        },
        {
          type: "CHECKBOX_INPUT",
          name: "Configuration",
          label: "Configuration",
          title: "Helo",
          labelClass: "app-content-label",
          selectedIds: ["2"],
          disabledIds: [],
          options: [
            {
              value: "1",
              label: "Temperature"
            },
            {
              value: "2",
              label: "Pressure",
              info: "This is Tooltip"
            }
          ],
          column: "6",
          required: true,
          error: "",
          errorClass: "",
          showAlert: false
        },
        {
          type: "CUSTOM",
          component: "Component",
          name: "component",
          value: "",
          column: 12
        }
      ]
    },
    {
      group: "Models",
      fields: [
        {
          column: 12,
          type: "TILE_THUMBNAIL",
          name: "models",
          buttonLabel: "btn lble",
          imgUrl: "7bd555544cf68071bafa.png",
          attribute_code_value: {
            description: "",
            defaultDirection: "tile"
          },
          error: "",
          showAlert: false,
          defaultIds: [],
          dataSourceUrl: "https://jsonplaceholder.typicode.com/users",
          options: []
        },
        {
          type: "CUSTOM",
          component: "Component",
          name: "component",
          value: "",
          column: 12
        }
      ]
    }
  ]);

  //create a function to loop throug the above schema array

  const generateFeilds = (inputFeilds) => {
    if (!inputFeilds.length) {
      return [];
    }
    return inputFeilds;
    //find the datasource url and make the api call
  };

  const handleInput = (e, formData, schemaData, fieldName) => {
    // const newSchema = schemaData.slice();
    // const latestSchema = newSchema.map((group, i) => {
    //   group.fields.map(field => {
    //     if (field.id === "email") {
    //       field.value = "hello@gmail.com"
    //     }
    //     return field
    //   })
    //   return group
    // })
    // console.log(latestSchema);
    // setSchema(JSON.parse(JSON.stringify(latestSchema)))
    // const currentFeild = schema.reduce((prev, curr, i) => {
    //     const field = prev || curr.fields.find(field => field.name === fieldName);
    //     if(field !== 'undefined') return field
    // }, undefined)
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <MSOLDynamicForm
            schema={schema}
            handleChange={(event, a, b, c) => handleInput(event, a, b, c)}
            handleKeyPress={function noRefCheck() {}}
            handleSubmit={function noRefCheck() {}}
            updateData={function noRefCheck() {}}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default CustomLayout;
