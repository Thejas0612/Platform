
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

export const getFieldComponentByName = (name, activeIndex, schema) => {
  const section = schema.find(section => section.id === activeIndex);
  if (section && section.fields) {
    const field = section.fields.find(field => field.name === name);
    return field || null;
  }
  return null;
}