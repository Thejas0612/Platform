import {FunctionComponent} from "react";
import {Checkbox, FormControlLabel, Grid, Typography} from "@mui/material";
import styles from './CardCheckbox.module.css'

export interface CardCheckboxProps {
    name: string
    title: string
}

export const CardCheckbox: FunctionComponent<CardCheckboxProps> = ({name, title}) => {
    return <Grid
        direction="column"
        spacing={.5}
        alignItems="center"
        container
        sx={{padding: ".5rem"}}
    >
        {/* Title */}
        <Grid item>
            <Typography sx={{color: 'var(--ddl-color--global-base)'}}>{title}</Typography>
        </Grid>

        {/* Image */}
        <Grid item>
            <img src="https://placehold.co/150x150" alt={title} className={styles.cardCheckbox__image}/>
        </Grid>

        {/* Checkbox */}
        <Grid item>
            <FormControlLabel disabled={true} sx={{textAlign: "center", color:'var(--ddl-color--warm-grey)'}}
                              control={<Checkbox sx={{color:'var(--ddl-color--warm-grey)'}} />}
                              label="compare" name={name} />
        </Grid>
    </Grid>
}