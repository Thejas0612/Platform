import { getApi } from "../api/dp-flow/dpFlowApis";
import SCHEMA_CONSTANTS from "./dpflowSchemaConstants";
import { mapFieldsByName, orderSchemaFields } from "./schemaServiceHelper";

/*  function is used to retrieve the schema of the "NavigationMenu" */
export const getNavigationMenuSchema = (buCode, componentName, schema) => {
  const schema_data = [];
  if (buCode && componentName) {
    schema[buCode]?.uiComponents?.forEach((comp) => {
      if (comp.componentName === "NavigationMenu") {
        comp.componentProps.schema.forEach((obj) => {
          schema_data.push(obj);
        });
      }
    });
  }
  return schema_data;
};

/* function is used to retrieve a specific screen elements (schema) from a list of schemas based on the active index */
export const getDynamicFormSchema = (activeIndex, schema) => {
  if (schema?.length === 0 || schema[0]?.componentProps?.schema?.length === 0) return [];
  return [schema[0]?.componentProps?.schema[activeIndex]];
};

/* This function is responsible for updating screen elements */
export const updateSchema = async (
  e,
  formObj,
  formData,
  name,
  fieldError,
  activeIndex,
  invisibleUiElements
) => {
  const allUiElements = [...formData[0].fields, ...invisibleUiElements];
  const mappedFields = mapFieldsByName(allUiElements);
  const field = mappedFields[name];
  field["required"] = true;
  field["error"] = fieldError[name] !== undefined && fieldError[name] ? fieldError[name] : "";
  if (name === SCHEMA_CONSTANTS.FLOW_TAIL_THUMBNAIL) {
    field["defaultIds"] = field?.value;
  }
  let response;
  if (field?.isApiOnEvent && e?.id) {
    response = await getApi(field?.isApiOnEvent?.apiInfo, e?.id);
    response.unshift({
      id: SCHEMA_CONSTANTS.DEFAULT_DROPDOWN_ID,
      disabled: true,
      label: SCHEMA_CONSTANTS.DEFAULT_DROPDOWN_LABEL,
      value: SCHEMA_CONSTANTS.DEFAULT_DROPDOWN_VALUE
    });
  }

  if (field?.name === SCHEMA_CONSTANTS.LINE_SIZE) {
    if (field?.value === SCHEMA_CONSTANTS.SPECIAL) {
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.PIPE_SCHEDULE][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.PIPE_SCHEDULE][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.VALUE] = SCHEMA_CONSTANTS.INCH;
    } else {
      mappedFields[SCHEMA_CONSTANTS.PIPE_SCHEDULE][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.PIPE_SCHEDULE][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.VALUE] = "";
    }
  }

  if (field?.name === SCHEMA_CONSTANTS.PIPE_SCHEDULE) {
    if (field?.value === SCHEMA_CONSTANTS.SPECIAL) {
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.VALUE] = SCHEMA_CONSTANTS.INCH;
    } else {
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.DISPLAY] = false;
    }
  }

  if (mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME]?.value === SCHEMA_CONSTANTS.FLUID_TYPE_LIQUID) {
    mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
    mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_DROPDOWN_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
    mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_NAME][SCHEMA_CONSTANTS.VALUE] = "";
    mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_DROPDOWN_NAME][SCHEMA_CONSTANTS.VALUE] = "";
    mappedFields[SCHEMA_CONSTANTS.COMPOSITION_METHOD_DROPDOWN_NATURALGAS][
      SCHEMA_CONSTANTS.DISPLAY
    ] = false;
    mappedFields[SCHEMA_CONSTANTS.PICK_FROM_DATABASE_BTN_NATURALGAS][
      SCHEMA_CONSTANTS.DISPLAY
    ] = false;

    const selectedDataSourceId =
      mappedFields[SCHEMA_CONSTANTS.FLUID_SOURCE][SCHEMA_CONSTANTS.VALUE];
    if (
      mappedFields[SCHEMA_CONSTANTS.FLUID_SOURCE][SCHEMA_CONSTANTS.OPTIONS][selectedDataSourceId]
        ?.label === SCHEMA_CONSTANTS.CUSTOM
    ) {
      mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME][SCHEMA_CONSTANTS.DEFAULTID] =
        mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME]?.value;
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.DISPLAY] = true;
    } else {
      mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME][SCHEMA_CONSTANTS.DEFAULTID] =
        mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME]?.value;
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.VALUE] = "";
    }
  }

  if (
    mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME]?.value === SCHEMA_CONSTANTS.FLUID_TYPE_NATURALGAS
  ) {
    mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
    mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.VALUE] = "";
    mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
    mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.VALUE] = "";

    const selectedDataSourceId =
      mappedFields[SCHEMA_CONSTANTS.FLUID_SOURCE][SCHEMA_CONSTANTS.VALUE];

    if (
      mappedFields[SCHEMA_CONSTANTS.FLUID_SOURCE][SCHEMA_CONSTANTS.OPTIONS][selectedDataSourceId]
        ?.label === SCHEMA_CONSTANTS.CUSTOM
    ) {
      mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME][SCHEMA_CONSTANTS.DEFAULTID] =
        mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME]?.value;
      mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_DROPDOWN_NAME][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_NAME][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_DROPDOWN_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.PICK_FROM_DATABASE_BTN_NATURALGAS][
        SCHEMA_CONSTANTS.DISPLAY
      ] = true;
      mappedFields[SCHEMA_CONSTANTS.COMPOSITION_METHOD_DROPDOWN_NATURALGAS][
        SCHEMA_CONSTANTS.DISPLAY
      ] = true;
    } else {
      mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME][SCHEMA_CONSTANTS.DEFAULTID] =
        mappedFields[SCHEMA_CONSTANTS.FLUIDTYPE_NAME]?.value;
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_DROPDOWN_NAME][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.NATURAL_GAS_NAME][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.PICK_FROM_DATABASE_BTN_NATURALGAS][
        SCHEMA_CONSTANTS.DISPLAY
      ] = false;
      mappedFields[SCHEMA_CONSTANTS.COMPOSITION_METHOD_DROPDOWN_NATURALGAS][
        SCHEMA_CONSTANTS.DISPLAY
      ] = false;
      mappedFields[SCHEMA_CONSTANTS.COMPOSITION_METHOD_DROPDOWN_NATURALGAS][
        SCHEMA_CONSTANTS.VALUE
      ] = "";
    }
  }

  if (response?.length > 0) {
    mappedFields[field?.isApiOnEvent?.targetUiElement] = {
      ...mappedFields[field?.isApiOnEvent?.targetUiElement],
      [field?.isApiOnEvent?.targetProperty]: response,
      value: SCHEMA_CONSTANTS.DEFAULT_DROPDOWN_VALUE,
      placeholder: SCHEMA_CONSTANTS.DEFAULT_DROPDOWN_LABEL
    };
    const updatedSchema = {
      id: formData[0]?.id,
      fields: orderSchemaFields(mappedFields)
    };

    return { updatedSchema, activeIndex };
  }
  const updatedSchema = {
    id: formData[0]?.id,
    fields: orderSchemaFields(mappedFields)
  };
  return { updatedSchema, activeIndex };
};
