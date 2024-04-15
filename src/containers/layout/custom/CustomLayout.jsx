import React, { useState } from "react";
import MSOLDynamicForm from "../../../components/shared/dynamicform";
import { Grid } from "@mui/material";

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
          required: true,
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
            "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/processcondition/processPipingLineSize?buCode=dpflow",
          display: true,
          order: 1
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
          order: 3
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
          required: true,
          error: "",
          errorClass: "",
          display: false,
          order: 4
        },
        {
          column: 12,
          label: "LABEL_TEXT",
          labelClass: "app-content-label",
          name: "process_fluid",
          showLabel: false,
          subText: "",
          tableClass: "",
          text: "Process Fluid",
          textClass: "ddl-typography--h5",
          title: "this is title",
          type: "LABEL_TEXT",
          textStyles: {
            textAlign: "start"
          },
          display: true,
          order: 5
        },
        {
          type: "CUSTOM_BUTTON_GROUP",
          column: 12,
          title: "Fluid Type",
          label: "Fluid Type",
          name: "fluidtype",
          data: [
            {
              id: "0",
              label: "Liquid"
            },
            {
              id: "1",
              label: "Gas"
            },
            {
              id: "2",
              label: "Steam"
            },
            {
              id: "3",
              label: "Natural Gas"
            },
            {
              id: "4",
              label: "Slurry"
            }
          ],
          multiple: true,
          defaultIds: ["0"],
          showLabel: true,
          wrapperId: "",
          wrapperClass: "cutsom_class",
          labelClass: "ddl-from-custom-label",
          value: "0",
          attribute_code_value: {
            multiple: true,
            size: "medium"
          },
          required: true,
          display: true,
          order: 6
        },
        {
          column: 3,
          type: "RADIO_INPUT",
          name: "fluidsource",
          label: "Fluid Source",
          labelClass: "app-content-label",
          selectedIds: ["0"],
          disabledIds: ["1"],
          options: [
            {
              value: "0",
              label: "Database",
              id: "0"
            },
            {
              value: "1",
              label: "Custom",
              id: "1"
            }
          ],
          value: "0",
          required: true,
          error: "",
          errorClass: "",
          display: true,
          order: 7
        },
        {
          column: 4,
          type: "SINGLE_SELECT",
          name: "fluidsdatabase",
          label: "Fluids Database",
          labelClass: "app-content-label",
          value: "",
          options: [],
          required: true,
          error: "",
          errorClass: "",
          placeholder: "Pick One",
          dataSourceUrl:
            "https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/processcondition/fluidsDatabase?buCode=dpflow&fluidType=LIQUID",
          display: true,
          order: 8
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
          value: "",
          display: true,
          order: 9,
          name: "additional_options_label"
        },
        {
          column: 12,
          disabledIds: [],
          error: "",
          errorClass: "",
          labelClass: "app-content-label",
          name: "additional_options",
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
          type: "CHECKBOX_INPUT",
          display: true,
          order: 10
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
