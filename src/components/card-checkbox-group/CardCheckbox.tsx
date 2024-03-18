import {FunctionComponent} from "react";
import {Checkbox, FormControlLabel, Grid, Tooltip, Typography, useTheme} from "@mui/material";
import styles from './CardCheckbox.module.css'

export interface CardCheckboxProps {
    name: string
    title: string
    disabled?: boolean
}

export const CardCheckbox: FunctionComponent<CardCheckboxProps> = ({name, title, disabled = false}) => {
    const theme = useTheme();
    const disabledColor = theme.palette.action.disabled

    return <Grid
        direction="column"
        spacing={.5}
        alignItems="center"
        container
        sx={{padding: ".5rem"}}
    >
        {/* Title */}
        <Grid item>
            <Typography sx={{color: disabled ? disabledColor : undefined}}>{title}</Typography>
        </Grid>

        {/* Image */}
        <Grid item>
            <Tooltip title="Delete" placement="right">
                <img src="https://placehold.co/150x150" alt={title} className={styles.cardCheckbox__image}/>
            </Tooltip>
        </Grid>

        {/* Checkbox */}
        <Grid item>
            <FormControlLabel disabled={disabled}
                              sx={{textAlign: "center"}}
                              control={<Checkbox />}
                              label="compare"
                              name={name} />
        </Grid>
    </Grid>
}