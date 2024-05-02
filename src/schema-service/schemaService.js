import { getApi } from "../api/dp-flow/dpFlowApis";
import SCHEMA_CONSTANTS from "./dpflowSchemaConstants";
import { mapFieldsByName, orderSchemaFields } from "./schemaServiceHelper";

/*  function is used to retrieve the schema of the "NavigationMenu" */
export const getNavigationMenuSchema = (MSOLPAType, componentName, schema) => {
  const schema_data = [];
  if (MSOLPAType && componentName) {
    schema[MSOLPAType]?.uiComponents?.forEach((comp) => {
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
  activeIndex,
  invisibleUiElements
) => {
  const allUiElements = [...formData[0].fields, ...invisibleUiElements];
  const mappedFields = mapFieldsByName(allUiElements);
  const field = mappedFields[name];
  field["required"] = true;
  field["error"] = "";
  if (name === SCHEMA_CONSTANTS.FLOW_TAIL_THUMBNAIL) {
    field["defaultIds"] = field?.value;
  }

  let response;
  if (field?.isApiOnEvent) {
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
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.VALUE] = SCHEMA_CONSTANTS.INCH;
    } else {
      mappedFields[SCHEMA_CONSTANTS.PIPE_SCHEDULE][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.PIPE_ID][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.UNITS][SCHEMA_CONSTANTS.DISPLAY] = false;
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

  if (name === SCHEMA_CONSTANTS.FLUID_SOURCE) {
    const selectedId = mappedFields[name].value;
    if (
      mappedFields[name][SCHEMA_CONSTANTS.OPTIONS][selectedId]?.label === SCHEMA_CONSTANTS.CUSTOM
    ) {
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.VALUE] = "";
      mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.DISPLAY] = true;
    } else {
      mappedFields[SCHEMA_CONSTANTS.FLUID_DATABASE_NAME][SCHEMA_CONSTANTS.DISPLAY] = true;
      mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.DISPLAY] = false;
      mappedFields[SCHEMA_CONSTANTS.CUSTOM_FLUID_NAME][SCHEMA_CONSTANTS.VALUE] = "";
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
