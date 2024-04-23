import React from "react";
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
} from "@emerson/dynamic-ui-public";
import { Grid, Typography } from "@mui/material";
import CheckboxInput from "../checkbox";
import TableInput from "../../table-input/TableInput";
import { MsolTileOrThumbnail } from "../msol-tile-or-thumbnail/MsolTileOrThumbnail";
import { checkValidations } from '../../../utils/validation.service';

const FORM_FEILDS = {
    SINGLE_SELECT: SelectInput,
    TEXT_INPUT: TextInput,
    NUMBER_INPUT: NumberInput,
    BUTTON: ButtonInput,
    TILE_THUMBNAIL: MsolTileOrThumbnail,
    CHECKBOX_INPUT: CheckboxInput,
    TABLE_INPUT: TableInput,
    RADIO_INPUT: RadioInput,
    CUSTOM_TOGGLE_BUTTON: CustomToggleButton,
    CUSTOM_BUTTON_GROUP: CustomButtonGroup,
    PRODUCTS_LIST: ProductsList,
    SUGGESTION_CARD: SuggestionCard,
    ITEMS_TABLE: ItemsTable,
    LABEL_TEXT: LabelText,
    IMAGE_CARD: ImageCard,
    DATA_TABLE: DataTable,
    IMAGE_THUMBNAIL: ImageThumbnail,
    IMAGE_BUTTON: ImageButtonInput,
    DRAG_AND_DROP: DragAndDrop
};

const MSOLDynamicForm = ({
    schema,
    handleChange,
    updateData,
    handleKeyPress,
    formKey,
    dataSourceUrl,
    components,
    overrideComponents = {},
    ...props
}) => {
    const [formData, setFormData] = React.useState([]);
    const [formDataObj, setFormDataObj] = React.useState({});
    const [formError, setFormError] = React.useState({});

    const initializeFormData = () => {
        const formDataValues = {};
        const formErrors = {};
        schema.forEach((formGroup) => {
            formGroup.fields.forEach((field) => {
                formDataValues[field.name] = field.value;
                if (field.error || field.hasOwnProperty('error')) {
                    formErrors[field.name] = field.error;
                }
            });
        });
        setFormDataObj(prevState => ({...prevState, ...formDataValues}));
        setFormError(prevState => ({...prevState, ...formErrors}));
    };

    //updating the initial state
    React.useEffect(() => {
        setFormData(schema);
        initializeFormData(schema)
    }, [JSON.stringify(schema)]);

    const onChange = (e, type, name, val) => {
        let field = name;
        let value = val;
        const updatedFormData = formData.map((group) => {
            const updatedFields = group.fields.map((field) => {
                if (field.name === name) {
                    return { ...field, value };
                }
                return field;
            });
            return { ...group, fields: updatedFields };
        });
        setFormData(updatedFormData);
        setFormDataObj({ ...formDataObj, [field]: value });
        const message = fieldValidation(e, type, name, value);
        setFormError({ ...formError, [name]: message });
        handleChange(
            e,
            { ...formDataObj, [field]: value },
            updatedFormData,
            name,
            { ...formError, [name]: message },
        );
    };

    const handleBlur = (e, type, name, val) => {
        let field = name;
        let value = val;
        const updatedFormData = formData.map((group) => {
            const updatedFields = group.fields.map((field) => {
                if (field.name === name) {
                    return { ...field, value };
                }
                return field;
            });
            return { ...group, fields: updatedFields };
        });
        setFormData(updatedFormData);
        setFormDataObj({ ...formDataObj, [field]: value });
        const message = fieldValidation(e, type, name, value);
        setFormError({ ...formError, [name]: message });
        if (!message) {
            handleChange(
                e,
                { ...formDataObj, [field]: value },
                updatedFormData,
                name,
                { ...formError, [name]: message },
            );
        }
    };

    const fieldValidation = (e, type, name, value) => {
        if (name != undefined) {
            const currentField = formData
                .flatMap((group) => group.fields)
                .find(
                    (field) =>
                        field.name &&
                        field.name.toUpperCase() === name.toUpperCase()
                );
            return checkValidations(currentField, value);
        }
    };

  const generateForm =
    formData &&
    formData.length &&
    formData.map((formGroup, index) => {
      return (
        <div key={index}>
          {formGroup.group && <Typography fontWeight={"bold"}>{formGroup.group}</Typography>}
          <Grid container spacing={2}>
            {formGroup.fields.map((field) => {
              field.error = formError[field.name];
              const FieldComponent = { ...FORM_FEILDS, ...overrideComponents }[field.type];

              // CustomButtonGroup onChange event always returns undefined as the name. Now we
              // use the name in the schema.
              // https://dev.azure.com/EmersonAutomationSolutions/AS-MSOL-Digital%20Experience%20Tools/_workitems/edit/1708287/
              function handleChange(e, type, _name, val) {
                onChange(e, type, field.name, val)
              }

              return (
                <>
                {field.hide && field.hide === true ? (
                                        <></>
                                      ) : (
                  <Grid item key={field.name} xs={field.column ? field.column : 12}>
                    {FieldComponent ? <FieldComponent {...field} onChange={handleChange} /> : null}
                  </Grid>
                  )}
                </>
              );
            })}
          </Grid>
        </div>
      );
    });

    return generateForm;
};

export default MSOLDynamicForm
