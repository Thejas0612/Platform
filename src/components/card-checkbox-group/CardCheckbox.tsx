import {FunctionComponent} from "react";
import {Checkbox, FormControlLabel, Grid, Typography} from "@mui/material";
import './CardCheckbox.css'

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
        {/* Title */}
        <Grid item>
            <Typography sx={{color: 'var(--ddl-color--global-base)'}}>{title}</Typography>
        </Grid>

        {/* Image */}
        <Grid item>
            <img src="https://placehold.co/150x114" alt={title} className="cardCheckbox__image"/>
        </Grid>

        {/* Checkbox */}
        <Grid item>
            <FormControlLabel sx={{textAlign: "center", color:'var(--ddl-color--warm-grey)'}}
                              control={<Checkbox sx={{color:'var(--ddl-color--warm-grey)'}} />}
                              label="compare" />
        </Grid>
    </Grid>
}