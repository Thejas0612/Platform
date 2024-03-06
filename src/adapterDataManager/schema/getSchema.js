const getSchemaForDynamicForm = (activeIndex, compProps) => {
  console.log("compProps", compProps);

  const arr = compProps?.filter((sch) => sch.id === activeIndex);
  console.log("schema-in-get-schema", arr);
  return arr;
};

export default getSchemaForDynamicForm;
