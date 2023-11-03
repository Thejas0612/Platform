import React from "react";
import { CustomDropdown } from "@emerson/dynamic-ui";
const CustomDropDown = () => {
  const CustomDropDownProps = {
    disabledIds: "",
    name: "",
    options: [],
    value: "",
    onChange: () => {},
    label: "",
    title: "",
    options: [],
    wrapperClass: "",
    wrapperId: "",
    required: false,
    showLabel: true,
    labelClass: "",
    dataSourceUrl: "",
    error: "",
    errorClass: ""
  };
  return (
    <>
      <CustomDropdown {...CustomDropDownProps} />
    </>
  );
};

export default CustomDropDown;
