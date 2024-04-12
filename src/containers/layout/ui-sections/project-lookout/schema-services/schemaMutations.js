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

                switch (element?.type) {
                  case "TILE_THUMBNAIL": {
                    element.defaultIds = element?.value;
                    return element
                  }

                  case "TABLE_INPUT": {
                    const tempVar = fields[key]?.value;
                    delete tempVar?.exclude_model;
                    element.value = { ...element?.value, ...tempVar };
                    return element;
                  }

                  case "SINGLE_SELECT": {
                    if (element.name === "fluidsDatabaseDropdown") {
                      element.hide = !(
                        fields.find((source) => source.name === "fluidSource").value === "0"
                      );
                      return element;
                    }

                    return element;
                  }

                  case "TEXT_INPUT": {
                    if (element.name === "fluidsDatabaseInput") {
                      element.hide = !(
                        fields.find((source) => source.name === "fluidSource").value === "1"
                      );
                      return element;
                    }

                    return element;

                  }

                  default:
                    return element;
                }



              })
            };
          } else {
            return screens;
          }
        })
      }
    }
  ];
};
