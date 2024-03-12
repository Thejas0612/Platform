export const schemaValidations = (activeIndex, field, schema) => {
  let isError = false;
  field[0]?.fields?.forEach((itm) => {
    if (itm?.required && itm?.value?.length === 0) {
      isError = true;
    }
  });
  let update_schema;
  if (isError) {
    update_schema = {
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
  update_schema = {
    uiComponents: schema?.uiComponents?.map((itm) => {
      if (itm?.componentName === "NavigationMenu") {
        return {
          ...itm,
          componentProps: {
            schema: itm?.componentProps?.schema.map((field) => {
              if (field.ne_id === activeIndex + 1) {
                return {
                  ...field,
                  selected: true
                };
              } else return { ...field, selected: false };
            })
          }
        };
      } else return itm;
    })
  };
  return { update_schema, isError };
};

export const changeAccordionStatus = (schema, activeIndex) => {
  return {
    uiComponents: schema?.uiComponents?.map((itm) => {
      if (itm?.componentName === "NavigationMenu") {
        return {
          ...itm,
          componentProps: {
            schema: itm?.componentProps?.schema.map((field) => {
              if (field.ne_id === activeIndex - 1) {
                return {
                  ...field,
                  selected: true
                };
              } else return { ...field, selected: false };
            })
          }
        };
      } else return itm;
    })
  };
};
