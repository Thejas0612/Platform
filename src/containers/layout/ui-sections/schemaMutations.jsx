
export const changeStepperIndex = (leftSection, step) => {
  if (!leftSection || !leftSection.length || !leftSection[0]?.componentProps?.schema) {
    console.warn('Invalid leftSection argument provided to changeStepperIndex.');
    return leftSection;
  }

  const schema = leftSection[0].componentProps.schema;

  const updatedSchema = schema.map((option, i) => ({
    ...option,
    selected: option.ne_id === step,
  }));

  return [{
    ...leftSection[0],
    componentProps: {
      ...leftSection[0].componentProps,
      schema: updatedSchema,
    },  
  }];
};

/**
 * Update a specific field within the schema by its name, screen ID, and property name.
 * 
 * @param {string} fieldName - The name of the field to update.
 * @param {number} screenId - The activeIndex or current index of stepper or the screen # containing the field.
 * @param {object[]} schema - The schema to update. This will be rightSection from redux.
 * @param {string} propertyName - The name of the property to update.
 * @param {any} newValue - The new value to set for the specified property.
 * @returns {object[]} - The updated schema.
 */
export const updateFieldByName = (fieldName, screenId, schema, propertyName, newValue) => {
  const updatedSchema = JSON.parse(JSON.stringify(schema));

  if (updatedSchema[0]?.componentProps?.schema) {
    const fields = updatedSchema[0].componentProps.schema[screenId]?.fields;
    if (fields) {
      const updatedFields = fields.map(field => {
        const updatedField = { ...field };
        if (field.name === fieldName && updatedField.hasOwnProperty(propertyName)) {
          updatedField[propertyName] = newValue;
        }
        return updatedField;
      });
      updatedSchema[0].componentProps.schema[screenId].fields = updatedFields;
    }
  } else {
    console.warn("Invalid Schema provided to update the field.")
  }

  return updatedSchema;
};

/**
 * Get a specific field within the schema by its name and screen ID.
 * 
 * @param {string} fieldName - The name of the field to retrieve.
 * @param {number} screenId - The activeIndex or current index of stepper or the screen # containing the field.
 * @param {object[]} schema - The schema to update. This will be rightSection from redux.
 * @returns {object|null} - The field object if found, otherwise null.
 */
export const getFieldByName = (fieldName, screenId, schema) => {
  const schemaData = schema[0]?.componentProps?.schema;

  if (schemaData && schemaData.length > 0) {
    const section = schemaData.find(section => section.id === screenId);
    if (section && section.fields) {
      return section.fields.find(field => field.name === fieldName) || null;
    }
  }

  return null;
};

/**
 * Updates the schema of a section with variations based on the given type.
 * 
 * @param {string} type - The type of variation to apply.
 * @param {object[]} section - The section containing the schema to update. schema can be left or right.
 * @returns {object[]} - The updated section with the modified schema.
 */
export const updateSchemaWithVariation = (type, section) => {
  const schema = section[0].componentProps.schema.filter(item => !item.is_variation); // Filter out existing variations
  const variations = section[0].componentProps.schema_variations[type] || [];
  const schemaIds = schema.map((item) => section[0].componentName === "NavigationMenu" ? item.ne_id : item.id);

  variations.forEach((variation) => {
    const updatedVariation  = { ...variation, is_variation: true, variation_type: type };
    const index = schemaIds.indexOf(section[0].componentName === "NavigationMenu" ? variation.ne_id : variation.id);
    if (index !== -1) {
      schema[index] = updatedVariation ;
    } else {
      schema.push(updatedVariation );
    }
  });

  return [{
    ...section[0],
    componentProps: {
      ...section[0].componentProps,
      schema: schema
    }
  }];
}

/**
 * Removes variations from the schema.
 * @param {Array} schema - The schema to remove variations from. All screens with 'is_variation' are removed.
 * @returns {Array} - The schema without variations.
 */
export const removeVariationsFromSchema = (schema) => {
  return schema.map((item) => ({
      ...item,
      componentProps: {
          ...item.componentProps,
          schema: item.componentProps.schema.filter((field) => !field.is_variation)
      }
  }));
};