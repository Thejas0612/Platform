import React from "react";
import {
  SelectInput,
  TextInput,
  TableInput,
  NumberInput,
  ButtonInput,
  TileOrThumbnail
} from "@emerson/dynamic-ui-public";
import CardContent from "@mui/material/CardContent";
import { Grid, Stack, Typography } from "@mui/material";

const FORM_FEILDS = {
  SINGLE_SELECT: SelectInput,
  TEXT_INPUT: TextInput,
  NUMBER_INPUT: NumberInput,
  BUTTON: ButtonInput,
  TABLE_INPUT: TableInput
};

function MSOLDynamicForm({ schema, handleChange, updateData }) {
  //intial state of formData
  const [formData, setFormData] = React.useState([]);

  //updating the initial state
  React.useEffect(() => {
    setFormData(schema);
  }, []);

  const generateForm =
    formData &&
    formData.length &&
    formData.map((schema, index) => {
      return (
        <CardContent key={`${schema.group}+ ${index}`}>
          <Stack spacing={1} sx={{ m: 1 }}>
            <Typography fontWeight={"bold"}>
              <h2>{schema.group}</h2>
            </Typography>
            <Grid container spacing={2}>
              {schema.fields.map((field) => {
                const Component = FORM_FEILDS[field.type];
                return (
                  <>
                    <Grid item xs={field.column || 6}>
                      {Component ? <Component {...field} /> : null}
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Stack>
        </CardContent>
      );
    });

  return (
    <>
      <div className="top_section">
        <Grid container>
          <Grid item xs={6}>
            {generateForm}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default MSOLDynamicForm;
