const getSchemaForDynamicForm = (activeIndex, compProps) => {
  let schema = [];
  if (compProps?.length > 0) {
    schema = compProps?.filter((sch) => sch.id === activeIndex);
  }
  return schema;
};

export default getSchemaForDynamicForm;
