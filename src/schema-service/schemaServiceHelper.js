/* this function is used to sort an array of fields by their order property in ascending order */
export const orderSchemaFields = (mappedFields) =>
  Object.values(mappedFields).sort((field1, field2) => field1.order - field2.order);

/*This function is used to create a mapping of UI elements by their names  */
export const mapFieldsByName = (allUiElements) => {
  const mappingFields = {};
  if (!allUiElements || allUiElements.length === 0) {
    return mappingFields;
  }
  allUiElements.forEach((field) => {
    if (field?.name !== undefined) {
      mappingFields[field.name] = field;
    }
  });
  return mappingFields;
};
