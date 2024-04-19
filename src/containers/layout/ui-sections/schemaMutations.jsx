
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
 * Updates the schema of a section with variations based on the given type.
 * 
 * @param {string} type - The type of variation to apply.
 * @param {object[]} section - The section containing the schema to update.
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

export const getFieldComponentByName = (name, activeIndex, schema) => {
  const section = schema.find(section => section.id === activeIndex);
  if (section && section.fields) {
    const field = section.fields.find(field => field.name === name);
    return field || null;
  }
  return null;
}