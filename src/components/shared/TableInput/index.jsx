import React from 'react'
import { LabelText, SelectInput, TextInput } from '@emerson/dynamic-ui-public'
import { Grid, Typography } from '@mui/material';

function TableInput({ value, data }) {
   return (
      <>
         <Grid container spacing={2} direction={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={2}>
               <Typography></Typography>
            </Grid>
            <Grid item xs={2}>
               <TextInput label={'MIN'} />
            </Grid>
            <Grid item xs={2}>
               <TextInput label={'NORMAL'} />
            </Grid>
            <Grid item xs={2}>
               <TextInput label={'MIN'} />
            </Grid>
            <Grid item xs={4}>
               <SelectInput label={'UNITS'} />
            </Grid>
         </Grid>
      </>
   )
}

export default TableInput