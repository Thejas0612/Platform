import React from "react";
import { CheckboxInput } from "@emerson/dynamic-ui";
const CheckBox = (props) => {
  const CheckBoxProps = {
    label: "",
    title: "",
    showLabel: true,
    labelClass: "",
    sixe: "meduim",
    selectedIds: [],
    disabledIds: [],
    error: "",
    errorClass: "",
    required: true,
    onChange: () => {},
    options: [],
    dataSourceUrl: ""
  };
  return (
    <>
      <CheckboxInput {...CheckBoxProps} />
    </>
  );
};

export default CheckBox;
