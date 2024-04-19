export const orderSchemaFields = (mappedFields) =>
  Object.values(mappedFields).sort((field1, field2) => field1.order - field2.order);

export const mapFieldsByName = (allUiElements) => {
  const mappingFields = {};
  if (!Array.isArray(allUiElements) || allUiElements.length === 0) return mappingFields;
  for (const element of allUiElements) {
    if (element?.name !== undefined) {
      mappingFields[element.name] = element;
    }
  }
  return mappingFields;
};
