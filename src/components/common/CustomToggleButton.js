import React from "react";
import { CustomToggleButton } from "@emerson/dynamic-ui";
const CustomToggleButton = (props) => {
  const CustomToggleButtonProps = {
    data: [],
    label: "",
    title: "",
    defaultId: "",
    onChange: () => {},
    options: [],
    wrapperClass: "",
    wrapperId: "",
    required: false,
    showLabel: true,
    labelClass: "",
    dataSourceUrl: ""
  };
  return (
    <>
      <CustomToggleButton {...CustomToggleButtonProps} />
    </>
  );
};

export default CustomToggleButton;
