import React from "react";
import HeaderSection from "../ui/patterns/Header";
import { TileOrThumbnail, NavigationMenu, PaBreadcrumbs, LabelText } from "@emerson/dynamic-ui-public";
import {
  getEmsolStepper,
  getEmsolDynamicForm,
  getEmsolCustomTop,
  getEmsolNavigationMenu
} from "../adapterDataManager/transform/componentAdapter";

/** Function EmsolComponentsConfig takes two parameters: type and props.
 * Based on the value of type, the function returns a specific React component with the provided props. */
const EmsolComponentsConfig = ({ component, sourceData, updateLayoutContent }) => {
  const { props = {}, type, schema = [] } = component;
  const componentMap = {
    // EMSOL_BUTTON: (
    //   <Button
    //     {...props}
    //     onClick={() => {
    //       events("click", sourceData);
    //     }}
    //   >
    //     {props?.text || "Button"}
    //   </Button>
    // ),
    EMSOL_INPUT: <input {...props} />,
    EMSOL_TEXT: <p {...props}>{props.text}</p>,
    EMSOL_HEADER: <HeaderSection {...props} />,
    EMSOL_CUSTOMTOP: getEmsolCustomTop({ props }),
    // EMSOL_TILEORTHUMBNAIL: <TileOrThumbnail {...props} />,
    EMSOL_DYNAMICFORM: getEmsolDynamicForm(schema, sourceData, updateLayoutContent),
    EMSOL_NAVIGATION_MENU: getEmsolNavigationMenu({ props }),
    // EMSOL_NAVIGATION_MENU: <NavigationMenu {...props} />,
    EMSOL_STEPPER: getEmsolStepper(props, sourceData, updateLayoutContent),
    EMSOL_BREADCRUMB: <PaBreadcrumbs {...props} />,
    EMSOL_LABEL_TEXT: <LabelText {...props} />
  };
  return componentMap[type] || <></>;
};

export default EmsolComponentsConfig;
