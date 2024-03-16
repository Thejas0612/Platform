import React from 'react';
import { SelectInput, TextInput, TableInput, NumberInput, ButtonInput } from '@emerson/dynamic-ui-public';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack, Typography } from '@mui/material';


const FORM_FEILDS = {
    "SINGLE_SELECT": SelectInput,
    "TEXT_INPUT": TextInput,
    "NUMBER_INPUT": NumberInput,
    "BUTTON": ButtonInput
}

function MSOLDynamicForm({ schema, handleChange, updateData }) {
    //intial state of formData
    const [formData, setFormData] = React.useState([])

    //updating the initial state
    React.useEffect(() => {
        setFormData(schema)
    }, [])

    const generateForm = (
        formData && formData.length && formData.map(formgroup => {
            return (
                <CardContent>
                    <Stack spacing={1} sx={{ m: 1 }}>
                        <Typography fontWeight={'bold'}>{formgroup.group}</Typography>
                        <Grid container spacing={2}>
                            {formgroup.fields.map(field => {
                                const FieldComponent = FORM_FEILDS[field.type]
                                return (
                                    <>
                                        <Grid item xs={6}>
                                            {FieldComponent ?
                                                <FieldComponent
                                                    {...field}
                                                /> : null}
                                        </Grid>
                                    </>
                                )
                            })}
                        </Grid>
                    </Stack>
                </CardContent>
            )
        })
    )

    return (
        <>
            <div className="top_section">
                <Grid container>
                    <Grid item xs={6}>
                        {generateForm}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default MSOLDynamicForm