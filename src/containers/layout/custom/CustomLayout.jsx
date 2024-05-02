import React, { useState } from "react";
import MSOLDynamicForm from "../../../components/shared/dynamicform";
import { Grid } from "@mui/material";
import { generateFields } from "../../../utils/validation.service";

function CustomLayout() {
  const [schema, setSchema] = React.useState([
    {
      group: "",
      fields: [
        {
          column: 12,
          label: "LABEL_TEXT",
          labelClass: "app-content-label",
          name: "process_piping_label",
          showLabel: false,
          subText: "",
          tableClass: "",
          text: "Process Piping",
          textClass: "ddl-typography--h5",
          title: "this is title",
          type: "LABEL_TEXT",
          textStyles: {
            textAlign: "start"
          },
          display: true,
          value: "process_piping_label",
          order: 0
        },
        {
          column: 3,
          type: "SINGLE_SELECT",
          name: "line_size",
          label: "Line Size",
          labelClass: "app-content-label",
          disabled: false,
          value: "",
          options: [],
          error: "",
          errorClass: "",
          placeholder: "Pick One",
          isApiOnEvent: {
            isApiCall: true,
            apiInfo: {
              url: "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/processcondition/processPipingPipeSchedule?buCode=dpflow&lineSize=",
              method: "GET",
              payload: {}
            },
            targetUiElement: "pipeschedule",
            targetProperty: "options"
          },
          dataSourceUrl:
            "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/processcondition/processPipingPipeSchedule?buCode=dpflow&lineSize=",
          display: true,
          order: 1,
          required: true
        },
        {
          column: 3,
          type: "SINGLE_SELECT",
          name: "pipeschedule",
          label: "Pipe Schedule",
          labelClass: "app-content-label",
          disabled: false,
          value: "",
          options: [],
          required: true,
          error: "",
          errorClass: "",
          display: true,
          order: 2
        },
        {
          column: 3,
          type: "NUMBER_INPUT",
          name: "Pipe Id",
          label: "Pipe Id",
          labelClass: "app-content-label",
          disabled: false,
          value: "",
          required: true,
          error: "",
          errorClass: "",
          display: false,
          order: 3,
          validations: {
            required: true,
            minValue: 1,
            maxValue: 100
          }
        },
        {
          column: 3,
          type: "SINGLE_SELECT",
          name: "units",
          label: "Units",
          labelClass: "app-content-label",
          disabled: false,
          value: "Inch",
          options: [
            { id: "Inch", label: "Inch", value: "Inch" },
            { id: "mm", label: "mm", value: "mm" }
          ],
          required: false,
          error: "",
          errorClass: "",
          display: false,
          order: 4
        },
        {
          "id": "fluidType",
          "type": "CUSTOM_BUTTON_GROUP",
          "column": 12,
          "label": "Fluid Type",
          "name": "fluidtype",
          "defaultId": "1",
          "data": [
            {
              "id": "1",
              "label": "Liquid"
            },
            {
              "id": "2",
              "label": "Gas"
            },
            {
              "id": "3",
              "label": "Steam"
            },
            {
              "id": "4",
              "label": "Natural Gas"
            },
            {
              "id": "5",
              "label": "Slurry"
            }
          ],
          "labelClass": "app-content-label camelCase"
        },
        {
          "id": "liquidfluidSource",
          "column": 2,
          "type": "RADIO_INPUT",
          "name": "fluidSource",
          "label": "Fluid Source",
          "labelClass": "app-content-label camelCase",
          "value": "0",
          "options": [
            {
              "value": "0",
              "label": "Database"
            },
            {
              "value": "1",
              "label": "Custom"
            }
          ],
          "error": "",
          "errorClass": "",
          "visibility": [
            {
              "id": "fluidType",
              "value": "1"
            }
          ]
        },
        {
          column: 3,
          type: "SINGLE_SELECT",
          name: "pipeschedule",
          label: "Liquid Fluid Database",
          labelClass: "app-content-label",
          disabled: false,
          value: "",
          options: [],
          required: true,
          error: "",
          errorClass: "",
          display: true,
          order: 2,
          visibility: [
            {
              "id": "liquidfluidSource",
                "value": "0"
            },
            {
              "id": "fluidType",
              "value": "1"
            }
          ]
        },
        {
          "label": "Enter Custom Fluid Name",
          "labelClass": "app-content-label camelCase",
          "type": "TEXT_INPUT",
          "name": "fluidsDatabaseInput",
          "column": 4,
          "value": "",
          "visibility": [
            {
              "id": "liquidfluidSource",
              "value": "1"
            },
            {
              "id": "fluidType",
              "value": "1"
            }
          ]
        },
        {
          "id": "gasfluidSource",
          "column": 2,
          "type": "RADIO_INPUT",
          "name": "fluidSource",
          "label": "Fluid Source",
          "labelClass": "app-content-label camelCase",
          "value": "0",
          "options": [
            {
              "value": "0",
              "label": "Database"
            },
            {
              "value": "1",
              "label": "Custom"
            }
          ],
          "error": "",
          "errorClass": "",
          "visibility": [
            {
              "id": "fluidType",
              "value": "2"
            }
          ]
        },
        {
          column: 3,
          type: "SINGLE_SELECT",
          name: "pipeschedule",
          label: "Gas Fluid Database",
          labelClass: "app-content-label",
          disabled: false,
          value: "",
          options: [],
          required: true,
          error: "",
          errorClass: "",
          display: true,
          order: 2,
          visibility: [
            {
              "id": "gasfluidSource",
              "value": "0"
            },
            {
              "id": "fluidType",
              "value": "2"
            }
          ]
        },
        {
          "label": "Enter Gas Custom Fluid Name",
          "labelClass": "app-content-label camelCase",
          "type": "TEXT_INPUT",
          "name": "fluidsDatabaseInput",
          "column": 4,
          "value": "",
          "visibility": [
            {
              "id": "gasfluidSource",
              "value": "1"
            },
            {
              "id": "fluidType",
              "value": "2"
            }
          ]
        },
        {
          "id": "liquidfluidSource",
          "column": 2,
          "type": "RADIO_INPUT",
          "name": "fluidSource",
          "label": "Fluid Source",
          "labelClass": "app-content-label camelCase",
          "disabledIds": ["0"],
          "value": "1",
          "options": [
            {
              "value": "0",
              "label": "Database"
            },
            {
              "value": "1",
              "label": "Custom"
            }
          ],
          "error": "",
          "errorClass": "",
          "visibility": [
            {
              "id": "fluidType",
              "value": "5"
            }
          ]
        },
        {
          column: 3,
          type: "SINGLE_SELECT",
          name: "pipeschedule",
          label: "Slurry Fluid Database",
          labelClass: "app-content-label",
          disabled: true,
          value: "",
          options: [],
          required: true,
          error: "",
          errorClass: "",
          display: true,
          order: 2,
          visibility: [
            {
              "id": "liquidfluidSource",
              "value": "1"
            },
            {
              "id": "fluidType",
              "value": "5"
            }
          ]
        },
        {
          "label": "Enter Custom Fluid Name",
          "labelClass": "app-content-label camelCase",
          "type": "TEXT_INPUT",
          "name": "fluidsDatabaseInput",
          "column": 4,
          "value": "",
          "visibility": [
            {
              "id": "liquidfluidSource",
              "value": "0"
            },
            {
              "id": "fluidType",
              "value": "5"
            }
          ]
        }
      ]
    }
  ]);

  const handleInput = React.useCallback((e, formData, schemaData, fieldName) => {
    setSchema(schemaData)
  }, []);


  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <MSOLDynamicForm
            schema={[
              {
                fields: generateFields(schema[0].fields)
              }
            ]}
            handleChange={(event, a, b, c) => handleInput(event, a, b, c)}
            handleKeyPress={function noRefCheck() { }}
            handleSubmit={function noRefCheck() { }}
            updateData={function noRefCheck() { }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default CustomLayout;
