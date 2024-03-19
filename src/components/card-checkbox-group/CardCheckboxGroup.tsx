import {FunctionComponent} from "react";
import {CardCheckbox, CardCheckboxProps} from "./CardCheckbox";
import {Grid} from "@mui/material";
import { FormHelperText } from '@mui/material';

export interface CardCheckboxGroupProps {
    data: CardCheckboxProps[]
    error?: string
}

export const CardCheckboxGroup: FunctionComponent<CardCheckboxGroupProps> = ({data, error}) => {
    return <>
        <Grid container>
            {data.map((cardCheckboxProps) => {
                return <Grid key={cardCheckboxProps.name} item xs={4} sx={{ border: '1px solid var(--ddl-color--primary-grey)'}}>
                    <CardCheckbox {...cardCheckboxProps}/>
                </Grid>
            })}
        </Grid>
        { !error || <FormHelperText error={true}>{error}</FormHelperText> }
    </>
}