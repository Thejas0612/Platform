import { getApi } from "../api/dp-flow/dpFlowApis";
import schemaConstants from "./dpflowSchemaConstants";
import { orderSchemaFields } from "./schemaServiceHelper";

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

export const getDynamicFormSchema = (buCode, componentName, activeIndex, schema) => {
  const schema_data = [];
  if (buCode && componentName) {
    schema[buCode]?.uiComponents?.forEach((comp) => {
      if (componentName === comp.componentName) {
        comp.componentProps?.schema.forEach((sch) => {
          if (sch.id === activeIndex) {
            schema_data.push(sch);
          }
        });
      }
    });
  }
  return schema_data;
};

export const updateSchema = async (
  e,
  formObj,
  formData,
  name,
  activeIndex,
  buCode,
  invisibleUiElements
) => {
  const mappedFields = {};
  const allUiElements = [...formData[0].fields, ...invisibleUiElements];
  let fieldLength = allUiElements?.length;

  while (0 <= fieldLength) {
    const fieldName = allUiElements[fieldLength]?.name;
    if (fieldName !== undefined) {
      mappedFields[fieldName] = allUiElements[fieldLength];
    }
    fieldLength--;
  }

  const field = mappedFields[name];
  field["required"] = true;
  field["error"] = "";

  let response;
  if (field?.isApiOnEvent) {
    response = await getApi(field?.isApiOnEvent?.apiInfo, e?.id);
    response.unshift({
      id: schemaConstants.DEFAULT_DROPDOWN_ID,
      disabled: true,
      label: schemaConstants.DEFAULT_DROPDOWN_LABEL,
      value: schemaConstants.DEFAULT_DROPDOWN_VALUE
    });
  }

  if (field?.name === schemaConstants.LINE_SIZE) {
    if (field?.value === schemaConstants.SPECIAL) {
      mappedFields[schemaConstants.PIPE_ID][schemaConstants.DISPLAY] = true;
      mappedFields[schemaConstants.PIPE_SCHEDULE][schemaConstants.DISPLAY] = false;
      mappedFields[schemaConstants.UNITS][schemaConstants.DISPLAY] = true;
      mappedFields[schemaConstants.PIPE_ID][schemaConstants.VALUE] = "";
      mappedFields[schemaConstants.UNITS][schemaConstants.VALUE] = schemaConstants.INCH;
    } else {
      mappedFields[schemaConstants.PIPE_SCHEDULE][schemaConstants.DISPLAY] = true;
      mappedFields[schemaConstants.PIPE_ID][schemaConstants.DISPLAY] = false;
      mappedFields[schemaConstants.UNITS][schemaConstants.DISPLAY] = false;
    }
  }

  if (field?.name === schemaConstants.PIPE_SCHEDULE) {
    if (field?.value === schemaConstants.SPECIAL) {
      mappedFields[schemaConstants.PIPE_ID][schemaConstants.DISPLAY] = true;
      mappedFields[schemaConstants.UNITS][schemaConstants.DISPLAY] = true;
      mappedFields[schemaConstants.PIPE_ID][schemaConstants.VALUE] = "";
      mappedFields[schemaConstants.UNITS][schemaConstants.VALUE] = schemaConstants.INCH;
    } else {
      mappedFields[schemaConstants.PIPE_ID][schemaConstants.DISPLAY] = false;
      mappedFields[schemaConstants.UNITS][schemaConstants.DISPLAY] = false;
    }
  }

  if (name === schemaConstants.FLUID_SOURCE) {
    const selectedId = mappedFields[name].value;
    if (mappedFields[name][schemaConstants.OPTIONS][selectedId]?.label === schemaConstants.CUSTOM) {
      mappedFields[schemaConstants.FLUID_DATABASE_NAME][schemaConstants.DISPLAY] = false;
      mappedFields[schemaConstants.FLUID_DATABASE_NAME][schemaConstants.VALUE] = "";
      mappedFields[schemaConstants.CUSTOM_FLUID_NAME][schemaConstants.DISPLAY] = true;
    } else {
      mappedFields[schemaConstants.FLUID_DATABASE_NAME][schemaConstants.DISPLAY] = true;
      mappedFields[schemaConstants.CUSTOM_FLUID_NAME][schemaConstants.DISPLAY] = false;
      mappedFields[schemaConstants.CUSTOM_FLUID_NAME][schemaConstants.VALUE] = "";
    }
  }

  if (response?.length > 0) {
    mappedFields[field?.isApiOnEvent?.targetUiElement] = {
      ...mappedFields[field?.isApiOnEvent?.targetUiElement],
      [field?.isApiOnEvent?.targetProperty]: response,
      value: schemaConstants.DEFAULT_DROPDOWN_VALUE,
      placeholder: schemaConstants.DEFAULT_DROPDOWN_LABEL
    };
    const updatedSchema = {
      id: formData[0]?.id,
      fields: orderSchemaFields(mappedFields)
    };

    return { updatedSchema, activeIndex, buCode };
  }
  const updatedSchema = {
    id: formData[0]?.id,
    fields: orderSchemaFields(mappedFields)
  };
  return { updatedSchema, activeIndex, buCode };
};
