import {FunctionComponent} from "react";
import {CardCheckbox, CardCheckboxProps} from "./CardCheckbox";
import {Grid} from "@mui/material";
import {FormHelperText} from '@mui/material';

type DataRow = Omit<CardCheckboxProps, 'checked' | 'onChange'>

export interface CardCheckboxGroupProps {
    selectedIds?: string[]
    data: DataRow[]
    error?: string
    onChange?: (selectedIds: string[]) => void
}

export const CardCheckboxGroup: FunctionComponent<CardCheckboxGroupProps> = ({
                                                                                 selectedIds = [],
                                                                                 data,
                                                                                 error,
                                                                                 onChange = () => {
                                                                                 }
                                                                             }) => {
    return <>
        <Grid container>
            {data.map((cardCheckboxProps) => {
                const checked = selectedIds.includes(cardCheckboxProps.id)

                function handleChange() {
                    debugger;
                    if (checked) {
                        const newSelectedIds = selectedIds.filter(_ => _ !== cardCheckboxProps.id)
                        onChange(newSelectedIds)
                    } else {
                        const newSelectedIds = [...selectedIds, cardCheckboxProps.id]
                        onChange(newSelectedIds)
                    }
                }

                return <Grid key={cardCheckboxProps.name}
                             item
                             xs={4}
                             sx={{border: '1px solid var(--ddl-color--primary-grey)'}}>
                    <CardCheckbox {...cardCheckboxProps} checked={checked} onChange={handleChange} />
                </Grid>
            })}
        </Grid>
        {!error || <FormHelperText error={true}>{error}</FormHelperText>}
    </>
}