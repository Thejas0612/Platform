import React, { useState } from "react";
import {
  LabelText,
  SelectInput,
  CustomButtonGroup,
  RadioInput,
  TextInput,
  CheckboxInput,
  ButtonInput
} from "@emerson/dynamic-ui-public";
import Grid from "@mui/material/Grid";

import processConditionJson from "./processCondition.json";

export default function ProcessCondition() {
  const [lineSizeValue, setLineSizeValue] = useState("");
  const [lineSizeOptions, setLineSizeOptions] = useState(processConditionJson.lineSizeOptions);

  const [pipeScheduleValue, setPipeScheduleValue] = useState("");
  const [pipeScheduleOptions, setPipeScheduleOptions] = useState(
    processConditionJson.pipeScheduleOptions
  );

  const [fluidTypeOptions, setFluidTypeOptions] = useState(processConditionJson.fluidTypeOptions);

  const [fluidDBOptions, setFluidDBOptions] = useState(processConditionJson.fluidDBOptions);

  const [showFluidDb, setShowFluidDb] = useState(true);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>

          <LabelText
            labelClass="ddl-from-custom-label"
            showLabel
            text="Process Piping"
            textClass="ddl-typography--h5"
          />
        </Grid>

        <Grid item xs={3}>
          <SelectInput
            label="Line Size"
            labelClass="app-content-label"
            name="line_size"
            options={lineSizeOptions.map((ele) => {
              return {
                greyedOut: false,
                label: `${ele.label}`,
                title: `${ele.title}`,
                value: `${ele.value}`
              };
            })}
            placeholder="PLEASE SELECT"
            onChange={(e) => {
              setLineSizeValue(e.value);
            }}
            warningMsg=""
            value={`${lineSizeValue}`}
          />
        </Grid>
        <Grid item xs={3}>
          <SelectInput
            label="PIPE SCHEDULE"
            labelClass="app-content-label"
            name="pipe_schedule"
            options={pipeScheduleOptions.map((ele) => {
              return {
                // key: `${ele.value}`,
                greyedOut: false,
                label: `${ele.label}`,
                title: `${ele.title}`,
                value: `${ele.value}`
              };
            })}
            placeholder="PLEASE SELECT"
            warningMsg=""
            onChange={(e) => {
              setPipeScheduleValue(e.value);
            }}
            value={`${pipeScheduleValue}`}
          />
        </Grid>
        <Grid container item xs={12} lg={12}>
          <LabelText
            labelClass="ddl-from-custom-label"
            showLabel
            text="Process Fluid"
            textClass="ddl-typography--h5"
          />
        </Grid>

        <Grid container item xs={12} lg={12}>
          <CustomButtonGroup
            data={fluidTypeOptions.map((ele) => {
              return {
                id: `${ele.id}`,
                label: `${ele.label}`
              };
            })}
            defaultId="1"
            label="Fluid Type"
            labelClass="ddl-from-custom-label"
            onChange={(e) => {
              console.log(e.target.textContent);
            }}
            title="Fluid Type"
          />
        </Grid>

        <Grid container item xs={2} lg={2}>
          <RadioInput
            label="FLUID SOURCE"
            // onChange={(e)=>console.log(e.target.value)}
            onChange={(e) =>
              e.target.value === "1" ? setShowFluidDb(true) : setShowFluidDb(false)
            }
            options={[
              {
                label: "Database",
                value: "1"
              },
              {
                label: "Custom",
                value: "2"
              }
            ]}
            required
            size="medium"
            value="1"
          />
        </Grid>

        <Grid item xs={6} lg={6}>
          {showFluidDb ? (
            <SelectInput
              label="Fluid Database"
              labelClass="app-content-label"
              name="fluid_database"
              options={fluidDBOptions.map((ele) => {
                return {
                  label: `${ele.label}`,
                  title: `${ele.title}`,
                  value: `${ele.title}`
                };
              })}
              placeholder="PLEASE SELECT"
              warningMsg=""
              value=""
            />
          ) : (
            <TextInput label="Custom Fluid Name" />
          )}
        </Grid>

        <Grid container item xs={12} lg={12}>
          <ButtonInput
            btnType="textary"
            customClass=""
            label="Additional Options"
            onClick={() => {}}
          />
        </Grid>

        <Grid item xs={12} ls={12}>
          <CheckboxInput
            onChange={() => {}}
            options={[
              {
                label:
                  "Fluid Plugs or Clogs (High Viscosity, Slurry, Entrained Solids, Solidifies, Etc)",
                value: "1"
              },
              {
                label: "Fluid Causes Wear and Erosion ( Entrained Solids, Abrasive, Etc.)",
                value: "2"
              }
            ]}
            title=""
          />
        </Grid>
      </Grid>
    </>
  );
}
