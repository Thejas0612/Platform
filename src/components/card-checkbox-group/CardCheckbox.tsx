import {FunctionComponent} from "react";
import {Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import './CardCheckbox.css'

export interface CardCheckboxProps {
    name: string
    title: string
}

export const CardCheckbox: FunctionComponent<CardCheckboxProps> = ({name, title}) => {
    return <Stack
        direction="column"
        spacing={2}
    >
        <Typography>{title}</Typography>
        <img src="https://placehold.co/150x114" alt={title} className="cardCheckbox__image"/>
        <FormControlLabel control={<Checkbox/>} label="compare"/>
    </Stack>
}