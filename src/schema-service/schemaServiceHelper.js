export const orderSchemaFields = (mappedFields) =>
  Object.values(mappedFields).sort((field1, field2) => field1.order - field2.order);

export const getMappedFields = (allUiElements) => {
  if (allUiElements?.length === 0) return {};
  const mappingFields = {};
  let fieldLength = allUiElements?.length;
  while (0 <= fieldLength) {
    const fieldName = allUiElements[fieldLength]?.name;
    if (fieldName !== undefined) {
      mappingFields[fieldName] = allUiElements[fieldLength];
    }
    fieldLength--;
  }
  return mappingFields;
};
