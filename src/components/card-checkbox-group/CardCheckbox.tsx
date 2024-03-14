import {FunctionComponent} from "react";
import {Checkbox, FormControlLabel, Grid, Typography} from "@mui/material";
import './CardCheckbox.css'
import Grid2 from "@mui/material/Unstable_Grid2";

export interface CardCheckboxProps {
    name: string
    title: string
}

export const CardCheckbox: FunctionComponent<CardCheckboxProps> = ({name, title}) => {
    return <Grid
        direction="column"
        spacing={2}
        alignItems="center"
        container
    >
        <Grid item>
            <Typography>{title}</Typography>
        </Grid>

        <Grid item>
            <img src="https://placehold.co/150x114" alt={title} className="cardCheckbox__image"/>
        </Grid>

        <Grid item>
            <FormControlLabel sx={{textAlign: "center"}} control={<Checkbox/>} label="compare"/>
        </Grid>
    </Grid>
}