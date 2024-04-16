export const orderSchemaFields = (mappedFields) =>
  Object.values(mappedFields).sort((field1, field2) => field1.order - field2.order);
