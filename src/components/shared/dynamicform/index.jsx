import React from 'react';
import {
    SelectInput,
    TextInput,
    NumberInput,
    ButtonInput,
    // TableInput,
    RadioInput,
    CustomToggleButton,
    CustomButtonGroup,
    ProductsList,
    SuggestionCard,
    ItemsTable,
    LabelText,
    ImageCard,
    DataTable,
    ImageThumbnail,
    ImageButtonInput
} from '@emerson/dynamic-ui-public';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack, Typography } from '@mui/material';
import TileOrThumbnail from '../tile';
import CheckboxInput from '../checkbox'
import TableInput from '../table'

const FORM_FEILDS = {
    "SINGLE_SELECT": SelectInput,
    "TEXT_INPUT": TextInput,
    "NUMBER_INPUT": NumberInput,
    "BUTTON": ButtonInput,
    'TILE_THUMBNAIL': TileOrThumbnail,
    "CHECKBOX_INPUT": CheckboxInput,
    "TABLE_INPUT": TableInput,
    "RADIO_INPUT": RadioInput,
    "CUSTOM_TOGGLE_BUTTON": CustomToggleButton,
    "CUSTOM_BUTTON_GROUP": CustomButtonGroup,
    "PRODUCTS_LIST": ProductsList,
    "SUGGESTION_CARD": SuggestionCard,
    "ITEMS_TABLE": ItemsTable,
    "LABEL_TEXT": LabelText,
    "IMAGE_CARD": ImageCard,
    "DATA_TABLE": DataTable,
    "IMAGE_THUMBNAIL": ImageThumbnail,
    "IMAGE_BUTTON": ImageButtonInput
}

function MSOLDynamicForm({ schema, handleChange }) {

    //initial state of formData
    const [formData, setFormData] = React.useState([])
    const [formDataObj, setFormDataObj] = React.useState({});

    //updating the initial state
    React.useEffect(() => {
        setFormData(schema)
    }, [JSON.stringify(schema)])

    const onChange = (e, type, name, val) => {
        let field = name;
        let value = val;
        formData.forEach((val, i) => {
            val.fields.forEach((v, ind) => {
                if (v.name == field) {
                    v.value = value;
                }
            });
        });
        setFormData(formData);
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
                                        <Grid item xs={field.column ? field.column : '12'}>
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
                {generateForm}
            </div>
        </>
    )
}

export default MSOLDynamicForm