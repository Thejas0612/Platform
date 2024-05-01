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
import { FilterButton } from "../../filter-button/FilterButton";
import { CardCheckboxGroup } from "../../card-checkbox-group/CardCheckboxGroup";
import {DropdownMenuGroup} from "../../dropdown-menu-group/DropdownMenuGroup";

const FORM_FIELDS = {
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
    DRAG_AND_DROP: DragAndDrop,
    FILTER_BUTTON: FilterButton,
    CARD_CHECKBOX_GROUP: CardCheckboxGroup,
    DROPDOWN_MENU_GROUP: DropdownMenuGroup
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

    const updateFormData = (fieldName, fieldValue) => {
        const newFormDataObj = { ...formDataObj, [fieldName]: fieldValue }
        const updatedFormData = formData.map((group) => {
            const updatedFields = group.fields.map((field) => {
                if (field.name === fieldName) {
                    return { ...field, value: fieldValue };
                }
                return field;
            });
            return { ...group, fields: updatedFields };
        });
        setFormData(updatedFormData);
        setFormDataObj(newFormDataObj);

        const message = fieldValidation(fieldName, fieldValue);
        const formErrorNew ={ ...formError, [fieldName]: message }
        setFormError(formErrorNew);

        return {
            newFormDataObj,
            updatedFormData,
            formErrors: formErrorNew
        }
    }

    const fieldValidation = (name, value) => {
        if (name != null) {
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


  return formData &&
    formData.length &&
    formData.map((formGroup, index) => {
      return (
        <div key={index}>
          {formGroup.group && <Typography fontWeight={"bold"}>{formGroup.group}</Typography>}
          <Grid container spacing={2}>
            {formGroup.fields.map((field) => {
              const fieldObj = {...field}
              fieldObj.error = formError[fieldObj.name];
              const FieldComponent = { ...FORM_FIELDS, ...overrideComponents }[fieldObj.type];

              // CustomButtonGroup onChange event always returns undefined as the name. Now we
              // use the name in the schema.
              // https://dev.azure.com/EmersonAutomationSolutions/AS-MSOL-Digital%20Experience%20Tools/_workitems/edit/1708287/
              function handleFieldChange(event, _type, _name, val) {
                const { newFormDataObj, updatedFormData, formErrors } = updateFormData(fieldObj.name, val);
                handleChange(
                  event,
                  newFormDataObj,
                  updatedFormData,
                  fieldObj.name,
                  formErrors
                );
              }

              function handleFieldBlur() {
                updateFormData(fieldObj.name, fieldObj.value)
              }

              return (
                <>
                {fieldObj.hide && fieldObj.hide === true ? (
                                        <></>
                                      ) : (
                  <Grid item key={fieldObj.name} xs={fieldObj.column ? fieldObj.column : 12}>
                    {FieldComponent ? <FieldComponent {...fieldObj} onChange={handleFieldChange} onBlur={handleFieldBlur} /> : null}
                  </Grid>
                  )}
                </>
              );
            })}
          </Grid>
        </div>
      );
    });
};

export default MSOLDynamicForm
