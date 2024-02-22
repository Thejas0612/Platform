// Render the components based on the application type (contains only functions returning data).

import { LEFT, TOP } from "../../utils/UtilConstants";
import EmsolValidate from "./validations";

export const parseLayoutType = (data) => {
  const layout = { Top: [], Left: [], Right: [] };
  if (data.length) {
    data.forEach((schema) => {
      if (schema.alignment === TOP) {
        // const validateSchema = EmsolValidate(schema, "");
        layout.Top.push(schema);
      } else if (schema.alignment === LEFT) {
        layout.Left.push(schema);
      } else layout.Right.push(schema);
    });
  }
  return layout;
};

// to get the updated navigation content
export const getNavigationContent = (id, schema, NAVIGATION_MENU) => {
  const initData = schema.reduce((init, occurence) => {
    init[occurence.type] = occurence;
    return init;
  }, {});
  const getNavMenu = initData[NAVIGATION_MENU];
  const getStepperData = initData["EMSOL_STEPPER"];
  const {
    props: { data = [] }
  } = getNavMenu;
  let { props: stepperData } = getStepperData;
  let selectedSection = {};
  if (data.length) {
    data.forEach((nav) => {
      if (nav.ne_id === id.ne_id) {
        nav.selected = true;
        nav.enabled = true;
        stepperData.activeIndex = id.ne_id;
      } else {
        nav.selected = false;
        nav.enabled = true;
      }
    });
  }
  initData[NAVIGATION_MENU] = getNavMenu;
  return { initData, selectedSection };
};

export const dynamicFormContent = (data, schemaSection, id, selectedSection = {}) => {
  const { schema = [] } = data[schemaSection];
  // if (!selectedSection.badges?.length) {
  //   return data;
  // }
  if (schema.length) {
    schema.forEach((section) => {
      if (section.id === id.ne_id) {
        section.visible = true;
      } else {
        section.visible = false;
      }
    });
  }
  return data;
};
