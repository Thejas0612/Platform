// File to have functions to handle component data  API to Component parser
import { Grid } from "@mui/material";
// import { PaStepper } from "@emerson/dynamic-ui";
import { PaStepper, DynamicForm, CustomTop, NavigationMenu } from "@emerson/dynamic-ui";
import { DYNAMIC_FORM, NAVIGATION_MENU } from "../../utils/UtilConstants";
import { dynamicFormContent, getNavigationContent } from "../common/layoutParser";
import { getDynamicFields } from "../fetch";

/**Function getLayoutType: Helps to render the layout type.
 * Return: Type, Props */
const getLayoutType = () => {
  // SidebySide / AboveBelow / FixedTopSidebySide
  return null;
};

const getEmsolButton = ({ type, props }) => {
  //return "EMSOL_BUTTON": <button {...props}>{props.text}</button>;
  return null;
};
const getEmsolInput = ({ type, props }) => {
  //<input {...props} />;
  return null;
};
const getEmsolText = ({ type, props }) => {
  // <p {...props}>{props.text}</p>;
  return null;
};
const getEmsolHeader = ({ type, props }) => {
  // <HeaderSection {...props} />;
  return null;
};
const getEmsolCustomTop = ({ props }) => {
  //<CustomTop {...props} />
  return (
    <Grid>
      <CustomTop {...props} />
    </Grid>
  );
};
const getEmsolTileOrThumbnail = ({ type, props }) => {
  //<TileOrThumbnail {...props} />;
  return null;
};

const getEmsolDynamicForm = (schema, sourceData, updateLayoutContent) => {
  const initData = sourceData.reduce((init, occurence) => {
    init[occurence.type] = occurence;
    return init;
  }, {});
  //<DynamicForm {...props} />;
  const eventHandler = async (event, a = {}, b, c, d) => {
    try {
      let {
        props: { data = [] }
      } = initData["EMSOL_NAVIGATION_MENU"];
      let { schema: dynamicFormSchema = [] } = initData["EMSOL_DYNAMICFORM"];
      // const response = await getDynamicFields({
      //   formData: a,
      //   activeSection: b,
      //   eventField: c,
      //   d,
      //   dynamicFormSchema
      // });
      // if (response.fields.length) {
      //   dynamicFormSchema[response.id] = response;
      // }
      const schemaOutput = dynamicFormSchema.find(({ visible }) => visible);
      const elementData = schemaOutput?.fields?.map((e) => {
        if (event?.target?.value) {
          if (e.name === c) {
            e.value = a[c];
          }
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
        data.forEach((d) => {
          if (event?.target?.value) {
            if (d.label === c) {
              d.badges.push({ label: c, value: c });
            }
          } else if (schemaOutput.navigationType === d.label) {
            if (d.label === schemaOutput.navigationType) {
              let badges = [];
              schemaOutput.fields.forEach((field) => {
                const typeIdentifier = Array.isArray(field.value);
                let badge = [];
                if (field.name === c) {
                  if (field.options?.length) {
                    field.options.forEach((opt) => {
                      if (
                        typeIdentifier ? field.value.includes(opt.id) : field.value === opt.value
                      ) {
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
    } catch (error) {
      console.log(error);
    }
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
  // return null;
};
const getEmsolStepper = (props, sourceData, updateLayoutContent) => {
  try {
    const eventhandler = (props, schema) => {
      const { initData: value, selectedSection } = getNavigationContent(
        props,
        schema,
        NAVIGATION_MENU
      );
      const navigationData = schema.find(({ type }) => type === NAVIGATION_MENU);
      const stepperData = schema.find(({ type }) => type === "EMSOL_STEPPER");
      const { badges = [] } = navigationData.props.data.find(
        ({ ne_id }) => ne_id === (props.ne_id - 1 < 0 ? 0 : props.ne_id - 1)
      );
      if (badges?.length) {
        stepperData.props.activeIndex = props.ne_id;
        const formData = dynamicFormContent(value, DYNAMIC_FORM, props, selectedSection);
        updateLayoutContent(Object.values(formData));
      } else {
        stepperData.props.activeIndex = props.ne_id - 1;
      }
    };
    return <PaStepper onChange={(props) => eventhandler(props, sourceData)} {...props} />;
  } catch (error) {
    console.log(error, "Stepper error");
  }
};
const getEmsolBreadCrumbs = ({ type, props }) => {
  //<PaBreadcrumbs {...props} />;
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
