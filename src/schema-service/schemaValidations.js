export const schemaValidations = (activeIndex, field, schema) => {
  let isError = false;

  field[0]?.fields?.forEach((itm) => {
    if (itm?.required && itm?.value?.length === 0) {
      isError = true;
      return;
    }
  });
  if (isError) {
    const update_schema = {
      uiComponents: schema?.uiComponents?.map((itm) => {
        if (itm?.componentName === "DynamicForm") {
          return {
            ...itm,
            componentProps: {
              schema: itm?.componentProps?.schema.map((field) => {
                if (field.id === activeIndex) {
                  return {
                    ...field,
                    fields: field.fields?.map((itm) => {
                      if (itm?.value?.length === 0) {
                        return { ...itm, error: " " };
                      } else return itm;
                    })
                  };
                } else return field;
              })
            }
          };
        } else return itm;
      })
    };
    return { update_schema, isError };
  }
  return { isError };
};
