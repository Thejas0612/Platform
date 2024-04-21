import DP_FLOW_CONSTANTS from "../containers/layout/ui-sections/dpflow/constants/dpFlowConstants";
import SCHEMA_CONSTANTS from "./dpflowSchemaConstants";

export const schemaValidations = (screenFields, activeIndex, copyRightSectionSchema) => {
  const updatedScreenField = { id: activeIndex, fields: [] };

  if (!screenFields || screenFields?.length === 0) return updatedScreenField;
  let isError = false;
  updatedScreenField[SCHEMA_CONSTANTS.FIELDS] = screenFields?.map((field) => {
    if (field?.required && field?.value?.length === 0) {
      isError = true;
      return { ...field, error: field?.display === true ? " " : "" };
    } else return field;
  });

  copyRightSectionSchema[0][SCHEMA_CONSTANTS.COMP_PROPS][SCHEMA_CONSTANTS.SCHEMA][activeIndex] =
    updatedScreenField;
  return { copyRightSectionSchema, isError };
};

export const changeAccordionStatus = (leftSectionSchemaCopy, activeIndex, btnType) => {
  if (!leftSectionSchemaCopy || leftSectionSchemaCopy?.length === 0) return [];

  const updatedNavSchema = leftSectionSchemaCopy[0].componentProps.schema.map((field) => ({
    ...field,
    selected:
      field.ne_id === (btnType === DP_FLOW_CONSTANTS.BTN_NEXT ? activeIndex + 1 : activeIndex - 1)
  }));

  leftSectionSchemaCopy[0][SCHEMA_CONSTANTS.COMP_PROPS][SCHEMA_CONSTANTS.SCHEMA] = updatedNavSchema;
  return leftSectionSchemaCopy;
};
