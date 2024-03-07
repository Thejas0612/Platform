//import schema from "./schema_version_0.0.1.json";

import { getApi } from "../api/dp-flow/dpFlowApis";

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

export const updateSchema = async (e, formObj, formData, name, isValid, activeIndex, buCode) => {
  const field = formData[0]?.fields?.find((itm) => itm.name === name);
  let response;
  if (field?.isApiOnEvent) {
    response = await getApi(field?.isApiOnEvent?.apiInfo, e?.id);
    response.unshift({ id: "pick one", disabled: true, label: "Pick One", value: "pick one" });
  }
  field["required"] = true;
  field["error"] = "";
  field["defaultIds"] = formObj[name];
  let activeSchema;
  const badges = [];
  if (response?.length > 0) {
    activeSchema = {
      id: formData[0]?.id,
      fields: formData[0]?.fields?.map((itm) => {
        if (itm?.name === name) {
          return field;
        } else if (itm?.name === field?.isApiOnEvent?.targetUiElement) {
          return {
            ...itm,
            [field?.isApiOnEvent?.targetProperty]: response,
            placeholder: "Pick One",
            value: "pick one"
          };
        } else return itm;
      })
    };
    return { activeSchema, badges, activeIndex, buCode };
  }
  activeSchema = {
    id: formData[0]?.id,
    fields: formData[0]?.fields?.map((itm) => {
      if (itm?.name === name) {
        return field;
      } else return itm;
    })
  };
  return { activeSchema, badges, activeIndex, buCode };
};

export const updateApiDataInSchema = async (res, schema) => {
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
