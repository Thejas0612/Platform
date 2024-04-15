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
  //initial state of formData
  const [formData, setFormData] = React.useState([]);
  const [formDataObj, setFormDataObj] = React.useState({});

  //updating the initial state
  React.useEffect(() => {
    setFormData(schema);
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
    handleChange(e, { ...formDataObj, [field]: value }, formData, name);
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
              const FieldComponent = { ...FORM_FEILDS, ...overrideComponents }[field.type];
              return (
                <>
                  <Grid item key={field.name} xs={field.column ? field.column : 12}>
                    {FieldComponent ? <FieldComponent {...field} onChange={onChange} /> : null}
                  </Grid>
                </>
              );
            })}
          </Grid>
        </div>
      );
    });

  return generateForm;
};

export default MSOLDynamicForm;
