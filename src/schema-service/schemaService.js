//import schema from "./schema_version_0.0.1.json";

export const getNavigationMenuSchema = (buCode, componentName, schema) => {
  const schema_data = [];
  if (buCode && componentName) {
    schema[buCode]?.uiComponents?.forEach((comp) => {
      if (comp.componentName === "NavigationMenu") {
        comp.componentProps.schema.forEach((obj) => {
          schema_data.push(obj);
        });
      }
    });
  }
  return schema_data;
};

export const getDynamicFormSchema = (buCode, componentName, activeIndex, schema) => {
  const schema_data = [];
  if (buCode && componentName) {
    schema[buCode]?.uiComponents?.forEach((comp) => {
      if (componentName === comp.componentName) {
        comp.componentProps?.schema.forEach((sch) => {
          if (sch.id === activeIndex) {
            schema_data.push(sch);
          }
        });
      }
    });
  }
  return schema_data;
};

export const updateSchema = (e, formObj, formData, name, isValid, activeIndex, buCode) => {
  console.log("e", e);
  console.log("formobj", formObj);
  console.log("formData", formData);
  console.log("name", name);
  console.log("activeIndex", activeIndex);
  const field = formData[0]?.fields?.find((itm) => itm.name === name);
  console.log("FIELD", field);

  field["required"] = true;
  console.log("field?.value?.length", field?.value?.length);
  field["error"] = "";
  field["defaultIds"] = formObj[name];
  const tileObj = field?.options?.filter((itm) => formObj[name]?.includes(itm.id));
  console.log("tileObj", tileObj);
  const badges = [];
  if (field?.type === "TILE_THUMBNAIL") {
    tileObj.forEach((itm) => {
      if (itm) {
        badges.push({ id: itm?.id, label: itm.title });
      }
    });
  }
  if (field?.type === "SINGLE_SELECT") {
    tileObj.forEach((itm) => {
      if (itm) {
        badges.push({ id: name, label: itm.label });
      }
    });
  }
  if (field?.type === "CUSTOM_BUTTON_GROUP" || field?.type === "RADIO_INPUT") {
    tileObj.forEach((itm) => {
      if (itm) {
        badges.push({ id: name, label: itm.label });
      }
    });
  }
  return { field, badges, activeIndex, buCode };
};

export const updateApiDataInSchema = async (res, schema) => {
  console.log("element_name", res);
  console.log("schema", schema);
  const transformApiData = [];
  if (res?.apiResponse && res?.target?.uiElementType === "SINGLE_SELECT") {
    for (let [key, value] of Object.entries(res?.apiResponse[0])) {
      const lineSize = value;
      lineSize["label"] = value?.line_size;
      lineSize["id"] = value?.lookup_code;
      lineSize["value"] = value?.lookup_code;
      lineSize["order"] = key;
      transformApiData.push(lineSize);
    }
  }
  console.log("transformApiData", transformApiData);
  if (Object.keys(schema).length > 0) {
    const update_schema = {
      uiComponents: schema?.uiComponents.map((comp) => {
        if (comp.componentName === res?.target?.componentName) {
          return {
            ...comp,
            componentProps: {
              schema: comp?.componentProps?.schema.map((itm) => {
                if (itm?.id === res?.target?.screenId) {
                  return {
                    ...itm,
                    fields: itm.fields?.map((field) => {
                      if (field?.name === res?.target?.targetUiElementName) {
                        return { ...field, options: transformApiData };
                      } else return field;
                    })
                  };
                } else return itm;
              })
            }
          };
        } else return comp;
      })
    };
    return update_schema;
  }
};
