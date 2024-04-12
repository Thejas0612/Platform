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
            return screens;
          }
        })
      }
    }
  ];
};
