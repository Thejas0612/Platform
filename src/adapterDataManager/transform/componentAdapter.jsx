// File to have functions to handle component data  API to Component parser
import React from "react";
import { PaStepper,DynamicForm, CustomTop, NavigationMenu  } from "@emerson/dynamic-ui-public";
import { dynamicFormContent, getNavigationContent } from "../common/layoutParser";
import { getDynamicFields } from "../fetch";

/**Function getLayoutType: Helps to render the layout type.
 * Return: Type, Props */
const getLayoutType = () => {
  // SidebySide / AboveBelow / FixedTopSidebySide
  return null;
};

const getEmsolButton = ({ type, props }) => {
  return null;
};
const getEmsolInput = ({ type, props }) => {
  return null;
};
const getEmsolText = ({ type, props }) => {
  return null;
};
const getEmsolHeader = ({ type, props }) => {
  return null;
};
const getEmsolCustomTop = ({ props }) => {
  return (
      <CustomTop {...props} />
  );
};
const getEmsolTileOrThumbnail = ({ type, props }) => {
  return null;
};

const getEmsolDynamicForm = (schema, sourceData, updateLayoutContent) => { //nesting 1
  const initData = sourceData.reduce((init, occurence) => {
    init[occurence.type] = occurence;
    return init;
  }, {});
  const eventHandler = async (event, b, c, d, a = {}) => { //nesting 1
    let {
      props: { data = [] }
    } = initData["EMSOL_NAVIGATION_MENU"];
    let { schema: dynamicFormSchema = [] } = initData["EMSOL_DYNAMICFORM"];
    const response = await getDynamicFields({
      formData: a,
      activeSection: b,
      eventField: c,
      d,
      dynamicFormSchema
    });
    if (response.fields.length) {
      dynamicFormSchema[response.id] = response;
    }
    const schemaOutput = dynamicFormSchema.find(({ visible }) => visible);
    const elementData = schemaOutput?.fields?.map((e) => {
      if (event?.target?.value) {
        if (e.name === c) {
          e.value = a[c];
        }
      } else if (e.name === c && event) {
        e.value = event.value || "";
      }
      return e;
    });
    if (elementData?.length) {
      schemaOutput.fields = elementData;
    }
    if (event?.target?.value) {
      const currentBadgeData = { label: a[c], id: c };
      const updatedNav = data.map((d) => {
        if (d.label === schemaOutput.navigationType) {
          let badges = d.badges;
          if (badges.length) {
            const foundBadge = badges.find((b) => b.id === c);
            if (foundBadge) {
              foundBadge.label = a[c];
            } else {
              badges.push(currentBadgeData);
            }
            d.badges = badges;
          } else {
            d.badges.push(currentBadgeData);
          }
        }
        return d;
      });
      data = updatedNav;
    } else {
      data.forEach((d) => {   //nesting 1
        if (event?.target?.value) {
          if (d.label === c) {
            d.badges.push({ label: c, value: c });
          }
        } else if (schemaOutput.navigationType === d.label) {
          if (d.label === schemaOutput.navigationType) {
            let badges = [];
            schemaOutput.fields.forEach((field) => { //nesting 1
              const typeIdentifier = Array.isArray(field.value);
              let badge = [];
              if (field.name === c) {
                if (field.options?.length) {
                  field.options.forEach((opt) => {
                    if (typeIdentifier ? field.value.includes(opt.id) : field.value === opt.value) {
                      badge.push({
                        label: opt.label || opt.title,
                        value: opt.value || opt.title
                      });
                    }
                  });
                }
              } else if (field.name !== c && (field.value || field.value?.length)) {
                field.options.forEach((opt) => {
                  if (typeIdentifier ? field.value.includes(opt.id) : field.value === opt.value) {
                    badge.push({
                      label: opt.label || opt.title,
                      value: opt.value || opt.title
                    });
                  }
                });
              }
              if (badge.length) {
                badges = [...badges, ...badge];
              }
            });
            d.badges = badges;
          }
        }
      });
    }
    updateLayoutContent(Object.values(initData));
  };

  return (
    <DynamicForm
      dataSourceUrl=""
      handleChange={eventHandler}
      handleKeyPress={function noRefCheck() {}}
      handleSubmit={function noRefCheck() {}}
      schema={schema?.filter((s) => s.visible) || []}
      updateData={function noRefCheck() {}}
    />
  );
};
const getEmsolNavigationMenu = ({ type, props }) => {
  return <NavigationMenu {...props} />;
};
const getEmsolStepper = (props, sourceData, updateLayoutContent) => {
  const eventhandler = (props, schema) => {
    const value = getNavigationContent(props, schema, NAVIGATION_MENU);
    const formData = dynamicFormContent(value, DYNAMIC_FORM, props);
    updateLayoutContent(Object.values(formData));
  };
  return <PaStepper onChange={(props) => eventhandler(props, sourceData)} {...props} />;
};
const getEmsolBreadCrumbs = ({ type, props }) => {
  return null;
};

export {
  getLayoutType,
  getEmsolButton,
  getEmsolInput,
  getEmsolText,
  getEmsolHeader,
  getEmsolCustomTop,
  getEmsolTileOrThumbnail,
  getEmsolDynamicForm,
  getEmsolNavigationMenu,
  getEmsolStepper,
  getEmsolBreadCrumbs
};
