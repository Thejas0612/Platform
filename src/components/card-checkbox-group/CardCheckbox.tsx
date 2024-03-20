import {FunctionComponent} from "react";
import {Checkbox, FormControlLabel, Grid, Tooltip, Typography, useTheme} from "@mui/material";
import styles from './CardCheckbox.module.css'

export interface CardCheckboxProps {
    id: string,
    name: string
    title: string
    imageUrl: string
    disabledTooltip?: string,
    disabled?: boolean,
    onChange?: () => void,
    checked?: boolean,
}

const HORIZONTAL_CENTER_TOOLTIP: Parameters<typeof Tooltip>[0]['slotProps'] = {
    popper: {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, -90],
                },
            },
        ],
    }
}


export const CardCheckbox: FunctionComponent<CardCheckboxProps> = ({
                                                                       name,
                                                                       title,
                                                                       imageUrl,
                                                                       disabled = false,
                                                                       disabledTooltip,
                                                                       onChange = () => {
                                                                       },
                                                                       checked,
                                                                   }) => {
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

        {/* Image and Disabled Tooltip */}
        <Grid item>
            {disabled ?
                <Tooltip title={disabledTooltip} placement="bottom" slotProps={HORIZONTAL_CENTER_TOOLTIP}>
                    <img src={imageUrl} alt={title} className={styles.cardCheckbox__image}/>
                </Tooltip>
                :
                <img src={imageUrl} alt={title} className={styles.cardCheckbox__image}/>}
        </Grid>

        {/* Checkbox */}
        <Grid item>
            <FormControlLabel disabled={disabled}
                              sx={{textAlign: "center"}}
                              control={<Checkbox onChange={onChange} checked={checked}/>}
                              label="compare"
                              name={name}/>
        </Grid>
    </Grid>
}