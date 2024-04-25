import { FLUID_SOURCE_OPTIONS } from "../constants";

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
              fields: fields
            };
          } else {
            if (screens.id === 2 && activeIndex === 1) {
              const result = screens.fields.map((elementField, key) => {
                if (elementField.name === "TABLE_INPUT2") {
                  let data;
                  const { fields } = formData[0];
                  const fluidSource = fields.filter((el) => el.name === "fluid-source");
                  data = elementField?.data.map((row) => {
                    const currentRow = row.map((formElement) => {
                      if (fluidSource[0].value === FLUID_SOURCE_OPTIONS.DATABASE) {
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
