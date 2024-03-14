import {FunctionComponent} from "react";
import {CardCheckbox, CardCheckboxProps} from "./CardCheckbox";
import {Grid} from "@mui/material";

export interface CardCheckboxGroupProps {
    data: CardCheckboxProps[]
}

export const CardCheckboxGroup: FunctionComponent<CardCheckboxGroupProps> = ({data}) => {
    return <Grid container>
        {data.map((cardCheckboxProps) => {
            return <Grid item  xs={4} sx={{ border: '1px solid #000'}}>
                <CardCheckbox key={cardCheckboxProps.name} {...cardCheckboxProps}/>
            </Grid>
        })}
    </Grid>
}