import React from "react";
import { RadioInput } from "@emerson/dynamic-ui";
const RadioInput = (props) => {
  const RadioInputProps = {
    disabledIds: [],
    title: "",
    size: "",
    label: "",
    showLabel: true,
    onChange: () => {},
    options: [],
    value: "",
    dataSource: "",
    error: "",
    errorClass: "",
    required: false
  };
  return (
    <>
      <RadioInput {...RadioInputProps} />
    </>
  );
};

export default RadioInput;
