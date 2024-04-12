export const updateNavigationStatus = (leftSection, activeIndex) => {
  return [
    {
      ...leftSection[0],
      componentProps: {
        schema: leftSection[0]?.componentProps?.schema.map((field) => {
          return { ...field, selected: field?.ne_id === activeIndex };
        })
      }
    }
  ];
};

export const saveValuesInSchema = (formData, rightSectionSchema, activeIndex) => {
  return [
    {
      ...rightSectionSchema[0],
      componentProps: {
        schema: rightSectionSchema[0]?.componentProps?.schema.map((screens) => {
          if (screens.id == activeIndex) {
            const { id, fields } = formData[0];

            return {
              id: id,
              fields: fields?.map((element, key) => {
                if (new RegExp("TABLE_INPUT*").test(element?.name)) {
                  let tempVar = fields[key]?.value;
                  delete tempVar?.exclude_model;
                  element.value = { ...element?.value, ...tempVar };
                  return element;
                } else if (element.name === "fluidsDatabaseDropdown") {
                  element.hide = !(
                    fields.find((source) => source.name === "fluidSource").value === "0" &&
                    element.type === "SINGLE_SELECT"
                  );
                  return element;
                } else if (element.name === "fluidsDatabaseInput") {
                  element.hide = !(
                    fields.find((source) => source.name === "fluidSource").value === "1" &&
                    element.type === "TEXT_INPUT"
                  );
                  return element;
                } else {
                  return element;
                }
              })
            };
          } else {
            if (screens.id === 2 && activeIndex === 1) {
              const result = screens.fields.map((elementField, key) => {
                if (elementField.name === "TABLE_INPUT2") {
                  let data;
                  const { fields } = formData[0];
                  const fluidSource = fields.filter((el) => el.name === "fluidSource");
                  data = elementField?.data.map((row) => {
                    const currentRow = row.map((formElement) => {
                      if (fluidSource[0].value === "0") {
                        if (formElement.type === "TEXT_INPUT" || formElement.name === "density_options") {
                          return { ...formElement, disabled: true, required: false };
                        } else {
                          return formElement;
                        }
                      } else {
                        if (formElement.type === "TEXT_INPUT" || formElement.name === "density_options") {
                          return {
                            ...formElement,
                            disabled: false,
                            required:
                              formElement.name === "density_norm" || formElement.name === "viscosity_norm"
                                ? true
                                : false
                          };
                        } else {
                          return formElement;
                        }
                      }
                    });
                    return currentRow;
                  });

                  elementField = { ...elementField, data: data };
                  return elementField;
                } else {
                  return elementField;
                }
              });
              return {
                id: screens.id,
                fields: result
              };
            } else {
              return screens;
            }
          }
        })
      }
    }
  ];
};
