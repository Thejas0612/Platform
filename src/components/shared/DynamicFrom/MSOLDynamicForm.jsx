import React from 'react';
import { SelectInput, TextInput, NumberInput, ButtonInput } from '@emerson/dynamic-ui-public';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack, Typography } from '@mui/material';
import TileorThumbnail from '../TileorThumbnail';
import CheckboxInput from '../CheckboxInput'
import TableInput from '../TableInput'

const FORM_FEILDS = {
    "SINGLE_SELECT": SelectInput,
    "TEXT_INPUT": TextInput,
    "NUMBER_INPUT": NumberInput,
    "BUTTON": ButtonInput,
    'TILE_THUMBNAIL': TileorThumbnail,
    "CHECKBOX_INPUT": CheckboxInput,
    "TABLE_INPUT": TableInput
}

function MSOLDynamicForm({ schema, handleChange }) {
    //intial state of formData
    const [formData, setFormData] = React.useState([])
    const [formDataObj, setFormDataObj] = React.useState({});

    //updating the initial state
    React.useEffect(() => {
        setFormData(schema)
    }, [])

    const onChange = (e, type, name, val) => {
        let field = name;
        let value = val;
        setFormDataObj({ ...formDataObj, [field]: value });
        handleChange(
            e,
            { ...formDataObj, [field]: value },
            formData,
            name,
        );
    }

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
                                        <Grid item xs={field.column ? field.column : '6'}>
                                            {FieldComponent ?
                                                <FieldComponent
                                                    {...field}
                                                    onChange={onChange}
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