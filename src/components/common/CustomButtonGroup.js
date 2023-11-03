import React from "react";
import { CustomButtonGroup } from "@emerson/dynamic-ui";
const CustomButtonGroup = (props) => {
  const CustomButtonGroupProps = {
    data: [],
    defaultIds: [],
    label: "",
    labelClass: "",
    multiple: false,
    size: "",
    isRequired: false,
    title: "",
    showLabel: true,
    defaultId: "",
    onChange: () => {},
    dataSourceUrl: ""
  };
  return (
    <>
      <CustomButtonGroup {...CustomButtonGroupProps} />
    </>
  );
};

export default CustomButtonGroup;
