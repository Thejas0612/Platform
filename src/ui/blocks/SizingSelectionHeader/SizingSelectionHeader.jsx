import React from "react";
import {Grid} from "@mui/material";
import {ButtonInput, CustomTop, LabelText} from "@emerson/dynamic-ui-public";
export default function SizingSelectionHeader() {
return (
  <Grid container spacing={4}  justifyContent="space-between">
    <Grid item xs={12} md={8}>
      <CustomTop
        data={[
          {
            labelClass: 'ddl-typography--h4',
            order: 1,
            type: 'LABEL_TEXT',
            value: 'Sizing & Selection'
          },
          {
            labelClass: 'ddl-typography--paragraph',
            order: 2,
            type: 'LABEL_TEXT',
            value: 'Please select from the options below to best describe your application requirements. These selections will aid in instrumentation selection throughout the module.'
          }
        ]}
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <Grid container spacing={2}>
        <Grid item  justifyContent="flex-end" xs={12} md={12}>
          <LabelText
            label="label text"
            labelClass="ddl-from-custom-label"
            text="Preferences | Search Sizing"
            textClass="ddl-typography--h5"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <ButtonInput
            btnType="secondary"
            customClass=""
            label="Save Sizing"
            onClick={() => {}}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <ButtonInput btnType="secondary" customClass="" label="Clear" onClick={() => {}} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)
}