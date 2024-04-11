import React, { useImperativeHandle } from 'react';
import {
    SelectInput,
    TextInput,
    NumberInput,
    ButtonInput,
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
    ImageButtonInput,
    DragAndDrop
} from '@emerson/dynamic-ui-public';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack, Typography } from '@mui/material';
import CheckboxInput from '../checkbox'
import TableInput from '../../table-input/TableInput'
import { MsolTileOrThumbnail } from "../msol-tile-or-thumbnail/MsolTileOrThumbnail";
import { checkValidations } from '../../../utils/validation.service';

const FORM_FEILDS = {
    "SINGLE_SELECT": SelectInput,
    "TEXT_INPUT": TextInput,
    "NUMBER_INPUT": NumberInput,
    "BUTTON": ButtonInput,
    'TILE_THUMBNAIL': MsolTileOrThumbnail,
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
    "IMAGE_BUTTON": ImageButtonInput,
    "DRAG_AND_DROP": DragAndDrop
}

const MSOLDynamicForm = (({ schema, handleChange, updateData, handleKeyPress, formKey, dataSourceUrl, components, overrideComponents = {}, ...props }) => {

    //initial state of formData
    const [formData, setFormData] = React.useState([])
    const [formDataObj, setFormDataObj] = React.useState({});
    const [formError, setFormError] = React.useState({});

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
        //validate the feild
        let message = feildValidation(e, type, name, value);
        setFormError({...formError, [name]: message});
        if(!message){
            handleChange(
                e,
                { ...formDataObj, [field]: value },
                formData,
                name,
                {...formError, [name]: message},
            );
        } 
    }

    const feildValidation = (e, type, name, value) => {
        let currentField;
        let validations;
        //Finding the current field
        const foundField = formData.find(group => {
            const foundIndex = group.fields.findIndex(field => field.name ? field.name.toUpperCase() === name.toUpperCase() : null);
            return foundIndex !== -1;
        });
        currentField = foundField ? foundField.fields.find(field => field.name ? field.name.toUpperCase() === name.toUpperCase() : null) : null;
        //Check the validation rules based on the validation object and assign the error message 
        validations = currentField.validations ? currentField.validations : [];
        return checkValidations(validations, value, name);
    }

    const generateForm = (
        formData && formData.length && formData.map(formgroup => {
            return (
                <CardContent>
                    <Stack spacing={1} sx={{ m: 1 }}>
                        <Typography fontWeight={'bold'}>{formgroup.group}</Typography>
                        <Grid container spacing={2}>
                            {formgroup.fields.map(field => {
                                const FieldComponent = {...FORM_FEILDS, ...overrideComponents}[field.type]
                                return (
                                    <>
                                        <Grid item key={field.name} xs={field.column ? field.column : 12}>
                                            {FieldComponent ?
                                                <FieldComponent
                                                    {...field}
                                                    error={formError[field.name]}
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
})

export default MSOLDynamicForm