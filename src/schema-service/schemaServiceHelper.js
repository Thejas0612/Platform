export const orderSchemaFields = (mappedFields) =>
  Object.values(mappedFields).sort((field1, field2) => field1.order - field2.order);

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
