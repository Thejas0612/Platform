import schema from "./schema_version_0.0.1.json";

export const getNavigationMenuSchema = (buCode, componentName) => {
  const schema_data = [];
  if (buCode && componentName) {
    schema[buCode]?.uiComponents?.forEach((comp) => {
      if (comp.componentName === "NavigationMenu") {
        schema_data.push(comp.componentProps?.schema);
      }
    });
  }
  return schema_data;
};

export const getDynamicFormSchema = (buCode, componentName, activeIndex) => {
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
